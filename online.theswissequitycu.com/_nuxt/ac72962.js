(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,5,6],{295:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("7234478b",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n.r(e);n(297);var o=n(46),component=Object(o.a)({},(function(){return(0,this._self._c)("div",{staticClass:"loader"})}),[],!1,null,"118bf798",null);e.default=component.exports},297:function(t,e,n){"use strict";n(295)},298:function(t,e,n){var o=n(111)(!1);o.push([t.i,".loader[data-v-118bf798]{width:50px;padding:8px;aspect-ratio:1;border-radius:50%;background:#f0b6b2;--_m:conic-gradient(transparent 10%,#000),linear-gradient(#000,#000 0) content-box;--_m:conic-gradient(transparent 10%,#000),linear-gradient(#000 0 0) content-box;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;animation:l3-118bf798 1s linear infinite}@keyframes l3-118bf798{to{transform:rotate(1turn)}}",""]),t.exports=o},302:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("526cff0e",content,!0,{sourceMap:!1})},303:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("620d2c00",content,!0,{sourceMap:!1})},304:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("451e7dd7",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n(302)},307:function(t,e,n){var o=n(111)(!1);o.push([t.i,'.wrapper a[data-v-006355f5]{display:inline-block;text-decoration:none;padding:15px;background-color:#fff;border-radius:3px;text-transform:uppercase;color:#585858;font-family:"Roboto",sans-serif}.modal_txt[data-v-006355f5]{visibility:hidden;opacity:0;position:absolute;top:-300px;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(77,77,77,.7);transition:all .4s}.modal_txt[data-v-006355f5]:target{visibility:visible;opacity:1}.modal_txt__content[data-v-006355f5]{border-radius:4px;position:relative;width:600px;max-width:90%;background:#fff;padding:1em 2em}.modal_txt__footer[data-v-006355f5]{text-align:right;a[data-v-006355f5]{color:#585858}i[data-v-006355f5]{color:#d02d2c}}.modal_txt__close[data-v-006355f5]{position:absolute;top:10px;right:10px;color:#585858;text-decoration:none}table[data-v-006355f5]{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd}td[data-v-006355f5],th[data-v-006355f5]{text-align:left;padding:8px;font-size:11px}tr[data-v-006355f5]:nth-child(2n){background-color:#f2f2f2}',""]),t.exports=o},308:function(t,e,n){"use strict";n(303)},309:function(t,e,n){var o=n(111)(!1);o.push([t.i,'.succes_p{color:green;text-align:center}.boxed{display:flex;width:150px;border:2px solid #ccc;padding:10px}.boxed span{font-size:11px}.activeclass{background-color:#931112;color:#fff}.wrapper a{display:inline-block;text-decoration:none;padding:15px;background-color:#fff;border-radius:3px;text-transform:uppercase;color:#585858;font-family:"Roboto",sans-serif}.modal_txt{visibility:hidden;opacity:0;position:absolute;top:-200px;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(77,77,77,.7);transition:all .4s}.modal_txt:target{visibility:visible;opacity:1}.modal_txt__content{border-radius:4px;position:relative;width:600px;max-width:90%;background:#fff;padding:1em 2em}.modal_txt__footer{text-align:right;a{color:#585858}i{color:#d02d2c}}.modal_txt__close{position:absolute;top:10px;right:10px;color:#585858;text-decoration:none}.auth-box-w form{padding:20px 20px 30px}',""]),t.exports=o},310:function(t,e,n){"use strict";n(304)},311:function(t,e,n){var o=n(111)(!1);o.push([t.i,".succes_p{color:green;text-align:center}",""]),t.exports=o},314:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("4f9c340e",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n.r(e);n(39),n(31),n(47);var o={name:"NewAccounts",data:function(){return{loading:!1,showEditUser:!1,allAccounts:!1,newAccount:!0,transaction:{date:"",description:"",amount:"",balance:"",status:"",reference:""},accounts:{name:"",account_number:"",balance:"",available_balance:"",account_type:"Savings",reserved_funds:"0",charges_and_fees:"0",minimum_balance:"0",pending_depts:"0",user:".",transactions:[]}}},computed:{user:function(){return this.$store.state.clientUser}},methods:{addAccount:function(){var t=this;this.loading=!0,this.accounts.user=this.user._id,this.$axios.post("/accounts",this.accounts).then((function(e){console.log(e),t.loading=!1})).catch((function(t){console.log(t)}))},addAccountTransaction:function(){this.accounts.transactions.push(this.transaction),console.log(this.user._id),console.log(this.accounts.transactions)}}},c=(n(306),n(46)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{margin:"0 10px"}},[e("p",{staticStyle:{"font-size":"13px"}},[t._v("Create New Bank Account")]),t._v(" "),t.loading?e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("Loader")],1):e("form",[e("div",{staticClass:"form-group"},[e("label",[t._v("Account Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accounts.name,expression:"accounts.name"}],staticClass:"form-control",attrs:{placeholder:"Enter account name ",name:"first",type:"text"},domProps:{value:t.accounts.name},on:{input:function(e){e.target.composing||t.$set(t.accounts,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Account Number")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accounts.account_number,expression:"accounts.account_number"}],staticClass:"form-control",attrs:{placeholder:"Enter account number",name:"phone",type:"text"},domProps:{value:t.accounts.account_number},on:{input:function(e){e.target.composing||t.$set(t.accounts,"account_number",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Account Type")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accounts.account_type,expression:"accounts.account_type"}],staticClass:"form-control",attrs:{placeholder:"Savings / Current",name:"email",type:"text"},domProps:{value:t.accounts.account_type},on:{input:function(e){e.target.composing||t.$set(t.accounts,"account_type",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accounts.balance,expression:"accounts.balance"}],staticClass:"form-control",attrs:{placeholder:"$5000",name:"password",type:"text"},domProps:{value:t.accounts.balance},on:{input:function(e){e.target.composing||t.$set(t.accounts,"balance",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Available Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accounts.available_balance,expression:"accounts.available_balance"}],staticClass:"form-control",attrs:{placeholder:"$5000",type:"number"},domProps:{value:t.accounts.available_balance},on:{input:function(e){e.target.composing||t.$set(t.accounts,"available_balance",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Reserved Funds")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accounts.reserved_funds,expression:"accounts.reserved_funds"}],staticClass:"form-control",attrs:{placeholder:"0.00",name:"email",type:"text"},domProps:{value:t.accounts.reserved_funds},on:{input:function(e){e.target.composing||t.$set(t.accounts,"reserved_funds",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Charges accrued")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accounts.charges_and_fees,expression:"accounts.charges_and_fees"}],staticClass:"form-control",attrs:{placeholder:"0.00",name:"email",type:"text"},domProps:{value:t.accounts.charges_and_fees},on:{input:function(e){e.target.composing||t.$set(t.accounts,"charges_and_fees",e.target.value)}}})]),t._v(" "),e("br"),t._v(" "),e("div",[e("p",{staticClass:"auth-header"},[t._v("Add Accounts Transactions History")]),t._v(" "),e("div",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Transaction Date")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.date,expression:"transaction.date"}],staticClass:"form-control",attrs:{placeholder:"Enter transaction date ",type:"date"},domProps:{value:t.transaction.date},on:{input:function(e){e.target.composing||t.$set(t.transaction,"date",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.description,expression:"transaction.description"}],staticClass:"form-control",attrs:{placeholder:"Enter description",type:"text"},domProps:{value:t.transaction.description},on:{input:function(e){e.target.composing||t.$set(t.transaction,"description",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Reference")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.reference,expression:"transaction.reference"}],staticClass:"form-control",attrs:{placeholder:"Enter reference",type:"text"},domProps:{value:t.transaction.reference},on:{input:function(e){e.target.composing||t.$set(t.transaction,"reference",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Amount")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"}],staticClass:"form-control",attrs:{placeholder:"Enter amount",type:"number"},domProps:{value:t.transaction.amount},on:{input:function(e){e.target.composing||t.$set(t.transaction,"amount",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Status")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.status,expression:"transaction.status"}],staticClass:"form-control",attrs:{placeholder:"Enter status",type:"text"},domProps:{value:t.transaction.status},on:{input:function(e){e.target.composing||t.$set(t.transaction,"status",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.balance,expression:"transaction.balance"}],staticClass:"form-control",attrs:{placeholder:"Enter balance",type:"number"},domProps:{value:t.transaction.balance},on:{input:function(e){e.target.composing||t.$set(t.transaction,"balance",e.target.value)}}})]),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[e("a",{attrs:{href:"#demo-modal"}},[t._v("You've added "+t._s(t.accounts.transactions.length)+" transactions")]),t._v(" "),e("span",{staticClass:"btn btn-primary",on:{click:t.addAccountTransaction}},[t._v("\n            Add Transactions\n          ")])])])]),t._v(" "),e("div",{staticClass:"buttons-w"},[e("span",{staticClass:"btn btn-success",on:{click:t.addAccount}},[t._v("\n        Add new account\n      ")])]),t._v(" "),e("div",{staticClass:"modal_txt",attrs:{id:"demo-modal"}},[e("div",{staticClass:"modal_txt__content"},[e("p",[t._v("\n          You've added "+t._s(t.accounts.transactions.length)+" transaction history\n        ")]),t._v(" "),t.accounts.transactions.length>0?e("div",{staticStyle:{"overflow-x":"auto"}},[e("table",[t._m(0),t._v(" "),t._l(t.accounts.transactions,(function(n,o){return e("tr",{key:o},[e("td",[t._v(t._s(n.date))]),t._v(" "),e("td",[t._v(t._s(n.description))]),t._v(" "),e("td",[t._v(t._s(n.reference))]),t._v(" "),e("td",[t._v(t._s(n.status))]),t._v(" "),e("td",[t._v(t._s(n.amount))]),t._v(" "),e("td",[t._v(t._s(n.balance))])])}))],2)]):t._e(),t._v(" "),e("a",{staticClass:"modal_txt__close",attrs:{href:"#"}},[t._v("×")])])])])])}),[function(){var t=this,e=t._self._c;return e("tr",[e("th",[t._v("Date")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Reference")]),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Amount")]),t._v(" "),e("th",[t._v("Balance")])])}],!1,null,"006355f5",null);e.default=component.exports;installComponents(component,{Loader:n(296).default})},318:function(t,e,n){"use strict";n.r(e);n(39),n(31),n(47),n(205),n(81);var o={name:"ShowAccounts",data:function(){return{successEdit:!1,loading:!0,transaction:{date:"",description:"",reference:"",amount:"",status:"",balance:""},activeclass:"",accounts:[],accountsForm:{name:"",account_number:"",balance:"",available_balance:"",account_type:"Savings",reserved_funds:"16,175,000.00",minimum_balance:"0",pending_depts:"0",charges_and_fees:"0",user:"",transactions:[]}}},computed:{user:function(){return this.$store.state.clientUser}},created:function(){this.getAccounts()},methods:{getAccounts:function(){var t=this;this.loading=!0,this.$axios.get("/accounts/user/".concat(this.user._id)).then((function(e){t.accounts=e.data.data,t.accounts.length>0&&(t.accountsForm=t.accounts[0],t.activeclass=t.accounts[0]._id),t.loading=!1})).catch((function(){alert("An error occurred. Please try again.")}))},setActiveAccount:function(t){this.activeclass=t._id,this.accountsForm=t},deleteHistory:function(t){var e=this.accountsForm.transactions.indexOf(t);e>-1&&this.accountsForm.transactions.splice(e,1)},addAccountTransaction:function(){this.accountsForm.transactions.push(this.transaction)},editAccounts:function(){var t=this;this.loading=!0,this.$axios.put("/accounts/".concat(this.accountsForm._id),{name:this.accountsForm.name,account_number:this.accountsForm.account_number,balance:this.accountsForm.balance,available_balance:this.accountsForm.available_balance,account_type:this.accountsForm.account_type,reserved_funds:this.accountsForm.reserved_funds,minimum_balance:this.accountsForm.minimum_balance,pending_depts:this.accountsForm.pending_depts,charges_and_fees:this.accountsForm.charges_and_fees,transactions:this.accountsForm.transactions,user:this.user._id}).then((function(){t.getAccounts(),t.loading=!1,t.successEdit=!0,setTimeout((function(){t.successEdit=!1}),5e3)})).catch((function(e){t.loading=!1,console.log(e),alert("An error occurred editing accounts. Please try again.")}))},deleteAccount:function(){var t=this;this.loading=!0,this.$axios.delete("/accounts/".concat(this.accountsForm._id)).then((function(){t.getAccounts()})).catch((function(){alert("An error occurred. Please try again.")}))}}},c=(n(308),n(46)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{margin:"0 20px"}},[t.successEdit?e("p",{staticClass:"succes_p"},[t._v("Successfully Edited details")]):t._e(),t._v(" "),e("p",{staticStyle:{"font-size":"13px"}},[t._v("You have "+t._s(t.accounts.length)+" accounts")]),t._v(" "),t.accounts.length>0?e("div",{staticStyle:{display:"flex"}},t._l(t.accounts,(function(n,o){return e("div",{key:o,class:t.activeclass==n._id?"boxed activeclass":"boxed",on:{click:function(e){return t.setActiveAccount(n)}}},[e("span",[t._v(t._s(n.account_type))])])})),0):t._e()]),t._v(" "),t.loading?e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("Loader")],1):e("form",[e("p",{staticStyle:{"font-size":"13px"}},[t._v("\n      Edit Details for "+t._s(t.accountsForm.account_type)+" account\n    ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Account Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.name,expression:"accountsForm.name"}],staticClass:"form-control",attrs:{placeholder:"Enter account name ",name:"first",type:"text"},domProps:{value:t.accountsForm.name},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Account Number")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.account_number,expression:"accountsForm.account_number"}],staticClass:"form-control",attrs:{placeholder:"Enter account number",name:"phone",type:"text"},domProps:{value:t.accountsForm.account_number},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"account_number",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Account Type")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.account_type,expression:"accountsForm.account_type"}],staticClass:"form-control",attrs:{placeholder:"Savings / Current",name:"email",type:"text"},domProps:{value:t.accountsForm.account_type},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"account_type",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.balance,expression:"accountsForm.balance"}],staticClass:"form-control",attrs:{placeholder:"$5000",name:"password",type:"text"},domProps:{value:t.accountsForm.balance},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"balance",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Available Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.available_balance,expression:"accountsForm.available_balance"}],staticClass:"form-control",attrs:{placeholder:"$5000",type:"text"},domProps:{value:t.accountsForm.available_balance},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"available_balance",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Reserved Funds")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.reserved_funds,expression:"accountsForm.reserved_funds"}],staticClass:"form-control",attrs:{placeholder:"0.00",name:"email",type:"text"},domProps:{value:t.accountsForm.reserved_funds},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"reserved_funds",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(" Charges accrued")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountsForm.charges_and_fees,expression:"accountsForm.charges_and_fees"}],staticClass:"form-control",attrs:{placeholder:"0.00",name:"email",type:"text"},domProps:{value:t.accountsForm.charges_and_fees},on:{input:function(e){e.target.composing||t.$set(t.accountsForm,"charges_and_fees",e.target.value)}}})]),t._v(" "),e("div",[e("div",[e("p",{staticClass:"auth-header"},[t._v("Edit Accounts Transactions History")]),t._v(" "),t._l(t.accountsForm.transactions,(function(n){return e("div",{key:n},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Transaction Date")]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.date,expression:"transaction.date"}],staticClass:"form-control",attrs:{placeholder:"Enter transaction date ",type:"date"},domProps:{value:n.date},on:{input:function(e){e.target.composing||t.$set(n,"date",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.description,expression:"transaction.description"}],staticClass:"form-control",attrs:{placeholder:"Enter description",type:"text"},domProps:{value:n.description},on:{input:function(e){e.target.composing||t.$set(n,"description",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Reference")]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.reference,expression:"transaction.reference"}],staticClass:"form-control",attrs:{placeholder:"Enter reference",type:"text"},domProps:{value:n.reference},on:{input:function(e){e.target.composing||t.$set(n,"reference",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Amount")]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.amount,expression:"transaction.amount"}],staticClass:"form-control",attrs:{placeholder:"Enter amount",type:"number"},domProps:{value:n.amount},on:{input:function(e){e.target.composing||t.$set(n,"amount",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Status")]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.status,expression:"transaction.status"}],staticClass:"form-control",attrs:{placeholder:"Enter status",type:"text"},domProps:{value:n.status},on:{input:function(e){e.target.composing||t.$set(n,"status",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.balance,expression:"transaction.balance"}],staticClass:"form-control",attrs:{placeholder:"Enter balance",type:"number"},domProps:{value:n.balance},on:{input:function(e){e.target.composing||t.$set(n,"balance",e.target.value)}}})]),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"end","align-items":"center"}},[e("span",{staticClass:"btn btn-primary",on:{click:function(e){return t.deleteHistory(n)}}},[t._v("\n              Delete history\n            ")])])])})),t._v(" "),e("a",{attrs:{href:"#demo-modal"}},[t._v("Add more transactions")])],2)]),t._v(" "),e("div",{staticClass:"buttons-w"},[e("span",{staticClass:"btn btn-success",on:{click:t.editAccounts}},[t._v("\n        Save changes for "+t._s(t.accountsForm.account_type)+"\n      ")]),t._v(" "),t.accounts.length>0?e("span",{staticClass:"btn btn-danger",on:{click:t.deleteAccount}},[t._v("\n        Delete Account\n      ")]):t._e()])]),t._v(" "),e("div",{staticClass:"modal_txt",attrs:{id:"demo-modal"}},[e("div",{staticClass:"modal_txt__content"},[e("p",[t._v("Add transaction history")]),t._v(" "),e("div",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Transaction Date")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.date,expression:"transaction.date"}],staticClass:"form-control",attrs:{placeholder:"Enter transaction date ",type:"date"},domProps:{value:t.transaction.date},on:{input:function(e){e.target.composing||t.$set(t.transaction,"date",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.description,expression:"transaction.description"}],staticClass:"form-control",attrs:{placeholder:"Enter description",type:"text"},domProps:{value:t.transaction.description},on:{input:function(e){e.target.composing||t.$set(t.transaction,"description",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Reference")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.reference,expression:"transaction.reference"}],staticClass:"form-control",attrs:{placeholder:"Enter reference",type:"text"},domProps:{value:t.transaction.reference},on:{input:function(e){e.target.composing||t.$set(t.transaction,"reference",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Amount")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"}],staticClass:"form-control",attrs:{placeholder:"Enter amount",type:"number"},domProps:{value:t.transaction.amount},on:{input:function(e){e.target.composing||t.$set(t.transaction,"amount",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Status")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.status,expression:"transaction.status"}],staticClass:"form-control",attrs:{placeholder:"Enter status",type:"text"},domProps:{value:t.transaction.status},on:{input:function(e){e.target.composing||t.$set(t.transaction,"status",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Balance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.balance,expression:"transaction.balance"}],staticClass:"form-control",attrs:{placeholder:"Enter balance",type:"number"},domProps:{value:t.transaction.balance},on:{input:function(e){e.target.composing||t.$set(t.transaction,"balance",e.target.value)}}})]),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[e("span",{staticClass:"btn btn-primary",on:{click:t.addAccountTransaction}},[t._v("\n            Add Transactions\n          ")])])]),t._v(" "),e("a",{staticClass:"modal_txt__close",attrs:{href:"#"}},[t._v("×")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loader:n(296).default})},319:function(t,e,n){"use strict";n.r(e);n(39);var o=n(12),c=(n(64),{name:"ShowUser",data:function(){return{loading:!1,successEdit:!1,editUser:{}}},computed:{user:function(){return this.$store.state.clientUser}},created:function(){this.getUser()},methods:{getUser:function(){var t=this;this.loading=!0,this.$axios.get("/users/".concat(this.user._id)).then((function(e){t.loading=!1,t.editUser=e.data.data})).catch((function(t){console.log(t)}))},updateUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.put("/users/".concat(t.editUser._id),{email:t.editUser.email,passcode:t.editUser.passcode,name:t.editUser.name});case 4:t.loading=!1,t.successEdit=!0,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.loading=!1,alert("Invalid credentials. Please try again.");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}}),r=(n(310),n(46)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.successEdit?e("p",{staticClass:"succes_p"},[t._v("Succefully Edited user")]):t._e(),t._v(" "),t.loading?e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("Loader")],1):e("form",[e("p",[t._v("Edit user details")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("User Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editUser.name,expression:"editUser.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:t.editUser.name},on:{input:function(e){e.target.composing||t.$set(t.editUser,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Email Address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editUser.email,expression:"editUser.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Enter your email address"},domProps:{value:t.editUser.email},on:{input:function(e){e.target.composing||t.$set(t.editUser,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"åform-group"},[e("label",{attrs:{for:""}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editUser.passcode,expression:"editUser.passcode"}],staticClass:"form-control",attrs:{name:"password",placeholder:"Enter your password",type:"password"},domProps:{value:t.editUser.passcode},on:{input:function(e){e.target.composing||t.$set(t.editUser,"passcode",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"buttons-w"},[e("button",{staticClass:"btn btn-primary",attrs:{name:"login"},on:{click:t.updateUser}},[t._v("\n        Update User details\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loader:n(296).default})},324:function(t,e,n){"use strict";n(314)},325:function(t,e,n){var o=n(111)(!1);o.push([t.i,".auth-header[data-v-d01c220c]{font-size:13px!important}.auth-box-w.wider[data-v-d01c220c]{max-width:575px!important}.auth-box-w .logo-w[data-v-d01c220c]{padding:5%!important;background-color:#85090a;height:130px;margin-bottom:20px}.acc_p[data-v-d01c220c]{font-size:13px;text-align:center;margin-top:20px;cursor:pointer;color:#faebd7}",""]),t.exports=o},332:function(t,e,n){"use strict";n.r(e);var o={name:"RegisterPage",data:function(){return{showEditUser:!1,allAccounts:!1,newAccount:!0}},computed:{authenticated:function(){return this.$store.state.authIn},user:function(){return this.$store.state.clientUser}},mounted:function(){this.authenticated||this.$router.push("/")},methods:{openUser:function(){this.showEditUser=!0,this.allAccounts=!1,this.newAccount=!1},openNewAccount:function(){this.showEditUser=!1,this.allAccounts=!1,this.newAccount=!0},openAllAccount:function(){this.allAccounts=!0,this.showEditUser=!1,this.newAccount=!1}}},c=(n(324),n(46)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"all-wrapper menu-side with-pattern"},[e("div",{staticClass:"auth-box-w wider"},[e("div",{staticClass:"logo-w"},[t._m(0),t._v(" "),e("p",{staticClass:"acc_p",on:{click:function(e){return t.$router.push("/account/main")}}},[t._v("\n        Click to see account page\n      ")])]),t._v(" "),e("div",{staticStyle:{display:"flex",cursor:"pointer"}},[e("h4",{staticClass:"auth-header",on:{click:t.openNewAccount}},[t._v("New accounts")]),t._v(" "),e("h4",{staticClass:"auth-header",on:{click:t.openAllAccount}},[t._v("Edit Accounts")]),t._v(" "),e("h4",{staticClass:"auth-header",on:{click:t.openUser}},[t._v("User")])]),t._v(" "),t.newAccount?e("div",[e("NewAccounts")],1):t._e(),t._v(" "),t.allAccounts?e("div",[e("ShowAccounts")],1):t._e(),t._v(" "),t.showEditUser?e("div",[e("ShowUser")],1):t._e()])])}),[function(){var t=this._self._c;return t("a",{attrs:{href:"../"}},[t("img",{attrs:{alt:"",width:"150px",src:"/images/logo_swiss.png"}})])}],!1,null,"d01c220c",null);e.default=component.exports;installComponents(component,{NewAccounts:n(317).default,ShowAccounts:n(318).default,ShowUser:n(319).default})}}]);