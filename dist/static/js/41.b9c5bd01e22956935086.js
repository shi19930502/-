webpackJsonp([41],{"4KOb":function(t,n,e){t.exports=e.p+"static/img/wx_ts_8.ad0c959.png"},"8N/f":function(t,n,e){"use strict";function i(t){e("f5Uj")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("8Vlu"),A=e("njAA"),s=e("XyMi"),a=i,r=Object(s.a)(o.a,A.a,A.b,!1,a,null,null);n.default=r.exports},"8Vlu":function(t,n,e){"use strict";n.a={data:function(){return{show:!0,weiXin:!1,downUrl:""}},created:function(){"Weixin"!=this.$root.sources()||this.$root.isPcOS()||"Android"==this.$root.getDeviceInfo()?this.show=!1:this.weiXin=!0},watch:{},computed:{},mounted:function(){var t=this;this.$route.query.id||0==this.$route.query.id?this.postRequest("customer/getCusMaterMerChanter",{id:this.$route.query.id}).then(function(n){0==n.data.state?t.downUrl=t.$root.config.root_api+"upload/"+n.data.msg:t.$dialog.toast({mes:"网络加载失败，请重新加载页面！",timeout:1500})}):this.$router.go(-1)},methods:{closeShow:function(){this.show=!1}}}},A1zg:function(t,n,e){t.exports=e.p+"static/img/wx_ts_4.512eeb6.png"},AGGX:function(t,n,e){t.exports=e.p+"static/img/wx_ts_2.d95cb2b.png"},PbDL:function(t,n,e){t.exports=e.p+"static/img/wx_ts_5.fbe8909.png"},es4Z:function(t,n,e){t.exports=e.p+"static/img/wx_ts_7.3a04501.png"},f5Uj:function(t,n,e){var i=e("m+gW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("rjj0").default;o("053b24a7",i,!0,{})},"m+gW":function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,"#fDown{background:#fff}#fDown img{display:block}#fDown .down{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.32rem;width:3rem;height:.8rem;background:#018be6;color:#fff;text-align:center;margin:1rem auto 0;border-radius:.4rem;font-weight:700}#fDown .pop_ts .yd-popup{background:transparent}#fDown .pop_ts .yd-popup-content{background:hsla(0,0%,100%,.1);background:transparent}#fDown .ts_img_2{display:block;margin:auto;width:6.37rem;height:3.28rem}#fDown .down_notice{color:red;margin:.2rem;text-align:center;margin-bottom:1rem}#fDown .content{padding:.2rem}#fDown .content .title{padding:.2rem 0;font-size:.32rem;font-weight:700}#fDown .content .fangfa{font-size:.3rem;font-weight:700;margin:.2rem}#fDown .ts_img_3,#fDown .ts_img_4{width:90%;margin:auto}#fDown p{font-weight:700;padding:.2rem;font-size:.26rem}","",{version:3,sources:["D:/Web/银川电子结算new/北环/前端/微信快捷下单/src/views/firstGYS/f_down.vue"],names:[],mappings:"AACA,OACE,eAAkB,CACnB,AACD,WACI,aAAe,CAClB,AACD,aACI,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AACxB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACpB,mBAAoB,AAC5B,iBAAkB,AAClB,WAAY,AACZ,aAAc,AACd,mBAAoB,AACpB,WAAa,AACb,kBAAmB,AACnB,mBAAoB,AACpB,oBAAqB,AACrB,eAAkB,CACrB,AAID,yBACI,sBAAwB,CAC3B,AACD,iCACI,8BAAqC,AACrC,sBAAwB,CAC3B,AACD,iBACI,cAAe,AACf,YAAa,AACb,cAAe,AACf,cAAgB,CACnB,AACD,oBACI,UAAW,AACX,aAAc,AACd,kBAAmB,AACnB,kBAAoB,CACvB,AACD,gBACI,aAAe,CAClB,AACD,uBACM,gBAAiB,AACjB,iBAAkB,AAClB,eAAkB,CACvB,AACD,wBACM,gBAAiB,AACjB,gBAAkB,AAClB,YAAc,CACnB,AACD,kCACI,UAAW,AACX,WAAa,CAChB,AACD,SACI,gBAAkB,AAClB,cAAe,AACf,gBAAkB,CACrB",file:"f_down.vue",sourcesContent:["\n#fDown {\n  background: white;\n}\n#fDown img {\n    display: block;\n}\n#fDown .down {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    font-size: .32rem;\n    width: 3rem;\n    height: .8rem;\n    background: #018BE6;\n    color: white;\n    text-align: center;\n    margin: 1rem auto 0;\n    border-radius: .4rem;\n    font-weight: bold;\n}\n#fDown .pop_ts .yd-mask {\n    /*background: transparent !important;*/\n}\n#fDown .pop_ts .yd-popup {\n    background: transparent;\n}\n#fDown .pop_ts .yd-popup-content {\n    background: rgba(255, 255, 255, 0.1);\n    background: transparent;\n}\n#fDown .ts_img_2 {\n    display: block;\n    margin: auto;\n    width: 6.37rem;\n    height: 3.28rem;\n}\n#fDown .down_notice {\n    color: red;\n    margin: .2rem;\n    text-align: center;\n    margin-bottom: 1rem;\n}\n#fDown .content {\n    padding: .2rem;\n}\n#fDown .content .title {\n      padding: .2rem 0;\n      font-size: .32rem;\n      font-weight: bold;\n}\n#fDown .content .fangfa {\n      font-size: .3rem;\n      font-weight: bold;\n      margin: .2rem;\n}\n#fDown .ts_img_3, #fDown .ts_img_4 {\n    width: 90%;\n    margin: auto;\n}\n#fDown p {\n    font-weight: bold;\n    padding: .2rem;\n    font-size: .26rem;\n}\n"],sourceRoot:""}])},njAA:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("yd-layout",{attrs:{id:"fDown"}},[i("a",{staticClass:"down",attrs:{href:t.downUrl,download:"download",target:"_blank"}},[t._v(t._s(t.weiXin?"在线预览":"下载"))]),t._v(" "),t.weiXin?i("div",{staticClass:"down_notice"},[t._v("***注:手机微信不支持下载，下载请使用浏览器打开。***")]):t._e(),t._v(" "),i("yd-popup",{staticClass:"pop_ts",attrs:{position:"bottom",height:"100%"},nativeOn:{click:function(n){return t.closeShow(n)}},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[i("img",{staticClass:"ts_img_2",attrs:{src:e("AGGX"),alt:""}})]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[t._v("浏览器下载操作方法：")]),t._v(" "),i("p",[t._v("点击下载按钮，打开pdf文件。")]),t._v(" "),t.weiXin?i("img",{staticClass:"ts_img_4",attrs:{src:e("A1zg"),alt:""}}):t._e(),t._v(" "),i("p",[t._v("第一步：")]),t._v(" "),i("img",{staticClass:"ts_img_4",attrs:{src:e("qu6V"),alt:""}}),t._v(" "),i("div",{staticClass:"fangfa"},[t._v("方法一(当pdf文件大小较小时)：")]),t._v(" "),i("img",{staticClass:"ts_img_4",attrs:{src:e("PbDL"),alt:""}}),t._v(" "),i("div",{staticClass:"fangfa"},[t._v("方法二(当pdf文件大小较大时)：")]),t._v(" "),i("img",{staticClass:"ts_img_4",attrs:{src:e("es4Z"),alt:""}}),t._v(" "),i("p",[t._v("存储文件,最后在手机中找到应用程序“文件”即可打开。")]),t._v(" "),i("img",{staticClass:"ts_img_4",attrs:{src:e("4KOb"),alt:""}})])],1)},o=[]},qu6V:function(t,n,e){t.exports=e.p+"static/img/wx_ts_6.e6afac0.png"}});
//# sourceMappingURL=41.b9c5bd01e22956935086.js.map