(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{192:function(t,e,n){},193:function(t,e,n){},194:function(t,e,n){},202:function(t,e,n){"use strict";var i=n(192);n.n(i).a},203:function(t,e,n){"use strict";var i=n(193);n.n(i).a},204:function(t,e,n){"use strict";var i=n(194);n.n(i).a},205:function(t,e,n){"use strict";var i={name:"drip-sider",data:function(){return{visible:!0}}},a=(n(204),n(1)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("x")])],2):t._e()])},[],!1,null,"5fa0951e",null);s.options.__file="sider.vue";e.a=s.exports},206:function(t,e,n){"use strict";var i={name:"drip-content"},a=(n(203),n(1)),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"drip-content"},[this._t("default")],2)},[],!1,null,"539a6a73",null);s.options.__file="content.vue";e.a=s.exports},207:function(t,e,n){"use strict";var i={name:"drip-footer"},a=n(1),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"e9dc011e",null);s.options.__file="footer.vue";e.a=s.exports},208:function(t,e,n){"use strict";var i={name:"drip-header"},a=n(1),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"4050a4db",null);s.options.__file="header.vue";e.a=s.exports},209:function(t,e,n){"use strict";n(48),n(13);var i={name:"drip-layout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"drip-sider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},a=(n(202),n(1)),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"55271864",null);s.options.__file="layout.vue";e.a=s.exports},227:function(t,e,n){},259:function(t,e,n){"use strict";var i=n(227);n.n(i).a},274:function(t,e,n){"use strict";n.r(e);var i=n(209),a=n(208),s=n(207),r=n(206),o=n(205),l={components:{DLayout:i.a,DHeader:a.a,DFooter:s.a,DContent:r.a,DSider:o.a}},u=(n(259),n(1)),c=Object(u.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[t._m(0),t._v(" "),n("d-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("d-sider",{staticStyle:{background:"#ddd",width:"200px",color:"black"}},[t._v("\n            sider\n        ")]),t._v(" "),n("d-layout",[n("d-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n                header\n            ")]),t._v(" "),n("d-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n                content\n            ")]),t._v(" "),n("d-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n                footer\n            ")])],1)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])}],!1,null,null,null);c.options.__file="layout-demo-3.vue";e.default=c.exports}}]);