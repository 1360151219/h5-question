(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3255dfd7"],{"271e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"poster_container",attrs:{"data-app":"true"}},[a("img",{staticClass:"poster_img",class:t.loading?"loading_img":"",attrs:{src:t.url},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}}),a("v-img",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"music",staticStyle:{top:"27vh","z-index":"100"},attrs:{src:i("339e"),contain:"",height:"6vh",width:"6vh"},on:{click:function(e){return t.$emit("music:change")}}}),a("div",{staticClass:"tip_save"},[t._v("长按即可保存")])],1)},n=[],o=i("d4ec"),s=i("bee2"),c=i("262e"),r=i("2caf"),u=(i("99af"),i("9ab4")),l=i("2b0e"),v=i("2fe1"),d=i("1b40"),h=i("d257"),m=function(t){Object(c["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.apply(this,arguments),t.url="https://static2.pivotstudio.cn/2021-h5-questions/hust_img/load.gif",t.loading=!0,t.enterTime=0,t.leaveTime=0,t.timer=0,t}return Object(s["a"])(i,[{key:"getMax",value:function(t){for(var e=0,i=0,a=0;a<t.length;a++)e<t[a]&&(e=t[a],i=a);return i}},{key:"touchStart",value:function(){return this.timer=setTimeout(this.longpress,500),!1}},{key:"touchEnd",value:function(){return clearTimeout(this.timer),!1}},{key:"touchMove",value:function(){return clearTimeout(this.timer),!1}},{key:"longpress",value:function(){this.timer=0,Object(h["a"])({id:99,time:0,saved:1})}},{key:"created",value:function(){var t=this;this.enterTime=(new Date).getTime();var e=this.getMax(this.c),i=this.getMax(this.p),a=this.isMale?"0":"1";5===e&&(a="");var n=new Image;n.src="https://static2.pivotstudio.cn/2021-h5-questions/poster/".concat(e).concat(i).concat(a,".jpg"),n.onload=function(){var e=3e3*Math.random()+3e3;setTimeout((function(){t.url=n.src,t.loading=!1}),e)},window.addEventListener("beforeunload",this.leaveHandler)}},{key:"leaveHandler",value:function(){this.leaveTime=(new Date).getTime();var t=(this.leaveTime-this.enterTime)/1e3;Object(h["a"])({id:7,time:t})}},{key:"destroyed",value:function(){window.removeEventListener("beforeunload",this.leaveHandler)}}]),i}(l["a"]);Object(u["a"])([Object(d["a"])()],m.prototype,"c",void 0),Object(u["a"])([Object(d["a"])()],m.prototype,"p",void 0),Object(u["a"])([Object(d["a"])()],m.prototype,"isMale",void 0),m=Object(u["a"])([v["b"]],m);var p=m,f=p,g=(i("7307"),i("2877")),b=i("6544"),w=i.n(b),j=i("adda"),y=Object(g["a"])(f,a,n,!1,null,null,null);e["default"]=y.exports;w()(y,{VImg:j["a"]})},"339e":function(t,e,i){t.exports=i.p+"img/music.9d968a8f.svg"},7307:function(t,e,i){"use strict";i("874f")},"874f":function(t,e,i){}}]);
//# sourceMappingURL=chunk-3255dfd7.3c6ec88c.js.map