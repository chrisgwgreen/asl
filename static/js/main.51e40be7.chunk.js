(this.webpackJsonpasl=this.webpackJsonpasl||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,c,i,a,o,s,u,b,l,m,d,j,f,O=t(0),p=t.n(O),h=t(9),v=t.n(h),g=(t(17),t(4)),w=t(3),x=t(1),E=function(){return String.fromCharCode(65+Math.floor(26*Math.random())).toLowerCase()},L=function(n){return"(max-width: ".concat(n,"px)")},k=("@media ".concat(L(992)),"@media ".concat(L(600)),"ontouchstart"in document.documentElement),y=function(){var n=Object(O.useState)(!1),e=Object(g.a)(n,2),t=e[0],r=e[1];return Object(O.useEffect)((function(){var n=window.matchMedia(L(992)),e=function(){r(n.matches)};return n.addEventListener?n.addEventListener("change",e):n.addListener(e),e(),function(){n.removeEventListener?n.removeEventListener("change",e):n.removeListener(e)}}),[]),t},C=t(2),S=x.b.button.withConfig({displayName:"Button__ButtonWrapper",componentId:"sc-1rvsbfg-0"})((function(n){var e=n.isTabletViewport;return Object(x.a)(r||(r=Object(w.a)(["\n    padding: 1rem 2rem;\n    font-size: 2rem;\n    font-family: normal;\n    outline: none;\n    border: none;\n    background: #83af9b;\n    cursor: pointer;\n\n    :hover {\n      background: #c8c8a9;\n    }\n\n    ","\n  "])),e&&Object(x.a)(c||(c=Object(w.a)(["\n      font-size: 1.5rem;\n    "]))))})),_=function(n){var e=n.children,t=n.onClick,r=y();return Object(C.jsx)(S,{onClick:function(){t(),document.activeElement.blur()},isTabletViewport:r,children:e})},I=x.b.div.withConfig({displayName:"Letter__LetterWrapper",componentId:"sc-1mmjlmb-0"})((function(n){var e=n.isSign,t=n.isOver,r=n.language;return Object(x.a)(i||(i=Object(w.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    position: absolute;\n    top: calc(50% - 50px);\n    transform: translate(-50%, -50%);\n    left: 50%;\n    font-size: 40vh;\n\n    cursor: pointer;\n    display: block;\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n    \n    ","\n  "])),e&&t&&Object(x.a)(a||(a=Object(w.a)(["\n      font-family: normal;\n    "]))),!e&&Object(x.a)(o||(o=Object(w.a)(["\n      font-family: normal;\n    "]))),e&&Object(x.a)(s||(s=Object(w.a)(["\n      font-family: ",";\n    "])),r),!e&&t&&Object(x.a)(u||(u=Object(w.a)(["\n      font-family: ",";\n    "])),r),"asl"===r&&(e||!e&&t)&&Object(x.a)(b||(b=Object(w.a)(["\n      font-size: 65vh;\n    "]))),"bsl"===r&&(e||!e&&t)&&Object(x.a)(l||(l=Object(w.a)(["\n      font-size: 40vh;\n    "]))),"isl"===r&&(e||!e&&t)&&Object(x.a)(m||(m=Object(w.a)(["\n      font-size: 35vh;\n    "]))))})),z=function(n){var e=n.letter,t=n.isSign,r=n.language,c=Object(O.useState)(!1),i=Object(g.a)(c,2),a=i[0],o=i[1],s=Object(O.useRef)();return Object(O.useEffect)((function(){var n=s.current,e=function(){return o(!0)},t=function(){return o(!1)},r=function(){return o(!a)};return n&&!k&&(n.addEventListener("mouseover",e),n.addEventListener("mouseout",t)),n&&k&&n.addEventListener("click",r),function(){n&&!k&&(n.removeEventListener("mouseover",e),n.removeEventListener("mouseout",t)),n&&k&&n.removeEventListener("click",r)}}),[a]),Object(C.jsx)(I,{isSign:t,language:r,isOver:a,ref:function(n){s.current=n},children:e})},T=t.p+"static/media/random.90637106.svg",N=x.b.div.withConfig({displayName:"App__ButtonWrapper",componentId:"sc-8jic91-0"})((function(n){var e=n.isTabletViewport;return Object(x.a)(d||(d=Object(w.a)(["\n    position: fixed;\n    bottom: 1rem;\n    left: 50%;\n    transform: translateX(-50%);\n\n    ","\n\n    ","\n  "])),!e&&Object(x.a)(j||(j=Object(w.a)(["\n      > button:nth-child(1) {\n        margin-right: 0.5rem;\n      }\n\n      > button:nth-child(2) {\n        margin-left: 0.5rem;\n      }\n    "]))),e&&Object(x.a)(f||(f=Object(w.a)(["\n      width: 90%;\n\n      > button:nth-child(1) {\n        width: 100%;\n        margin-bottom: 1rem;\n      }\n\n      > button:nth-child(2) {\n        width: 100%;\n      }\n    "]))))})),B=x.b.img.withConfig({displayName:"App__Image",componentId:"sc-8jic91-1"})(["width:1.5rem;height:1.5rem;"]),M=x.b.div.withConfig({displayName:"App__SignToggleWrapper",componentId:"sc-8jic91-2"})(["position:absolute;top:1rem;right:1rem;"]);var V=function(){var n=Object(O.useState)(E()),e=Object(g.a)(n,2),t=e[0],r=e[1],c=Object(O.useState)(!1),i=Object(g.a)(c,2),a=i[0],o=i[1],s=Object(O.useState)("asl"),u=Object(g.a)(s,2),b=u[0],l=u[1],m=y();return Object(O.useEffect)((function(){var n=function(n){32===n.keyCode&&r(E)};return document.addEventListener("keyup",n),function(){document.removeEventListener("keyup",n)}}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(z,{letter:t,isSign:a,language:b}),Object(C.jsx)(M,{children:Object(C.jsx)(_,{onClick:function(){switch(b){case"asl":l("bsl");break;case"bsl":l("isl");break;case"isl":l("asl")}},children:b.toUpperCase()})}),Object(C.jsxs)(N,{isTabletViewport:m,children:[Object(C.jsx)(_,{onClick:function(){o(!a)},children:"Toggle Sign/Letter"}),Object(C.jsx)(_,{onClick:function(){r(E)},children:Object(C.jsx)(B,{src:T,alt:""})})]})]})};v.a.render(Object(C.jsx)(p.a.StrictMode,{children:Object(C.jsx)(V,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.51e40be7.chunk.js.map