(this.webpackJsonpscenario_tool=this.webpackJsonpscenario_tool||[]).push([[0],{125:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c);a(125),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,l=a(102),s=a(18),d=a(11),j=a(17),u=a(13),p=a(46),h=a(63);!function(e){e.SUCCESS="success",e.WARNING="warning",e.ERROR="error"}(o||(o={}));var b,g,x,f,O,m,v,y,k,I,w,T,S,C,L,E,P,N,R,A,H,K,M,_,B,J,z,G,U,q,V,W="StorageKeyScenario",D="StorageKeyAutoSaveCationModal",F="HAKOGAKI(\u03b2) \u5c0f\u8aac\u30fb\u811a\u672c\u306e\u7bb1\u66f8\u304d\u652f\u63f4\u30a2\u30d7\u30ea",Y="HAKOGAKI\u306f\u7bb1\u66f8\u304d\u3092\u652f\u63f4\u3059\u308b\u30a2\u30d7\u30ea\u3067\u3059\u3002\u5c0f\u8aac\u30fb\u811a\u672c\u30fb\u8ad6\u6587\u306a\u3069\u3067\u3001\u30d7\u30ed\u30c3\u30c8\u3068\u672c\u6587\u3092\u540c\u6642\u306b\u7de8\u96c6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u69cb\u6210\u3092\u7df4\u308a\u306a\u304c\u3089\u7269\u8a9e\u3092\u5275\u4f5c\u3067\u304d\u307e\u3059\u3002\u9032\u6357\u3084Todo\u306e\u7ba1\u7406\u6a5f\u80fd\u3082\u642d\u8f09\u3002",$={formatVersion:1,title:"",paragraphList:[{subTitle:"",text:"",memo:"",todo:[{text:"",checked:!1},{text:"",checked:!1},{text:"",checked:!1}]}],old:[]},Q=Object(h.b)({name:"scenario",initialState:$,reducers:{load:function(e,t){var a=t.payload.scenario;a.formatVersion<1&&window.alert("\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u53e4\u304f\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3002"),e.title=a.title,e.paragraphList=a.paragraphList,e.old=a.paragraphList},deleteScenario:function(e){var t={formatVersion:1,title:"",paragraphList:[{subTitle:"",text:"",memo:"",todo:[{text:"",checked:!1},{text:"",checked:!1},{text:"",checked:!1}]}],old:[]};e.title=t.title,e.paragraphList=t.paragraphList,e.old=t.paragraphList},addParagraph:function(e){e.paragraphList.push({subTitle:"",text:"",memo:"",todo:[{text:"",checked:!1},{text:"",checked:!1},{text:"",checked:!1}]})},deleteParagraph:function(e,t){e.paragraphList.splice(t.payload.paragraphId,1)},changeTitle:function(e,t){e.title=t.payload.title},changeSubTitle:function(e,t){e.paragraphList[t.payload.paragraphId].subTitle=t.payload.subTitle},changeText:function(e,t){e.paragraphList[t.payload.paragraphId].text=t.payload.text},addTodo:function(e,t){e.paragraphList[t.payload.paragraphId].todo.push({text:"",checked:!1})},deleteTodo:function(e,t){e.paragraphList[t.payload.paragraphId].todo.splice(t.payload.todoId,1)},changeTodoText:function(e,t){e.paragraphList[t.payload.paragraphId].todo[t.payload.todoId].text=t.payload.text},toggleTodo:function(e,t){var a=e.paragraphList[t.payload.paragraphId].todo[t.payload.todoId].checked;e.paragraphList[t.payload.paragraphId].todo[t.payload.todoId].checked=!a},changeMemo:function(e,t){e.paragraphList[t.payload.paragraphId].memo=t.payload.memo}}}),X=a(32),Z=a(33),ee=function(){function e(){Object(X.a)(this,e),this.timer={},this.interval={}}return Object(Z.a)(e,[{key:"setTimer",value:function(e,t,a){"undefined"===typeof this.timer[e]?this.timer[e]=setTimeout(t,a):alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u3067\u3059\u3002")}},{key:"clearTimer",value:function(e){"undefined"!=typeof this.timer[e]?clearTimeout(this.timer[e]):alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u3067\u3059\u3002")}},{key:"setInterval",value:function(e){function t(t,a,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,a){"undefined"===typeof this.interval[e]?this.interval[e]=setInterval(t,a):alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u3067\u3059\u3002")}))},{key:"clearInterval",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){"undefined"!=typeof this.interval[e]?clearInterval(this.interval[e]):alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u3067\u3059\u3002")}))}]),e}(),te=new ee,ae=new(function(){function e(){Object(X.a)(this,e),this.valid=void 0,this.valid="undefined"!==typeof window.localStorage}return Object(Z.a)(e,[{key:"save",value:function(e,t){this.valid&&localStorage.setItem(e,t)}},{key:"load",value:function(e){if(this.valid)return localStorage.getItem(e)}},{key:"remove",value:function(e){if(this.valid)return localStorage.removeItem(e)}}]),e}()),ne=new(function(){function e(){Object(X.a)(this,e)}return Object(Z.a)(e,[{key:"pageview",value:function(e){window.gtagPageview&&window.gtagPageview(e)}}]),e}()),re=a(71),ce=a(2),ie=function(e){return Object(ce.jsxs)(re.a,{children:[Object(ce.jsx)("title",{children:F}),Object(ce.jsx)("meta",{name:"description",content:Y}),Object(ce.jsx)("meta",{property:"og:title",content:F}),Object(ce.jsx)("meta",{property:"og:description",content:Y}),Object(ce.jsx)("meta",{property:"og:type",content:"website"}),Object(ce.jsx)("meta",{property:"og:url",content:"https://tkawabat.github.io/scenario_tool/build/index.html#/hakogaki"}),Object(ce.jsx)("meta",{property:"og:image",content:"https://tkawabat.github.io/scenario_tool/hakogaki_ogimage.png"}),Object(ce.jsx)("meta",{property:"og:site_name",content:F}),Object(ce.jsx)("meta",{property:"og:locale",content:"ja_JP"}),Object(ce.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(ce.jsx)("meta",{name:"twitter:site",content:"@MatchingRandom"})]})},oe=a(215),le=a(219),se=a(220),de=a(205),je=u.a.textarea(b||(b=Object(d.a)(["\n    height: 400px;\n"]))),ue=function(e){var t=Object(j.b)();return Object(ce.jsx)(je,{placeholder:"\u672c\u6587\u3092\u5165\u529b",onChange:function(a){var n={paragraphId:e.paragraphId,text:a.target.value};t(Q.actions.changeText(n))},value:e.text})},pe=u.a.div(g||(g=Object(d.a)(["\n        \n"]))),he=function(e){return Object(ce.jsx)(pe,{children:e.text.length})},be=u.a.textarea(x||(x=Object(d.a)(["\n    height: 100%;\n"]))),ge=function(e){var t=Object(j.c)((function(t){return t.scenario.paragraphList[e.id].memo})),a=Object(j.b)();return Object(ce.jsx)(be,{placeholder:"\u30e1\u30e2\u3092\u5165\u529b",onChange:function(t){var n={paragraphId:e.id,memo:t.target.value};a(Q.actions.changeMemo(n))},value:t})},xe=u.a.div(f||(f=Object(d.a)(["\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),fe=function(e){var t=e.children;return Object(ce.jsx)(xe,{children:t})},Oe=u.a.div(O||(O=Object(d.a)(["\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: flex-start;\n    margin-left: 20px;\n"]))),me=function(e){var t=e.children;return Object(ce.jsx)(Oe,{children:t})},ve=u.a.div(m||(m=Object(d.a)(["\n    display: flex;\n    flex: 1;\n    align-content: center;\n    justify-content: flex-end;\n    margin-right: 20px;\n"]))),ye=function(e){var t=e.children;return Object(ce.jsx)(ve,{children:t})},ke=a(211),Ie=Object(u.a)(ke.a)(v||(v=Object(d.a)(["\n"]))),we=function(e){var t=Object(j.b)();return Object(ce.jsx)(Ie,{variant:"standard",placeholder:"\u6bb5\u843d\u306e\u30bf\u30a4\u30c8\u30eb",onChange:function(a){var n={paragraphId:e.paragraphId,subTitle:a.target.value};t(Q.actions.changeSubTitle(n))},onClick:function(e){e.stopPropagation()},value:e.subTitle})},Te=a(218),Se=a(210),Ce=a(203),Le=new(function(){function e(){Object(X.a)(this,e)}return Object(Z.a)(e,[{key:"isParagraphEmpty",value:function(e){return!(e.subTitle.length>0)&&(!(e.text.length>0)&&(!(e.memo.length>0)&&!e.todo.some((function(e){return e.text.length>0}))))}},{key:"getTextLength",value:function(e){return e.reduce((function(e,t){return e+t.text.length}),0)}},{key:"getCheckedTodoNum",value:function(e){var t=function(e,t){return e+(t.checked?1:0)};return e.reduce((function(e,a){return e+a.todo.reduce(t,0)}),0)}},{key:"getTitle",value:function(e){return e.title?e.title:"\u30bf\u30a4\u30c8\u30eb\u672a\u5b9a"}},{key:"getScenarioText",value:function(e){return(e.title?e.title+"\r\n\r\n":"")+e.paragraphList.map((function(e){return(e.subTitle?e.subTitle+"\r\n\r\n":"")+e.text+"\r\n\r\n"})).join("\r\n\r\n")}},{key:"getProgress",value:function(e){var t=[],a=this.getTextLength(e.old),n=this.getTextLength(e.paragraphList),r=this.getCheckedTodoNum(e.old),c=this.getCheckedTodoNum(e.paragraphList);if(a<n){var i=n-a;t.push("\u3010\u9032\u6357\u3011"+i+"\u6587\u5b57\u66f8\u304d\u307e\u3057\u305f\u3002")}if(r<c){var o=c-r;t.push("\u3010\u9032\u6357\u3011"+o+"\u500b\u306eTodo\u3092\u5b8c\u4e86\u3055\u305b\u307e\u3057\u305f\u3002")}return t}}]),e}()),Ee=(Object(u.a)(Te.a)(y||(y=Object(d.a)(["\n    \n"]))),function(e){var t=Object(j.b)();return Object(ce.jsx)(Se.a,{title:"\u6bb5\u843d\u3092\u524a\u9664",arrow:!0,children:Object(ce.jsx)(Te.a,{size:"small",onClick:function(a){var n={paragraphId:e.paragraphId};(Le.isParagraphEmpty(e.paragraph)||confirm("\u6bb5\u843d\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))&&t(Q.actions.deleteParagraph(n)),a.stopPropagation()},children:Object(ce.jsx)(Ce.a,{})})})}),Pe=u.a.div(k||(k=Object(d.a)(["\n    display: flex;\n    width: 100%;\n"]))),Ne=Object(u.a)(we)(I||(I=Object(d.a)(["\n    width: 70%;\n"]))),Re=function(e){return Object(ce.jsxs)(Pe,{children:[Object(ce.jsx)(me,{children:Object(ce.jsx)(Ne,{paragraphId:e.paragraphId,subTitle:e.paragraph.subTitle})}),Object(ce.jsx)(fe,{}),Object(ce.jsx)(ye,{children:Object(ce.jsx)(Ee,{paragraphId:e.paragraphId,paragraph:e.paragraph})})]})},Ae=a(204),He=Object(u.a)(Te.a)(w||(w=Object(d.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n"]))),Ke=function(e){var t=Object(j.b)();return Object(ce.jsx)(He,{onClick:function(){var a={paragraphId:e.paragraphId};t(Q.actions.addTodo(a))},children:Object(ce.jsx)(Ae.a,{})})},Me=a(214),_e=u.a.div(T||(T=Object(d.a)(["\n    display: flex;\n    align-self: flex-start;\n    width: 100%;\n"]))),Be=Object(u.a)(ke.a)(S||(S=Object(d.a)(["\n    width: 100%;\n"]))),Je=function(e){var t=Object(j.b)();return Object(ce.jsxs)(_e,{children:[Object(ce.jsx)(Se.a,{title:"\u5b8c\u4e86",arrow:!0,children:Object(ce.jsx)(Me.a,{checked:e.todo.checked,onClick:function(){var a={paragraphId:e.paragraphId,todoId:e.todoId};t(Q.actions.toggleTodo(a))}})}),Object(ce.jsx)(Be,{variant:"standard",placeholder:"Todo",value:e.todo.text,onChange:function(a){var n={paragraphId:e.paragraphId,todoId:e.todoId,text:a.target.value};t(Q.actions.changeTodoText(n))}}),Object(ce.jsx)(Se.a,{title:"Todo\u3092\u524a\u9664",arrow:!0,children:Object(ce.jsx)(Te.a,{size:"small",onClick:function(){var a={paragraphId:e.paragraphId,todoId:e.todoId};t(Q.actions.deleteTodo(a))},children:Object(ce.jsx)(Ce.a,{})})})]})},ze=u.a.div(C||(C=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Ge=function(e){var t=e.todoList.map((function(t,a){return Object(ce.jsx)(Je,{paragraphId:e.paragraphId,todoId:a,todo:t},a)}));return Object(ce.jsxs)(ze,{className:"todoArea",children:[t,Object(ce.jsx)(Ke,{paragraphId:e.paragraphId})]})},Ue=Object(u.a)(oe.a)(L||(L=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 95%;\n    justify-content: space-between;\n    margin-top: 10px;\n"]))),qe=Object(u.a)(le.a)(E||(E=Object(d.a)(["\n    width: 97%;\n    \n"]))),Ve=Object(u.a)(se.a)(P||(P=Object(d.a)(["\n    display: flex;\n    width: 95%;\n    justify-content: space-between;\n    margin-top: 10px;\n"]))),We=u.a.div(N||(N=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 74%;\n"]))),De=u.a.div(R||(R=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 24%;\n"]))),Fe=r.a.memo(Re),Ye=r.a.memo(Ge),$e=r.a.memo(ge),Qe=function(e){return Object(ce.jsxs)(Ue,{className:"paragraph",children:[Object(ce.jsx)(qe,{expandIcon:Object(ce.jsx)(de.a,{}),children:Object(ce.jsx)(Fe,{paragraphId:e.paragraphId,paragraph:e.paragraph})}),Object(ce.jsxs)(Ve,{children:[Object(ce.jsxs)(We,{children:[Object(ce.jsx)(ue,{paragraphId:e.paragraphId,text:e.paragraph.text}),Object(ce.jsx)(he,{text:e.paragraph.text})]}),Object(ce.jsxs)(De,{children:[Object(ce.jsx)(Ye,{paragraphId:e.paragraphId,todoList:e.paragraph.todo}),Object(ce.jsx)($e,{id:e.paragraphId})]})]})]})},Xe=(Object(u.a)(Te.a)(A||(A=Object(d.a)(["\n    \n"]))),function(e){var t=Object(j.b)();return Object(ce.jsx)(Se.a,{title:"\u30b7\u30ca\u30ea\u30aa\u3092\u524a\u9664",arrow:!0,children:Object(ce.jsx)(Te.a,{size:"small",onClick:function(e){confirm("\u30b7\u30ca\u30ea\u30aa\u3092\u5168\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&t(Q.actions.deleteScenario())},children:Object(ce.jsx)(Ce.a,{})})})}),Ze=a(90),et=a.n(Ze),tt=a(100),at=a(206),nt=(Object(u.a)(Te.a)(H||(H=Object(d.a)(["\n    \n"]))),function(e){var t=Object(p.b)().enqueueSnackbar,a=Object(j.b)(),n=function(){var e=Object(tt.a)(et.a.mark((function e(n){var r,c,i;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.files){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.target.files[0].text();case 4:r=e.sent;try{c=JSON.parse(r),i={scenario:c},a(Q.actions.load(i)),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f\u3002",t("\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f\u3002",{variant:o.SUCCESS})}catch(l){"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u5f62\u5f0f\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002",t("\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u5f62\u5f0f\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002",{variant:o.ERROR})}n.target.value="";case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ce.jsx)(Se.a,{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8aad\u8fbc",arrow:!0,children:Object(ce.jsxs)(Te.a,{component:"label",children:[Object(ce.jsx)(at.a,{}),Object(ce.jsx)("input",{type:"file",hidden:!0,accept:".json",onChange:n})]})})}),rt=a(14),ct=a(105),it=a(216),ot=a(207),lt=new(function(){function e(){Object(X.a)(this,e)}return Object(Z.a)(e,[{key:"download",value:function(e,t){var a=document.createElement("a");a.download=e,a.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),a.dataset.downloadurl=["text/plain",a.download,a.href].join(":"),a.click()}}]),e}()),st=u.a.div(K||(K=Object(d.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n"]))),dt=function(e){var t=Object(p.b)().enqueueSnackbar,a=Object(j.c)((function(e){return e.scenario})),n=r.a.useState(null),c=Object(rt.a)(n,2),i=c[0],l=c[1],s=Boolean(i),d=function(){l(null)};return Object(ce.jsxs)(st,{children:[Object(ce.jsx)(Se.a,{title:"\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58",arrow:!0,children:Object(ce.jsx)(Te.a,{"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":Boolean(i)?"true":void 0,onClick:function(e){l(e.currentTarget)},children:Object(ce.jsx)(ot.a,{})})}),Object(ce.jsxs)(ct.a,{id:"basic-menu",anchorEl:i,open:s,onClose:d,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(ce.jsx)(it.a,{onClick:function(){var e=Le.getTitle(a)+".json";lt.download(e,JSON.stringify(a)),d(),Le.getProgress(a).forEach((function(e){t(e,{variant:o.SUCCESS})}))},children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u4fdd\u5b58"}),Object(ce.jsx)(it.a,{onClick:function(){var e=Le.getTitle(a)+".txt";lt.download(e,Le.getScenarioText(a)),d()},children:"\u4f5c\u54c1\u3068\u3057\u3066\u4fdd\u5b58"})]})]})},jt=a(221),ut=a(208),pt=u.a.div(M||(M=Object(d.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n"]))),ht=function(e){var t=r.a.useState(null),a=Object(rt.a)(t,2),n=a[0],c=a[1],i=Boolean(n);return Object(ce.jsxs)(pt,{children:[Object(ce.jsx)(Se.a,{title:"\u30d8\u30eb\u30d7",arrow:!0,children:Object(ce.jsx)(Te.a,{"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":Boolean(n)?"true":void 0,onClick:function(e){c(e.currentTarget)},children:Object(ce.jsx)(ut.a,{})})}),Object(ce.jsx)(ct.a,{id:"basic-menu",anchorEl:n,open:i,onClose:function(){c(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:Object(ce.jsx)(jt.a,{href:"https://peing.net/ja/matchingrandom",color:"inherit",underline:"none",children:Object(ce.jsx)(it.a,{children:"\u304a\u554f\u3044\u5408\u308f\u305b"})})})]})},bt=a(101),gt=Object(u.a)(ke.a)(_||(_=Object(d.a)(["\n"]))),xt=function(e){var t=Object(j.b)();return Object(ce.jsx)(gt,Object(bt.a)({variant:"standard",className:"scenarioTitle",placeholder:"\u4f5c\u54c1\u30bf\u30a4\u30c8\u30eb",onChange:function(e){var a={title:e.target.value};t(Q.actions.changeTitle(a))},value:e.title},e))},ft=u.a.div(B||(B=Object(d.a)(["\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #D7E6EF;\n    margin-bottom: 10px;\n"]))),Ot=u.a.span(J||(J=Object(d.a)(['\n    font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n']))),mt=function(e){return Object(ce.jsxs)(ft,{className:"header",children:[Object(ce.jsx)(me,{children:Object(ce.jsx)(Ot,{children:"HAKOGAKI(\u03b2)"})}),Object(ce.jsx)(fe,{children:Object(ce.jsx)(xt,{title:e.title})}),Object(ce.jsxs)(ye,{children:[Object(ce.jsx)(Xe,{}),Object(ce.jsx)(nt,{}),Object(ce.jsx)(dt,{}),Object(ce.jsx)(ht,{})]})]})},vt=Object(u.a)(Te.a)(z||(z=Object(d.a)(["\n    \n"]))),yt=function(e){var t=Object(j.b)();return Object(ce.jsx)(Se.a,{title:"\u6bb5\u843d\u3092\u8ffd\u52a0",arrow:!0,children:Object(ce.jsx)(vt,{onClick:function(){return t(Q.actions.addParagraph())},children:Object(ce.jsx)(Ae.a,{})})})},kt=a(223),It=a(224),wt=a(212),Tt=a(222),St={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:300,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},Ct=Object(u.a)(kt.a)(G||(G=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n"]))),Lt=Object(u.a)(It.a)(U||(U=Object(d.a)(["\n    display: flex;\n    align-self: flex-end;\n    width: 120px;\n"]))),Et=u.a.div(q||(q=Object(d.a)(["\n    margin-top: 10px;\n    margin-bottom: 10px;\n"]))),Pt=n.forwardRef((function(e,t){var a=n.useState(!1),r=Object(rt.a)(a,2),c=r[0],i=r[1];return n.useImperativeHandle(t,(function(){return{open:function(){"1"!=ae.load(D)&&i(!0)}}})),Object(ce.jsx)("div",{children:Object(ce.jsx)(wt.a,{open:c,onClose:function(){return i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(ce.jsxs)(Ct,{sx:St,children:[Object(ce.jsx)(Tt.a,{variant:"h6",component:"h4",children:"\u6ce8\u610f"}),Object(ce.jsx)(Et,{children:"\u30b7\u30ca\u30ea\u30aa\u306f\u5b9a\u671f\u7684\u306b\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3092\u30aa\u30b9\u30b9\u30e1\u3057\u307e\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u306b\u81ea\u52d5\u4fdd\u5b58\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u4e88\u671f\u305b\u306c\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u6d88\u3048\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"}),Object(ce.jsx)(Lt,{variant:"text",size:"small",onClick:function(){ae.save(D,"1"),i(!1)},children:"\u6b21\u304b\u3089\u8868\u793a\u3057\u306a\u3044"})]})})})})),Nt=u.a.div(V||(V=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Rt=r.a.memo(mt),At=r.a.memo(Qe),Ht=r.a.memo(yt),Kt=function(e){var t=Object(p.b)().enqueueSnackbar,a=Object(j.b)(),c=Object(j.c)((function(e){return e.scenario})),i=c.paragraphList.map((function(e,t){return Object(ce.jsx)(At,{paragraphId:t,paragraph:e},t)})),l=r.a.useRef({}),s=Object(n.useRef)(c);Object(n.useEffect)((function(){s.current=c}),[c]);return Object(n.useEffect)((function(){!function(){var e=ae.load(W);if("string"==typeof e)try{var n={scenario:JSON.parse(e)};a(Q.actions.load(n)),t("\u524d\u56de\u306e\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f\u3002",{variant:o.SUCCESS}),l.current.open()}catch(r){ae.remove(W)}}(),te.setInterval("TimerSaveProject",(function(){ae.save(W,JSON.stringify(s.current))}),2e3),ne.pageview("hakogaki")}),[]),Object(ce.jsxs)(r.a.Fragment,{children:[Object(ce.jsx)(ie,{}),Object(ce.jsxs)(Nt,{className:"App",children:[Object(ce.jsx)(Rt,{title:c.title}),i,Object(ce.jsx)(Ht,{})]}),Object(ce.jsx)(Pt,{ref:l})]})},Mt=function(){return Object(ce.jsx)(l.a,{basename:"/scenario_tool/",children:Object(ce.jsx)(s.c,{children:Object(ce.jsx)(s.a,{path:"/hakogaki",component:Kt})})})},_t=a(41),Bt=Object(_t.b)({scenario:Q.reducer}),Jt=Object(h.a)({reducer:Bt}),zt=function(e){var t=e.children;return Object(ce.jsx)(j.a,{store:Jt,children:Object(ce.jsx)(p.a,{autoHideDuration:5e3,children:Object(ce.jsx)(re.b,{children:t})})})};i.a.render(Object(ce.jsx)(r.a.StrictMode,{children:Object(ce.jsx)(zt,{children:Object(ce.jsx)(Mt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.fb61f289.chunk.js.map