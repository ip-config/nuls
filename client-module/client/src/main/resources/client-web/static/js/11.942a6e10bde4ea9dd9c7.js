webpackJsonp([11],{"3Nfg":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("LPk9"),n=a("6ROu"),l=a.n(n),i=a("x47x"),o={data:function(){return{backTitle:this.$route.params.agentName,backUrl:"/nodeInfo",backParams:this.$route.params.txHash,txHash:this.$route.params.txHash,pledgeData:[],total:0}},components:{Back:s.a},mounted:function(){this.getConsensusDeposit("/consensus/deposit/agent/"+this.txHash,{pageSize:"10",pageNumber:"1"})},methods:{getConsensusDeposit:function(t,e){var a=this;this.$fetch(t,e).then(function(t){if(console.log(t),t.success){a.total=t.data.total;for(var e=new i.BigNumber(1e-8),s=0;s<t.data.list.length;s++)t.data.list[s].deposit=parseFloat(e.times(t.data.list[s].deposit).toString()),t.data.list[s].time=l()(t.data.list[s].time).format("YYYY-MM-DD hh:mm:ss");a.pledgeData=t.data.list}})},pledgeSize:function(t){this.getConsensusDeposit("/consensus/deposit/agent/"+this.txHash,{pageNumber:t,pageSize:"10"})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pledge"},[a("Back",{attrs:{backTitle:t.backTitle}}),t._v(" "),a("h2",[t._v(t._s(t.$t("message.c55")))]),t._v(" "),a("el-table",{attrs:{data:t.pledgeData,stripe:!1}},[a("el-table-column",{attrs:{prop:"address",label:t.$t("message.tabName"),"min-width":"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"deposit",label:t.$t("message.amount"),align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:t.$t("message.state"),"min-width":"35",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t.$t("message.status"+e.row.status))+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:t.$t("message.c49"),"min-width":"65",align:"center"}})],1),t._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalOK=this.total>10,expression:"totalOK = this.total > 10 ? true:false"}],staticClass:"cb",attrs:{layout:"prev, pager, next",total:this.total},on:{"current-change":t.pledgeSize}})],1)},staticRenderFns:[]};var c=a("VU/8")(o,r,!1,function(t){a("KIqL")},null,null);e.default=c.exports},KIqL:function(t,e){}});
//# sourceMappingURL=11.942a6e10bde4ea9dd9c7.js.map