(this.webpackJsonpscenario_tool=this.webpackJsonpscenario_tool||[]).push([[0],{125:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c);a(125),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,l=a(102),d=a(18),s=a(11),u=a(17),p=a(13),j=a(87),h=a(46),b=a(63),f="StorageKeyScenario";!function(e){e.SUCCESS="success",e.WARNING="warning",e.ERROR="error"}(o||(o={}));var g,x,O,v,m,y,I,k,w,T,S,C,L,E,N,P,R,A,B,H,M,z,J,U,K,G,q,V,W,_,D,F="HAKOGAKI (\u03b2)",Y={formatVersion:1,title:"",paragraphList:[{subTitle:"",text:"",memo:"",todo:[{text:"",checked:!1},{text:"",checked:!1},{text:"",checked:!1}]}],old:[]},$=Object(b.b)({name:"scenario",initialState:Y,reducers:{load:function(e,t){var a=t.payload.scenario;a.formatVersion<1&&window.alert("\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u53e4\u304f\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3002"),e.title=a.title,e.paragraphList=a.paragraphList,e.old=a.paragraphList},deleteScenario:function(e){var t={formatVersion:1,title:"",paragraphList:[{subTitle:"",text:"",memo:"",todo:[{text:"",checked:!1},{text:"",checked:!1},{text:"",checked:!1}]}],old:[]};e.title=t.title,e.paragraphList=t.paragraphList,e.old=t.paragraphList},addParagraph:function(e){e.paragraphList.push({subTitle:"",text:"",memo:"",todo:[{text:"",checked:!1},{text:"",checked:!1},{text:"",checked:!1}]})},deleteParagraph:function(e,t){e.paragraphList.splice(t.payload.paragraphId,1)},changeTitle:function(e,t){e.title=t.payload.title},changeSubTitle:function(e,t){e.paragraphList[t.payload.paragraphId].subTitle=t.payload.subTitle},changeText:function(e,t){e.paragraphList[t.payload.paragraphId].text=t.payload.text},addTodo:function(e,t){e.paragraphList[t.payload.paragraphId].todo.push({text:"",checked:!1})},deleteTodo:function(e,t){e.paragraphList[t.payload.paragraphId].todo.splice(t.payload.todoId,1)},changeTodoText:function(e,t){e.paragraphList[t.payload.paragraphId].todo[t.payload.todoId].text=t.payload.text},toggleTodo:function(e,t){var a=e.paragraphList[t.payload.paragraphId].todo[t.payload.todoId].checked;e.paragraphList[t.payload.paragraphId].todo[t.payload.todoId].checked=!a},changeMemo:function(e,t){e.paragraphList[t.payload.paragraphId].memo=t.payload.memo}}}),Q=a(32),X=a(33),Z=function(){function e(){Object(Q.a)(this,e),this.timer={},this.interval={}}return Object(X.a)(e,[{key:"setTimer",value:function(e,t,a){"undefined"===typeof this.timer[e]?this.timer[e]=setTimeout(t,a):alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u3067\u3059\u3002")}},{key:"clearTimer",value:function(e){"undefined"!=typeof this.timer[e]?clearTimeout(this.timer[e]):alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u3067\u3059\u3002")}},{key:"setInterval",value:function(e){function t(t,a,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,a){"undefined"===typeof this.interval[e]?this.interval[e]=setInterval(t,a):alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u3067\u3059\u3002")}))},{key:"clearInterval",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){"undefined"!=typeof this.interval[e]?clearInterval(this.interval[e]):alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u3067\u3059\u3002")}))}]),e}(),ee=new Z,te=new(function(){function e(){Object(Q.a)(this,e),this.valid=void 0,this.valid="undefined"!==typeof window.localStorage}return Object(X.a)(e,[{key:"save",value:function(e,t){this.valid&&localStorage.setItem(e,t)}},{key:"load",value:function(e){if(this.valid)return localStorage.getItem(e)}},{key:"remove",value:function(e){if(this.valid)return localStorage.removeItem(e)}}]),e}()),ae=new(function(){function e(){Object(Q.a)(this,e)}return Object(X.a)(e,[{key:"pageview",value:function(e){window.gtagPageview&&window.gtagPageview(e)}}]),e}()),ne=a(215),re=a(219),ce=a(220),ie=a(205),oe=a(2),le=p.a.textarea(g||(g=Object(s.a)(["\n    height: 400px;\n"]))),de=function(e){var t=Object(u.b)();return Object(oe.jsx)(le,{placeholder:"\u672c\u6587\u3092\u5165\u529b",onChange:function(a){var n={paragraphId:e.paragraphId,text:a.target.value};t($.actions.changeText(n))},value:e.text})},se=p.a.div(x||(x=Object(s.a)(["\n        \n"]))),ue=function(e){return Object(oe.jsx)(se,{children:e.text.length})},pe=p.a.textarea(O||(O=Object(s.a)(["\n    height: 100%;\n"]))),je=function(e){var t=Object(u.c)((function(t){return t.scenario.paragraphList[e.id].memo})),a=Object(u.b)();return Object(oe.jsx)(pe,{placeholder:"\u30e1\u30e2\u3092\u5165\u529b",onChange:function(t){var n={paragraphId:e.id,memo:t.target.value};a($.actions.changeMemo(n))},value:t})},he=p.a.div(v||(v=Object(s.a)(["\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),be=function(e){return Object(oe.jsx)(he,{children:e.children})},fe=p.a.div(m||(m=Object(s.a)(["\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: flex-start;\n    margin-left: 20px;\n"]))),ge=function(e){return Object(oe.jsx)(fe,{children:e.children})},xe=p.a.div(y||(y=Object(s.a)(["\n    display: flex;\n    flex: 1;\n    align-content: center;\n    justify-content: flex-end;\n    margin-right: 20px;\n"]))),Oe=function(e){return Object(oe.jsx)(xe,{children:e.children})},ve=a(211),me=Object(p.a)(ve.a)(I||(I=Object(s.a)(["\n"]))),ye=function(e){var t=Object(u.b)();return Object(oe.jsx)(me,{variant:"standard",placeholder:"\u6bb5\u843d\u306e\u30bf\u30a4\u30c8\u30eb",onChange:function(a){var n={paragraphId:e.paragraphId,subTitle:a.target.value};t($.actions.changeSubTitle(n))},onClick:function(e){e.stopPropagation()},value:e.subTitle})},Ie=a(218),ke=a(210),we=a(203),Te=new(function(){function e(){Object(Q.a)(this,e)}return Object(X.a)(e,[{key:"isParagraphEmpty",value:function(e){return!(e.subTitle.length>0)&&(!(e.text.length>0)&&(!(e.memo.length>0)&&!e.todo.some((function(e){return e.text.length>0}))))}},{key:"getTextLength",value:function(e){return e.reduce((function(e,t){return e+t.text.length}),0)}},{key:"getCheckedTodoNum",value:function(e){var t=function(e,t){return e+(t.checked?1:0)};return e.reduce((function(e,a){return e+a.todo.reduce(t,0)}),0)}},{key:"getTitle",value:function(e){return e.title?e.title:"\u30bf\u30a4\u30c8\u30eb\u672a\u5b9a"}},{key:"getScenarioText",value:function(e){return(e.title?e.title+"\r\n\r\n":"")+e.paragraphList.map((function(e){return(e.subTitle?e.subTitle+"\r\n\r\n":"")+e.text+"\r\n\r\n"})).join("\r\n\r\n")}},{key:"getProgress",value:function(e){var t=[],a=this.getTextLength(e.old),n=this.getTextLength(e.paragraphList),r=this.getCheckedTodoNum(e.old),c=this.getCheckedTodoNum(e.paragraphList);if(a<n){var i=n-a;t.push("\u3010\u9032\u6357\u3011"+i+"\u6587\u5b57\u66f8\u304d\u307e\u3057\u305f\u3002")}if(r<c){var o=c-r;t.push("\u3010\u9032\u6357\u3011"+o+"\u500b\u306eTodo\u3092\u5b8c\u4e86\u3055\u305b\u307e\u3057\u305f\u3002")}return t}}]),e}()),Se=(Object(p.a)(Ie.a)(k||(k=Object(s.a)(["\n    \n"]))),function(e){var t=Object(u.b)();return Object(oe.jsx)(ke.a,{title:"\u6bb5\u843d\u3092\u524a\u9664",arrow:!0,children:Object(oe.jsx)(Ie.a,{size:"small",onClick:function(a){var n={paragraphId:e.paragraphId};(Te.isParagraphEmpty(e.paragraph)||confirm("\u6bb5\u843d\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))&&t($.actions.deleteParagraph(n)),a.stopPropagation()},children:Object(oe.jsx)(we.a,{})})})}),Ce=p.a.div(w||(w=Object(s.a)(["\n    display: flex;\n    width: 100%;\n"]))),Le=Object(p.a)(ye)(T||(T=Object(s.a)(["\n    width: 70%;\n"]))),Ee=function(e){return Object(oe.jsxs)(Ce,{children:[Object(oe.jsx)(ge,{children:Object(oe.jsx)(Le,{paragraphId:e.paragraphId,subTitle:e.paragraph.subTitle})}),Object(oe.jsx)(be,{}),Object(oe.jsx)(Oe,{children:Object(oe.jsx)(Se,{paragraphId:e.paragraphId,paragraph:e.paragraph})})]})},Ne=a(204),Pe=Object(p.a)(Ie.a)(S||(S=Object(s.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n"]))),Re=function(e){var t=Object(u.b)();return Object(oe.jsx)(Pe,{onClick:function(){var a={paragraphId:e.paragraphId};t($.actions.addTodo(a))},children:Object(oe.jsx)(Ne.a,{})})},Ae=a(214),Be=p.a.div(C||(C=Object(s.a)(["\n    display: flex;\n    align-self: flex-start;\n    width: 100%;\n"]))),He=Object(p.a)(ve.a)(L||(L=Object(s.a)(["\n    width: 100%;\n"]))),Me=function(e){var t=Object(u.b)();return Object(oe.jsxs)(Be,{children:[Object(oe.jsx)(ke.a,{title:"\u5b8c\u4e86",arrow:!0,children:Object(oe.jsx)(Ae.a,{checked:e.todo.checked,onClick:function(){var a={paragraphId:e.paragraphId,todoId:e.todoId};t($.actions.toggleTodo(a))}})}),Object(oe.jsx)(He,{variant:"standard",placeholder:"Todo",value:e.todo.text,onChange:function(a){var n={paragraphId:e.paragraphId,todoId:e.todoId,text:a.target.value};t($.actions.changeTodoText(n))}}),Object(oe.jsx)(ke.a,{title:"Todo\u3092\u524a\u9664",arrow:!0,children:Object(oe.jsx)(Ie.a,{size:"small",onClick:function(){var a={paragraphId:e.paragraphId,todoId:e.todoId};t($.actions.deleteTodo(a))},children:Object(oe.jsx)(we.a,{})})})]})},ze=p.a.div(E||(E=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Je=function(e){var t=e.todoList.map((function(t,a){return Object(oe.jsx)(Me,{paragraphId:e.paragraphId,todoId:a,todo:t},a)}));return Object(oe.jsxs)(ze,{className:"todoArea",children:[t,Object(oe.jsx)(Re,{paragraphId:e.paragraphId})]})},Ue=Object(p.a)(ne.a)(N||(N=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 95%;\n    justify-content: space-between;\n    margin-top: 10px;\n"]))),Ke=Object(p.a)(re.a)(P||(P=Object(s.a)(["\n    width: 97%;\n    \n"]))),Ge=Object(p.a)(ce.a)(R||(R=Object(s.a)(["\n    display: flex;\n    width: 95%;\n    justify-content: space-between;\n    margin-top: 10px;\n"]))),qe=p.a.div(A||(A=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 74%;\n"]))),Ve=p.a.div(B||(B=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 24%;\n"]))),We=r.a.memo(Ee),_e=r.a.memo(Je),De=r.a.memo(je),Fe=function(e){return Object(oe.jsxs)(Ue,{className:"paragraph",children:[Object(oe.jsx)(Ke,{expandIcon:Object(oe.jsx)(ie.a,{}),children:Object(oe.jsx)(We,{paragraphId:e.paragraphId,paragraph:e.paragraph})}),Object(oe.jsxs)(Ge,{children:[Object(oe.jsxs)(qe,{children:[Object(oe.jsx)(de,{paragraphId:e.paragraphId,text:e.paragraph.text}),Object(oe.jsx)(ue,{text:e.paragraph.text})]}),Object(oe.jsxs)(Ve,{children:[Object(oe.jsx)(_e,{paragraphId:e.paragraphId,todoList:e.paragraph.todo}),Object(oe.jsx)(De,{id:e.paragraphId})]})]})]})},Ye=(Object(p.a)(Ie.a)(H||(H=Object(s.a)(["\n    \n"]))),function(e){var t=Object(u.b)();return Object(oe.jsx)(ke.a,{title:"\u30b7\u30ca\u30ea\u30aa\u3092\u524a\u9664",arrow:!0,children:Object(oe.jsx)(Ie.a,{size:"small",onClick:function(e){confirm("\u30b7\u30ca\u30ea\u30aa\u3092\u5168\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&t($.actions.deleteScenario())},children:Object(oe.jsx)(we.a,{})})})}),$e=a(90),Qe=a.n($e),Xe=a(100),Ze=a(206),et=(Object(p.a)(Ie.a)(M||(M=Object(s.a)(["\n    \n"]))),function(e){var t=Object(h.b)().enqueueSnackbar,a=Object(u.b)(),n=function(){var e=Object(Xe.a)(Qe.a.mark((function e(n){var r,c,i;return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.files){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.target.files[0].text();case 4:r=e.sent;try{c=JSON.parse(r),i={scenario:c},a($.actions.load(i)),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f\u3002",t("\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f\u3002",{variant:o.SUCCESS})}catch(l){"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u5f62\u5f0f\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002",t("\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u5f62\u5f0f\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002",{variant:o.ERROR})}n.target.value="";case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(oe.jsx)(ke.a,{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8aad\u8fbc",arrow:!0,children:Object(oe.jsxs)(Ie.a,{component:"label",children:[Object(oe.jsx)(Ze.a,{}),Object(oe.jsx)("input",{type:"file",hidden:!0,accept:".json",onChange:n})]})})}),tt=a(14),at=a(105),nt=a(216),rt=a(207),ct=new(function(){function e(){Object(Q.a)(this,e)}return Object(X.a)(e,[{key:"download",value:function(e,t){var a=document.createElement("a");a.download=e,a.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),a.dataset.downloadurl=["text/plain",a.download,a.href].join(":"),a.click()}}]),e}()),it=p.a.div(z||(z=Object(s.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n"]))),ot=function(e){var t=Object(h.b)().enqueueSnackbar,a=Object(u.c)((function(e){return e.scenario})),n=r.a.useState(null),c=Object(tt.a)(n,2),i=c[0],l=c[1],d=Boolean(i),s=function(){l(null)};return Object(oe.jsxs)(it,{children:[Object(oe.jsx)(ke.a,{title:"\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58",arrow:!0,children:Object(oe.jsx)(Ie.a,{"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":Boolean(i)?"true":void 0,onClick:function(e){l(e.currentTarget)},children:Object(oe.jsx)(rt.a,{})})}),Object(oe.jsxs)(at.a,{id:"basic-menu",anchorEl:i,open:d,onClose:s,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(oe.jsx)(nt.a,{onClick:function(){var e=Te.getTitle(a)+".json";ct.download(e,JSON.stringify(a)),s(),Te.getProgress(a).forEach((function(e){t(e,{variant:o.SUCCESS})}))},children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u4fdd\u5b58"}),Object(oe.jsx)(nt.a,{onClick:function(){var e=Te.getTitle(a)+".txt";ct.download(e,Te.getScenarioText(a)),s()},children:"\u53f0\u672c\u3068\u3057\u3066\u4fdd\u5b58"})]})]})},lt=a(221),dt=a(208),st=p.a.div(J||(J=Object(s.a)(["\n    display: flex;\n    align-content: center;\n    justify-content: center;\n"]))),ut=function(e){var t=r.a.useState(null),a=Object(tt.a)(t,2),n=a[0],c=a[1],i=Boolean(n);return Object(oe.jsxs)(st,{children:[Object(oe.jsx)(ke.a,{title:"\u30d8\u30eb\u30d7",arrow:!0,children:Object(oe.jsx)(Ie.a,{"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":Boolean(n)?"true":void 0,onClick:function(e){c(e.currentTarget)},children:Object(oe.jsx)(dt.a,{})})}),Object(oe.jsx)(at.a,{id:"basic-menu",anchorEl:n,open:i,onClose:function(){c(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:Object(oe.jsx)(lt.a,{href:"https://peing.net/ja/matchingrandom",color:"inherit",underline:"none",children:Object(oe.jsx)(nt.a,{children:"\u304a\u554f\u3044\u5408\u308f\u305b"})})})]})},pt=a(101),jt=Object(p.a)(ve.a)(U||(U=Object(s.a)(["\n"]))),ht=function(e){var t=Object(u.b)();return Object(oe.jsx)(jt,Object(pt.a)({variant:"standard",className:"scenarioTitle",placeholder:"\u4f5c\u54c1\u30bf\u30a4\u30c8\u30eb",onChange:function(e){var a={title:e.target.value};t($.actions.changeTitle(a))},value:e.title},e))},bt=p.a.div(K||(K=Object(s.a)(["\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #D7E6EF;\n    margin-bottom: 10px;\n"]))),ft=p.a.span(G||(G=Object(s.a)(['\n    font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n']))),gt=function(e){return Object(oe.jsxs)(bt,{className:"header",children:[Object(oe.jsx)(ge,{children:Object(oe.jsx)(ft,{children:F})}),Object(oe.jsx)(be,{children:Object(oe.jsx)(ht,{title:e.title})}),Object(oe.jsxs)(Oe,{children:[Object(oe.jsx)(Ye,{}),Object(oe.jsx)(et,{}),Object(oe.jsx)(ot,{}),Object(oe.jsx)(ut,{})]})]})},xt=Object(p.a)(Ie.a)(q||(q=Object(s.a)(["\n    \n"]))),Ot=function(e){var t=Object(u.b)();return Object(oe.jsx)(ke.a,{title:"\u6bb5\u843d\u3092\u8ffd\u52a0",arrow:!0,children:Object(oe.jsx)(xt,{onClick:function(){return t($.actions.addParagraph())},children:Object(oe.jsx)(Ne.a,{})})})},vt=a(223),mt=a(224),yt=a(212),It=a(222),kt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:300,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},wt=Object(p.a)(vt.a)(V||(V=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n"]))),Tt=Object(p.a)(mt.a)(W||(W=Object(s.a)(["\n    display: flex;\n    align-self: flex-end;\n    width: 120px;\n"]))),St=p.a.div(_||(_=Object(s.a)(["\n    margin-top: 10px;\n    margin-bottom: 10px;\n"]))),Ct=n.forwardRef((function(e,t){var a=n.useState(!1),r=Object(tt.a)(a,2),c=r[0],i=r[1];return n.useImperativeHandle(t,(function(){return{open:function(){"1"!=te.load("StorageKeyAutoSaveCationModal")&&i(!0)}}})),Object(oe.jsx)("div",{children:Object(oe.jsx)(yt.a,{open:c,onClose:function(){return i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(oe.jsxs)(wt,{sx:kt,children:[Object(oe.jsx)(It.a,{variant:"h6",component:"h4",children:"\u6ce8\u610f"}),Object(oe.jsx)(St,{children:"\u30b7\u30ca\u30ea\u30aa\u306f\u5b9a\u671f\u7684\u306b\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3092\u30aa\u30b9\u30b9\u30e1\u3057\u307e\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u306b\u81ea\u52d5\u4fdd\u5b58\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u4e88\u671f\u305b\u306c\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u6d88\u3048\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"}),Object(oe.jsx)(Tt,{variant:"text",size:"small",onClick:function(){i(!1)},children:"\u6b21\u304b\u3089\u8868\u793a\u3057\u306a\u3044"})]})})})})),Lt=p.a.div(D||(D=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Et=r.a.memo(gt),Nt=r.a.memo(Fe),Pt=r.a.memo(Ot),Rt=function(e){var t=Object(h.b)().enqueueSnackbar,a=Object(u.b)(),c=Object(u.c)((function(e){return e.scenario})),i=c.paragraphList.map((function(e,t){return Object(oe.jsx)(Nt,{paragraphId:t,paragraph:e},t)})),l=r.a.useRef({}),d=Object(n.useRef)(c);Object(n.useEffect)((function(){d.current=c}),[c]);return Object(n.useEffect)((function(){!function(){var e=te.load(f);if("string"==typeof e)try{var n={scenario:JSON.parse(e)};a($.actions.load(n)),t("\u524d\u56de\u306e\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f\u3002",{variant:o.SUCCESS}),l.current.open()}catch(r){te.remove(f)}}(),ee.setInterval("TimerSaveProject",(function(){te.save(f,JSON.stringify(d.current))}),2e3),ae.pageview("hakogaki")}),[]),Object(oe.jsxs)(j.b,{children:[Object(oe.jsx)(j.a,{children:Object(oe.jsx)("title",{children:F})}),Object(oe.jsxs)(Lt,{className:"App",children:[Object(oe.jsx)(Et,{title:c.title}),i,Object(oe.jsx)(Pt,{})]}),Object(oe.jsx)(Ct,{ref:l})]})},At=function(){return Object(oe.jsx)(l.a,{basename:"/scenario_tool/",children:Object(oe.jsx)(d.c,{children:Object(oe.jsx)(d.a,{path:"/hakogaki",component:Rt})})})},Bt=a(41),Ht=Object(Bt.b)({scenario:$.reducer}),Mt=Object(b.a)({reducer:Ht}),zt=function(e){return Object(oe.jsx)(u.a,{store:Mt,children:Object(oe.jsx)(h.a,{autoHideDuration:5e3,children:e.children})})};i.a.render(Object(oe.jsx)(r.a.StrictMode,{children:Object(oe.jsx)(zt,{children:Object(oe.jsx)(At,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.dfdfdcf2.chunk.js.map