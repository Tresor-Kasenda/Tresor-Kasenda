webpackJsonp([5],{"5sX/":function(t,e,n){"use strict";e.a={data:function(){return{isWhite:!1,menu:!1}},watch:{$route:function(){this.menu=!1}},methods:{handleScroll:function(t){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isWhite=e>100}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}}},DLCH:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("TopMenu"),e("div",{attrs:{id:"main-container"}},[e("nuxt")],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},EjzH:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container top-mobile"},[n("nav",{staticClass:"navbar",attrs:{id:"top-menu",role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand is-items-center"},[t._m(0),n("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){e.preventDefault(),t.menu=!t.menu}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),n("div",{class:["navbar-menu",{"is-active":t.menu}]},[n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("nuxt-link",{attrs:{to:t.$i18n.path("")}},[t._v(t._s(t.$t("links.home")))])],1),n("div",{staticClass:"navbar-item"},[n("nuxt-link",{attrs:{to:t.$i18n.path("resume")}},[t._v(t._s(t.$t("links.resume")))])],1),n("div",{staticClass:"navbar-item"},[n("nuxt-link",{attrs:{to:t.$i18n.path("teaching")}},[t._v(t._s(t.$t("links.teaching")))])],1),n("div",{staticClass:"navbar-item"},[n("nuxt-link",{attrs:{to:t.$i18n.path("contact")}},[t._v(t._s(t.$t("links.contact")))])],1),"fr"===t.$i18n.locale?n("div",{staticClass:"navbar-item"},[n("nuxt-link",{staticClass:"Header__Link",attrs:{to:"/en"+t.$route.fullPath,"active-class":"none",exact:""}},[t._v("\n            "+t._s(t.$t("links.english"))+"\n          ")])],1):n("div",{staticClass:"navbar-item"},[n("nuxt-link",{staticClass:"Header__Link",attrs:{to:t.$route.fullPath.replace(/^\/[^\/]+/,""),"active-class":"none",exact:""}},[t._v("\n            "+t._s(t.$t("links.french"))+"\n          ")])],1)])])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("h1",{staticClass:"site-title"},[this._v("Olivier"),e("span",[this._v("ESUKA")])])])}]};e.a=i},FzzO:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100%}body{background-image:url("+a(n("pYFS"))+");background-repeat:repeat;position:relative;font-family:Roboto,Helvetica,sans-serif;color:#424242;margin:0;min-height:100vh;width:100%;font-size:15px;line-height:1.6em;background-color:#f5f5f5;overflow-x:hidden;overflow-y:auto;background-size:cover;-webkit-background-size:cover;background-attachment:fixed;background-position:50%;background-repeat:no-repeat;-webkit-overflow-scrolling:touch}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}#main-container{padding:15px}.is-blue{color:#2196f3}.bg-blue{background-color:#2196f3}.progress .is-primary{background-color:#2196f3!important}.is-white{color:#fff}.is-content-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.is-content-center,.is-items-center{display:-webkit-box;display:-ms-flexbox;display:flex}.is-items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.px-10{padding-right:10px}.pl-10,.px-10{padding-left:10px}",""])},MMpC:function(t,e,n){"use strict";var a=n("5sX/"),i=n("EjzH"),o=!1;var r=function(t){o||n("l/jv")},s=n("VU/8")(a.a,i.a,!1,r,"data-v-162d26c9",null);s.options.__file="components/TopMenu.vue",e.a=s.exports},Ma2J:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xm1J"),i=n("DLCH"),o=!1;var r=function(t){o||n("nqEO")},s=n("VU/8")(a.a,i.a,!1,r,null,null);s.options.__file="layouts/default.vue",e.default=s.exports},Ni0q:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'#top-menu[data-v-162d26c9]{background:transparent}.navbar-item[data-v-162d26c9]{position:relative}.navbar-item a[data-v-162d26c9]{color:#424242;font-weight:400;font-size:19.2px;font-size:1.2rem}.nuxt-link-exact-active[data-v-162d26c9]{color:#2196f3!important}.nuxt-link-exact-active[data-v-162d26c9]:after{display:block;position:absolute;right:0;left:0;bottom:0;content:"";width:0;height:2px;margin:0 auto;background-color:#2eca7f;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.site-title[data-v-162d26c9]{font-weight:700;font-style:normal;color:#49515d;font-size:22.4px;font-size:1.4rem;font-weight:500;font-family:Montserrat,Helvetica,sans-serif;line-height:20px;margin:20px 0}.site-title span[data-v-162d26c9]{color:#2196f3;padding-left:10px}@media only screen and (min-width:991px){.header.sticked .site-title[data-v-162d26c9],.site-title[data-v-162d26c9]{color:#49515d}}@media only screen and (max-width:1086px){.site-title[data-v-162d26c9]{color:#fff!important}.top-mobile[data-v-162d26c9]{background-color:#2196f3}}.is-active[data-v-162d26c9]{position:fixed;background-color:#fff;top:75px;right:0;left:0;bottom:0;text-align:center;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.navbar-burger[data-v-162d26c9]{margin-right:15px;color:#fff;font-weight:600}',""])},Xm1J:function(t,e,n){"use strict";var a=n("MMpC");e.a={components:{TopMenu:a.a}}},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},"l/jv":function(t,e,n){var a=n("Ni0q");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("6eba58c0",a,!1,{sourceMap:!1})},nqEO:function(t,e,n){var a=n("FzzO");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("278feeec",a,!1,{sourceMap:!1})},pYFS:function(t,e,n){t.exports=n.p+"img/main_bg.3ecd575.png"}});