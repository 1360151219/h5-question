(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2704734c"],{"7ce8":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"bg"},[n("img",{staticClass:"leave_cover",attrs:{src:i("879b")}}),e.isNew?n("img",{staticClass:"q_one",attrs:{src:i("d679")}}):n("img",{staticClass:"q_one",attrs:{src:i("8bf9")}}),n("div",{class:e.isNew?"option_new_one":"option_one",on:{click:function(t){return e.clickToNext(0,1,"/five",1.523)}}}),n("div",{class:e.isNew?"option_new_two":"option_two",on:{click:function(t){return e.clickToNext(3,3,"/five",1.523)}}}),n("div",{class:e.isNew?"option_new_three":"option_three",on:{click:function(t){return e.clickToNext(2,2,"/five",1.523)}}}),n("div",{class:e.isNew?"option_new_four":"option_four",on:{click:function(t){return e.clickToNext(5,5,"/five",1.523)}}}),n("div",{staticClass:"back",on:{click:e.goback}})])])},c=[],o=i("1da1"),a=i("d4ec"),r=i("bee2"),s=i("262e"),u=i("2caf"),l=(i("96cf"),i("9ab4")),f=i("2b0e"),v=i("2fe1"),d=i("1b40"),b=i("d257"),p=function(e){Object(s["a"])(i,e);var t=Object(u["a"])(i);function i(){var e;return Object(a["a"])(this,i),e=t.apply(this,arguments),e.enterTime=0,e.leaveTime=0,e}return Object(r["a"])(i,[{key:"created",value:function(){this.enterTime=(new Date).getTime(),window.addEventListener("beforeunload",this.leaveHandler)}},{key:"beforeDestroy",value:function(){this.leaveTime=(new Date).getTime();var e=(this.leaveTime-this.enterTime)/1e3;Object(b["b"])({id:4,time:e})}},{key:"goback",value:function(){this.$router.go(-1)}},{key:"leaveHandler",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.leaveTime=(new Date).getTime(),t=(this.leaveTime-this.enterTime)/1e3,i={id:4,time:t},window.navigator.sendBeacon("/api"+Object(b["a"])(i));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"destroyed",value:function(){window.removeEventListener("beforeunload",this.leaveHandler)}}]),i}(f["a"]);Object(l["a"])([Object(d["a"])()],p.prototype,"clickToNext",void 0),Object(l["a"])([Object(d["a"])()],p.prototype,"isNew",void 0),p=Object(l["a"])([v["b"]],p);var w=p,m=w,k=(i("a05c"),i("2877")),h=Object(k["a"])(m,n,c,!1,null,"8ff588a0",null);t["default"]=h.exports},"879b":function(e,t,i){e.exports=i.p+"img/leave_four.c4c359c3.svg"},"8bf9":function(e,t,i){e.exports=i.p+"img/old_four.cbb97172.svg"},a05c:function(e,t,i){"use strict";i("f29f")},d679:function(e,t,i){e.exports=i.p+"img/new_four.df90eb7d.svg"},f29f:function(e,t,i){}}]);
//# sourceMappingURL=chunk-2704734c.29ba462d.js.map