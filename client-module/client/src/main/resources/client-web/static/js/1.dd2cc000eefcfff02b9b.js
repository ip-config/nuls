webpackJsonp([1],{"1J5t":function(t,e,s){s("Gquc"),s("IsPG"),s("A1pn"),s("oltR"),s("V7Pz"),s("DG01"),s("toDE"),t.exports=s("AKd3").Set},"27tL":function(t,e,s){var n=s("8Nvm");t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},"4HpA":function(t,e,s){"use strict";var n=s("C02x"),r=s("FITv"),o=s("DVkV"),a=s("BRDz"),i=s("bHZz"),c=s("bodH"),u=s("k/7E"),l=s("t8DS"),d=s("8Nvm"),f=s("XAI7"),h=s("lIiZ").f,p=s("A+MN")(0),g=s("sjnA");t.exports=function(t,e,s,v,m,w){var _=n[t],A=_,$=m?"set":"add",k=A&&A.prototype,y={};return g&&"function"==typeof A&&(w||k.forEach&&!a(function(){(new A).entries().next()}))?(A=e(function(e,s){l(e,A,t,"_c"),e._c=new _,void 0!=s&&u(s,m,e[$],e)}),p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in k&&(!w||"clear"!=t)&&i(A.prototype,t,function(s,n){if(l(this,A,t),!e&&w&&!d(s))return"get"==t&&void 0;var r=this._c[t](0===s?0:s,n);return e?this:r})}),w||h(A.prototype,"size",{get:function(){return this._c.size}})):(A=v.getConstructor(e,t,m,$),c(A.prototype,s),o.NEED=!0),f(A,t),y[t]=A,r(r.G+r.W+r.F,y),w||v.setStrong(A,t,m),A}},"A+MN":function(t,e,s){var n=s("WwGG"),r=s("mEMm"),o=s("OXaN"),a=s("CFGK"),i=s("dC2g");t.exports=function(t,e){var s=1==t,c=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d,h=e||i;return function(e,i,p){for(var g,v,m=o(e),w=r(m),_=n(i,p,3),A=a(w.length),$=0,k=s?h(e,A):c?h(e,0):void 0;A>$;$++)if((f||$ in w)&&(v=_(g=w[$],$,m),t))if(s)k[$]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return $;case 2:k.push(g)}else if(l)return!1;return d?-1:u||l?l:k}}},DG01:function(t,e,s){s("vyS5")("Set")},MxwP:function(t,e,s){"use strict";var n=s("lIiZ").f,r=s("c1o2"),o=s("bodH"),a=s("WwGG"),i=s("t8DS"),c=s("k/7E"),u=s("uH+j"),l=s("z7iO"),d=s("4BpY"),f=s("sjnA"),h=s("DVkV").fastKey,p=s("27tL"),g=f?"_s":"size",v=function(t,e){var s,n=h(e);if("F"!==n)return t._i[n];for(s=t._f;s;s=s.n)if(s.k==e)return s};t.exports={getConstructor:function(t,e,s,u){var l=t(function(t,n){i(t,l,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=n&&c(n,s,t[u],t)});return o(l.prototype,{clear:function(){for(var t=p(this,e),s=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete s[n.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var s=p(this,e),n=v(s,t);if(n){var r=n.n,o=n.p;delete s._i[n.i],n.r=!0,o&&(o.n=r),r&&(r.p=o),s._f==n&&(s._f=r),s._l==n&&(s._l=o),s[g]--}return!!n},forEach:function(t){p(this,e);for(var s,n=a(t,arguments.length>1?arguments[1]:void 0,3);s=s?s.n:this._f;)for(n(s.v,s.k,this);s&&s.r;)s=s.p},has:function(t){return!!v(p(this,e),t)}}),f&&n(l.prototype,"size",{get:function(){return p(this,e)[g]}}),l},def:function(t,e,s){var n,r,o=v(t,e);return o?o.v=s:(t._l=o={i:r=h(e,!0),k:e,v:s,p:n=t._l,n:void 0,r:!1},t._f||(t._f=o),n&&(n.n=o),t[g]++,"F"!==r&&(t._i[r]=o)),t},getEntry:v,setStrong:function(t,e,s){u(t,e,function(t,s){this._t=p(t,e),this._k=s,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?l(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,l(1))},s?"entries":"values",!s,!0),d(e)}}},Oyrx:function(t,e,s){var n=s("adiS"),r=s("vhYp");t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return r(this)}}},PHsi:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("zsLt"),r=s.n(n),o=s("LPk9"),a=s("FJop"),i={data:function(){return{outOrBackup:0,backUrl:"/wallet",setAsAddress:this.$route.params.address,userData:[],totalAll:0,userInfoSetInterval:null}},components:{Back:o.a,Password:a.a},mounted:function(){var t=this;this.getUserList("/account",{pageSize:20,pageNumber:1}),this.$route.query.address&&(this.userInfoSetInterval=setInterval(function(){t.getUserList("/account",{pageSize:20,pageNumber:1})},1e4))},destroyed:function(){clearInterval(this.userInfoSetInterval)},methods:{back:function(){this.$router.push({name:"/wallete"})},callback:function(){console.log("倒计时完成")},getAllUserList:function(t){var e=this;this.$fetch(t).then(function(t){t.success&&e.$store.commit("setAddressList",t.data.list)})},getUserList:function(t,e){var s=this;this.$fetch(t,e).then(function(t){if(t.success){if(t.data.list.length>0){for(var e=new r.a,n=0;n<t.data.list.length;n++)e.add(t.data.list[n].address);e.has(localStorage.getItem("newAccountAddress"))||(localStorage.setItem("newAccountAddress",t.data.list[0].address),localStorage.setItem("encrypted",t.data.list[0].encrypted))}else localStorage.setItem("newAccountAddress",""),localStorage.setItem("encrypted","");s.totalAll=t.data.total,s.getAllUserList("/account"),s.userData=t.data.list}})},userListSize:function(t){this.getUserList("/account",{pageSize:20,pageNumber:t})},outUser:function(t,e){var s=this;this.setAsAddress=t,this.outOrBackup=1,e?this.$refs.password.showPassword(!0):this.$confirm(this.$t("message.c162"),"",{confirmButtonText:this.$t("message.confirmButtonText"),cancelButtonText:this.$t("message.cancelButtonText")}).then(function(){s.outUserAddress("/account/remove/"+t,'{"password":""}')}).catch(function(){console.log("err")})},outUserAddress:function(t,e){var s=this;this.$store.getters.getNetWorkInfo.localBestHeight===this.$store.getters.getNetWorkInfo.netBestHeight?this.$post(t,e).then(function(t){t.success?(s.$message({type:"success",message:s.$t("message.passWordSuccess")}),s.getUserList("/account",{pageSize:20,pageNumber:1})):s.$message({type:"warning",message:s.$t("message.passWordFailed")+t.data.msg})}):this.$message({message:this.$t("message.c133"),duration:"800"})},backupUser:function(t,e){var s=this;this.setAsAddress=t,this.outOrBackup=2,e?this.$refs.password.showPassword(!0):this.$confirm(this.$t("message.c163"),"",{confirmButtonText:this.$t("message.confirmButtonText"),cancelButtonText:this.$t("message.cancelButtonText")}).then(function(){localStorage.setItem("userPass",""),s.$router.push({name:"/newAccount",params:{newOk:!1,address:s.setAsAddress}})}).catch(function(){})},toPassword:function(t,e){e?this.$router.push({name:"/editorPassword",params:{address:t,backInfo:this.$t("message.accountManagement")}}):this.$router.push({name:"/setPassword",params:{address:t,backInfo:this.$t("message.accountManagement")}})},toSubmit:function(t){if(1===this.outOrBackup){var e='{"password":"'+t+'"}';this.outUserAddress("/account/remove/"+this.setAsAddress,e)}else{localStorage.setItem("userPass",t);var s='{"password":"'+t+'"}';this.queryPassword("/account/password/validation/"+this.setAsAddress,s)}},queryPassword:function(t,e){var s=this;this.$post(t,e).then(function(t){t.data.value?s.$router.push({name:"/newAccount",params:{newOk:!1,address:s.setAsAddress}}):s.$message({type:"warning",message:s.$t("message.c198")})})},editAliasing:function(t,e){this.$store.getters.getNetWorkInfo.localBestHeight===this.$store.getters.getNetWorkInfo.netBestHeight&&"true"===sessionStorage.getItem("setNodeNumberOk")?this.$router.push({name:"/editAliasing",params:{address:t,encrypted:e}}):this.$message({message:this.$t("message.c133"),duration:"800"})},toNewAccount:function(){this.$store.getters.getNetWorkInfo.localBestHeight===this.$store.getters.getNetWorkInfo.netBestHeight&&"true"===sessionStorage.getItem("setNodeNumberOk")?(localStorage.setItem("toUserInfo","0"),this.$router.push({name:"/firstInfo"})):this.$message({message:this.$t("message.c133"),duration:"800"})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"users"},[s("Back",{attrs:{backTitle:this.$t("message.walletManagement"),backUrl:t.backUrl}}),t._v(" "),s("div",{staticClass:"freeze-list-tabs"},[s("h2",[t._v(t._s(t.$t("message.userInfoTitle")))]),t._v(" "),s("el-button",{staticClass:"newAccount",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.toNewAccount}}),t._v(" "),s("el-table",{attrs:{data:t.userData}},[s("el-table-column",{attrs:{prop:"address",label:t.$t("message.tabName"),width:"350",align:"center"}}),t._v(" "),s("el-table-column",{staticClass:"user-aliasing",attrs:{label:t.$t("message.tabAlias"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(null!=e.row.alias?e.row.alias:"-"))]),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:null==e.row.alias,expression:"scope.row.alias != null  ? false : true"}],staticClass:"el-icon-edit cursor-p",on:{click:function(s){t.editAliasing(e.row.address,e.row.encrypted)}}})]}}])}),t._v(" "),s("el-table-column",{attrs:{label:t.$t("message.operation"),"min-width":"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(s){t.outUser(e.row.address,e.row.encrypted)}}},[t._v("\n            "+t._s(t.$t("message.tabRemove"))+"\n          ")]),t._v(" "),s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(s){t.backupUser(e.row.address,e.row.encrypted)}}},[t._v("\n            "+t._s(t.$t("message.tabBackups"))+"\n          ")]),t._v(" "),s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(s){t.toPassword(e.row.address,e.row.encrypted)}}},[t._v("\n            "+t._s(e.row.encrypted?t.$t("message.c160"):t.$t("message.c161"))+"\n          ")])]}}])})],1),t._v(" "),s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalAllOk=this.totalAll>20,expression:"totalAllOk = this.totalAll>20 ? true:false"}],staticClass:"cb",attrs:{layout:"prev, pager, next","page-size":20,total:this.totalAll},on:{"current-change":t.userListSize}}),t._v(" "),s("Password",{ref:"password",on:{toSubmit:t.toSubmit}})],1)],1)},staticRenderFns:[]};var u=s("vSla")(i,c,!1,function(t){s("dFnc")},null,null);e.default=u.exports},SMmX:function(t,e,s){"use strict";var n=s("FITv"),r=s("7p3N"),o=s("WwGG"),a=s("k/7E");t.exports=function(t){n(n.S,t,{from:function(t){var e,s,n,i,c=arguments[1];return r(this),(e=void 0!==c)&&r(c),void 0==t?new this:(s=[],e?(n=0,i=o(c,arguments[2],2),a(t,!1,function(t){s.push(i(t,n++))})):a(t,!1,s.push,s),new this(s))}})}},V7Pz:function(t,e,s){var n=s("FITv");n(n.P+n.R,"Set",{toJSON:s("Oyrx")("Set")})},b4tm:function(t,e,s){var n=s("8Nvm"),r=s("JBI7"),o=s("biYF")("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},dC2g:function(t,e,s){var n=s("b4tm");t.exports=function(t,e){return new(n(t))(e)}},dFnc:function(t,e){},oltR:function(t,e,s){"use strict";var n=s("MxwP"),r=s("27tL");t.exports=s("4HpA")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(r(this,"Set"),t=0===t?0:t,t)}},n)},toDE:function(t,e,s){s("SMmX")("Set")},vhYp:function(t,e,s){var n=s("k/7E");t.exports=function(t,e){var s=[];return n(t,!1,s.push,s,e),s}},vyS5:function(t,e,s){"use strict";var n=s("FITv");t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},zsLt:function(t,e,s){t.exports={default:s("1J5t"),__esModule:!0}}});