(function(){var t={8672:function(t,e,s){"use strict";s(3725),s(5019);var a=s(5471),r=s(5093),i=s.n(r),n=s(2505),l=s.n(n),o=s(4583),c=s.n(o),u=s(6884),h=s(8618),d=s(9585),p=s(9833),m=s(435),f=s(20),v=function(){var t=this,e=t._self._c;return"success"===t.state?e(u.A,{staticClass:"app"},[e(m.A,[e("router-view",{attrs:{userPermissions:(t.userRole||{}).permissions,userRole:(t.userRole||{}).role,userId:(t.user||{}).id,isAdmin:(t.user||{}).admin,user:t.user}})],1)],1):"loading"===t.state?e(u.A,[e(m.A,[e(d.A,{staticClass:"pa-0",attrs:{fluid:"","fill-height":"","align-center":"","justify-center":""}},[e(f.A,{attrs:{size:70,color:"primary",indeterminate:""}})],1)],1)],1):"error"===t.state?e(u.A,[e(m.A,[e(d.A,{staticClass:"pa-0 text-center",attrs:{fluid:"","flex-column":"","fill-height":"","align-center":"","justify-center":""}},[e("div",{staticClass:"mb-6"},[e(h.A,{attrs:{text:"",color:"blue darken-1"},on:{click:function(e){return t.refreshPage()}}},[e(p.A,{attrs:{left:""}},[t._v("mdi-refresh")]),t._v(" 'refreshPage' ")],1)],1)])],1)],1):e(u.A)},C=[];function _(t){if(t.response){if(t.response.data&&t.response.data.error)return t.response.data.error;if(t.message&&!t.message.startsWith("Request failed with status code "))return t.message;switch(t.response.status){case 401:return`${t.response.status} ${t.response.statusText}`;default:return t.message}}return t.message}var g=s(4765);a.Ay.use(g.A);let w=localStorage.getItem("lang");w||(w=navigator.language.replace("-","_").toLocaleLowerCase());var b=new g.A({fallbackLocale:"en",locale:w,silentFallbackWarn:!0}),y=new a.Ay(b);s(9838);class A{constructor(){this.listeners={}}addListener(t){const e=Symbol();return this.listeners[e]=t,e}removeListener(t){return null!=this.listeners[t]&&(delete this.listeners[t],!0)}callListeners(t){Object.getOwnPropertySymbols(this.listeners).forEach((e=>{const s=this.listeners[e];s(t)}))}hasListeners(){return Object.keys(this.listeners).length>0}}class k extends A{constructor(t){super(),this.websocketCreator=t}start(){if(null!=this.ws)throw new Error("Websocket already started. Please stop it before starting.");this.ws=this.websocketCreator(),this.ws.onclose=()=>{this.isRunning()&&(this.ws=null,setTimeout((()=>{this.start()}),2e3))},this.ws.onmessage=({data:t})=>{this.callListeners(JSON.parse(t))}}isRunning(){return null!=this.ws}stop(){this.ws&&(this.ws.close(),delete this.ws)}}const j=new k((()=>{const t=`ws${document.baseURI.substr(4)}`;return new WebSocket(`${t}api/ws`)}));var S=j,x={name:"App",components:{},data(){return{drawer:null,user:null,userRole:null,systemInfo:null,state:"loading",darkMode:!0}},watch:{darkMode(t){this.$vuetify.theme.dark=t,t?localStorage.setItem("darkMode","1"):localStorage.removeItem("darkMode")}},computed:{isAuthenticated(){return!1}},async created(){if(this.isAuthenticated){"0"===localStorage.getItem("darkMode")?this.darkMode=!1:this.darkMode=!0;try{await this.loadData(),this.state="success"}catch(t){y.$emit("i-snackbar",{color:"error",text:_(t)}),this.state="error",S.stop()}}else this.state="success"},mounted(){y.$on("i-snackbar",(t=>{this.snackbar=!0,this.snackbarColor=t.color,this.snackbarText=t.text})),y.$on("i-show-drawer",(async()=>{this.drawer=!0}))},methods:{refreshPage(){const{location:t}=document;document.location=t}}},L=x,U=s(1656),I=(0,U.A)(L,v,C,!1,null,null,null),T=I.exports,F=s(173),D=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("SystemStatus",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},O=[],N=s(8726),M=s(668),P=s(4642),R=s(2202),E=function(){var t=this,e=t._self._c;return e("div",[e(P.A,{staticClass:"pl-4",attrs:{"show-arrows":""}},[e(M.A,{key:"Systemstatus",attrs:{to:"/systemstatus"}},[t._v(" System Status ")]),e(M.A,{key:"Patchstatus",attrs:{to:"/patchstatus"}},[t._v("Patch Status")])],1),e(N.A,{staticClass:"mt-4",attrs:{headers:t.headers,items:t.items,"items-per-page":30,options:t.tableOptions,dense:"","footer-props":{"items-per-page-options":[30,50,100],"items-per-page-text":"Rows per page:","show-first-last-page":!0,"show-current-page":!0,"show-items-per-page":!0,"show-select":!0,align:"left"}},on:{"update:options":function(e){t.tableOptions=e}},scopedSlots:t._u([{key:"item.hostname",fn:function({item:s}){return[e("router-link",{attrs:{to:`/host/${s.hostname}`}},[t._v(t._s(s.hostname))])]}},{key:"item.ansible_ping",fn:function({item:t}){return[e("TaskStatus",{attrs:{status:t.ansible_ping}})]}},{key:"item.disk_capacity",fn:function({item:s}){return[t.isDiskOver90(s.disk_capacity)?e("div",{staticClass:"disk-warning"},[e(p.A,{attrs:{color:"red"}},[t._v("mdi-alert")])],1):t._e(),e(R.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(h.A,t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),s),[e(p.A,[t._v("mdi-information")])],1)]}}],null,!0)},["unreachable"!==s.ansible_ping?e("div",{staticClass:"disk-meter tooltip-content"},t._l(t.parseDiskCapacity(s.disk_capacity),(function(s,a){return e("div",{key:a,staticClass:"disk-item"},[e("div",{staticClass:"disk-info"},[e("span",{staticClass:"disk-label"},[t._v(t._s(s.name))]),e("span",{staticClass:"disk-percent"},[t._v(t._s(s.used)+"%")])]),e("meter",{staticClass:"meter",attrs:{value:s.used,min:0,max:100,low:70,high:90,optimum:0}})])})),0):e("div",[t._v(" N/A ")])])]}},{key:"item.proc_usage",fn:function({item:s}){return["unreachable"!==s.ansible_ping?e("div",{staticClass:"proc-meter"},[e("span",{staticClass:"proc-label"},[t._v(t._s(t.roundProcUsage(s.proc_usage))+"%")]),e("meter",{staticClass:"meter",attrs:{value:t.roundProcUsage(s.proc_usage),min:0,max:100,low:70,high:90,optimum:0}})]):e("div",[t._v(" N/A ")])]}},{key:"item.app_check",fn:function({item:s}){return[s.app_check?e("div",[e(R.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e("div",t._g(t._b({},"div",r,!1),a),[e("AppCheckStatus",{attrs:{status:t.getOverallStatus(s.app_check)}})],1)]}}],null,!0)},[e("div",t._l(t.parseAppCheck(s.app_check),(function(s,a){return e("div",{key:a},[t._v(" "+t._s(s.name)+": "+t._s(s.status)+" ")])})),0)])],1):e("div",[t._v(" No services monitored ")])]}},{key:"item.last_responded",fn:function({item:s}){return[e(R.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e("span",t._g(t._b({},"span",r,!1),a),[t._v(t._s(t.formatTimeDifference(s.last_responded)))])]}}],null,!0)},[e("span",[t._v(t._s(t.formatTimestamp(s.last_responded)))])])]}},{key:"item.uptime",fn:function({item:s}){return["unreachable"!==s.ansible_ping?e("span",[t._v(t._s(t.formatUptime(s.uptime)))]):e("span",[t._v("N/A")])]}}])})],1)},H=[],z=(s(1339),s(9229),s(5371)),$=function(){var t=this,e=t._self._c;return t.status?e(z.A,{staticStyle:{"font-weight":"bold"},attrs:{color:t.getStatusColor(t.status)}},["running"!==t.status?e(p.A,{attrs:{left:""}},[t._v(t._s(t.getStatusIcon(t.status)))]):e("IndeterminateProgressCircular",{staticStyle:{"margin-left":"-5px"}}),t._v(" "+t._s(t.humanizeStatus(t.status))+" ")],1):t._e()},G=[],Z=function(){var t=this,e=t._self._c;return e(f.A,{staticClass:"indeterminate-progress-circular mr-2",attrs:{color:"white",size:"20",width:"10",rotate:t.rotate,value:t.value}})},W=[];class V extends A{constructor(){super(),this.direction=1,this.value=0,this.rotate=0}start(){const t=1,e=this;e.valueTimer=setInterval((()=>{1===e.direction&&e.value>=100?e.direction=-1:-1===e.direction&&e.value<=0&&(e.direction=1),1===e.direction?(e.rotate+=t,e.value+=t):(e.rotate+=5*t,e.value+=-t),e.rotate>360&&(e.rotate%=360),e.callListeners({value:e.value,rotate:e.rotate})}),50)}stop(){clearInterval(this.valueTimer)}addListener(t){return this.hasListeners()||this.start(),super.addListener(t)}removeListener(t){super.removeListener(t),this.hasListeners()||this.stop()}}const B=new V;var K={data(){return{value:null,rotate:null,listenerId:null}},mounted(){this.value=B.value,this.rotate=B.rotate,this.listenerId=B.addListener((({value:t,rotate:e})=>{this.value=t,this.rotate=e}))},beforeDestroy(){B.removeListener(this.listenerId)}},q=K,J=(0,U.A)(q,Z,W,!1,null,null,null),Y=J.exports;const Q=Object.freeze({WAITING:"waiting",STARTING:"starting",WAITING_CONFIRMATION:"waiting_confirmation",CONFIRMED:"confirmed",RUNNING:"running",SUCCESS:"success",ERROR:"error",STOPPING:"stopping",STOPPED:"stopped",PONG:"pong",UNREACHABLE:"unreachable"});var X={components:{IndeterminateProgressCircular:Y},props:{status:String},methods:{getStatusIcon(t){switch(t){case Q.WAITING:return"mdi-alarm";case Q.STARTING:return"mdi-play-circle";case Q.RUNNING:return"";case Q.SUCCESS:return"mdi-check-circle";case Q.ERROR:return"mdi-information";case Q.STOPPING:return"mdi-stop-circle";case Q.STOPPED:return"mdi-stop-circle";case Q.CONFIRMED:return"mdi-check-circle";case Q.WAITING_CONFIRMATION:return"mdi-pause-circle";case Q.PONG:return"mdi-check";case Q.UNREACHABLE:return"mdi-information";default:throw new Error(`Unknown task status ${t}`)}},humanizeStatus(t){switch(t){case Q.WAITING:return"Waiting";case Q.STARTING:return"Starting...";case Q.RUNNING:return"Running";case Q.SUCCESS:return"Success";case Q.ERROR:return"Failed";case Q.STOPPING:return"Stopping...";case Q.STOPPED:return"Stopped";case Q.CONFIRMED:return"Confirmed";case Q.WAITING_CONFIRMATION:return"Waiting confirmation";case Q.PONG:return"Success";case Q.UNREACHABLE:return"Failed";default:throw new Error(`Unknown task status ${t}`)}},getStatusColor(t){switch(t){case Q.WAITING:return"";case Q.STARTING:return"warning";case Q.RUNNING:return"primary";case Q.SUCCESS:return"success";case Q.ERROR:return"error";case Q.STOPPING:return"";case Q.STOPPED:return"";case Q.CONFIRMED:return"warning";case Q.WAITING_CONFIRMATION:return"warning";case Q.PONG:return"success";case Q.UNREACHABLE:return"error";default:throw new Error(`Unknown task status ${t}`)}}}},tt=X,et=(0,U.A)(tt,$,G,!1,null,null,null),st=et.exports,at=function(){var t=this,e=t._self._c;return t.status?e(z.A,{staticStyle:{"font-weight":"bold"},attrs:{color:t.getStatusColor(t.status)}},[e(p.A,{attrs:{left:""}},[t._v(t._s(t.getStatusIcon(t.status)))]),t._v(" "+t._s(t.humanizeStatus(t.status))+" ")],1):t._e()},rt=[],it={props:{status:String},methods:{getStatusIcon(t){return!t||t.toLowerCase().includes("stopped")||t.toLowerCase().includes("failed")||"n/a"===t.toLowerCase()?"mdi-alert-circle":"mdi-check-circle"},humanizeStatus(t){return t&&"n/a"!==t.toLowerCase()?!t||t.toLowerCase().includes("stopped")||t.toLowerCase().includes("failed")?"Failed":"Success":"N/A"},getStatusColor(t){return t&&"n/a"!==t.toLowerCase()?!t||t.toLowerCase().includes("stopped")||t.toLowerCase().includes("failed")?"error":"success":"warn"}}},nt=it,lt=(0,U.A)(nt,at,rt,!1,null,"1dbcf7b0",null),ot=lt.exports,ct={components:{TaskStatus:st,AppCheckStatus:ot},data(){return{darkMode:!1,headers:[{text:"Hostname",value:"hostname",width:"120px"},{text:"Ansible Ping",value:"ansible_ping",width:"100px"},{text:"Disk Usage",value:"disk_capacity",width:"150px"},{text:"Proc Usage",value:"proc_usage",width:"150px"},{text:"App Check",value:"app_check",width:"100px"},{text:"Last Responded",value:"last_responded",width:"150px"},{text:"Uptime",value:"uptime",width:"200px"}],items:[],tableOptions:{sortBy:["hostname"],sortDesc:[!1]}}},mounted(){this.fetchData(),this.interval=setInterval(this.fetchData,15e3)},beforeDestroy(){clearInterval(this.interval)},methods:{fetchData(){l().get("http://192.168.11.165/post/get_system_status_sqlite.php?project_id=2").then((t=>{this.items=Array.isArray(t.data)?t.data:[]})).catch((t=>{console.error("Error fetching data:",t),this.items=[]}))},roundProcUsage(t){return Math.round(t)},formatTimestamp(t){if(!t)return"N/A";const e=new Date(t.replace(" ","T"));return e.toLocaleString()},formatTimeDifference(t){if(!t)return"N/A";const e=new Date(t.replace(" ","T")),s=new Date,a=Math.abs(s-e),r=Math.floor(a/6e4),i=Math.floor(r/60),n=Math.floor(i/24);return n>0?`${n}d ${i%24}h ${r%60}m ago`:i>0?`${i}h ${r%60}m ago`:`${r}m ago`},formatUptime(t){if(null===t)return"N/A";const e=Math.floor(t%3600/60),s=Math.floor(t%86400/3600),a=Math.floor(t/86400);return`${a}d ${s}h ${e}m`},parseDiskCapacity(t){return t.split(", ").map((t=>{const[e,s]=t.split(" ");return{name:e,used:parseInt(s,10)}}))},isDiskOver90(t){return this.parseDiskCapacity(t).some((t=>t.used>90))},parseAppCheck(t){return t?t.split(",").map((t=>{const[e,s]=t.split(":").map((t=>t.trim()));return{name:e||"Unknown",status:s||"Unknown"}})):[]},getOverallStatus(t){const e=this.parseAppCheck(t);return e.some((t=>t.status.toLowerCase().includes("unreachable")))?"N/A":e.some((t=>t.status.toLowerCase().includes("stopped")||t.status.toLowerCase().includes("unknown")||t.status.toLowerCase().includes("failed")||"inactive"===t.status.toLowerCase()))?"Failed":"Success"}}},ut=ct,ht=(0,U.A)(ut,E,H,!1,null,"131d712c",null),dt=ht.exports,pt={name:"App",components:{SystemStatus:dt}},mt=pt,ft=(0,U.A)(mt,D,O,!1,null,null,null),vt=ft.exports,Ct=s(7425),_t=s(351),gt=s(5633),wt=s(7264),bt=function(){var t=this,e=t._self._c;return e("div",[e(gt.A,{attrs:{flat:""}},[e(wt.sw,[t._v("Graphs for Host: "+t._s(t.hostname))])],1),e(P.A,{staticClass:"pl-4",attrs:{"show-arrows":""}},[e(M.A,{key:"Systemstatus",attrs:{to:"/systemstatus"}},[t._v(" System Status ")]),e(M.A,{key:"Patchstatus",attrs:{to:"/patchstatus"}},[t._v("Patch Status")])],1),e("br"),e("table",{attrs:{width:"100%"}},[e(_t.A,[e(h.A,{on:{click:function(e){return t.setTimeFrame("today")}}},[t._v("Today")]),e(h.A,{on:{click:function(e){return t.setTimeFrame("week")}}},[t._v("7 Days")]),e(h.A,{on:{click:function(e){return t.setTimeFrame("month")}}},[t._v("30 Days")]),e(h.A,{on:{click:function(e){return t.setTimeFrame("90days")}}},[t._v("90 Days")])],1),e(_t.A,{staticClass:"left-aligned"},[e(Ct.A,{attrs:{cols:"12"}},[e("apexchart",{key:t.diskChartKey,attrs:{type:"line",height:"300",options:t.diskChartOptions,series:t.diskSeries}})],1)],1),e(_t.A,{staticClass:"left-aligned"},[e(Ct.A,{attrs:{cols:"12"}},[e("apexchart",{key:t.procChartKey,attrs:{type:"line",height:"300",options:t.procChartOptions,series:t.procSeries}})],1)],1),e(_t.A,{staticClass:"left-aligned"},[e(Ct.A,{attrs:{cols:"12"}},[e("apexchart",{key:t.uptimeChartKey,attrs:{type:"line",height:"300",options:t.uptimeChartOptions,series:t.uptimeSeries}})],1)],1)],1)],1)},yt=[],At=(s(8743),s(7588)),kt=s.n(At),jt={components:{apexchart:kt()},data(){return{hostname:this.$route.params.hostname,timeFrame:"today",diskSeries:[],procSeries:[{name:"Proc Usage",data:[]}],uptimeSeries:[{name:"Uptime",data:[]}],diskChartOptions:{chart:{height:300,type:"line"},xaxis:{categories:[]},stroke:{curve:"smooth"},title:{text:"Disk Capacity % Used",align:"left"}},procChartOptions:{chart:{height:300,type:"line"},xaxis:{categories:[]},stroke:{curve:"smooth"},title:{text:"Proc Usage",align:"left"}},uptimeChartOptions:{chart:{height:300,type:"line"},xaxis:{categories:[]},stroke:{curve:"smooth"},title:{text:"Uptime",align:"left"}},diskChartKey:0,procChartKey:0,uptimeChartKey:0}},mounted(){this.fetchData()},watch:{"$route.params":{handler(){this.hostname=this.$route.params.hostname,this.fetchData()},immediate:!0}},methods:{setTimeFrame(t){this.timeFrame=t,this.fetchData()},fetchData(){l().get(`http://192.168.11.165/post/get_host_history_sqlite.php?project_id=2&hostname=${this.hostname}&time_frame=${this.timeFrame}`).then((t=>{const e=t.data;if(!Array.isArray(e))throw new Error("Expected data to be an array");const s=e.map((t=>t.last_updated)),a={};e.forEach((t=>{Array.isArray(t.disk_capacity)&&t.disk_capacity.forEach((e=>{a[e.name]||(a[e.name]={name:e.name,data:[]}),a[e.name].data.push({x:t.last_updated,y:e.used})}))})),this.diskSeries=Object.values(a),this.procChartOptions.xaxis.categories=s,this.uptimeChartOptions.xaxis.categories=s,this.procSeries[0].data=e.map((t=>parseFloat(t.proc_usage))),this.uptimeSeries[0].data=e.map((t=>parseFloat(t.uptime))),this.diskChartKey+=1,this.procChartKey+=1,this.uptimeChartKey+=1})).catch((t=>{console.error("Error fetching data:",t)}))}}},St=jt,xt=(0,U.A)(St,bt,yt,!1,null,"7b07a9a6",null),Lt=xt.exports,Ut=s(2563),It=s(3733),Tt=s(4898),Ft=function(){var t=this,e=t._self._c;return e("div",[e(P.A,{staticClass:"pl-4",attrs:{"show-arrows":""}},[e(M.A,{key:"Systemstatus",attrs:{to:"/systemstatus"}},[t._v(" System Status ")]),e(M.A,{key:"Patchstatus",attrs:{to:"/patchstatus"}},[t._v(" Patch Status ")])],1),e("div",{staticClass:"grid-container"},[e("div",{staticClass:"grid-item hosts"},[e(gt.A,{attrs:{flat:""}},[e(wt.sw,[t._v("Hosts and Available Updates")])],1),e("div",{staticClass:"host-list"},[e("ul",t._l(t.hosts,(function(s){return e("li",{key:s.hostname,staticClass:"host-item"},[e("div",{staticClass:"host-item-content"},[e(h.A,{staticClass:"host-btn",class:{"active-btn":t.selectedHost===s.hostname},attrs:{small:"",outlined:""},on:{click:function(e){return t.onHostSelected(s.hostname,s.os_type)}}},[e("span",{staticClass:"truncate"},[t._v(t._s(s.hostname))])]),e(z.A,{staticClass:"ma-2",attrs:{color:0===s.available_updates?"green":"teal",label:"",pill:""}},[t._v(" "+t._s(s.available_updates)+" ")]),e(Ut.A,{attrs:{content:s.formatted_timestamp,color:"secondary"}})],1)])})),0)])],1),e("div",{staticClass:"grid-item updates"},[t.hostDetails?e("div",[e("div",{staticClass:"update-buttons"},[e(h.A,{class:{"active-btn":"available"===t.activeTable},attrs:{small:"",outlined:""},on:{click:function(e){return t.toggleTable("available")}}},[t._v(" Available Updates ")]),e(h.A,{class:{"active-btn":"installed"===t.activeTable},attrs:{small:"",outlined:""},on:{click:function(e){return t.toggleTable("installed")}}},[t._v(" Installed Updates ")]),t.isWindowsHost?e(h.A,{class:{"active-btn":"Failures"===t.activeTable},attrs:{small:"",outlined:""},on:{click:function(e){return t.toggleTable("Failures")}}},[t._v(" Installation Failures ")]):t._e()],1),t.showAvailableUpdates?e("div",{staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"search-bar"},[e(Tt.A,{attrs:{label:"Perform a search",dense:"","hide-details":""},on:{input:t.searchAvailableUpdates},model:{value:t.availableUpdatesSearch,callback:function(e){t.availableUpdatesSearch=e},expression:"availableUpdatesSearch"}})],1),e(It.A,{staticClass:"updates-table"},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Name")]),t.isLinuxHost?e("th",{staticClass:"text-left"},[t._v("Version")]):t._e(),t.isLinuxHost?e("th",{staticClass:"text-left"},[t._v("Repo")]):t._e()])]),e("tbody",t._l(t.filteredAvailableUpdates,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"text-left"},[t._v(t._s(s.name||s))]),t.isLinuxHost?e("td",{staticClass:"text-left"},[t._v(t._s(s.version))]):t._e(),t.isLinuxHost?e("td",{staticClass:"text-left"},[t._v(t._s(s.repo))]):t._e()])})),0)])],1):t._e(),t.showInstalledUpdates?e("div",{staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"search-bar"},[e(Tt.A,{attrs:{label:"Perform a search",dense:"","hide-details":""},on:{input:t.searchInstalledUpdates},model:{value:t.installedUpdatesSearch,callback:function(e){t.installedUpdatesSearch=e},expression:"installedUpdatesSearch"}})],1),e(It.A,{staticClass:"updates-table"},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Name")]),t.isLinuxHost?e("th",{staticClass:"text-left"},[t._v("Version")]):t._e(),t.isLinuxHost?e("th",{staticClass:"text-left"},[t._v("Repo")]):t._e()])]),e("tbody",t._l(t.filteredInstalledUpdates,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"text-left"},[t._v(t._s(s.name||s))]),t.isLinuxHost?e("td",{staticClass:"text-left"},[t._v(t._s(s.version))]):t._e(),t.isLinuxHost?e("td",{staticClass:"text-left"},[t._v(t._s(s.repo))]):t._e()])})),0)])],1):t._e(),t.showFailures?e("div",{staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"search-bar"},[e(Tt.A,{attrs:{label:"Perform a search",dense:"","hide-details":""},on:{input:t.searchFailures},model:{value:t.FailuresSearch,callback:function(e){t.FailuresSearch=e},expression:"FailuresSearch"}})],1),e(It.A,{staticClass:"updates-table"},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Date")]),e("th",{staticClass:"text-left"},[t._v("Status")]),e("th",{staticClass:"text-left"},[t._v("Title")])])]),e("tbody",t._l(t.filteredFailures,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"text-left"},[t._v(t._s(s.date))]),e("td",{staticClass:"text-left"},[t._v(t._s(s.status))]),e("td",{staticClass:"text-left"},[t._v(t._s(s.title))])])})),0)])],1):t._e()]):e("div",[e(gt.A,{attrs:{flat:""}},[e(wt.sw,[t._v("Select a host to see details.")])],1)],1)])])],1)},Dt=[],Ot={name:"PatchStatus",data(){return{hosts:[],hostDetails:null,showAvailableUpdates:!1,showInstalledUpdates:!1,showFailures:!1,availableUpdatesSearch:"",installedUpdatesSearch:"",FailuresSearch:"",filteredAvailableUpdates:[],filteredInstalledUpdates:[],filteredFailures:[],selectedHost:null,activeTable:"available",headers:[{text:"Host",value:"hostname"},{text:"Available Updates",value:"available_updates"}]}},computed:{isLinuxHost(){return this.hostDetails&&"linux"===this.hostDetails.os_type},isWindowsHost(){return this.hostDetails&&"windows"===this.hostDetails.os_type}},created(){this.fetchHosts()},methods:{async fetchHosts(){try{const t=await l().get("http://192.168.11.165/post/get_patch_status_hosts_sqlite.php?project_id=2");this.hosts=t.data}catch(t){console.error("Error fetching hosts:",t)}},async onHostSelected(t,e){this.selectedHost=t,this.activeTable="available",this.showAvailableUpdates=!0,this.showInstalledUpdates=!1,this.showFailures=!1,this.clearSearchFields(),await this.fetchHostDetails(t,e)},async fetchHostDetails(t,e){try{const s=await l().get(`http://192.168.11.165/post/get_combined_patch_status_sqlite.php?project_id=2&hostname=${t}&os_type=${e}`);this.hostDetails=s.data,this.hostDetails.os_type=e,this.filteredAvailableUpdates=this.hostDetails.updates||[],this.filteredInstalledUpdates=this.hostDetails.installedUpdates||[],this.filteredFailures=this.hostDetails.Failures||[]}catch(s){console.error("Error fetching host details:",s)}},searchAvailableUpdates(){this.availableUpdatesSearch?this.filteredAvailableUpdates=this.hostDetails.updates.filter((t=>{const e=t.name||t,s=t.version||"",a=t.repo||"";return e.toLowerCase().includes(this.availableUpdatesSearch.toLowerCase())||this.isLinuxHost&&s.toLowerCase().includes(this.availableUpdatesSearch.toLowerCase())||this.isLinuxHost&&a.toLowerCase().includes(this.availableUpdatesSearch.toLowerCase())})):this.filteredAvailableUpdates=this.hostDetails.updates||[]},searchInstalledUpdates(){this.installedUpdatesSearch?this.filteredInstalledUpdates=this.hostDetails.installedUpdates.filter((t=>{const e=t.name||t,s=t.version||"",a=t.repo||"";return e.toLowerCase().includes(this.installedUpdatesSearch.toLowerCase())||this.isLinuxHost&&s.toLowerCase().includes(this.installedUpdatesSearch.toLowerCase())||this.isLinuxHost&&a.toLowerCase().includes(this.installedUpdatesSearch.toLowerCase())})):this.filteredInstalledUpdates=this.hostDetails.installedUpdates||[]},searchFailures(){this.FailuresSearch?this.filteredFailures=this.hostDetails.Failures.filter((t=>t.date.toLowerCase().includes(this.FailuresSearch.toLowerCase())||t.date.toLowerCase().includes(this.FailuresSearch.toLowerCase())||t.title.toLowerCase().includes(this.FailuresSearch.toLowerCase())||t.status.toLowerCase().includes(this.FailuresSearch.toLowerCase()))):this.filteredFailures=this.hostDetails.Failures||[]},toggleTable(t){this.activeTable=t,"available"===t?(this.showAvailableUpdates=!0,this.showInstalledUpdates=!1,this.showFailures=!1,this.installedUpdatesSearch="",this.FailuresSearch="",this.filteredAvailableUpdates=this.hostDetails.updates||[]):"installed"===t?(this.showInstalledUpdates=!0,this.showAvailableUpdates=!1,this.showFailures=!1,this.availableUpdatesSearch="",this.FailuresSearch="",this.filteredInstalledUpdates=this.hostDetails.installedUpdates||[]):"Failures"===t&&(this.showFailures=!0,this.showAvailableUpdates=!1,this.showInstalledUpdates=!1,this.availableUpdatesSearch="",this.installedUpdatesSearch="",this.filteredFailures=this.hostDetails.Failures||[])},clearSearchFields(){this.availableUpdatesSearch="",this.installedUpdatesSearch="",this.FailuresSearch=""}},watch:{showAvailableUpdates(t){t&&(this.installedUpdatesSearch="",this.FailuresSearch="")},showInstalledUpdates(t){t&&(this.availableUpdatesSearch="",this.FailuresSearch="")},showFailures(t){t&&(this.availableUpdatesSearch="",this.installedUpdatesSearch="")},installedUpdatesSearch(t){t||(this.filteredInstalledUpdates=this.hostDetails.installedUpdates||[])}},beforeDestroy(){this.clearSearchFields()}},Nt=Ot,Mt=(0,U.A)(Nt,Ft,Dt,!1,null,"084047b3",null),Pt=Mt.exports,Rt=function(){var t=this,e=t._self._c;return e("div",[e(gt.A,{attrs:{flat:""}},[e(wt.sw,[t._v("Compliance Status")])],1),e(P.A,{staticClass:"pl-4",attrs:{"show-arrows":""}},[e(M.A,{key:"Systemstatus",attrs:{to:"/systemstatus"}},[t._v("System Status")]),e(M.A,{key:"TaskGraphs",attrs:{to:"/graphs"}},[t._v("Task Graphs")]),e(M.A,{key:"Patchstatus",attrs:{to:"/patchstatus"}},[t._v("Patch Status")]),e(M.A,{key:"Compliancestatus",attrs:{to:"/compliancestatus"}},[t._v(" Compliance Status ")])],1),e(d.A,[e(_t.A,[e(Ct.A,[e("h1",[t._v("Under Construction")]),e("p",[t._v("This page is currently under construction. Please check back later.")])])],1)],1)],1)},Et=[],Ht={name:"Compliancestatus"},zt=Ht,$t=(0,U.A)(zt,Rt,Et,!1,null,"1bea4805",null),Gt=$t.exports;a.Ay.use(F.A);const Zt=[{path:"/",component:vt},{path:"/systemstatus",component:vt},{path:"/host/:hostname",component:Lt},{path:"/patchstatus",component:Pt},{path:"/compliancestatus",component:Gt}],Wt=new F.A({mode:"history",routes:Zt});var Vt=Wt,Bt=s(7600),Kt=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M25.461 2.7578C24.5513 2.25782 23.4491 2.25782 22.5395 2.7578L7.56956 10.9858C7.5571\n        10.9927 7.54472 10.9996 7.5324 11.0066L5.5614 12.0899C4.59191 12.6228 3.9895 13.6413\n        3.9895 14.7476V33.2547C3.9895 34.3609 4.59191 35.3795 5.5614 35.9123L20.6733\n        44.2184C20.6928 44.2291 20.7123 44.2396 20.7319 44.2499L22.5395 45.2434C23.4491 45.7433\n        24.5513 45.7433 25.461 45.2434L27.2731 44.2474C27.2911 44.2379 27.309 44.2283 27.3269\n        44.2184L42.4388 35.9123C43.4083 35.3795 44.0107 34.3609 44.0107 33.2547V14.7476C44.0107\n        13.6413 43.4083 12.6228 42.4388 12.0899L40.4746 11.0103C40.4601 11.0021 40.4455 10.9939\n        40.4309 10.9858L25.461 2.7578ZM26.4228 24.0006L40.4309 16.3012C40.4453 16.2933 40.4595\n        16.2853 40.4737 16.2772L40.641 16.1853C41.1074 15.9289 41.6779 16.2664 41.6779\n        16.7986V31.2037C41.6779 31.7359 41.1074 32.0734 40.641 31.817L40.5118 31.746C40.4852\n        31.7304 40.4582 31.715 40.4309 31.7L26.4228 24.0006ZM7.53343 16.281C7.5454 16.2878\n        7.55745 16.2945 7.56956 16.3012L21.5777 24.0006L7.56956 31.7C7.54334 31.7144 7.51745\n        31.7291 7.49188 31.7441L7.35925 31.817C6.89284 32.0733 6.32231 31.7359 6.32231\n        31.2037V16.7986C6.32231 16.2664 6.89284 15.9289 7.35925 16.1853L7.53343 16.281ZM39.3281\n        13.0421L26.2033 5.8282C25.743 5.57521 25.1813 5.90054 25.1666 6.42067C25.1667 6.42761\n        25.1667 6.43456 25.1667 6.44151V22.0286L39.3277 14.2451C39.7839 13.9752 39.784 13.3122\n        39.3281 13.0421ZM8.67593 14.247L22.8335 22.0286V6.44151C22.8335 6.43455 22.8335 6.42761\n        22.8336 6.42067C22.8189 5.90054 22.2572 5.57521 21.7969 5.8282L8.67549 13.0403C8.21532\n        13.3098 8.21547 13.9777 8.67593 14.247ZM8.69322 34.971C8.22218 34.7121 8.20989 34.0462\n        8.65635 33.766L22.8335 25.9737V41.5608C22.8335 41.5677 22.8335 41.5747 22.8336\n        41.5816C22.8192 42.0911 22.2799 42.4137 21.8252 42.1888L8.69322 34.971ZM25.1667\n        41.5608V25.9737L39.3456 33.767C39.7905 34.0477 39.7777 34.7124 39.3072 34.971L26.1773\n        42.1877C25.7221 42.4148 25.181 42.092 25.1666 41.5816C25.1666 41.5782 25.1667 41.5747\n        25.1667 41.5713C25.1667 41.5678 25.1667 41.5643 25.1667 41.5608Z",fill:"#0D1A2B"}}),e("path",{attrs:{d:"M23.6628 4.80138C23.8728 4.686 24.1271 4.686 24.337 4.80138L39.3069 13.0294C39.7906\n    13.2953 39.7906 13.9902 39.3069 14.256L24.337 22.4841C24.1271 22.5995 23.8728 22.5995\n    23.6628 22.4841L8.69295 14.256C8.20929 13.9902 8.20929 13.2953 8.69295 13.0294L23.6628\n    4.80138Z",fill:"#E7C200"}}),e("path",{attrs:{d:"M6.32202 16.7975C6.32202 16.2653 6.89255 15.9279 7.35896 16.1842L22.4708 24.4903C22.6946\n    24.6133 22.8336 24.8483 22.8336 25.1036V41.5597C22.8336 42.0919 22.2631 42.4294 21.7967\n    42.173L6.68477 33.8669C6.46104 33.7439 6.32202 33.5089 6.32202 33.2536V16.7975Z",fill:"#FFDA18"}}),e("path",{attrs:{d:"M40.6406 16.1842C41.1071 15.9279 41.6776 16.2653 41.6776 16.7975V33.2536C41.6776\n    33.5089 41.5386 33.7439 41.3148 33.8669L26.203 42.173C25.7365 42.4294 25.166 42.0919\n    25.166 41.5597V25.1036C25.166 24.8483 25.305 24.6133 25.5288 24.4903L40.6406 16.1842Z",fill:"white"}}),e("path",{attrs:{d:"M12.669 29.7093C12.6684 29.717 12.6678 29.7246 12.6672 29.7322L9.125 27.8686C9.12549\n    27.8609 9.12602 27.8532 9.12659 27.8456C9.2087 26.7433 10.0683 26.2669 11.0465\n    26.7816C12.0247 27.2962 12.7511 28.607 12.669 29.7093Z",fill:"#0D1A2B"}}),e("path",{attrs:{d:"M18.2432 32.928C18.2427 32.9357 18.2421 32.9433 18.2414 32.9509L14.6992\n    31.0872C14.6997 31.0796 14.7003 31.0719 14.7008 31.0643C14.7829 29.962\n    15.6425 29.4856 16.6207 30.0003C17.5989 30.5149 18.3253 31.8257 18.2432 32.928Z",fill:"#0D1A2B"}})])},qt=[],Jt={},Yt=(0,U.A)(Jt,Kt,qt,!1,null,null,null),Qt=Yt.exports,Xt=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"106",height:"106",viewBox:"0 0 106 106",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.0724 58.8698C20.9836 56.6116 20.9901\n  49.3006 17.0869 42.5403C13.1837 35.7799 6.84888 32.1302 2.93767 34.3885C-0.973544 36.6467\n  -0.980046 43.9576 2.92315 50.718C6.82634 57.4783 13.1612 61.128 17.0724 58.8698ZM17.0958\n  73.3454C20.999 80.1057 20.9925 87.4166 17.0813 89.6749C13.17 91.9331 6.83522 88.2834 2.93203\n  81.523C-0.971167 74.7627 -0.964667 67.4517 2.94655 65.1935C6.85776 62.9353 13.1926 66.585\n  17.0958 73.3454ZM43.7495 88.7551C47.6527 95.5154 47.6462 102.826 43.735 105.085C39.8238\n  107.343 33.4889 103.693 29.5857 96.9328C25.6826 90.1725 25.6891 82.8615 29.6003\n  80.6033C33.5115 78.3451 39.8463 81.9948 43.7495 88.7551ZM43.7408 57.9504C47.644 64.7107\n  47.6375 72.0217 43.7263 74.2799C39.8151 76.5381 33.4803 72.8884 29.5771 66.1281C25.6739\n  59.3678 25.6804 52.0568 29.5916 49.7986C33.5028 47.5404 39.8377 51.1901 43.7408 57.9504Z",fill:"#F26E7E"}}),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M97.0612 50.7349C100.964 43.9746 100.958\n  36.6636 97.0467 34.4054C93.1355 32.1472 86.8007 35.7969 82.8975 42.5572C78.9943 49.3176\n  79.0008 56.6285 82.912 58.8867C86.8232 61.1449 93.1581 57.4953 97.0612 50.7349ZM97.062\n  65.2032C100.973 67.4614 100.98 74.7723 97.0766 81.5327C93.1734 88.293 86.8385 91.9427\n  82.9273 89.6845C79.0161 87.4263 79.0096 80.1153 82.9128 73.355C86.816 66.5946 93.1508\n  62.9449 97.062 65.2032ZM70.4136 80.5876C74.3249 82.8458 74.3314 90.1568 70.4282\n  96.9171C66.525 103.677 60.1901 107.327 56.2789 105.069C52.3677 102.811 52.3612 95.4998\n  56.2644 88.7395C60.1676 81.9791 66.5024 78.3294 70.4136 80.5876ZM70.3986 49.7897C74.3098\n  52.0479 74.3163 59.3589 70.4131 66.1192C66.5099 72.8796 60.1751 76.5292 56.2638\n  74.271C52.3526 72.0128 52.3461 64.7019 56.2493 57.9415C60.1525 51.1812 66.4873 47.5315\n  70.3986 49.7897Z",fill:"#8A3391"}}),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M64.1222 8.17769C64.1222 12.6941 57.7939\n  16.3554 49.9875 16.3554C42.1811 16.3554 35.8528 12.6941 35.8528 8.17769C35.8528 3.66127\n  42.1811 0 49.9875 0C57.7939 0 64.1222 3.66127 64.1222 8.17769ZM37.474 23.5464C37.474\n  28.0628 31.1457 31.7241 23.3393 31.7241C15.5329 31.7241 9.20459 28.0628 9.20459\n  23.5464C9.20459 19.03 15.5329 15.3687 23.3393 15.3687C31.1457 15.3687 37.474 19.03\n  37.474 23.5464ZM76.6705 31.7241C84.4769 31.7241 90.8052 28.0628 90.8052 23.5464C90.8052\n  19.03 84.4769 15.3687 76.6705 15.3687C68.8641 15.3687 62.5358 19.03 62.5358 23.5464C62.5358\n  28.0628 68.8641 31.7241 76.6705 31.7241ZM64.1222 38.9496C64.1222 43.466 57.7939 47.1272\n  49.9875 47.1272C42.1811 47.1272 35.8528 43.466 35.8528 38.9496C35.8528 34.4332 42.1811\n  30.7719 49.9875 30.7719C57.7939 30.7719 64.1222 34.4332 64.1222 38.9496Z",fill:"#F7BF2A"}})])},te=[],ee={},se=(0,U.A)(ee,Xt,te,!1,null,null,null),ae=se.exports;a.Ay.use(Bt.A);var re=new Bt.A({icons:{values:{tofu:{component:Qt},pulumi:{component:ae}}}});const ie=new(c());l().defaults.baseURL=document.baseURI,a.Ay.config.productionTip=!1,a.Ay.filter("formatDate",(t=>{if(!t)return"—";const e=i()(t),s=i()();return s.isSame(e,"day")?`${e.fromNow()} (${e.format("LT")})`:e.format("L LT")})),a.Ay.filter("formatTime",(t=>t?i()(String(t)).format("LTS"):"—")),a.Ay.filter("formatLog",(t=>t?ie.toHtml(String(t)):t)),a.Ay.filter("formatMilliseconds",(t=>{if(null==t||""===t)return"—";let e;if("string"===typeof t)e=parseInt(t,10);else if("number"===typeof t)e=t;else if(Array.isArray(t)){if(2!==t.length)throw new Error("formatMilliseconds: invalid value format");if(null==t[0]||""===t[0])return"—";const s="string"===typeof t[0]?new Date(t[0]):t[0];let a;a=null==t[1]||""===t[1]?Date.now():"string"===typeof t[1]?new Date(t[1]):t[1],e=a-s}return i().duration(e,"milliseconds").humanize()})),new a.Ay({router:Vt,vuetify:re,render:t=>t(T)}).$mount("#app")},5358:function(t,e,s){var a={"./af":5177,"./af.js":5177,"./ar":1509,"./ar-dz":1488,"./ar-dz.js":1488,"./ar-kw":8676,"./ar-kw.js":8676,"./ar-ly":2353,"./ar-ly.js":2353,"./ar-ma":4496,"./ar-ma.js":4496,"./ar-sa":2682,"./ar-sa.js":2682,"./ar-tn":9756,"./ar-tn.js":9756,"./ar.js":1509,"./az":5533,"./az.js":5533,"./be":8959,"./be.js":8959,"./bg":7777,"./bg.js":7777,"./bm":4903,"./bm.js":4903,"./bn":1290,"./bn-bd":7357,"./bn-bd.js":7357,"./bn.js":1290,"./bo":1545,"./bo.js":1545,"./br":1470,"./br.js":1470,"./bs":4429,"./bs.js":4429,"./ca":7306,"./ca.js":7306,"./cs":6464,"./cs.js":6464,"./cv":3635,"./cv.js":3635,"./cy":4226,"./cy.js":4226,"./da":3601,"./da.js":3601,"./de":7853,"./de-at":6111,"./de-at.js":6111,"./de-ch":4697,"./de-ch.js":4697,"./de.js":7853,"./dv":708,"./dv.js":708,"./el":4691,"./el.js":4691,"./en-au":3872,"./en-au.js":3872,"./en-ca":8298,"./en-ca.js":8298,"./en-gb":6195,"./en-gb.js":6195,"./en-ie":6584,"./en-ie.js":6584,"./en-il":5543,"./en-il.js":5543,"./en-in":9033,"./en-in.js":9033,"./en-nz":9402,"./en-nz.js":9402,"./en-sg":3004,"./en-sg.js":3004,"./eo":2934,"./eo.js":2934,"./es":7650,"./es-do":838,"./es-do.js":838,"./es-mx":7730,"./es-mx.js":7730,"./es-us":6575,"./es-us.js":6575,"./es.js":7650,"./et":3035,"./et.js":3035,"./eu":3508,"./eu.js":3508,"./fa":119,"./fa.js":119,"./fi":527,"./fi.js":527,"./fil":5995,"./fil.js":5995,"./fo":2477,"./fo.js":2477,"./fr":5498,"./fr-ca":6435,"./fr-ca.js":6435,"./fr-ch":7892,"./fr-ch.js":7892,"./fr.js":5498,"./fy":7071,"./fy.js":7071,"./ga":1734,"./ga.js":1734,"./gd":217,"./gd.js":217,"./gl":7329,"./gl.js":7329,"./gom-deva":2124,"./gom-deva.js":2124,"./gom-latn":3383,"./gom-latn.js":3383,"./gu":5050,"./gu.js":5050,"./he":1713,"./he.js":1713,"./hi":3861,"./hi.js":3861,"./hr":6308,"./hr.js":6308,"./hu":609,"./hu.js":609,"./hy-am":7160,"./hy-am.js":7160,"./id":4063,"./id.js":4063,"./is":9374,"./is.js":9374,"./it":8383,"./it-ch":1827,"./it-ch.js":1827,"./it.js":8383,"./ja":3827,"./ja.js":3827,"./jv":9722,"./jv.js":9722,"./ka":1794,"./ka.js":1794,"./kk":7088,"./kk.js":7088,"./km":6870,"./km.js":6870,"./kn":4451,"./kn.js":4451,"./ko":3164,"./ko.js":3164,"./ku":8174,"./ku.js":8174,"./ky":8474,"./ky.js":8474,"./lb":9680,"./lb.js":9680,"./lo":5867,"./lo.js":5867,"./lt":5766,"./lt.js":5766,"./lv":9532,"./lv.js":9532,"./me":8076,"./me.js":8076,"./mi":1848,"./mi.js":1848,"./mk":306,"./mk.js":306,"./ml":3739,"./ml.js":3739,"./mn":9053,"./mn.js":9053,"./mr":6169,"./mr.js":6169,"./ms":3386,"./ms-my":2297,"./ms-my.js":2297,"./ms.js":3386,"./mt":7075,"./mt.js":7075,"./my":2264,"./my.js":2264,"./nb":2274,"./nb.js":2274,"./ne":8235,"./ne.js":8235,"./nl":2572,"./nl-be":3784,"./nl-be.js":3784,"./nl.js":2572,"./nn":4566,"./nn.js":4566,"./oc-lnc":9330,"./oc-lnc.js":9330,"./pa-in":9849,"./pa-in.js":9849,"./pl":4418,"./pl.js":4418,"./pt":9834,"./pt-br":8303,"./pt-br.js":8303,"./pt.js":9834,"./ro":4457,"./ro.js":4457,"./ru":2271,"./ru.js":2271,"./sd":1221,"./sd.js":1221,"./se":3478,"./se.js":3478,"./si":7538,"./si.js":7538,"./sk":5784,"./sk.js":5784,"./sl":6637,"./sl.js":6637,"./sq":6794,"./sq.js":6794,"./sr":5719,"./sr-cyrl":3322,"./sr-cyrl.js":3322,"./sr.js":5719,"./ss":6e3,"./ss.js":6e3,"./sv":1011,"./sv.js":1011,"./sw":748,"./sw.js":748,"./ta":1025,"./ta.js":1025,"./te":1885,"./te.js":1885,"./tet":8861,"./tet.js":8861,"./tg":6571,"./tg.js":6571,"./th":5802,"./th.js":5802,"./tk":9527,"./tk.js":9527,"./tl-ph":9231,"./tl-ph.js":9231,"./tlh":1052,"./tlh.js":1052,"./tr":5096,"./tr.js":5096,"./tzl":9846,"./tzl.js":9846,"./tzm":1765,"./tzm-latn":7711,"./tzm-latn.js":7711,"./tzm.js":1765,"./ug-cn":8414,"./ug-cn.js":8414,"./uk":6618,"./uk.js":6618,"./ur":158,"./ur.js":158,"./uz":7609,"./uz-latn":2475,"./uz-latn.js":2475,"./uz.js":7609,"./vi":1135,"./vi.js":1135,"./x-pseudo":4051,"./x-pseudo.js":4051,"./yo":2218,"./yo.js":2218,"./zh-cn":2648,"./zh-cn.js":2648,"./zh-hk":1632,"./zh-hk.js":1632,"./zh-mo":1541,"./zh-mo.js":1541,"./zh-tw":304,"./zh-tw.js":304};function r(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id=5358}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,i){if(!a){var n=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],i=t[u][2];for(var l=!0,o=0;o<a.length;o++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[o])}))?a.splice(o--,1):(l=!1,i<n&&(n=i));if(l){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,r,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,n=a[0],l=a[1],o=a[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in l)s.o(l,r)&&(s.m[r]=l[r]);if(o)var u=o(s)}for(e&&e(a);c<n.length;c++)i=n[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},a=self["webpackChunkweb"]=self["webpackChunkweb"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(8672)}));a=s.O(a)})();
//# sourceMappingURL=app.4f5bf28d.js.map