"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[409],{409:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(152),c=t(678),o=t(791),a=t(565),i=t(504),s=t(494),u=t(577),h=(t(462),t(184));function f(){var e=(0,o.useState)(null),n=(0,r.Z)(e,2),t=n[0],f=n[1],_=(0,o.useCallback)((function(e){var n=e.currentTarget.elements.searchInput.value;""!==n?a.Z.fetchSearch(n).then((function(e){var n=e.results;f(n)})).catch((function(e){return"error"})):u.Am.warning("Please enter search name")}),[]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_(e),f("")},children:[(0,h.jsx)("input",{name:"searchInput",className:c.Z.inputSearch,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies..."}),(0,h.jsxs)("button",{className:c.Z.btnSearch,children:[(0,h.jsx)(s.Yfv,{})," search"]})]}),(0,h.jsx)("ul",{children:t&&t.map((function(e){var n;return(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{to:"/movies/".concat(e.id),children:null!==(n=e.title)&&void 0!==n?n:e.name})},e.id)}))})]})}},565:function(e,n){var t="https://api.themoviedb.org/3",r="b392cdf9c5e216c7de5c7f82b89e6069";var c={fetchTrendingMovies:function(){return fetch("".concat(t,"/trending/movie/day?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchMoviesPage:function(e){return fetch("".concat(t,"/movie/").concat(e,"?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchActors:function(e){return fetch("".concat(t,"/movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchReviews:function(e){return fetch("".concat(t,"/movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))},fetchSearch:function(e){return fetch("".concat(t,"/search/movie?query=").concat(e,"&api_key=").concat(r)).then((function(e){if(e.ok)return e.json();Promise.reject(new Error("Something went wrong!!!"))}))}};n.Z=c},678:function(e,n){n.Z={list:"Nav_list__+DVp0",link:"Nav_link__Qzz21",inputSearch:"Nav_inputSearch__z9WN-",btnSearch:"Nav_btnSearch__1ujDI",nav:"Nav_nav__Xv5Wd",active:"Nav_active__FyzE-",filmCard:"Nav_filmCard__++Itq",poster:"Nav_poster__xEJ20",info:"Nav_info__GCie2",back:"Nav_back__l+GPX",actors:"Nav_actors__R7Emz",cast:"Nav_cast__IDBMq",reviews:"Nav_reviews__m4VGo"}}}]);
//# sourceMappingURL=409.108383f5.chunk.js.map