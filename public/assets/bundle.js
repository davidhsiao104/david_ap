webpackJsonp([0],{182:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o="D:\\Projects\\david_app\\src\\components\\Picture.js",i=this;var s=function e(t){var r=t.fileMap&&t.fid?t.fileMap[t.fid][0]:"";return a.a.createElement("img",{src:r,__source:{fileName:o,lineNumber:10},__self:i})};t["a"]=s},183:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o="D:\\Projects\\david_app\\src\\pureReact\\ItemEdit.js";var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function c(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var l=function(e){c(t,e);function t(e){s(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));r.state={lable:e.item.lable};return r}i(t,[{key:"render",value:function e(){var t=this;var r=this.props.onSubmit;return a.a.createElement("div",{__source:{fileName:o,lineNumber:15},__self:this},a.a.createElement("input",{value:this.state.lable,onChange:function e(r){return t.setState({lable:r.target.value})},__source:{fileName:o,lineNumber:16},__self:this}),a.a.createElement("button",{type:"button",onClick:function e(){r(t.state.lable);t.setState({lable:""})},__source:{fileName:o,lineNumber:18},__self:this},"Submit"))}}]);return t}(n["Component"]);t["a"]=l},184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var a=r.n(n);var o=r(196);var i=r.n(o);var s=r(29);var u=r(97);var c=r.n(u);var l=r(312);var f=r(381);var p="D:\\Projects\\david_app\\src\\index.js";function _(){var e=window.__INITIAL_STATE__;var t=Object(l["a"])(e);var r=Object(u["syncHistoryWithStore"])(s["e"],t);return a.a.createElement(f["a"],{store:t,history:r,__source:{fileName:p,lineNumber:19},__self:this})}i.a.render(_(),document.getElementById("root"))},312:function(e,t,r){"use strict";var n=r(98);var a=r(29);var o=r(97);var i=r.n(o);var s=r(324);var u=r(326);var c=r.n(u);var l=r(331);var f=r.n(l);var p=r(160);var _=r.n(p);var m=function e(t){var r=Object(n["d"])(s["a"],t,Object(n["a"])(f.a,p["apiMiddleware"],Object(o["routerMiddleware"])(a["e"]),c()()));return r};t["a"]=m},324:function(e,t,r){"use strict";var n=r(98);var a=r(97);var o=r.n(a);var i=r(325);var s=Object(n["c"])({routing:a["routerReducer"],shopReducer:i["a"]});t["a"]=s},325:function(e,t,r){"use strict";t["a"]=a;var n={shop:{ownerMeta:{}},introduction:{},serviceList:[],serviceDetail:{},fileMap:{}};function a(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:n;var t=arguments[1];switch(t.type){case"LOAD_SHOP_SUCCESS":{var r=t.payload,a=r.entity,o=r.fileMap;return Object.assign({},e,{shop:a,fileMap:o})}case"LOAD_INTRO_SUCCESS":{var i=t.payload,s=i.entity,u=i.fileMap;return Object.assign({},n,{shop:s.shop,introduction:Object.assign({},s),fileMap:u})}case"LOAD_MY_SERVICES_SUCCESS":{var c=t.payload.fileMap;var l=t.payload.pager.content;var f=t.payload.parent;return Object.assign({},n,{shop:f,serviceList:l,fileMap:c})}case"LOAD_SERVICES_DETAIL_SUCCESS":{var p=t.payload.fileMap;var _=t.payload.entity;return Object.assign({},n,{shop:_.shop,serviceDetail:_,fileMap:p})}default:return e}}},381:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(6);var i=r.n(o);var s=r(30);var u=r(29);var c=r(391);var l="D:\\Projects\\david_app\\src\\App.js",f=this;var p=function e(t){var r=t.store,n=t.history;return a.a.createElement(s["a"],{store:r,__source:{fileName:l,lineNumber:8},__self:f},a.a.createElement(u["d"],{history:n,routes:c["a"],__source:{fileName:l,lineNumber:9},__self:f}))};p.propTypes={store:i.a.object.isRequired,history:i.a.object.isRequired};t["a"]=p},391:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(29);var i=r(392);var s=r(395);var u=r(398);var c=r(399);var l=r(400);var f=r(401);var p="D:\\Projects\\david_app\\src\\config\\routes.js";t["a"]=a.a.createElement(o["c"],{path:"/",component:i["a"],__source:{fileName:p,lineNumber:12},__self:this},a.a.createElement(o["a"],{component:f["a"],__source:{fileName:p,lineNumber:13},__self:this}),a.a.createElement(o["c"],{path:"/shop/:sid",component:s["a"],__source:{fileName:p,lineNumber:14},__self:this},a.a.createElement(o["a"],{component:u["a"],__source:{fileName:p,lineNumber:15},__self:this}),a.a.createElement(o["c"],{path:"/shop/:sid/introduction",component:u["a"],__source:{fileName:p,lineNumber:17},__self:this}),a.a.createElement(o["c"],{path:"/shop/:sid/goods",component:c["a"],__source:{fileName:p,lineNumber:19},__self:this}),a.a.createElement(o["c"],{path:"/shop/goods/:gid",component:l["a"],__source:{fileName:p,lineNumber:20},__self:this})),a.a.createElement(o["c"],{path:"/test",component:s["a"],__source:{fileName:p,lineNumber:22},__self:this}))},392:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(6);var i=r.n(o);var s=r(30);var u=r(393);var c=r(394);var l="D:\\Projects\\david_app\\src\\containers\\Root.js";var f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function(e){m(t,e);function t(){p(this,t);return _(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,[{key:"render",value:function e(){var t=this.props.children;return a.a.createElement("div",{className:"wrapper",__source:{fileName:l,lineNumber:16},__self:this},a.a.createElement(u["a"],{__source:{fileName:l,lineNumber:17},__self:this}),t,a.a.createElement(c["a"],{__source:{fileName:l,lineNumber:19},__self:this}))}}]);return t}(n["Component"]);v.PropTypes={children:i.a.node};var b=function e(t,r){return{}};var d=function e(t){return{}};t["a"]=Object(s["b"])(b,d)(v)},393:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(29);var i="D:\\Projects\\david_app\\src\\components\\HeadBar.js",s=this;var u=function e(){return a.a.createElement("div",{className:"headBar",__source:{fileName:i,lineNumber:7},__self:s},"這是HeadBar 【",a.a.createElement(o["b"],{to:"/",__source:{fileName:i,lineNumber:9},__self:s},"Pure React"),"】【",a.a.createElement(o["b"],{to:"/shop/9527",__source:{fileName:i,lineNumber:14},__self:s},"React / Redux"),"】 (請開API: npm run start:api)")};t["a"]=u},394:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o="D:\\Projects\\david_app\\src\\components\\Footer.js",i=this;var s=function e(){return a.a.createElement("div",{className:"footer",__source:{fileName:o,lineNumber:6},__self:i},a.a.createElement("p",{__source:{fileName:o,lineNumber:7},__self:i},"104外包網提供發案找人、兼差接案等刊登服務，為接案方找案件與發案方找高手的外包媒合平台"),a.a.createElement("p",{__source:{fileName:o,lineNumber:8},__self:i},"一零四集團外包網 版權所有 © 2016 ",a.a.createElement("a",{href:"#",title:"104企業網站",__source:{fileName:o,lineNumber:8},__self:i},"104企業網站")," | 建議瀏覽器IE11以上 ",a.a.createElement("a",{href:"#",title:"隱私權條款",__source:{fileName:o,lineNumber:8},__self:i},"隱私權條款"),"．",a.a.createElement("a",{href:"#",title:"意見反應",__source:{fileName:o,lineNumber:8},__self:i},"意見反應")))};t["a"]=s},395:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(6);var i=r.n(o);var s=r(30);var u=r(396);var c=r(397);var l=r(182);var f=r(62);var p="D:\\Projects\\david_app\\src\\containers\\Shop.js";var _=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function m(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function v(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var d=function(e){b(t,e);function t(){m(this,t);return v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}_(t,[{key:"render",value:function e(){var t=this.props,r=t.children,n=t.shop,o=t.nameCard,i=t.fileMap;return a.a.createElement("div",{className:"shop-main",__source:{fileName:p,lineNumber:18},__self:this},a.a.createElement("div",{className:"shop-cover",__source:{fileName:p,lineNumber:19},__self:this},"商店封面",a.a.createElement("h1",{__source:{fileName:p,lineNumber:22},__self:this},n.name),a.a.createElement("h1",{__source:{fileName:p,lineNumber:23},__self:this},n.summary)),a.a.createElement(c["a"],{sid:n.sid||0,__source:{fileName:p,lineNumber:25},__self:this}),a.a.createElement("div",{className:"double-col row",__source:{fileName:p,lineNumber:26},__self:this},a.a.createElement("div",{className:"left-col",__source:{fileName:p,lineNumber:27},__self:this},r),a.a.createElement("div",{className:"right-col",__source:{fileName:p,lineNumber:30},__self:this},a.a.createElement(u["a"],{nameCard:o,fileMap:i,__source:{fileName:p,lineNumber:31},__self:this}))))}},{key:"componentDidMount",value:function e(){}}]);return t}(n["Component"]);d.PropTypes={children:i.a.node};var h=function e(t,r){return{shop:t.shopReducer.shop,nameCard:t.shopReducer.shop.ownerMeta,fileMap:t.shopReducer.fileMap}};var y=function e(t){return{loadShopData:function e(r){return t(f["d"](r))}}};t["a"]=Object(s["b"])(h,y)(d)},396:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(6);var i=r.n(o);var s=r(30);var u=r(182);var c="D:\\Projects\\david_app\\src\\containers\\Personal.js";var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function _(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var m=function(e){_(t,e);function t(){f(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"render",value:function e(){var t=this.props,r=t.nameCard,n=t.fileMap;return a.a.createElement("div",{className:"personal",__source:{fileName:c,lineNumber:13},__self:this},a.a.createElement("div",{className:"avatar",__source:{fileName:c,lineNumber:14},__self:this},a.a.createElement(u["a"],{fileMap:n,fid:r.picId,__source:{fileName:c,lineNumber:15},__self:this})),"性名:",r.name)}}]);return t}(n["Component"]);var v=function e(t,r){};var b=function e(t){};t["a"]=Object(s["b"])()(m)},397:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(29);var i="D:\\Projects\\david_app\\src\\components\\ShopNavigation.js",s=this;var u=function e(t){return a.a.createElement("div",{className:"ShopNavigation",__source:{fileName:i,lineNumber:7},__self:s},a.a.createElement("ul",{__source:{fileName:i,lineNumber:8},__self:s},a.a.createElement("li",{__source:{fileName:i,lineNumber:9},__self:s},a.a.createElement(o["b"],{to:"/shop/"+t.sid+"/introduction",__source:{fileName:i,lineNumber:10},__self:s},"商店介紹")),a.a.createElement("li",{__source:{fileName:i,lineNumber:15},__self:s},a.a.createElement(o["b"],{to:"/shop/"+t.sid+"/goods",__source:{fileName:i,lineNumber:16},__self:s},"服務項目")),a.a.createElement("li",{__source:{fileName:i,lineNumber:21},__self:s},"作品展示")))};t["a"]=u},398:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(6);var i=r.n(o);var s=r(30);var u=r(62);var c="D:\\Projects\\david_app\\src\\containers\\Introduction.js";var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function _(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var m=function(e){_(t,e);function t(){f(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"render",value:function e(){var t=this.props,r=t.children,n=t.introduction;return a.a.createElement("div",{className:"introduction",__source:{fileName:c,lineNumber:15},__self:this},"商店介紹",a.a.createElement("div",{__source:{fileName:c,lineNumber:17},__self:this},n.description),a.a.createElement("div",{__source:{fileName:c,lineNumber:18},__self:this},n.areaList),a.a.createElement("div",{__source:{fileName:c,lineNumber:19},__self:this},n.certList),a.a.createElement("div",{__source:{fileName:c,lineNumber:20},__self:this},n.langList),a.a.createElement("div",{__source:{fileName:c,lineNumber:21},__self:this},n.other))}},{key:"componentDidMount",value:function e(){if(this.props.params.sid)this.props.loadShopIntroData(this.props.params.sid)}}]);return t}(n["Component"]);m.PropTypes={children:i.a.node};var v=function e(t,r){return{introduction:t.shopReducer.introduction}};var b=function e(t){return{loadShopIntroData:function e(r){return t(u["a"](r))}}};t["a"]=Object(s["b"])(v,b)(m)},399:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(6);var i=r.n(o);var s=r(30);var u=r(62);var c=r(29);var l="D:\\Projects\\david_app\\src\\containers\\OurServices.js";var f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function(e){m(t,e);function t(){p(this,t);return _(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,[{key:"render",value:function e(){var t=this;var r=this.props,n=r.children,o=r.serviceList;return a.a.createElement("div",{__source:{fileName:l,lineNumber:17},__self:this},"項目列表",a.a.createElement("ul",{__source:{fileName:l,lineNumber:19},__self:this},o.map(function(e){return a.a.createElement("li",{__source:{fileName:l,lineNumber:21},__self:t},a.a.createElement(c["b"],{to:"/shop/goods/"+e.gid,__source:{fileName:l,lineNumber:21},__self:t}," ",e.title))})))}},{key:"componentDidMount",value:function e(){if(this.props.params.sid)this.props.loadOurServices(this.props.params.sid)}}]);return t}(n["Component"]);v.PropTypes={children:i.a.node};var b=function e(t,r){return{serviceList:t.shopReducer.serviceList}};var d=function e(t){return{loadOurServices:function e(r){return t(u["b"](r))}}};t["a"]=Object(s["b"])(b,d)(v)},400:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(6);var i=r.n(o);var s=r(30);var u=r(62);var c="D:\\Projects\\david_app\\src\\containers\\OurServiceDetail.js";var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function _(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var m=function(e){_(t,e);function t(){f(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"render",value:function e(){var t=this.props.detail;return a.a.createElement("div",{__source:{fileName:c,lineNumber:16},__self:this},"項目內容 ",a.a.createElement("br",{__source:{fileName:c,lineNumber:17},__self:this}),"Title: ",t.title,a.a.createElement("br",{__source:{fileName:c,lineNumber:18},__self:this}),"內容: ",t.content,a.a.createElement("br",{__source:{fileName:c,lineNumber:19},__self:this}))}},{key:"componentDidMount",value:function e(){if(this.props.params.gid)this.props.loadServiceDetail(this.props.params.gid)}}]);return t}(n["Component"]);m.PropTypes={};var v=function e(t,r){return{detail:t.shopReducer.serviceDetail}};var b=function e(t){return{loadServiceDetail:function e(r){return t(u["c"](r))}}};t["a"]=Object(s["b"])(v,b)(m)},401:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(402);var i=r(183);var s="D:\\Projects\\david_app\\src\\pureReact\\Todos.js";var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++){r[t]=e[t]}return r}else{return Array.from(e)}}function l(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var _=[{id:0,lable:"Item one",completed:false},{id:1,lable:"Item two",completed:false},{id:2,lable:"Item three",completed:false}];var m=function(e){p(t,e);function t(){l(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.addItem=function(t){var r=e.state.idGen+1;var n=[].concat(c(e.state.items),[{id:r,lable:t,completed:false}]);e.setState({items:n,idGen:r})};e.delItem=function(t){var r=e.state.items.filter(function(e){return e.id!==t});e.setState({items:r})};e.modifyItem=function(t,r){var n=e.state.items.map(function(e){if(e.id!==t)return e;return Object.assign({},e,{lable:r})});e.setState({items:n})};e.toggleItem=function(t){var r=e.state.items.map(function(e){if(e.id!==t)return e;return Object.assign({},e,{completed:!e.completed})});e.setState({items:r})};e.state={items:_,idGen:2};return e}u(t,[{key:"render",value:function e(){var t=this;return a.a.createElement("div",{className:"wrapper",__source:{fileName:s,lineNumber:74},__self:this},a.a.createElement(i["a"],{item:{lable:""},onSubmit:this.addItem,__source:{fileName:s,lineNumber:75},__self:this}),this.state.items.map(function(e){return a.a.createElement(o["a"],{key:e.id,item:e,onComplete:function r(){return t.toggleItem(e.id)},onDel:function r(){return t.delItem(e.id)},onEdit:t.modifyItem,__source:{fileName:s,lineNumber:79},__self:t})}))}}]);return t}(n["Component"]);t["a"]=m},402:function(e,t,r){"use strict";var n=r(3);var a=r.n(n);var o=r(183);var i="D:\\Projects\\david_app\\src\\pureReact\\TodoItem.js";var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function l(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var f=function(e){l(t,e);function t(e){u(this,t);var r=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));r.toggleEdit=function(){r.setState({editMode:!r.state.editMode})};r.state={editMode:false};return r}s(t,[{key:"render",value:function e(){var t=this;var r=this.props,n=r.item,s=r.onDel,u=r.onEdit,c=r.onComplete;var l=this.state.editMode?a.a.createElement(o["a"],{item:n,onSubmit:function e(r){u(n.id,r);t.toggleEdit()},__source:{fileName:i,lineNumber:22},__self:this}):a.a.createElement("div",{__source:{fileName:i,lineNumber:27},__self:this},a.a.createElement("li",{onClick:c,style:{textDecoration:n.completed?"line-through":"none"},__source:{fileName:i,lineNumber:28},__self:this},n.lable),a.a.createElement("button",{type:"button",onClick:s,__source:{fileName:i,lineNumber:36},__self:this},"del"),a.a.createElement("button",{type:"button",onClick:this.toggleEdit,__source:{fileName:i,lineNumber:37},__self:this},"edit"));return l}}]);return t}(n["Component"]);t["a"]=f},62:function(e,t,r){"use strict";r.d(t,"d",function(){return l});r.d(t,"a",function(){return f});r.d(t,"b",function(){return p});r.d(t,"c",function(){return _});var n=r(160);var a=r.n(n);function o(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var i=true?"http://localhost:3001/api":"https://icase.104dc-dev.com/api";var s="LOAD_SHOP_SUCCESS";var u="LOAD_INTRO_SUCCESS";var c="UPD_AVATAR";var l=function e(t){return o({},n["CALL_API"],{endpoint:i+"/shop/"+t,method:"GET",types:["REQUEST","LOAD_SHOP_SUCCESS","FAILURE"]})};var f=function e(t){return o({},n["CALL_API"],{endpoint:i+"/shop/"+t+"/introduction",method:"GET",types:["REQUEST","LOAD_INTRO_SUCCESS","FAILURE"]})};var p=function e(t){return o({},n["CALL_API"],{endpoint:i+"/shop/"+t+"/goods",method:"GET",types:["REQUEST","LOAD_MY_SERVICES_SUCCESS","FAILURE"]})};var _=function e(t){return o({},n["CALL_API"],{endpoint:i+"/shop/goods/"+t,method:"GET",types:["REQUEST","LOAD_SERVICES_DETAIL_SUCCESS","FAILURE"]})}}},[184]);
//# sourceMappingURL=bundle.js.map