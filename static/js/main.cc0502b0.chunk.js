(this.webpackJsonpasl=this.webpackJsonpasl||[]).push([[0],{19:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r,o,c,i,a,s,l,u,d,b,m=n(0),f=n.n(m),j=n(10),h=n.n(j),p=(n(19),n(4)),g=n(2),O=function(){return String.fromCharCode(65+Math.floor(26*Math.random())).toLowerCase()},v=function(e){return"(max-width: ".concat(e,"px)")},C=("@media ".concat(v(992)),"@media ".concat(v(600)),"ontouchstart"in document.documentElement),x=n(3),k=n(11),L=n.n(k),w=n(1),y=g.b.button.withConfig({displayName:"Button__ButtonWrapper",componentId:"sc-1rvsbfg-0"})((function(e){var t=e.isTabletViewport,n=e.color,c=void 0===n?"#83af9b":n,i=L()(c);return Object(g.a)(r||(r=Object(x.a)(["\n    padding: 1rem 2rem;\n    font-size: 2rem;\n    font-family: normal;\n    outline: none;\n    border: none;\n    background: ",";\n    cursor: pointer;\n\n    :hover,\n    :focus {\n      background: ",";\n    }\n\n    ","\n  "])),i.toString(),i.darken(.2).toString(),t&&Object(g.a)(o||(o=Object(x.a)(["\n      font-size: 1.5rem;\n    "]))))})),E=function(e){var t=e.children,n=e.onClick,r=e.color,o=function(){var e=Object(m.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(m.useEffect)((function(){var e=window.matchMedia(v(992)),t=function(){r(e.matches)};return e.addEventListener?e.addEventListener("change",t):e.addListener(t),t(),function(){e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}}),[]),n}();return Object(w.jsx)(y,{onClick:n,isTabletViewport:o,color:r,children:t})},S=g.b.div.withConfig({displayName:"Letter__LetterWrapper",componentId:"sc-1mmjlmb-0"})((function(e){var t=e.isSign,n=e.isOver,r=e.language;return Object(g.a)(c||(c=Object(x.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    position: absolute;\n    top: calc(50% - 50px);\n    transform: translate(-50%, -50%);\n    left: 50%;\n    font-size: 40vh;\n\n    cursor: pointer;\n    display: block;\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n    \n    ","\n  "])),t&&n&&Object(g.a)(i||(i=Object(x.a)(["\n      font-family: normal;\n    "]))),!t&&Object(g.a)(a||(a=Object(x.a)(["\n      font-family: normal;\n    "]))),t&&Object(g.a)(s||(s=Object(x.a)(["\n      font-family: ",";\n    "])),r),!t&&n&&Object(g.a)(l||(l=Object(x.a)(["\n      font-family: ",";\n    "])),r),"asl"===r&&(t||!t&&n)&&Object(g.a)(u||(u=Object(x.a)(["\n      font-size: 65vh;\n    "]))),"bsl"===r&&(t||!t&&n)&&Object(g.a)(d||(d=Object(x.a)(["\n      font-size: 40vh;\n    "]))),"isl"===r&&(t||!t&&n)&&Object(g.a)(b||(b=Object(x.a)(["\n      font-size: 35vh;\n    "]))))})),_=function(e){var t=e.letter,n=e.isSign,r=e.language,o=Object(m.useState)(!1),c=Object(p.a)(o,2),i=c[0],a=c[1],s=Object(m.useRef)();return Object(m.useEffect)((function(){var e=s.current,t=function(){return a(!0)},n=function(){return a(!1)},r=function(){return a(!i)};return e&&!C&&(e.addEventListener("mouseover",t),e.addEventListener("mouseout",n)),e&&C&&e.addEventListener("click",r),function(){e&&!C&&(e.removeEventListener("mouseover",t),e.removeEventListener("mouseout",n)),e&&C&&e.removeEventListener("click",r)}}),[i]),Object(w.jsx)(S,{isSign:n,language:r,isOver:i,ref:function(e){s.current=e},children:t})},A=n.p+"static/media/random.90637106.svg",I=n.p+"static/media/chevron.92fb95f9.svg",F=g.b.div.withConfig({displayName:"App__ButtonWrapper",componentId:"sc-8jic91-0"})(["position:fixed;bottom:1rem;left:1rem;right:1rem;> button:nth-child(1){width:100%;margin-bottom:1rem;}"]),N=g.b.div.withConfig({displayName:"App__ButtonDirectionWrapper",componentId:"sc-8jic91-1"})(["display:flex;> button:nth-child(1){flex:1;}> button:nth-child(2){flex:5;margin:0 0.5rem;}> button:nth-child(3){flex:1;}"]),B=g.b.img.withConfig({displayName:"App__Image",componentId:"sc-8jic91-2"})(["width:1.5rem;height:1.5rem;"]),z=g.b.img.withConfig({displayName:"App__RightChevron",componentId:"sc-8jic91-3"})(["width:1.5rem;height:1.5rem;"]),W=g.b.img.withConfig({displayName:"App__LeftChevron",componentId:"sc-8jic91-4"})(["width:1.5rem;height:1.5rem;transform:rotate(180deg);"]),M=g.b.div.withConfig({displayName:"App__SignToggleWrapper",componentId:"sc-8jic91-5"})(["position:absolute;top:1rem;right:1rem;"]);var T=function(){var e=Object(m.useState)(O()),t=Object(p.a)(e,2),n=t[0],r=t[1],o=Object(m.useState)(!1),c=Object(p.a)(o,2),i=c[0],a=c[1],s=Object(m.useState)("asl"),l=Object(p.a)(s,2),u=l[0],d=l[1],b=function(){r(O)},f=Object(m.useCallback)((function(){var e=n.charCodeAt(0);e=97===e?122:n.charCodeAt(0)-1,r(String.fromCharCode(e))}),[n]),j=Object(m.useCallback)((function(){var e=n.charCodeAt(0);e=122===e?97:n.charCodeAt(0)+1,r(String.fromCharCode(e))}),[n]);return Object(m.useEffect)((function(){var e=function(e){32===e.keyCode&&b(),37===e.keyCode&&f(),39===e.keyCode&&j()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[j,f]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_,{letter:n,isSign:i,language:u}),Object(w.jsx)(M,{children:Object(w.jsx)(E,{onClick:function(){switch(u){case"asl":document.title="BSL",d("bsl");break;case"bsl":document.title="ISL",d("isl");break;case"isl":document.title="ASL",d("asl")}},color:"#F4EC58",children:u.toUpperCase()})}),Object(w.jsxs)(F,{children:[Object(w.jsx)(E,{onClick:function(){a(!i)},color:"#F4EC58",children:"Toggle Sign/Letter"}),Object(w.jsxs)(N,{children:[Object(w.jsx)(E,{onClick:f,color:"#FF8084",children:Object(w.jsx)(W,{src:I,alt:"previous letter"})}),Object(w.jsx)(E,{onClick:b,color:"#6ED9BF",children:Object(w.jsx)(B,{src:A,alt:"shuffle letter"})}),Object(w.jsx)(E,{onClick:j,color:"#FF8084",children:Object(w.jsx)(z,{src:I,alt:"next letter"})})]})]})]})};h.a.render(Object(w.jsx)(f.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.cc0502b0.chunk.js.map