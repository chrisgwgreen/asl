(this.webpackJsonpasl=this.webpackJsonpasl||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,i,c,o,a,s,u,b,m,d,f=t(0),l=t.n(f),j=t(9),O=t.n(j),v=(t(17),t(4)),p=t(3),h=t(1),g=function(){return String.fromCharCode(65+Math.floor(26*Math.random())).toLowerCase()},w=function(n){return"(max-width: ".concat(n,"px)")},E=("@media ".concat(w(992)),"@media ".concat(w(600)),"ontouchstart"in document.documentElement),L=function(){var n=Object(f.useState)(!1),e=Object(v.a)(n,2),t=e[0],r=e[1];return Object(f.useEffect)((function(){var n=window.matchMedia(w(992)),e=function(){r(n.matches)};return n.addEventListener?n.addEventListener("change",e):n.addListener(e),e(),function(){n.removeEventListener?n.removeEventListener("change",e):n.removeListener(e)}}),[]),t},k=t(2),x=h.b.button.withConfig({displayName:"Button__ButtonWrapper",componentId:"sc-1rvsbfg-0"})((function(n){var e=n.isTabletViewport;return Object(h.a)(r||(r=Object(p.a)(["\n    padding: 1rem 2rem;\n    font-size: 2rem;\n    font-family: normal;\n    outline: none;\n    border: none;\n    background: #83af9b;\n    cursor: pointer;\n\n    :hover {\n      background: #c8c8a9;\n    }\n\n    ","\n  "])),e&&Object(h.a)(i||(i=Object(p.a)(["\n      font-size: 1.5rem;\n    "]))))})),y=function(n){var e=n.children,t=n.onClick,r=L();return Object(k.jsx)(x,{onClick:function(){t(),document.activeElement.blur()},isTabletViewport:r,children:e})},C=h.b.div.withConfig({displayName:"Letter__LetterWrapper",componentId:"sc-1mmjlmb-0"})((function(n){var e=n.isSign,t=n.isOver;return Object(h.a)(c||(c=Object(p.a)(["\n      position: absolute;\n      left: 50%;\n      top: 40%;\n      transform: translate(-50%, -50%);\n      font-size: 500px;\n      cursor: pointer;\n      display: block;\n\n      ","\n      ","\n\n      ","\n\n      ","\n    "])),e&&Object(h.a)(o||(o=Object(p.a)(["\n        font-family: sign;\n      "]))),e&&t&&Object(h.a)(a||(a=Object(p.a)(["\n        font-family: normal;\n      "]))),!e&&Object(h.a)(s||(s=Object(p.a)(["\n        font-family: normal;\n      "]))),!e&&t&&Object(h.a)(u||(u=Object(p.a)(["\n        font-family: sign;\n      "]))))})),S=function(n){var e=n.letter,t=n.isSign,r=Object(f.useState)(!1),i=Object(v.a)(r,2),c=i[0],o=i[1],a=Object(f.useRef)();return Object(f.useEffect)((function(){var n=a.current,e=function(){return o(!0)},t=function(){return o(!1)},r=function(){return o(!c)};return n&&!E&&(n.addEventListener("mouseover",e),n.addEventListener("mouseout",t)),n&&E&&n.addEventListener("click",r),function(){n&&!E&&(n.removeEventListener("mouseover",e),n.removeEventListener("mouseout",t)),n&&E&&n.removeEventListener("click",r)}}),[c]),Object(k.jsx)(C,{isSign:t,isOver:c,ref:function(n){a.current=n},children:e})},_=t.p+"static/media/random.90637106.svg",I=h.b.div.withConfig({displayName:"App__ButtonWrapper",componentId:"sc-8jic91-0"})((function(n){var e=n.isTabletViewport;return Object(h.a)(b||(b=Object(p.a)(["\n    position: fixed;\n    bottom: 1rem;\n    left: 50%;\n    transform: translateX(-50%);\n\n    ","\n\n    ","\n  "])),!e&&Object(h.a)(m||(m=Object(p.a)(["\n      > button:nth-child(1) {\n        margin-right: 0.5rem;\n      }\n\n      > button:nth-child(2) {\n        margin-left: 0.5rem;\n      }\n    "]))),e&&Object(h.a)(d||(d=Object(p.a)(["\n      width: 90%;\n\n      > button:nth-child(1) {\n        width: 100%;\n        margin-bottom: 1rem;\n      }\n\n      > button:nth-child(2) {\n        width: 100%;\n      }\n    "]))))})),N=h.b.img.withConfig({displayName:"App__Image",componentId:"sc-8jic91-1"})(["width:1.5rem;height:1.5rem;"]);var T=function(){var n=Object(f.useState)(g()),e=Object(v.a)(n,2),t=e[0],r=e[1],i=Object(f.useState)(!1),c=Object(v.a)(i,2),o=c[0],a=c[1],s=L();return Object(f.useEffect)((function(){var n=function(n){32===n.keyCode&&r(g)};return document.addEventListener("keyup",n),function(){document.removeEventListener("keyup",n)}}),[]),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(S,{letter:t,isSign:o}),Object(k.jsxs)(I,{isTabletViewport:s,children:[Object(k.jsx)(y,{onClick:function(){a(!o)},children:"Toggle Sign/Letter"}),Object(k.jsx)(y,{onClick:function(){r(g)},children:Object(k.jsx)(N,{src:_,alt:""})})]})]})};O.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(T,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e66195e1.chunk.js.map