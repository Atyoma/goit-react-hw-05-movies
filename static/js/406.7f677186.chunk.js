"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[406],{406:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(885),c=t(871),i=t(501),o=t(678),s=t(565),a=t(791),h=t(617),f=t(184);function l(e){e.handleSubmit;var n=(0,a.useState)(null),t=(0,r.Z)(n,2),l=t[0],u=t[1],v=(0,c.UO)().movieId,_=(0,c.s0)();(0,a.useEffect)((function(){s.Z.fetchMoviesPage(v).then(u).catch((function(e){return"error"}))}),[v]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("button",{type:"button",className:o.Z.back,onClick:function(){_(-1)},children:[(0,f.jsx)(h.siY,{}),"Go back"]}),l&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:o.Z.filmCard,children:[(0,f.jsx)("div",{className:o.Z.posterCard,children:(0,f.jsx)("img",{className:o.Z.poster,src:"https://image.tmdb.org/t/p/w300/".concat(l.poster_path),alt:l.original_title})}),(0,f.jsxs)("div",{className:o.Z.info,children:[(0,f.jsx)("h2",{children:l.original_title}),(0,f.jsxs)("p",{children:["User score: ","".concat(10*l.vote_average," %")]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:l.overview}),(0,f.jsx)("h4",{children:"Genres"}),l.genres.map((function(e){return(0,f.jsxs)("span",{children:[e.name," "]},e.id)}))]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{className:o.Z.actors,children:[(0,f.jsx)("p",{children:"Additional Info"}),(0,f.jsxs)("ul",{className:o.Z.actorsList,children:[(0,f.jsx)(i.rU,{to:"cast",className:o.Z.cast,children:"Cast"}),(0,f.jsx)(i.rU,{to:"reviews",children:"Reviews"})]})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(c.j3,{})]})]})}},565:function(e,n){var t="https://api.themoviedb.org/3",r="b392cdf9c5e216c7de5c7f82b89e6069";var c={fetchTrendingMovies:function(){return fetch("".concat(t,"/trending/movie/day?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchMoviesPage:function(e){return fetch("".concat(t,"/movie/").concat(e,"?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchActors:function(e){return fetch("".concat(t,"/movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchReviews:function(e){return fetch("".concat(t,"/movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchSearch:function(e){return fetch("".concat(t,"/search/movie?query=").concat(e,"&api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))}};n.Z=c},678:function(e,n){n.Z={list:"Nav_list__+DVp0",link:"Nav_link__Qzz21",nav:"Nav_nav__Xv5Wd",active:"Nav_active__FyzE-",filmCard:"Nav_filmCard__++Itq",poster:"Nav_poster__xEJ20",info:"Nav_info__GCie2",back:"Nav_back__l+GPX",actors:"Nav_actors__R7Emz",cast:"Nav_cast__IDBMq",reviews:"Nav_reviews__m4VGo"}}}]);
//# sourceMappingURL=406.7f677186.chunk.js.map