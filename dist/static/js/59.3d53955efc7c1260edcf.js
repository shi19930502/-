webpackJsonp([59],{"/DOY":function(t,i,s){i=t.exports=s("FZ+f")(!0),i.push([t.i,"#fInformation .list_img_f{margin-top:.2rem;background:#fff;padding-left:.24rem}#fInformation .list_img_f .list_img{border-bottom:1px solid #d6d6d6;padding:.2rem 0 .1rem}#fInformation .list_img_f .list_img .list_img_title{color:#555;font-weight:700;font-size:.28rem}#fInformation .list_img_f .list_img .list_img_no{margin:.1rem .2rem}#fInformation .list_img_f .list_img img{display:block;max-width:6rem;margin:.2rem auto;max-height:8rem}#fInformation .list_img_f .list_img .user_img{width:1rem;height:1rem;border-radius:50%;border:1px solid #d6d6d6}#fInformation .list_img_f .list_img:last-child{border-bottom:none}#fInformation .list_span{text-align:right;width:100%;color:#848484;font-weight:700}","",{version:3,sources:["D:/Web/银川电子结算new/北环/前端/微信快捷下单/src/views/firstGYS/f_information.vue"],names:[],mappings:"AACA,0BACE,iBAAkB,AAClB,gBAAkB,AAClB,mBAAqB,CACtB,AACD,oCACI,gCAAiC,AACjC,qBAAyB,CAC5B,AACD,oDACM,WAAe,AACf,gBAAkB,AAClB,gBAAkB,CACvB,AACD,iDACM,kBAAqB,CAC1B,AACD,wCACM,cAAe,AACf,eAAgB,AAChB,kBAAyB,AACzB,eAAiB,CACtB,AACD,8CACM,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,wBAA0B,CAC/B,AACD,+CACM,kBAAoB,CACzB,AACD,yBACE,iBAAkB,AAClB,WAAY,AACZ,cAAe,AACf,eAAkB,CACnB",file:"f_information.vue",sourcesContent:["\n#fInformation .list_img_f {\n  margin-top: .2rem;\n  background: white;\n  padding-left: .24rem;\n}\n#fInformation .list_img_f .list_img {\n    border-bottom: 1px solid #D6D6D6;\n    padding: .2rem 0 .1rem 0;\n}\n#fInformation .list_img_f .list_img .list_img_title {\n      color: #555555;\n      font-weight: bold;\n      font-size: .28rem;\n}\n#fInformation .list_img_f .list_img .list_img_no {\n      margin: .1rem  .2rem;\n}\n#fInformation .list_img_f .list_img img {\n      display: block;\n      max-width: 6rem;\n      margin: .2rem auto .2rem;\n      max-height: 8rem;\n}\n#fInformation .list_img_f .list_img .user_img {\n      width: 1rem;\n      height: 1rem;\n      border-radius: 50%;\n      border: 1px solid #D6D6D6;\n}\n#fInformation .list_img_f .list_img:last-child {\n      border-bottom: none;\n}\n#fInformation .list_span {\n  text-align: right;\n  width: 100%;\n  color: #848484;\n  font-weight: bold;\n}\n"],sourceRoot:""}])},"9wEm":function(t,i,s){var a=s("/DOY");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var l=s("rjj0").default;l("2cf1547b",a,!0,{})},H7vC:function(t,i,s){"use strict";var a=s("woOf"),l=s.n(a);i.a={data:function(){return{form:{},userImg:""}},created:function(){this.$store.dispatch("changeNavBarTitle","基本信息")},watch:{},computed:{},mounted:function(){this.init()},methods:{init:function(){var t=this;this.postRequest("customer/list",{id:this.$root.userInfo.typeCode}).then(function(i){0==i.data.state&&(t.form=l()({},t.form,i.data.aaData[0]))}),this.postRequest("/user/user/list",{id:this.$root.userInfo.userId}).then(function(i){0==i.data.state&&(t.userImg=i.data.aaData[0].filePath)})}}}},NCj0:function(t,i,s){"use strict";function a(t){s("9wEm")}Object.defineProperty(i,"__esModule",{value:!0});var l=s("H7vC"),o=s("uG6s"),r=s("XyMi"),e=a,n=Object(r.a)(l.a,o.a,o.b,!1,e,null,null);i.default=n.exports},uG6s:function(t,i,s){"use strict";s.d(i,"a",function(){return a}),s.d(i,"b",function(){return l});var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("yd-layout",{attrs:{id:"fInformation"}},[s("div",{staticClass:"header",attrs:{slot:"top"},slot:"top"},[s("div",["merchant"==t.$root.userInfo.typeId?s("a",{staticClass:"header_left",staticStyle:{width:"1.7rem"},attrs:{href:"#/f_mine"}},[t._v("个人中心")]):s("div")]),t._v(" "),s("div",{staticClass:"name"},[t._v("基本信息")]),t._v(" "),s("div",["merchant"==t.$root.userInfo.typeId?s("a",{attrs:{href:"#f_information_edit"}},[t._v("编辑")]):s("div")])]),t._v(" "),s("div",{staticClass:"list"},[s("yd-cell-group",[s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"lable"},[s("strong",[t._v("备案用户ID")])])]),t._v(" "),s("span",{staticClass:"list_span",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.form.customerId))])]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"lable"},[s("strong",[t._v("邀请码")])])]),t._v(" "),s("span",{staticClass:"list_span",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.form.code))])]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"lable"},[s("strong",[t._v("昵称")])])]),t._v(" "),s("span",{staticClass:"list_span",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.form.customerName))])]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"lable"},[s("strong",[t._v("证件号码")])])]),t._v(" "),s("span",{staticClass:"list_span",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.form.regId))])]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"lable"},[s("strong",[t._v("地址")])])]),t._v(" "),s("span",{staticClass:"list_span",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.form.address))])]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"lable"},[s("strong",[t._v("联系电话")])])]),t._v(" "),s("span",{staticClass:"list_span",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.form.tel))])]),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"lable"},[s("strong",[t._v("备注")])])]),t._v(" "),s("span",{staticClass:"list_span",staticStyle:{padding:".2rem 0"},attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.form.remark))])])],1),t._v(" "),s("div",{staticClass:"list_img_f"},[s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v("用户头像")]),t._v(" "),t.userImg?[s("img",{staticClass:"user_img",attrs:{src:t.$root.config.imgURL+t.userImg,alt:""}})]:s("div",{staticClass:"list_img_no"},[t._v("暂未上传")])],2),t._v(" "),s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v("收款二维码")]),t._v(" "),t.form.wxcodePic?[s("img",{attrs:{src:t.$root.config.imgURL+t.form.wxcodePic,alt:""}})]:s("div",{staticClass:"list_img_no"},[t._v("暂未上传")])],2),t._v(" "),s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v(t._s("2"==t.form.property?"市场证明":"营业执照"))]),t._v(" "),t.form.businessLicensePic?[s("img",{attrs:{src:t.$root.config.imgURL+t.form.businessLicensePic,alt:""}})]:s("div",{staticClass:"list_img_no"},[t._v("暂未上传")])],2),t._v(" "),s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v("食品许可证")]),t._v(" "),t.form.foodLicensePic?[s("img",{attrs:{src:t.$root.config.imgURL+t.form.foodLicensePic,alt:""}})]:s("div",{staticClass:"list_img_no"},[t._v("暂未上传")])],2),t._v(" "),t.form.muslimfoodPermitPic?s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v("清真食品图片")]),t._v(" "),[s("img",{attrs:{src:t.$root.config.imgURL+t.form.muslimfoodPermitPic,alt:""}})]],2):t._e(),t._v(" "),s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v("法人照片")]),t._v(" "),t.form.legalpepresentPic?[s("img",{attrs:{src:t.$root.config.imgURL+t.form.legalpepresentPic,alt:""}})]:s("div",{staticClass:"list_img_no"},[t._v("暂未上传")])],2),t._v(" "),"004"==t.$root.userInfo.extend?s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v("门头照片")]),t._v(" "),t.form.storePic?[s("img",{attrs:{src:t.$root.config.imgURL+t.form.storePic,alt:""}})]:s("div",{staticClass:"list_img_no"},[t._v("暂未上传")])],2):t._e(),t._v(" "),s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v("身份证正面")]),t._v(" "),t.form.idCard?[s("img",{attrs:{src:t.$root.config.imgURL+t.form.idCard.split(";")[0],alt:""}})]:s("div",{staticClass:"list_img_no"},[t._v("暂未上传")])],2),t._v(" "),s("div",{staticClass:"list_img"},[s("div",{staticClass:"list_img_title"},[t._v("身份证反面")]),t._v(" "),t.form.idCard?[s("img",{attrs:{src:t.$root.config.imgURL+t.form.idCard.split(";")[1],alt:""}})]:s("div",{staticClass:"list_img_no"},[t._v("暂未上传")])],2)])],1)])},l=[]}});
//# sourceMappingURL=59.3d53955efc7c1260edcf.js.map