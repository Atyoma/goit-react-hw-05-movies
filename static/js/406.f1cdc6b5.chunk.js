"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[406],{406:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(885),c=t(501),i=t(871),o=t(678),a=t(565),s=t(791),h=t(617),_=t(184);function f(){var e=(0,s.useState)(null),n=(0,r.Z)(e,2),t=n[0],f=n[1],l=(0,i.UO)().movieId,u=(0,i.s0)();(0,s.useEffect)((function(){a.Z.fetchMoviesPage(l).then(f).catch((function(e){return"error"}))}),[l]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("button",{type:"button",className:o.Z.back,onClick:function(){u(-1)},children:[(0,_.jsx)(h.siY,{}),"Go back"]}),t&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:o.Z.filmCard,children:[(0,_.jsx)("div",{className:o.Z.posterCard,children:(0,_.jsx)("img",{className:o.Z.poster,src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:t.original_title})}),(0,_.jsxs)("div",{className:o.Z.info,children:[(0,_.jsx)("h2",{children:t.original_title}),(0,_.jsxs)("p",{children:["User score: ","".concat(10*t.vote_average," %")]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:t.overview}),(0,_.jsx)("h4",{children:"Genres"}),t.genres.map((function(e){return(0,_.jsxs)("span",{children:[e.name," "]},e.id)}))]})]}),(0,_.jsx)("hr",{}),(0,_.jsxs)("div",{className:o.Z.actors,children:[(0,_.jsx)("p",{children:"Additional Info"}),(0,_.jsxs)("ul",{className:o.Z.actorsList,children:[(0,_.jsx)(c.rU,{to:"cast",className:o.Z.cast,children:"Cast"}),(0,_.jsx)(c.rU,{to:"reviews",children:"Reviews"})]})]}),(0,_.jsx)("hr",{}),(0,_.jsx)(i.j3,{})]})]})}},565:function(e,n){var t="https://api.themoviedb.org/3",r="b392cdf9c5e216c7de5c7f82b89e6069";var c={fetchTrendingMovies:function(){return fetch("".concat(t,"/trending/movie/day?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchMoviesPage:function(e){return fetch("".concat(t,"/movie/").concat(e,"?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchActors:function(e){return fetch("".concat(t,"/movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchReviews:function(e){return fetch("".concat(t,"/movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchSearch:function(e){return fetch("".concat(t,"/search/movie?query=").concat(e,"&api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))}};n.Z=c},678:function(e,n){n.Z={list:"Nav_list__+DVp0",link:"Nav_link__Qzz21",inputSearch:"Nav_inputSearch__z9WN-",btnSearch:"Nav_btnSearch__1ujDI",nav:"Nav_nav__Xv5Wd",active:"Nav_active__FyzE-",filmCard:"Nav_filmCard__++Itq",poster:"Nav_poster__xEJ20",info:"Nav_info__GCie2",back:"Nav_back__l+GPX",actors:"Nav_actors__R7Emz",cast:"Nav_cast__IDBMq",reviews:"Nav_reviews__m4VGo"}}}]);
//# sourceMappingURL=406.f1cdc6b5.chunk.js.map