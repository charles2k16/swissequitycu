(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{432:function(t,e,o){var content=o(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(77).default)("7234478b",content,!0,{sourceMap:!1})},433:function(t,e,o){"use strict";o.r(e);o(434);var r=o(54),component=Object(r.a)({},(function(){return(0,this._self._c)("div",{staticClass:"loader"})}),[],!1,null,"118bf798",null);e.default=component.exports},434:function(t,e,o){"use strict";o(432)},435:function(t,e,o){var r=o(76)(!1);r.push([t.i,".loader[data-v-118bf798]{width:50px;padding:8px;aspect-ratio:1;border-radius:50%;background:#f0b6b2;--_m:conic-gradient(transparent 10%,#000),linear-gradient(#000,#000 0) content-box;--_m:conic-gradient(transparent 10%,#000),linear-gradient(#000 0 0) content-box;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;animation:l3-118bf798 1s linear infinite}@keyframes l3-118bf798{to{transform:rotate(1turn)}}",""]),t.exports=r},452:function(t,e,o){var content=o(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(77).default)("47f2923e",content,!0,{sourceMap:!1})},462:function(t,e,o){"use strict";o(452)},463:function(t,e,o){var r=o(76)(!1);r.push([t.i,".auth-box-w .logo-w[data-v-d78976ee]{padding:5%!important;background-color:#85090a;height:130px;margin-bottom:20px}.all-wrapper .fc-button.fc-state-active[data-v-d78976ee],.btn-primary[data-v-d78976ee]{color:#fff;background-color:#a93f36;border-color:#c04242}",""]),t.exports=r},499:function(t,e,o){"use strict";o.r(e);o(98);var r={name:"IndexPage",data:function(){return{loading:!1,otp:""}},methods:{verify:function(){var t=this;this.loading=!0,this.$axios.post("/otp/verify-otp",{email:this.$route.query.email,otp:this.otp}).then((function(e){t.$store.commit("setAuth",!0),t.$store.commit("setUser",e.data.user),setTimeout((function(){t.loading=!1,t.$router.push("/account/main")}),5e3)})).catch((function(){t.loading=!1,alert("Invalid opt credentials. Please try again.")}))}}},n=(o(462),o(54)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"all-wrapper menu-side with-pattern"},[e("div",{staticClass:"auth-box-w"},[t._m(0),t._v(" "),e("h4",{staticClass:"auth-header"},[t._v("Verify OTP to continue")]),t._v(" "),t.loading?e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("Loader")],1):e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Enter 6 Digits otp sent to email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.otp,expression:"otp"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Enter your otp"},domProps:{value:t.otp},on:{input:function(e){e.target.composing||(t.otp=e.target.value)}}}),t._v(" "),e("div",{staticClass:"pre-icon os-icon os-icon-user-male-circle"})]),t._v(" "),e("div",{staticClass:"buttons-w"},[e("span",{staticClass:"btn btn-primary",on:{click:t.verify}},[t._v(" Verify ")])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"logo-w"},[t("a",{attrs:{href:"../"}},[t("img",{attrs:{alt:"",width:"150px",src:"/images/logo_swiss.png"}})])])}],!1,null,"d78976ee",null);e.default=component.exports;installComponents(component,{Loader:o(433).default})}}]);