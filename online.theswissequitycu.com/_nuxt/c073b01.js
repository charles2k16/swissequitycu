(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{295:function(t,e,o){var content=o(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("7234478b",content,!0,{sourceMap:!1})},296:function(t,e,o){"use strict";o.r(e);o(297);var n=o(46),component=Object(n.a)({},(function(){return(0,this._self._c)("div",{staticClass:"loader"})}),[],!1,null,"118bf798",null);e.default=component.exports},297:function(t,e,o){"use strict";o(295)},298:function(t,e,o){var n=o(111)(!1);n.push([t.i,".loader[data-v-118bf798]{width:50px;padding:8px;aspect-ratio:1;border-radius:50%;background:#f0b6b2;--_m:conic-gradient(transparent 10%,#000),linear-gradient(#000,#000 0) content-box;--_m:conic-gradient(transparent 10%,#000),linear-gradient(#000 0 0) content-box;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;animation:l3-118bf798 1s linear infinite}@keyframes l3-118bf798{to{transform:rotate(1turn)}}",""]),t.exports=n},303:function(t,e,o){var content=o(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("620d2c00",content,!0,{sourceMap:!1})},308:function(t,e,o){"use strict";o(303)},309:function(t,e,o){var n=o(111)(!1);n.push([t.i,'.succes_p{color:green;text-align:center}.boxed{display:flex;width:150px;border:2px solid #ccc;padding:10px}.boxed span{font-size:11px}.activeclass{background-color:#931112;color:#fff}.wrapper a{display:inline-block;text-decoration:none;padding:15px;background-color:#fff;border-radius:3px;text-transform:uppercase;color:#585858;font-family:"Roboto",sans-serif}.modal_txt{visibility:hidden;opacity:0;position:absolute;top:-200px;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(77,77,77,.7);transition:all .4s}.modal_txt:target{visibility:visible;opacity:1}.modal_txt__content{border-radius:4px;position:relative;width:600px;max-width:90%;background:#fff;padding:1em 2em}.modal_txt__footer{text-align:right;a{color:#585858}i{color:#d02d2c}}.modal_txt__close{position:absolute;top:10px;right:10px;color:#585858;text-decoration:none}.auth-box-w form{padding:20px 20px 30px}',""]),t.exports=n},318:function(t,e,o){"use strict";o.r(e);o(39),o(31),o(47),o(205),o(81);var n={name:"ShowAccounts",data:function(){return{successEdit:!1,loading:!0,transaction:{date:"",description:"",reference:"",amount:"",status:"",balance:""},activeclass:"",accounts:[],accountsForm:{name:"",account_number:"",balance:"",available_balance:"",account_type:"Savings",reserved_funds:"16,175,000.00",minimum_balance:"0",pending_depts:"0",charges_and_fees:"0",user:"",transactions:[]}}},computed:{user:function(){return this.$store.state.clientUser}},created:function(){this.getAccounts()},methods:{getAccounts:function(){var t=this;this.loading=!0,this.$axios.get("/accounts/user/".concat(this.user._id)).then((function(e){t.accounts=e.data.data,t.accounts.length>0&&(t.accountsForm=t.accounts[0],t.activeclass=t.accounts[0]._id),t.loading=!1})).catch((function(){alert("An error occurred. Please try again.")}))},setActiveAccount:function(t){this.activeclass=t._id,this.accountsForm=t},deleteHistory:function(t){var e=this.accountsForm.transactions.indexOf(t);e>-1&&this.accountsForm.transactions.splice(e,1)},addAccountTransaction:function(){this.accountsForm.transactions.push(this.transaction)},editAccounts:function(){var t=this;this.loading=!0,this.$axios.put("/accounts/".concat(this.accountsForm._id),{name:this.accountsForm.name,account_number:this.accountsForm.account_number,balance:this.accountsForm.balance,available_balance:this.accountsForm.available_balance,account_type:this.accountsForm.account_type,reserved_funds:this.accountsForm.reserved_funds,minimum_balance:this.accountsForm.minimum_balance,pending_depts:this.accountsForm.pending_depts,charges_and_fees:this.accountsForm.charges_and_fees,transactions:this.accountsForm.transactions,user:this.user._id}).then((function(){t.getAccounts(),t.loading=!1,t.successEdit=!0,setTimeout((function(){t.successEdit=!1}),5e3)})).catch((function(e){t.loading=!1,console.log(e),alert("An error occurred editing accounts. Please try again.")}))},deleteAccount:function(){var t=this;this.loading=!0,this.$axios.delete("/accounts/".concat(this.accountsForm._id)).then((function(){t.getAccounts()})).catch((function(){alert("An error occurred. Please try again.")}))}}},c=(o(308),o(46)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{margin:"0 20px"}},[t.successEdit?e("p",{staticClass:"succes_p"},[t._v("Successfully Edited details")]):t._e(),t._v(" "),e("p",{staticStyle:{"font-size":"13px"}},[t._v("You have "+t._s(t.accounts.length)+" accounts")]),t._v(" "),t.accounts.length>0?e("div",{staticStyle:{display:"flex"}},t._l(t.accounts,(function(o,n){return e("div",{key:n,class:t.activeclass==o._id?"boxed activeclass":"boxed",on:{click:function(e){return t.setActiveAccount(o)}}},[e("span",[t._v(t._s(o.account_type))])])})),0):t._e()]),t._v(" "),t.loading?e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("Loader")],1):e("form",[e("p",{staticStyle:{"font-size":"13px"}},[t._v("\n      Edit Details for "+t._s(t.accountsForm.account_type)+" account\n    ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Account Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.name,expression:"accountsForm.name"}],staticClass:"form-control",attrs:{placeholder:"Enter account name ",name:"first",type:"text"},domProps:{value:t.accountsForm.name},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Account Number")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.account_number,expression:"accountsForm.account_number"}],staticClass:"form-control",attrs:{placeholder:"Enter account number",name:"phone",type:"text"},domProps:{value:t.accountsForm.account_number},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"account_number",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Account Type")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.account_type,expression:"accountsForm.account_type"}],staticClass:"form-control",attrs:{placeholder:"Savings / Current",name:"email",type:"text"},domProps:{value:t.accountsForm.account_type},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"account_type",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.balance,expression:"accountsForm.balance"}],staticClass:"form-control",attrs:{placeholder:"$5000",name:"password",type:"text"},domProps:{value:t.accountsForm.balance},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"balance",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Available Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.available_balance,expression:"accountsForm.available_balance"}],staticClass:"form-control",attrs:{placeholder:"$5000",type:"text"},domProps:{value:t.accountsForm.available_balance},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"available_balance",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Reserved Funds")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.reserved_funds,expression:"accountsForm.reserved_funds"}],staticClass:"form-control",attrs:{placeholder:"0.00",name:"email",type:"text"},domProps:{value:t.accountsForm.reserved_funds},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"reserved_funds",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Charges accrued")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.charges_and_fees,expression:"accountsForm.charges_and_fees"}],staticClass:"form-control",attrs:{placeholder:"0.00",name:"email",type:"text"},domProps:{value:t.accountsForm.charges_and_fees},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"charges_and_fees",e.target.value)}}})]),t._v(" "),e("div",[e("div",[e("p",{staticClass:"auth-header"},[t._v("Edit Accounts Transactions History")]),t._v(" "),t._l(t.accountsForm.transactions,(function(o){return e("div",{key:o},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Transaction Date")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.date,expression:"transaction.date"}],staticClass:"form-control",attrs:{placeholder:"Enter transaction date ",type:"date"},domProps:{value:o.date},on:{input:function(e){e.target.composing||t.$set(o,"date",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.description,expression:"transaction.description"}],staticClass:"form-control",attrs:{placeholder:"Enter description",type:"text"},domProps:{value:o.description},on:{input:function(e){e.target.composing||t.$set(o,"description",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Reference")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.reference,expression:"transaction.reference"}],staticClass:"form-control",attrs:{placeholder:"Enter reference",type:"text"},domProps:{value:o.reference},on:{input:function(e){e.target.composing||t.$set(o,"reference",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Amount")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.amount,expression:"transaction.amount"}],staticClass:"form-control",attrs:{placeholder:"Enter amount",type:"number"},domProps:{value:o.amount},on:{input:function(e){e.target.composing||t.$set(o,"amount",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Status")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.status,expression:"transaction.status"}],staticClass:"form-control",attrs:{placeholder:"Enter status",type:"text"},domProps:{value:o.status},on:{input:function(e){e.target.composing||t.$set(o,"status",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.balance,expression:"transaction.balance"}],staticClass:"form-control",attrs:{placeholder:"Enter balance",type:"number"},domProps:{value:o.balance},on:{input:function(e){e.target.composing||t.$set(o,"balance",e.target.value)}}})]),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"end","align-items":"center"}},[e("span",{staticClass:"btn btn-primary",on:{click:function(e){return t.deleteHistory(o)}}},[t._v("\n              Delete history\n            ")])])])})),t._v(" "),e("a",{attrs:{href:"#demo-modal"}},[t._v("Add more transactions")])],2)]),t._v(" "),e("div",{staticClass:"buttons-w"},[e("span",{staticClass:"btn btn-success",on:{click:t.editAccounts}},[t._v("\n        Save changes for "+t._s(t.accountsForm.account_type)+"\n      ")]),t._v(" "),t.accounts.length>0?e("span",{staticClass:"btn btn-danger",on:{click:t.deleteAccount}},[t._v("\n        Delete Account\n      ")]):t._e()])]),t._v(" "),e("div",{staticClass:"modal_txt",attrs:{id:"demo-modal"}},[e("div",{staticClass:"modal_txt__content"},[e("p",[t._v("Add transaction history")]),t._v(" "),e("div",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Transaction Date")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.date,expression:"transaction.date"}],staticClass:"form-control",attrs:{placeholder:"Enter transaction date ",type:"date"},domProps:{value:t.transaction.date},on:{input:function(e){e.target.composing||t.$set(t.transaction,"date",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.description,expression:"transaction.description"}],staticClass:"form-control",attrs:{placeholder:"Enter description",type:"text"},domProps:{value:t.transaction.description},on:{input:function(e){e.target.composing||t.$set(t.transaction,"description",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Reference")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.reference,expression:"transaction.reference"}],staticClass:"form-control",attrs:{placeholder:"Enter reference",type:"text"},domProps:{value:t.transaction.reference},on:{input:function(e){e.target.composing||t.$set(t.transaction,"reference",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Amount")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"}],staticClass:"form-control",attrs:{placeholder:"Enter amount",type:"number"},domProps:{value:t.transaction.amount},on:{input:function(e){e.target.composing||t.$set(t.transaction,"amount",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Status")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.status,expression:"transaction.status"}],staticClass:"form-control",attrs:{placeholder:"Enter status",type:"text"},domProps:{value:t.transaction.status},on:{input:function(e){e.target.composing||t.$set(t.transaction,"status",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.balance,expression:"transaction.balance"}],staticClass:"form-control",attrs:{placeholder:"Enter balance",type:"number"},domProps:{value:t.transaction.balance},on:{input:function(e){e.target.composing||t.$set(t.transaction,"balance",e.target.value)}}})]),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[e("span",{staticClass:"btn btn-primary",on:{click:t.addAccountTransaction}},[t._v("\n            Add Transactions\n          ")])])]),t._v(" "),e("a",{staticClass:"modal_txt__close",attrs:{href:"#"}},[t._v("×")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loader:o(296).default})}}]);