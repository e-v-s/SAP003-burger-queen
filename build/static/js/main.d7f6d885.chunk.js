(this["webpackJsonpburger-queen"]=this["webpackJsonpburger-queen"]||[]).push([[0],{35:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(29),c=n.n(o),i=n(3);function l(){return r.a.createElement("header",{className:Object(i.b)(u.header)},r.a.createElement("img",{className:Object(i.b)(u.headerImg),src:"logo.png",alt:"Logo do estabelecimento, onde est\xe1 escrito Burger Queen"}))}var u=i.a.create({headerImg:{height:"200px",marginTop:"60px",display:"flex",justifyContent:"center"},header:{display:"flex",justifyContent:"center",alignItems:"center"}}),m=n(18),d=n(10);function s(){return r.a.createElement("div",{className:Object(i.b)(p.flex)},r.a.createElement(m.b,{to:"/menu",className:Object(i.b)(p.link)},"Sal\xe3o"),r.a.createElement(m.b,{to:"/kitchen",className:Object(i.b)(p.link)},"Cozinha"))}var p=i.a.create({link:{color:"#000",textDecoration:"none",textTransform:"uppercase",width:"300px",textAlign:"center",padding:"10px",backgroundColor:"#FEBB3E",borderRadius:"4px",fontSize:"40px",marginTop:"20px",cursor:"pointer"},flex:{display:"flex",height:"300px",flexDirection:"column",alignItems:"center",justifyContent:"center"}}),b=n(33),f=n(13),x=n(14),g=n(19),h=n.n(g),j=(h.a.initializeApp({apiKey:"AIzaSyDoa-vZyl9PIQnZTMjPj3NyHS1vHJXAw0U",authDomain:"burger-queen-c6a6b.firebaseapp.com",databaseURL:"https://burger-queen-c6a6b.firebaseio.com",projectId:"burger-queen-c6a6b",storageBucket:"burger-queen-c6a6b.appspot.com",messagingSenderId:"1062470969789",appId:"1:1062470969789:web:109ac293aad69adc10cad4"}),h.a.firestore()),E=n(12);function v(e){var t=Object(E.a)({},e);return r.a.createElement("button",Object.assign({},t,{className:Object(i.b)(O.button)}))}var O=i.a.create({button:{color:"#000",textTransform:"uppercase",textAlign:"center",padding:"30px",backgroundColor:"#FEBB3E",borderRadius:"4px",width:"300px",fontWeight:"bold",fontSize:"20px",":active":{backgroundColor:"#fcca6c",color:"#3a3a3a"},":focus":{backgroundColor:"#fcca6c",color:"#3a3a3a"},":target":{backgroundColor:"#fcca6c",color:"#3a3a3a"},"@media (max-width: 900px)":{width:"300px"}}});function k(e){var t=Object(E.a)({},e);return r.a.createElement("input",Object.assign({},t,{className:Object(i.b)(y.input)}))}var y=i.a.create({input:{border:"none",borderBottom:"1px solid #ed3936",margin:"20px",fontSize:"22px;",outline:"none",width:"300px"}}),C=n(34);function w(e){var t=e.children,n=Object(C.a)(e,["children"]);return r.a.createElement("section",Object.assign({},n,{className:Object(i.b)(S.menu)}),t)}var S=i.a.create({menu:{display:"flex",flexDirection:"column",width:"300px",fontSize:"20px",fontWeight:"bold"}});function N(e){var t=Object(E.a)({},e);return r.a.createElement("a",Object.assign({},t,{className:Object(i.b)(I.food)}),t.item.nome," ",r.a.createElement("span",{role:"img","aria-label":"emoji de hamburger"},"\ud83c\udf54")," R$ ",t.item.valor,",00")}var I=i.a.create({food:{cursor:"pointer",margin:"10px",border:"1px solid black",padding:"20px"}});function q(e){return r.a.createElement("li",{className:Object(i.b)(D.listItem)},e.item.nome," ",r.a.createElement("button",{type:"button",onClick:e.remove},"-"),e.item.quantidade,r.a.createElement("button",{type:"button",onClick:e.add},"+")," ",r.a.createElement("button",{type:"button",id:e.id,onClick:e.onClick},"X"))}var D=i.a.create({listItem:{listStyle:"none",fontSize:"30px"}});function z(e){var t=Object(a.useState)([]),n=Object(x.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)("cafe"),u=Object(x.a)(l,2),m=u[0],d=u[1],s=Object(a.useState)([]),p=Object(x.a)(s,2),g=p[0],E=p[1];Object(a.useEffect)((function(){j.collection("menu").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));c(t)})).catch((function(e){return e}))}),[]);var O=function(e){d(e.target.id)},y=g.reduce((function(e,t){return e+t.valor*t.quantidade}),0),C=Object(a.useState)(""),S=Object(x.a)(C,2),I=S[0],D=S[1],z=Object(a.useState)(0),B=Object(x.a)(z,2),M=B[0],A=B[1];return r.a.createElement("div",null,r.a.createElement("section",{className:Object(i.b)(T.exemplo)},r.a.createElement("form",{className:Object(i.b)(T.inputSection),onSubmit:function(e){e.preventDefault();var t={nomeDoCliente:I,numeroDaMesa:M,pedido:g.map((function(e){return"".concat(e.nome,", quantidade: ").concat(e.quantidade)}))};window.confirm("Enviar pedido do cliente ".concat(t.nomeDoCliente,": \n").concat(t.pedido,"?"))&&j.collection("pedidos").add({nomeDoCliente:I,numeroDaMesa:M,pedido:g.map((function(e){return"".concat(e.nome,", ").concat(e.quantidade)})),hora:h.a.firestore.FieldValue.serverTimestamp()}).then((function(){return window.location.reload()}))}},r.a.createElement(k,{type:"text",id:"costumer-name",placeholder:"Nome do Cliente",name:"client",onChange:function(e){return D(e.target.value)}}),r.a.createElement(k,{type:"number",id:"costumer-number",placeholder:"N\xfamero da mesa",name:"table",onChange:function(e){return A(e.target.value)}}),r.a.createElement("ul",{id:"order-list"},g.map((function(e,t){return r.a.createElement(q,{key:t,item:e,remove:function(){return function(e){var t=g.findIndex((function(t){return t.nome===e.nome}));g[t].quantidade--,E(Object(f.a)(g))}(e)},onClick:function(){return function(e){var t=g.findIndex((function(t){return t.nome===e.nome}));g.splice(t,1),E(Object(f.a)(g))}(e)},add:function(){return function(e){var t=g.findIndex((function(t){return t.nome===e.nome}));g[t].quantidade++,E(Object(f.a)(g))}(e)},name:"order"})}))),r.a.createElement("p",{className:Object(i.b)(T.total)},"Total: ",y),r.a.createElement(v,{children:"Enviar pedido",id:"enviar-pedido",value:"Submit",type:"submit"})),r.a.createElement("section",{className:Object(i.b)(T.buttonMenu)},r.a.createElement(v,{children:"Caf\xe9 da Manh\xe3",id:"cafe",onClick:O}),r.a.createElement(v,{children:"Lanches",id:"lanche",onClick:O}),["cafe","lanche"].filter((function(e){return e===m})).map((function(e){return r.a.createElement(w,{key:Math.random(),children:o.filter((function(t){return t.categoria===e})).map((function(e){return r.a.createElement(N,{onClick:function(){return function(e){var t=g.findIndex((function(t){return t.nome===e.nome}));-1===t?E([].concat(Object(f.a)(g),[Object(b.a)({},e,{quantidade:1})])):(g[t].quantidade++,E(Object(f.a)(g)))}(e)},item:e,key:e.nome})}))})})))))}var T=i.a.create({inputSection:{display:"flex",marginTop:"30px",flexDirection:"column",width:"400px",paddingTop:"50px",order:"2",marginRight:"60px",alignContent:"flex-start"},buttonMenu:{display:"flex",marginTop:"90px",flexDirection:"column",marginLeft:"60px",order:"1"},exemplo:{display:"flex",justifyContent:"space-around","@media (max-width: 900px)":{width:"900px"}},total:{fontSize:"20px"}});function B(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Cozinha"))}var M=function(){return r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:s}),r.a.createElement(d.a,{path:"/menu",component:z}),r.a.createElement(d.a,{path:"/kitchen",component:B})))};var A=function(){return r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.d7f6d885.chunk.js.map