const [timer, ajaxBusy, currentPage, ScrollHandler] = [Symbol(), Symbol(), Symbol(), Symbol()];
class BillboardController {
    constructor($scope, $document, $timeout, MoviesApi, ScrollEvent) {
        'ngInject';
        Object.assign(this, {$scope, $document, $timeout, MoviesApi, ScrollEvent});
        this[ScrollHandler] = this.ScrollEvent.$offsetTop.bind(this.ScrollEvent);
        this.movies = [];
        this[currentPage] = false;
        this[ajaxBusy] = false;
        this[timer] = false;
        this.description = `Get the list of top rated movies. By default,
            this list will only include movies that have 50 or more votes. This list refreshes every day.`;
        this.activate();
    }
    activate() {
        // 获取电影列表数据
        this.$getMovies();
        this.scrollEvent();
    }
    scrollEvent() {
        this.$scope.$on('$destroy', () => {
            angular.element(this.$document[0]).unbind('scroll');
            this[ajaxBusy] = false;
        });
        angular.element(this.$document[0]).bind('scroll', () => {
            if (this[timer]) this.$timeout.cancel(this[timer]);
            this[timer] = this.$timeout(() => {
                const loadingCondition = this[ScrollHandler]();
                if (loadingCondition < 100 && !this[ajaxBusy]) {
                    this.$getMovies();
                }
            }, 1000);
        });
    }
    $getMovies() {
        if (this[ajaxBusy]) return;
        this[ajaxBusy] = true;
        const topRatedMoviesPromise = this.MoviesApi.$list({movie_type: 'top_rated', page: this[currentPage] || 1});
        topRatedMoviesPromise.then((resp) => {
            this.totalResults = resp.total_results;
            this.movies = this.movies.concat(resp.results);
            // 更新分页
            this.totalItems = resp.total_results;
            this[currentPage] = resp.page;
            this[currentPage]++;
            this[ajaxBusy] = false;
        }, () => {
            this[ajaxBusy] = false;
        });
    }
}
export default BillboardController;
