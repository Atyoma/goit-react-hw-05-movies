"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{845:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(885),c=t(791),o=t(565),i=t(501),a=t(678),s=t(184);function _(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],_=n[1];return(0,c.useEffect)((function(){o.Z.fetchTrendingMovies().then((function(e){var n=e.results;_(n)})).catch((function(e){return"error"}))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("ul",{children:t&&t.map((function(e){return(0,s.jsx)("li",{className:a.Z.list,children:(0,s.jsx)(i.rU,{to:"movies/".concat(e.id),children:e.title})},e.id)}))})]})}},565:function(e,n){var t="https://api.themoviedb.org/3",r="b392cdf9c5e216c7de5c7f82b89e6069";var c={fetchTrendingMovies:function(){return fetch("".concat(t,"/trending/movie/day?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchMoviesPage:function(e){return fetch("".concat(t,"/movie/").concat(e,"?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchActors:function(e){return fetch("".concat(t,"/movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchReviews:function(e){return fetch("".concat(t,"/movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchSearch:function(e){return fetch("".concat(t,"/search/movie?query=").concat(e,"&api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))}};n.Z=c},678:function(e,n){n.Z={list:"Nav_list__+DVp0",link:"Nav_link__Qzz21",inputSearch:"Nav_inputSearch__z9WN-",btnSearch:"Nav_btnSearch__1ujDI",nav:"Nav_nav__Xv5Wd",active:"Nav_active__FyzE-",filmCard:"Nav_filmCard__++Itq",poster:"Nav_poster__xEJ20",info:"Nav_info__GCie2",back:"Nav_back__l+GPX",actors:"Nav_actors__R7Emz",cast:"Nav_cast__IDBMq",reviews:"Nav_reviews__m4VGo"}}}]);
//# sourceMappingURL=845.667bf962.chunk.js.map