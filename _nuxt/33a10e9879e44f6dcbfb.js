(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{220:function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("fd35d97c",content,!0,{sourceMap:!1})},236:function(t,e,n){"use strict";var r=n(220);n.n(r).a},237:function(t,e,n){e=t.exports=n(11)(!1);var r=n(238)(n(239));e.push([t.i,".intro[data-v-a09d610e]{height:300px;position:relative;padding:30px;background-image:url("+r+");background-position:50%;background-size:cover}.intro[data-v-a09d610e],.intro h1[data-v-a09d610e]{box-sizing:border-box}.intro h1[data-v-a09d610e]{position:absolute;top:10%;left:5%;width:90%;font-size:1.5rem;color:#000;background-color:#d3d3d3;padding:10px;border-radius:10px;box-shadow:3px 3px 3px #000;border:1px solid #000}@media (min-width:768px){.intro h1[data-v-a09d610e]{font-size:2rem}}.featured-posts[data-v-a09d610e]{display:-webkit-box;display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}",""])},238:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},239:function(t,e,n){t.exports=n.p+"img/f94bbfe.jpg"},246:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(31),n(5)),c={asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.app.$axios.$get("/posts/.json").then(function(t){var e=[];for(var n in t)e.push(Object(r.a)({},t[n],{id:n}));return{loadedPosts:e}}).catch(function(t){return e.error(t)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=(n(236),n(2)),component=Object(d.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page"},[this._m(0),this._v(" "),e("section",{staticClass:"featured-posts"},[e("PostList",{attrs:{posts:this.loadedPosts}})],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"intro"},[e("h1",[this._v("Get the latest tech news!")])])}],!1,null,"a09d610e",null);e.default=component.exports}}]);