webpackJsonp([0],{9:function(e,t,i){t=e.exports=i(4)(),t.push([e.id,".pagination-box{padding:20px 15px 40px}.pagination{text-align:center}.pagination li{font-size:1.6rem;line-height:1;display:inline-block;margin:0 .2em;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid;border-color:#d8e1e3;border-radius:.25em;background:#fff;box-shadow:0 1px 1px rgba(90,90,90,.1)}.pagination li.current,.pagination li:hover{color:#58666e;background-color:#edf1f2;border-color:#c7d3d6}.pagination li.current{pointer-events:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.pagination li:active{transform:scale(.9)}.pagination li.disabled{cursor:not-allowed;opacity:.8;color:#b5b5b5}.pagination li.disabled:hover{border-color:#d8e1e3;background-color:#fff}.pagination li.disabled:active{transform:scale(1)}.pagination li.separate{color:#b5b5b5;pointer-events:none}.pagination li a{cursor:pointer}.pagination li a,.pagination li span{display:block;padding:.6em .8em;color:inherit}",""])},10:function(e,t,i){var a=i(9);"string"==typeof a&&(a=[[e.id,a,""]]);i(5)(a,{});a.locals&&(e.exports=a.locals)},11:function(e,t){e.exports='<div class=pagination-box> <ul class=pagination ng-show="pagination.config.totalItems > 0"> <li ng-class="{disabled: pagination.config.currentPage == 1}" ng-click=pagination.prevPage()> <span>&laquo;</span> </li> <li ng-repeat="item in pagination.pageList track by $index" ng-class="{\'current\': item.page == pagination.config.currentPage, \'separate\': item.page == \'...\'}"> <a href={{item.uri}} ng-if=item.uri>{{item.page}}</a> <span ng-if=!item.uri>{{item.page}}</span> </li> <li ng-class="{disabled: pagination.config.currentPage == pagination.config.numberOfPages}" ng-click=pagination.nextPage()> <span>&raquo;</span> </li> </ul> </div>'},12:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(11),o=_interopRequireDefault(a);i(10);var n=i(13),r=_interopRequireDefault(n),l={bindings:{config:"<"},template:o["default"],controller:r["default"],controllerAs:"pagination"};t["default"]=angular.module("app.components.pagination",[]).component("pagination",l)},13:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(3),o=_interopRequireDefault(a),n=i(1),r=_interopRequireDefault(n),l=i(2),s=_interopRequireDefault(l),p=function(){function PaginationController(e,t,i,a){"ngInject";var n=this;(0,r["default"])(this,PaginationController),this.$onInit=function(){n.configUri=n.config.state,n.config.pagesLength=Number(n.config.pagesLength)||9,n.config.pagesLength%2===0&&(n.config.pagesLength=n.config.pagesLength-1),n.getPagination()},this.$onChanges=function(e){e.config.isFirstChange()||n.getPagination()},(0,o["default"])(this,{$scope:e,$element:t,$attrs:i,$state:a})}return PaginationController.$inject=["$scope","$element","$attrs","$state"],(0,s["default"])(PaginationController,[{key:"getPagination",value:function getPagination(){var e=this,t={page:"..."};if(e.config.currentPage=parseInt(e.config.currentPage,10)||1,e.config.totalItems=parseInt(e.config.totalItems,10)||0,e.config.itemsPerPage=parseInt(e.config.itemsPerPage,10)||20,e.config.numberOfPages=Math.ceil(e.config.totalItems/e.config.itemsPerPage),e.config.numberOfPages>0&&e.config.currentPage>e.config.numberOfPages&&(e.config.currentPage=e.config.numberOfPages),e.pageList=[],e.config.numberOfPages<=e.config.pagesLength)for(var i=1;i<=e.config.numberOfPages;i++)e.pageList.push(e.parseStateToUri(i));else{var a=(e.config.pagesLength-1)/2;if(e.config.currentPage<=a){for(var o=1;o<=a+1;o++)e.pageList.push(e.parseStateToUri(o));e.pageList.push(t),e.pageList.push(e.parseStateToUri(e.config.numberOfPages))}else if(e.config.currentPage>e.config.numberOfPages-a){e.pageList.push(e.parseStateToUri(1)),e.pageList.push(t);for(var n=a+1;n>=1;n--)e.pageList.push(e.parseStateToUri(e.config.numberOfPages-n));e.pageList.push(e.parseStateToUri(e.config.numberOfPages))}else{e.pageList.push(e.parseStateToUri(1)),e.pageList.push(t);for(var r=Math.ceil(a/2);r>=1;r--)e.pageList.push(e.parseStateToUri(e.config.currentPage-r));e.pageList.push(e.parseStateToUri(e.config.currentPage));for(var l=1;l<=a/2;l++)e.pageList.push(e.parseStateToUri(e.config.currentPage+l));e.pageList.push(t),e.pageList.push(e.parseStateToUri(e.config.numberOfPages))}}}},{key:"parseStateToUri",value:function parseStateToUri(e){var t=this.$state.href(this.config.state,{page:e},{absolute:!1});return{uri:t,page:e}}},{key:"changeCurrentPage",value:function changeCurrentPage(e){"..."!==e&&(this.config.currentPage=e)}},{key:"prevPage",value:function prevPage(){return this.config.currentPage>1&&(this.config.currentPage--,this.$state.go(this.config.state,{page:this.config.currentPage--}))}},{key:"nextPage",value:function nextPage(){return this.config.currentPage<this.config.numberOfPages&&(this.config.currentPage++,this.$state.go(this.config.state,{page:this.config.currentPage++}))}}]),PaginationController}();t["default"]=p},29:function(e,t,i){t=e.exports=i(4)(),t.push([e.id,".movies-wrapper{display:flex;flex-wrap:wrap;margin-left:-10px;margin-right:-10px}.movies-wrapper .movie-item{padding:10px;width:10%}@media screen and (max-width:1440px){.movies-wrapper .movie-item{width:12.5%}}@media screen and (max-width:1024px){.movies-wrapper .movie-item{width:20%}}@media screen and (max-width:580px){.movies-wrapper .movie-item{width:50%}}.movies-wrapper .movie{position:relative;border-radius:5px;overflow:hidden}.movies-wrapper .movie .thumbnail{display:block;width:100%;height:158px;border-radius:5px;box-shadow:0 0 3px 1px #abb1cf;position:relative;color:#fff}.movies-wrapper .movie .thumbnail img{width:100%;height:100%;border-radius:5px}@media screen and (max-width:1920px){.movies-wrapper .movie .thumbnail{height:198px}}@media screen and (max-width:1366px){.movies-wrapper .movie .thumbnail{height:188px}}@media screen and (max-width:1024px){.movies-wrapper .movie .thumbnail{height:200px}}@media screen and (max-width:768px){.movies-wrapper .movie .thumbnail{height:150px}}@media screen and (max-width:580px){.movies-wrapper .movie .thumbnail{height:190px}}.movies-wrapper .movie .play{border-radius:5px;transition:opacity .3s ease;opacity:0;position:absolute;left:0;top:0;width:100%;height:100%;z-index:3;padding:1rem;overflow:auto;background:radial-gradient(ellipse at center,rgba(0,0,0,.09) 0,rgba(0,0,0,.18) 10%,#353757 100%)}.movies-wrapper .movie .play a{position:relative;font-size:2.8rem;line-height:1;color:#dcdcdc}.movies-wrapper .movie .play a:before{border-radius:50%;content:'';border:2px solid;width:50px;height:50px;position:absolute;left:-15px;top:-12px}.movies-wrapper .movie .play a:hover{color:#eec141}.movies-wrapper .movie:hover .loaded .play{opacity:1}.movies-wrapper .movie .meta{font-size:1rem;padding:10px 0;position:relative}.movies-wrapper .movie .meta .name{color:#333;max-width:90%;font-size:1.3rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.movies-wrapper .movie .meta .star{position:absolute;left:auto;top:0;right:0;bottom:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center}.movies-wrapper .movie .meta .icon-star{color:#eec141;font-size:1.8rem}",""])},30:function(e,t,i){var a=i(29);"string"==typeof a&&(a=[[e.id,a,""]]);i(5)(a,{});a.locals&&(e.exports=a.locals)},31:function(e,t){e.exports='<div class=movie> <div class="thumbnail lazyimg"> <img imgload={{$root.image_uri}}/w342{{vm.movie.poster_path}}> <p class="play flex-middle-center"> <a ui-sref="root.layout.movies.movieProfile({id: vm.movie.id, name: vm.movie.original_title})"> <i class="icons icon-control-play"></i> </a> </p> </div> <div class=meta> <h5 class=name>{{vm.movie.title}}</h5> <p class=genre>{{vm.genre}}</p> <p class=star> <i class="icons icon-star"></i> <span class=number>{{vm.vote}}</span> </p> </div> </div>'},32:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),i(30);var a=i(31),o=_interopRequireDefault(a),n=i(33),r=_interopRequireDefault(n),l={bindings:{movie:"<"},template:o["default"],controller:r["default"],controllerAs:"vm"};t["default"]=angular.module("app.components.movieCard",[]).component("movieCard",l)},33:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),o=_interopRequireDefault(a),n=function MovieCardController(e){"ngInject";(0,o["default"])(this,MovieCardController),this.genre=e("parseGenre")(this.movie.genre_ids),this.vote=e("voteFilter")(this.movie.vote_average)};n.$inject=["$filter"],t["default"]=n},58:function(e,t){e.exports='<div class=page-title> <h4>{{vm.title}}</h4> <b class="badge badge-warning" ng-if=vm.totalResults>{{vm.totalResults}}</b> <p><small class=text-muted>{{vm.description}}</small></p> </div> <div class=root-wrapper> <div class=movies-wrapper ng-show=vm.movies.length> <movie-card ng-repeat="movie in vm.movies track by movie.id" movie=movie class=movie-item ng-if=movie.poster_path> </movie-card> </div> <loading-bar></loading-bar> </div> <pagination config=vm.paginationConfig ng-if=vm.movies.length></pagination>'},62:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),o=_interopRequireDefault(a),n=i(2),r=_interopRequireDefault(n),l=function(){function MoviesBaseController(){(0,o["default"])(this,MoviesBaseController),this.paginationConfig={itemsPerPage:20,pagesLength:9}}return(0,r["default"])(MoviesBaseController,[{key:"activate",value:function activate(){this.$getMovies()}},{key:"$getMovies",value:function $getMovies(){var e=this,t=this.MoviesApi.$list({movie_type:this.movieType,page:this.paginationConfig.currentPage||1});t.then(function(t){e.movies=t.results,e.totalResults=t.total_results,e.paginationConfig.totalItems=t.total_results,e.paginationConfig.currentPage=t.page})}}]),MoviesBaseController}();t["default"]=l},243:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(32),o=_interopRequireDefault(a),n=i(12),r=_interopRequireDefault(n),l=i(245),s=_interopRequireDefault(l),p=i(247),u=_interopRequireDefault(p),g=i(246),c=_interopRequireDefault(g),f=angular.module("app.pages.movies",[o["default"].name,r["default"].name]).controller(s["default"].name,s["default"]).controller(u["default"].name,u["default"]).controller(c["default"].name,c["default"]);t["default"]=f.name},245:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(3),o=_interopRequireDefault(a),n=i(8),r=_interopRequireDefault(n),l=i(1),s=_interopRequireDefault(l),p=i(16),u=_interopRequireDefault(p),g=i(15),c=_interopRequireDefault(g),f=i(14),d=_interopRequireDefault(f),m=i(62),v=_interopRequireDefault(m),h=function(e){function PlayingController(e,t,i){"ngInject";(0,s["default"])(this,PlayingController);var a=(0,u["default"])(this,(0,r["default"])(PlayingController).call(this));return(0,o["default"])(a,{$q:e,$state:t,MoviesApi:i}),a.movieType="now_playing",a.title="院线热播",a.description="Get the list of movies playing that have been,\n            or are being released this week. This list refreshes every day.",a.paginationConfig={currentPage:t.params.page,state:t.current.name},(0,d["default"])((0,r["default"])(PlayingController.prototype),"activate",a).call(a),a}return PlayingController.$inject=["$q","$state","MoviesApi"],(0,c["default"])(PlayingController,e),PlayingController}(v["default"]);t["default"]=h},246:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(3),o=_interopRequireDefault(a),n=i(8),r=_interopRequireDefault(n),l=i(1),s=_interopRequireDefault(l),p=i(16),u=_interopRequireDefault(p),g=i(15),c=_interopRequireDefault(g),f=i(14),d=_interopRequireDefault(f),m=i(62),v=_interopRequireDefault(m),h=function(e){function PopularController(e,t,i){"ngInject";(0,s["default"])(this,PopularController);var a=(0,u["default"])(this,(0,r["default"])(PopularController).call(this));return(0,o["default"])(a,{$q:e,$state:t,MoviesApi:i}),a.movieType="popular",a.title="高分电影",a.description="Get the list of popular movies on The Movie Database. This list refreshes every day.",a.paginationConfig={currentPage:t.params.page,state:t.current.name},(0,d["default"])((0,r["default"])(PopularController.prototype),"activate",a).call(a),a}return PopularController.$inject=["$q","$state","MoviesApi"],(0,c["default"])(PopularController,e),PopularController}(v["default"]);t["default"]=h},247:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(3),o=_interopRequireDefault(a),n=i(8),r=_interopRequireDefault(n),l=i(1),s=_interopRequireDefault(l),p=i(16),u=_interopRequireDefault(p),g=i(15),c=_interopRequireDefault(g),f=i(14),d=_interopRequireDefault(f),m=i(62),v=_interopRequireDefault(m),h=function(e){function UpcomingController(e,t,i){"ngInject";(0,s["default"])(this,UpcomingController);var a=(0,u["default"])(this,(0,r["default"])(UpcomingController).call(this));return(0,o["default"])(a,{$q:e,$state:t,MoviesApi:i}),a.movieType="upcoming",a.title="即将上映",a.description="Get the list of upcoming movies by release date. This list refreshes every day.",a.paginationConfig={currentPage:t.params.page,state:t.current.name},(0,d["default"])((0,r["default"])(UpcomingController.prototype),"activate",a).call(a),a}return UpcomingController.$inject=["$q","$state","MoviesApi"],(0,c["default"])(UpcomingController,e),UpcomingController}(v["default"]);t["default"]=h}});