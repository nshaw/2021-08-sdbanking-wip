(this.webpackJsonplistitem=this.webpackJsonplistitem||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);n(84),n(85);var a=n(35),r=n(12),i=n(38),o=n(50),c={en:n(68)},s=Object.keys(c).reduce((function(e,t){return Object(r.a)({},e,Object(a.a)({},t,{translation:c[t]}))}),{});i.a.use(o.a).init({fallbackLng:"en",resources:s,interpolation:{escapeValue:!1}});var l=n(14),u=n(15),d=n(18),m=n(16),p=n(51),f=n(0),h=n.n(f),g=n(11),v=n.n(g),b=h.a.createContext(null);var y=n(10),k=n.n(y),E=n(26),O=n(24),w=n(69),C=n.n(w),j=n(70),R=n.n(j),N=n(71),D=n.n(N),P=n(72),F=n.n(P),S=n(73),x=n.n(S),T=n(74),A=n.n(T),I={investments:"investments",managealerts:"managealerts",paybills:"paybills",sendmoney:"sendmoney",transfermoney:"transfermoney",viewstatements:"viewstatements"},M={investments:C.a,managealerts:R.a,paybills:D.a,sendmoney:F.a,transfermoney:x.a,viewstatements:A.a},U=function(e){var t=e.icon,n=e.className,a=e.style,r="".concat("/entando-de-app/cmsresources/").concat(function(e){switch(e){case I.investments:return M.investments;case I.managealerts:return M.managealerts;case I.paybills:return M.paybills;case I.sendmoney:return M.sendmoney;case I.transfermoney:return M.transfermoney;case I.viewstatements:return M.viewstatements;default:return null}}(t));return h.a.createElement("img",{id:"my-icon",src:r,style:a,className:n,alt:"icon"})};U.defaultProps={className:"",style:{}};var z=U,B=function(e){var t=e.title,n=e.className,a=e.style;return h.a.createElement("span",{id:"my-title",className:n,style:a},t)};B.defaultProps={className:"",style:{}};var L=B,H=function(e){var t=e.count,n=e.className,a=e.style;return h.a.createElement("span",{id:"my-counter",className:n,style:a},t)};H.defaultProps={className:"",style:{}};var J=H,X=n(142),W=n(134),K=n(135),_=n(136),q=n(137),G=n(133),V=function(e){for(var t=e.className,n=e.itemsPerPage,a=e.totalItems,r=e.paginate,i=e.currentPage,o=[],c=1;c<=Math.ceil(a/n);c++)o.push(c);return h.a.createElement("nav",{className:t},h.a.createElement("ul",{className:"pagination"},o.map((function(e){return h.a.createElement("li",{key:e,className:"page-item"},h.a.createElement("button",{type:"button",onClick:function(){return r(e)},className:"page-link",style:i===e?{background:"#eeeeee"}:null},e))}))))},Y=n(75),Q=n.n(Y),Z=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).paginate=function(e){return a.setCurrentPage(e)},a.handleFileRead=function(e){var t=Object(r.a)({},e);if(!e.read){var n=a.props.putDocumentRead;t.read=!0,n(t)}},a.generateTable=function(e){return h.a.createElement(G.a,{className:"MyTable",responsive:!0,size:"sm",hover:!0},h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement("th",null,"DOCUMENT"),h.a.createElement("th",null,"DATE"))),h.a.createElement("tbody",null,e&&e.map((function(e){var t=e.createdAt,n=e.description,r=e.read;return h.a.createElement("tr",{key:e.id,onClick:function(){a.handleFileRead(e),window.open(Q.a,"_blank")}},h.a.createElement("td",{style:r?{fontWeight:"normal"}:{fontWeight:"bold"}},n),h.a.createElement("td",{style:r?{fontWeight:"normal"}:{fontWeight:"bold"}},t))}))))},a.state={itemsPerPage:5,currentPage:1},a}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props.data;e.data!==t&&this.handleTable()}},{key:"setCurrentPage",value:function(e){this.setState({currentPage:e})}},{key:"handleTable",value:function(){var e=this.props.data,t=this.state,n=t.currentPage,a=t.itemsPerPage,r=n*a,i=r-a,o=e.slice(i,r);return this.generateTable(o)}},{key:"render",value:function(){var e=this.state,t=e.itemsPerPage,n=e.currentPage,a=this.props.data;return h.a.createElement("div",null,this.handleTable(),h.a.createElement(V,{className:"paginator",itemsPerPage:t,totalItems:a.length,currentPage:n,paginate:this.paginate}))}}]),n}(h.a.PureComponent),$=function(e){return e.date.toISOString().substring(0,10)},ee=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={descriptionFilter:""},a.onChangeDescription=a.onChangeDescription.bind(Object(O.a)(a)),a.filterByDescription=a.filterByDescription.bind(Object(O.a)(a)),a.onChangeRangeFilter=a.onChangeRangeFilter.bind(Object(O.a)(a)),a}return Object(u.a)(n,[{key:"onChangeDescription",value:function(e){var t;e&&e.target&&(t=e.target.value),this.setState({descriptionFilter:t})}},{key:"onChangeRangeFilter",value:function(e){var t,n=this.props.changeRangeFilter;e&&e.target&&(t=e.target.value);var a=new Date,r=$({date:a}),i={dateA:r,dateB:$({date:a})};switch(t){case"90":r=function(e){var t=e.d,n=e.range,a=new Date;return a.setDate(t.getDate()-n),$({date:a})}({d:a,range:90}),i.dateA=r;break;case"month":r=function(e){var t=e.d,n=new Date(t.getFullYear(),t.getMonth(),1,t.getHours());return $({date:n})}({d:new Date}),i.dateA=r;break;default:i=null}n(i)}},{key:"filterByDescription",value:function(e){var t=this.state.descriptionFilter;(0,this.props.changeDescription)(""===e?e:t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.isOpen,a=t.toggle,r=t.title,i=t.className,o=t.data,c=t.putDocumentRead,s=this.state.descriptionFilter;return h.a.createElement(X.a,{isOpen:n,className:i},h.a.createElement(W.a,{style:{color:"#0E6837"}},r,h.a.createElement("select",{name:"transactionRange",id:"transactionRange",className:"select-range",onChange:this.onChangeRangeFilter},h.a.createElement("option",{value:"all"},"All transactions"),h.a.createElement("option",{value:"month"},"Last month"),h.a.createElement("option",{value:"90"},"Last 90 days")),h.a.createElement("input",{className:"search-input",type:"text",onChange:this.onChangeDescription,value:s}),h.a.createElement("button",{className:"search-button",type:"button",onClick:this.filterByDescription},"Filter")),h.a.createElement(K.a,{style:{padding:0}},h.a.createElement("div",{className:"my-table"},o&&h.a.createElement(Z,{toggleModal:a,data:o,putDocumentRead:c}))),h.a.createElement(_.a,null,h.a.createElement(q.a,{onClick:function(){e.onChangeRangeFilter(),e.onChangeDescription(),e.filterByDescription(""),a()}},"Close")))}}]),n}(f.Component);ee.defaultProps={title:"",className:"",data:[]};var te=ee,ne=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.title,a=e.modalOpen,r=e.toggleModal,i=e.data,o=e.putDocumentRead,c=e.onChangeDescription,s=e.onChangeRangeFilter,l=function(){var e=0;return i.forEach((function(t){t.read||e++})),e};return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"list-item",onClick:Array.isArray(i)&&i.length?function(){return r()}:null},t&&h.a.createElement(z,{icon:t})," ",n&&h.a.createElement(L,{title:n})," ",i&&i.length>0&&0!==l()?h.a.createElement(J,{count:l()}):null),i?h.a.createElement(te,{className:"my-modal",isOpen:a,toggle:r,title:n,data:i,putDocumentRead:o,changeDescription:function(e){c(e)},changeRangeFilter:function(e){s(e)}}):null)}}]),n}(h.a.PureComponent);ne.defaultProps={icon:"",iconStyle:{},countStyle:{},title:"",titleStyle:{},data:[]};var ae=ne,re=n(139),ie=n(1),oe=n.n(ie),ce=(oe.a.shape({initialized:oe.a.bool,authenticated:oe.a.bool}),function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null}),se=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},le=n(8),ue=n(140),de=n(143),me=n(53),pe=n(17),fe=n(141),he=n(78),ge=n.n(he),ve=n(79),be=n.n(ve),ye=n(76),ke=n.n(ye),Ee=n(80),Oe=n.n(Ee),we={success:ke.a,error:ge.a,info:be.a},Ce={success:3e3,error:null,info:5e3},je=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=we[s],u=Ce[s],d=h.a.createElement("span",{className:a.message},h.a.createElement(l,{className:Object(le.a)(a.icon,a.iconStatus)}),i);return h.a.createElement(ue.a,{open:c,onClose:o,autoHideDuration:u},h.a.createElement(de.a,{className:Object(le.a)(a[s],n),message:d,action:[h.a.createElement(fe.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},h.a.createElement(Oe.a,{className:a.icon}))]}))};je.SUCCESS="success",je.ERROR="error",je.defaultProps={message:null,className:"",status:je.INFO="info",onClose:function(){}};var Re=Object(pe.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:me.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(je),Ne=n(32),De=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},Pe=function(){var e=Object(E.a)(k.a.mark((function e(t,n){var a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(a=e.sent,i=Object(r.a)({},a.headers.has("X-Total-Count")?{"X-Total-Count":parseInt(a.headers.get("X-Total-Count"),10)}:{}),!(a.status>=200&&a.status<300)){e.next=12;break}return e.next=7,a.json();case 7:e.t1=e.sent,e.t2=i,e.t0={data:e.t1,headers:e.t2},e.next=13;break;case 12:e.t0=Promise.reject(new Error(a.statusText||a.status));case 13:return e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length?e.filter((function(e){return e.field&&e.operator})).reduce((function(e,t){switch(t.operator){case"specified":return[].concat(Object(Ne.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=true")]);case"unspecified":return[].concat(Object(Ne.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=false")])}return[].concat(Object(Ne.a)(e),["".concat(encodeURIComponent("".concat(t.field,".").concat(t.operator)),"=").concat(encodeURIComponent(t.value))])}),[]).join("&"):""},Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=!(!t&&!n),r="".concat(t).concat(t?"&":"").concat(n);return"".concat(e).concat(a?"?".concat(r):"")},xe=function(){var e=Object(E.a)(k.a.mark((function e(t,n){var a,i,o,c,s,l,u;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.filters,i=void 0===a?[]:a,o=n.pagination,c=Fe(i),s=o?"page=".concat(o.page,"&size=").concat(o.rowsPerPage):"",l=Se("".concat(t,"/").concat("statements"),c,s),u=Object(r.a)({},De(),{method:"GET"}),e.abrupt("return",Pe(l,u));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Te=function(){var e=Object(E.a)(k.a.mark((function e(t,n){var a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("statements"),i=Object(r.a)({},De(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",Pe(a,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ae=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},Ie=function(){var e=Object(E.a)(k.a.mark((function e(t,n){var a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(a=e.sent,i=Object(r.a)({},a.headers.has("X-Total-Count")?{"X-Total-Count":parseInt(a.headers.get("X-Total-Count"),10)}:{}),!(a.status>=200&&a.status<300)){e.next=12;break}return e.next=7,a.json();case 7:e.t1=e.sent,e.t2=i,e.t0={data:e.t1,headers:e.t2},e.next=13;break;case 12:e.t0=Promise.reject(new Error(a.statusText||a.status));case 13:return e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length?e.filter((function(e){return e.field&&e.operator})).reduce((function(e,t){switch(t.operator){case"specified":return[].concat(Object(Ne.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=true")]);case"unspecified":return[].concat(Object(Ne.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=false")])}return[].concat(Object(Ne.a)(e),["".concat(encodeURIComponent("".concat(t.field,".").concat(t.operator)),"=").concat(encodeURIComponent(t.value))])}),[]).join("&"):""},Ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=!(!t&&!n),r="".concat(t).concat(t?"&":"").concat(n);return"".concat(e).concat(a?"?".concat(r):"")},ze=function(){var e=Object(E.a)(k.a.mark((function e(t,n){var a,i,o,c,s,l,u;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.filters,i=void 0===a?[]:a,o=n.pagination,c=Me(i),s=o?"page=".concat(o.page,"&size=").concat(o.rowsPerPage):"",l=Ue("".concat(t,"/").concat("alerts"),c,s),u=Object(r.a)({},Ae(),{method:"GET"}),e.abrupt("return",Ie(l,u));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Be=function(){var e=Object(E.a)(k.a.mark((function e(t,n){var a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("alerts"),i=Object(r.a)({},Ae(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",Ie(a,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Le="viewstatements",He="managealerts",Je=function(e){var t;switch(e){case Le:t=Te;break;case He:t=Be;break;default:t=new Error("Error! Unknown api :".concat(e))}return t},Xe=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onMount=function(){var e=a.props,t=e.icon,n=e.onError,r=e.t,i=e.keycloak,o=e.serviceUrl,c=a.state,s=c.descriptionFilter,l=c.rangeFilter,u=function(e){var t;switch(e){case Le:t=xe;break;case He:t=ze;break;default:t=new Error("Error! Unknown api :".concat(e))}return t}(t),d=i.initialized&&i.authenticated,m=i.idTokenParsed.preferred_username,p=[{field:"userId",operator:"equals",value:m}];s&&p.push({field:"description",operator:"contains",value:s}),l&&(p.push({field:"createdAt",operator:"lessThanOrEqual",value:l.dateB}),p.push({field:"createdAt",operator:"greaterThanOrEqual",value:l.dateA})),d&&(m?u(o,{filters:p}).then((function(e){var t=e.data.slice().sort((function(e,t){var n=new Date(e.createdAt),a=new Date(t.createdAt)-n;return 0===a&&(a=e.description.localeCompare(t.description)),a}));a.setState({data:t})})).catch((function(e){n(e),a.setState({notificationStatus:Re.ERROR,notificationMessage:r("common.couldNotFetchData")})})).finally((function(){return a.setState({loading:!1})})):a.setState({loading:!1,notificationStatus:Re.ERROR,notificationMessage:r("common.missingId")}))},a.state={modalOpen:!1,loading:!0,notificationStatus:null,notificationMessage:null,descriptionFilter:null,rangeFilter:null},a.toggleModal=a.toggleModal.bind(Object(O.a)(a)),a.putDocumentRead=a.putDocumentRead.bind(Object(O.a)(a)),a.closeNotification=a.closeNotification.bind(Object(O.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(O.a)(a)),a.onChangeRangeFilter=a.onChangeRangeFilter.bind(Object(O.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.onMount()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.keycloak,a=this.state,r=a.descriptionFilter,i=a.rangeFilter,o=n.initialized&&n.authenticated,c=e.keycloak.authenticated!==o,s=t.descriptionFilter!==r,l=t.rangeFilter!==i;o&&(c||s||l)&&this.onMount()}},{key:"onChangeDescription",value:function(e){this.setState({descriptionFilter:e})}},{key:"onChangeRangeFilter",value:function(e){this.setState({rangeFilter:e})}},{key:"closeNotification",value:function(){this.setState({notificationStatus:null,notificationMessage:null})}},{key:"putDocumentRead",value:function(){var e=Object(E.a)(k.a.mark((function e(t){var n,a,r,i,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,a=n.icon,r=n.t,i=n.serviceUrl,o=Je(a),e.prev=2,e.next=5,o(i,t);case 5:e.sent&&this.onMount(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({notificationStatus:Re.ERROR,notificationMessage:r("common.couldNotFetchData")});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"toggleModal",value:function(){this.setState((function(e){return{modalOpen:!e.modalOpen}}))}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.title,a=e.keycloak,r=e.t,i=this.state,o=i.modalOpen,c=i.data,s=i.loading,l=i.notificationStatus,u=i.notificationMessage;return h.a.createElement(re.a,{theme:this.theme},h.a.createElement(se,{keycloak:a},r("common.notAuthenticated")),h.a.createElement(ce,{keycloak:a},s&&r("common.loading"),!s&&h.a.createElement(ae,{icon:t,title:n,modalOpen:o,toggleModal:this.toggleModal,data:c,putDocumentRead:this.putDocumentRead,onChangeDescription:this.onChangeDescription,onChangeRangeFilter:this.onChangeRangeFilter})),h.a.createElement(Re,{status:l,message:u,onClose:this.closeNotification}))}}]),n}(h.a.PureComponent);Xe.defaultProps={icon:"",title:"",onError:function(){}};var We,Ke=(We=Object(o.b)()(Xe),function(e){return h.a.createElement(b.Consumer,null,(function(t){return h.a.createElement(We,Object.assign({},e,{keycloak:t}))}))}),_e=function(){return window&&window.entando&&window.entando.keycloak&&Object(r.a)({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},qe={icon:"icon",title:"title",serviceUrl:"service-url"},Ge=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).mountPoint=null,e.unsubscribeFromKeycloakEvent=null,e.keycloak=_e(),e}return Object(u.a)(n,[{key:"attributeChangedCallback",value:function(e,t,n){if(!Object.values(qe).includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.mountPoint&&n!==t&&this.render()}},{key:"connectedCallback",value:function(){var e=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint);var t,n,a=this.getAttribute("locale")||"en";i.a.changeLanguage(a),this.keycloak=Object(r.a)({},_e(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Object(r.a)({},_e(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.render()}},{key:"render",value:function(){var e=this.getAttribute(qe.serviceUrl),t=this.getAttribute(qe.icon),n=this.getAttribute(qe.title);v.a.render(h.a.createElement(b.Provider,{value:this.keycloak},h.a.createElement(Ke,{serviceUrl:e,icon:t,title:n})),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}],[{key:"observedAttributes",get:function(){return Object.values(qe)}}]),n}(Object(p.a)(HTMLElement));customElements.get("sd-alert-bar-icon")||customElements.define("sd-alert-bar-icon",Ge);var Ve=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,i=t.value;r.setState(Object(a.a)({},n,i))},r.state={icon:"",title:""},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.icon,a=t.title;return h.a.createElement("div",null,h.a.createElement("h1",null,"Alert Bar Icon Configuration"),h.a.createElement("div",null,h.a.createElement("label",{htmlFor:"icon"},"Icon"),h.a.createElement("select",{name:"icon",value:n,onChange:function(t){return e.handleChange(t)}},h.a.createElement("option",{value:""},"Select a value"),Object.entries(I).map((function(e){return h.a.createElement("option",{key:e[0],value:e[0]},e[[0]])})))),h.a.createElement("div",null,h.a.createElement("label",{htmlFor:"title"},"Title (String)"),h.a.createElement("input",{name:"title",value:a,type:"text",onChange:function(t){return e.handleChange(t)}})))}}]),n}(f.Component),Ye=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).newConfig={},e.container=null,e.reactRootRef=h.a.createRef(),e}return Object(u.a)(n,[{key:"connectedCallback",value:function(){this.container=document.createElement("div"),this.appendChild(this.container),this.render()}},{key:"render",value:function(){var e=this.getAttribute("locale")||"en";i.a.changeLanguage(e),v.a.render(h.a.createElement(Ve,{ref:this.reactRootRef,config:Object.keys(this.newConfig)?this.newConfig:this.config}),this.container)}},{key:"config",get:function(){var e=this.reactRootRef.current?this.reactRootRef.current.state.config:{};return Object.keys(e).forEach((function(t){e[t]="string"===typeof e[t]?e[t]:JSON.stringify(e[t])})),e},set:function(e){this.newConfig=e,this.render()}}]),n}(Object(p.a)(HTMLElement));customElements.get("sd-alert-bar-icon-config")||customElements.define("sd-alert-bar-icon-config",Ye)},68:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not get data for this user","widgetName":"{{widgetNamePlaceholder}}","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide user ID","notAuthenticated":"Waiting for authorization...","download":"Download file"},"entities":{"item":{"id":"ID","accountNumber":"entities.item.accountNumber","balance":"entities.item.balance","userId":"entities.item.userId"}}}')},69:function(e,t,n){e.exports=n.p+"static/media/investments.e40160bb.svg"},70:function(e,t,n){e.exports=n.p+"static/media/managealerts.c93a3064.svg"},71:function(e,t,n){e.exports=n.p+"static/media/paybills.955e0527.svg"},72:function(e,t,n){e.exports=n.p+"static/media/sendmoney.e86b26c5.svg"},73:function(e,t,n){e.exports=n.p+"static/media/transfermoney.98b87291.svg"},74:function(e,t,n){e.exports=n.p+"static/media/viewstatements.7aebe259.svg"},75:function(e,t,n){e.exports=n.p+"static/media/Entando_Development_Methodology.dc5129ba.pdf"},83:function(e,t,n){e.exports=n(111)},84:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.bceb70e4.chunk.js.map