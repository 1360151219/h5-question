(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3255dfd7"],{"271e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"poster_container",attrs:{"data-app":"true"}},[i("img",{staticClass:"poster_img",class:e.loading?"loading_img":"",attrs:{src:e.url},on:{touchstart:e.touchStart,touchmove:e.touchMove,touchend:e.touchEnd}}),i("v-img",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"music",staticStyle:{top:"27vh","z-index":"100"},attrs:{src:a("339e"),contain:"",height:"6vh",width:"6vh"},on:{click:function(t){return e.$emit("music:change")}}}),i("div",{staticClass:"tip_save"},[e._v("长按即可保存")])],1)},n=[],r=a("1da1"),o=a("d4ec"),s=a("bee2"),c=a("262e"),u=a("2caf"),l=(a("96cf"),a("99af"),a("9ab4")),d=a("2b0e"),v=a("2fe1"),h=a("1b40"),m=a("d257"),p=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.url="https://static2.pivotstudio.cn/2021-h5-questions/hust_img/load.gif",e.loading=!0,e.enterTime=0,e.leaveTime=0,e.timer=0,e}return Object(s["a"])(a,[{key:"getMax",value:function(e){for(var t=0,a=0,i=0;i<e.length;i++)t<e[i]&&(t=e[i],a=i);return a}},{key:"touchStart",value:function(){return this.timer=setTimeout(this.longpress,500),!1}},{key:"touchEnd",value:function(){return clearTimeout(this.timer),!1}},{key:"touchMove",value:function(){return clearTimeout(this.timer),!1}},{key:"longpress",value:function(){this.timer=0,Object(m["b"])({id:99,time:0,saved:1})}},{key:"created",value:function(){var e=this;this.enterTime=(new Date).getTime();var t=this.getMax(this.c),a=this.getMax(this.p),i=this.isMale?"0":"1";5===t&&(i="");var n=new Image;n.src="https://static2.pivotstudio.cn/2021-h5-questions/poster/".concat(t).concat(a).concat(i,".jpg"),n.onload=function(){var t=3e3*Math.random()+3e3;setTimeout((function(){e.url=n.src,e.loading=!1}),t)},window.addEventListener("beforeunload",this.leaveHandler)}},{key:"leaveHandler",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.leaveTime=(new Date).getTime(),t=(this.leaveTime-this.enterTime)/1e3,a={id:7,time:t},window.navigator.sendBeacon("/api"+Object(m["a"])(a));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"destroyed",value:function(){window.removeEventListener("beforeunload",this.leaveHandler)}}]),a}(d["a"]);Object(l["a"])([Object(h["a"])()],p.prototype,"c",void 0),Object(l["a"])([Object(h["a"])()],p.prototype,"p",void 0),Object(l["a"])([Object(h["a"])()],p.prototype,"isMale",void 0),p=Object(l["a"])([v["b"]],p);var f=p,g=f,b=(a("7307"),a("2877")),w=a("6544"),j=a.n(w),y=a("adda"),O=Object(b["a"])(g,i,n,!1,null,null,null);t["default"]=O.exports;j()(O,{VImg:y["a"]})},"339e":function(e,t,a){e.exports=a.p+"img/music.9d968a8f.svg"},7307:function(e,t,a){"use strict";a("874f")},"874f":function(e,t,a){}}]);
//# sourceMappingURL=chunk-3255dfd7.873a49e7.js.map