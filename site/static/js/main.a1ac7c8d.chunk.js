(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{61:function(n,e,t){"use strict";t.r(e);var r,a,i=t(4),o=t.n(i),c=t(43),s=t.n(c),l=t(26),d=t(10),m=t(12),p=t(16),b=t(17),f=b.b.nav(r||(r=Object(p.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    margin-right: 1.5rem;\n  }\n\n  a {\n    font-size: 1.6rem;\n    color: var(--color-black);\n\n    & + a {\n      margin-left: 1.5rem;\n    }\n\n    &:hover {\n      text-decoration: none;\n      color: var(--color-secondary);\n    }\n\n    &.actived {\n      color: var(--color-secondary);\n      border-bottom: 4px solid var(--color-secondary);\n    }\n  }\n\n  button {\n    background: transparent;\n    border: none;\n    height: 35px;\n    display: none;\n\n    &:hover {\n      .icon-menu {\n        background-color: var(--color-secondary);\n        &::after,\n        &::before {\n          background-color: var(--color-secondary);\n        }\n      }\n    }\n\n    .icon-menu {\n      display: inline-block;\n      background-color: var(--color-black);\n      width: 35px;\n      height: 5px;\n      line-height: 35px;\n      border-radius: 2px;\n      position: relative;\n      cursor: pointer;\n\n      &::before {\n        position: absolute;\n        top: -10px;\n        left: 0;\n        content: "";\n        background-color: var(--color-black);\n        width: 35px;\n        height: 5px;\n        border-radius: 2px;\n      }\n\n      &::after {\n        position: absolute;\n        bottom: -10px;\n        left: 0;\n        content: "";\n        background-color: var(--color-black);\n        width: 35px;\n        height: 5px;\n        border-radius: 2px;\n      }\n    }\n  }\n\n  @media (max-width: 580px) {\n    img {\n      top: 0;\n      left: 0;\n      position: fixed;\n      margin: 1.5rem;\n    }\n\n    button {\n      display: block;\n      position: fixed;\n      top: 13px;\n      right: 0;\n      margin: 1.5rem;\n\n      &.active {\n        .icon-menu {\n          background: transparent;\n\n          &::after {\n            top: -1px;\n            transform: rotate(45deg);\n          }\n\n          &::before {\n            top: -2px;\n            transform: rotate(-45deg);\n          }\n        }\n      }\n    }\n\n    a {\n      display: none;\n    }\n\n    &.active {\n      position: relative;\n      z-index: 10;\n      height: 100vh;\n      width: 100vw;\n      background-color: #e0e0e0;\n      display: flex;\n      flex-direction: column;\n\n      a {\n        display: block;\n        margin: 1.5rem 0;\n      }\n    }\n  }\n']))),u=t(5);function h(){var n=Object(d.f)().pathname,e=Object(i.useState)(!1),t=Object(m.a)(e,2),r=t[0],a=t[1];function o(e){return console.log(n),e===n||"/".concat(e)===n?"actived":""}return Object(u.jsxs)(f,{className:r?"active":"",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADj0lEQVR42u2aP46cMBSHv6zSRnGZbrlBOIKPwA3CEeYAKUiXciLlAERKmYIjkBtwBLZLyUYpI20KHjLMYsAYLzMKn2SNxuM/7/1s7Ic9cHBwcHBwcPC/8mpvAxyIJGn5Xksq9zYsNClQAU+W1AC5iOPMNc+AWBx7L98fRIiq93sM3PfqfAEyEeWmScWJJ9oprifKainTzYhKhLlZUszUThzrNb26NylC4ulAfCFCtLdDLkRi9Frnx0So9nbKhVKM9nG+Q2PWhGxvx1wM3tLYc0+EaG8H56jZfroqabfbSa4WLUbqAG2nmFkw2r5PIKQYf15Lx3ZyhiHu1tS0wdI3EcSLFCgwq6wtVcCJZc9es4VhMzZ3dqm1jWQLnLalfEKIhPBhq+rZkrpWjhm+iNS0q6u2qKnktzNmAZrajjIRKDSF2FC4VEpZHo/b0Azj9IKhcCVu4e5a0p4NThWajQxMGEZnnQjNCzgP7SM4uRv0iUcM3QKFeZxy+V4uqJfSPiqRZ/+19H1aUnBr5/vkYshX2rViigwzco+eIpTSzmSfWWDnOyrgD/B5oowCfjNcSOcEm/PtWVR4d1Eo4WW2Ji2f7ybKJMCbi7zUo89Zn7RnB658BH5N/J4zHldEK/vTOO4EL0GJ/fW3tAigtxTgblVT23GeECCy5NvKr+L1zgIUE47eW/LVlgbsPQOg3XZ34xoEsPFgyW882328FQFqS361sj01Vv8WBWhWtheP1b9mAcqRvEfWz4BIPgf1r1mAYiQv92hvVIBr58x2L0OjkeTWcYBiWaBSs2z7O9GOWEQ7+kvqjKHl88GjDSsJ9rB1LpW8zInQGf+3SSvNSuf7KTQ1C94jTisbzzxF+BHYeY050H1G/2KkwByEru1IsWwNqIC/wHfCH77kwAfgEzN3jyccj409ORP+SDzCHO6qucKK8Lc0HZpw94F9ChxvnTPC/70klj7KwM5rJp79KaqAInTON4S9s1eYld/Zj87IRWfoDqS9dpOAzoOJS1bb3xehxG+0IsyzuOqC0pEcc/niRczwYrTAbeQ0w5PdhuWLXoS5PVqKwoy8t/P9Rs8MA5dGxMhoR1NLSiSv4HlgVOA+iyJMbDJH2usz28r5S2Ny3CO+Ar+tTmFuqzJpK8aIfmb4P6DYtQPXv8ioCyMizOltd1hRizEF290wKdpRTqTvt5L/U/rMubH3/IODg4ODg4OD3fkHGTxwOzYUq4kAAAAASUVORK5CYII=",alt:"Logo"}),Object(u.jsx)(l.b,{onClick:function(){return a(!1)},className:o("/"),to:"/",children:"Home"}),Object(u.jsx)(l.b,{onClick:function(){return a(!1)},className:o("about"),to:"/about",children:"About"}),Object(u.jsx)(l.b,{onClick:function(){return a(!1)},className:o("contact"),to:"/contact",children:"Contact"}),Object(u.jsx)(l.b,{onClick:function(){return a(!1)},className:o("apps"),to:"/apps",children:"Apps"}),Object(u.jsx)("button",{className:r?"active":"",onClick:function(){return a(!r)},children:Object(u.jsx)("span",{className:"icon-menu"})})]})}var g=b.b.main(a||(a=Object(p.a)(["\n  max-width: 1024px;\n  margin: 0 auto;\n\n  display: grid;\n  align-items: center;\n"])));function j(n){var e=n.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(g,{children:e})]})}var x,v=t.p+"static/media/icon-javascript.306c40c5.svg",O=t.p+"static/media/icon-node.ff1d7740.svg",y=t.p+"static/media/icon-react.d6458b8b.svg",w=t.p+"static/media/icon-typescript.85bdbbd0.svg",A=b.b.div(x||(x=Object(p.a)(["\n  font-size: 1.5rem;\n  text-align: center;\n  max-width: 750px;\n  padding: 2rem;\n\n  div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2rem;\n\n    span {\n      margin: 0 1rem;\n      font-size: 1.8rem;\n    }\n\n    img {\n      width: auto;\n      max-height: 64px;\n    }\n  }\n\n  @media (max-width: 425px) {\n    div {\n      img {\n        max-height: 48px;\n      }\n    }\n  }\n"])));function k(){return Object(u.jsxs)(A,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:w,alt:"Typescript"}),Object(u.jsx)("span",{children:"+"}),Object(u.jsx)("img",{src:y,alt:"React"}),Object(u.jsx)("span",{children:"+"}),Object(u.jsx)("img",{src:O,alt:"Node"}),Object(u.jsx)("span",{children:"+"}),Object(u.jsx)("img",{src:v,alt:"Javascript"})]}),Object(u.jsxs)("p",{children:["I'm a Web Developer since 2007, graduated in Information Systems in 2009. I like so much this career because It is possible to work with many different technologies and every time appear news in this area for study.  Even in my free time, I look for news over time and applications like codefights to have fun and learning more.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"In my journey as a developer, I had the opportunity to work in companies of which I could use my skills to help growing up these greats corporates. I'm so grateful to have learned a lot of things and proud of the work done on them.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"I have a good experience in Back-end  (Adonis, Laravel, Cake PHP, Code Igniter, Lumen, Wordpress, etc) and nowadays I'm getting focus in Typescript/Javascript stack ( React, Node,  etc). Comfortable with Linux environments based on Debian distributions."]})]})}var I,z=t(0),C=t.n(z),S=t(3),E=t(1),N=t(2),B=t(24),P=t(48),L=t(49),M=(Object(P.a)({apiKey:"AIzaSyA0CEDcZsrEo7bsg360qfy6MojMUBmLJ-M",authDomain:"my-site-d945d.firebaseapp.com",projectId:"my-site-d945d",storageBucket:"my-site-d945d.appspot.com",messagingSenderId:"57231925162",appId:"1:57231925162:web:3f50627380b1fb526dd5d3"}),Object(L.a)()),H=function(){function n(){Object(E.a)(this,n)}return Object(N.a)(n,null,[{key:"getAll",value:function(){var n=Object(S.a)(C.a.mark((function n(){var e,t,r;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Object(B.a)(M,"apps"),n.next=3,Object(B.b)(Object(B.e)(e,Object(B.d)("title","asc")));case 3:if((t=n.sent).empty){n.next=7;break}return r=t.docs.map((function(n){return{id:n.id,title:n.data().title,description:n.data().description,technologies:n.data().technologies,image:n.data().image,url:n.data().url}})),n.abrupt("return",r);case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}]),n}(),K=b.b.div(I||(I=Object(p.a)(["\n  display: grid;\n  max-width: 850px;\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n  grid-gap: 2.5rem;\n  font-size: 1.2rem;\n\n  a {\n    text-decoration: none;\n    color: var(--color-black);\n\n    transition: filter 0.2s;\n    &:hover {\n      filter: brightness(80%);\n      text-decoration: none;\n    }\n  }\n\n  img {\n    border-radius: 0.5rem;\n    box-shadow: 0.2rem 0.2rem 0.1rem 0 rgba(0, 0, 0, 0.25);\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  span {\n    padding: 0.5rem 0.8rem;\n    font-size: 0.8rem;\n    color: var(--color-white);\n    border-radius: 0.3rem;\n\n    & + span {\n      margin-left: 0.5rem;\n    }\n  }\n\n  .color-typescript {\n    background-color: #2f74c0;\n  }\n  .color-react {\n    background-color: #0d0627;\n  }\n  .color-node {\n    background-color: #8bbf3d;\n  }\n  .color-javascript {\n    background-color: #efd82f;\n  }\n\n  @media (max-width: 780px) {\n    grid-template-columns: repeat(2, minmax(250px, 1fr));\n  }\n\n  @media (max-width: 550px) {\n    grid-template-columns: repeat(1, minmax(250px, 1fr));\n  }\n"])));function W(){var n=Object(i.useState)([]),e=Object(m.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(!0),o=Object(m.a)(a,2),c=o[0],s=o[1];function l(){return(l=Object(S.a)(C.a.mark((function n(){var e;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.next=3,H.getAll();case 3:e=n.sent,r(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),Object(i.useEffect)((function(){s(!1)}),[r]),c?Object(u.jsx)(K,{children:Object(u.jsx)("p",{children:"Loading..."})}):Object(u.jsx)(K,{children:t?t.map((function(n){return Object(u.jsxs)("a",{href:n.url,target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("img",{width:250,height:100,src:n.image+Math.random(),alt:"Title"}),Object(u.jsx)("h2",{children:n.title}),Object(u.jsx)("p",{children:n.description}),Object(u.jsx)("div",{className:"techs",children:n.technologies?n.technologies.map((function(n){return Object(u.jsx)("span",{className:"color-"+String(n).toLowerCase(),children:n},Math.random())})):null})]},n.id)})):null})}function q(){return(q=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function R(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var V=i.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"});function T(n,e){var t=n.title,r=n.titleId,a=R(n,["title","titleId"]);return i.createElement("svg",q({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github-square",className:"svg-inline--fa fa-github-square fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,V)}var J=i.forwardRef(T);t.p;function F(){return(F=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function G(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var Q=i.createElement("path",{fill:"currentColor",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"});function Y(n,e){var t=n.title,r=n.titleId,a=G(n,["title","titleId"]);return i.createElement("svg",F({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin",className:"svg-inline--fa fa-linkedin fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,Q)}var D=i.forwardRef(Y);t.p;function Z(){return(Z=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function U(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var X=i.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"});function _(n,e){var t=n.title,r=n.titleId,a=U(n,["title","titleId"]);return i.createElement("svg",Z({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter-square",className:"svg-inline--fa fa-twitter-square fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,X)}var $,nn,en=i.forwardRef(_),tn=(t.p,b.b.div($||($=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  max-width: 50rem;\n  padding: 2rem;\n\n  p {\n    text-align: center;\n    font-size: 1.6rem;\n    margin-bottom: 1rem;\n  }\n\n  .social-networks {\n    text-align: center;\n    a {\n      display: inline-flex;\n      align-items: center;\n      justify-content: flex-end;\n      font-size: 1.8rem;\n      text-decoration: none;\n      color: var(--color-black);\n\n      & + a {\n        margin-top: 1rem;\n      }\n\n      .icon {\n        margin-left: 0.8rem;\n        width: 3rem;\n        height: 3rem;\n\n        g {\n          fill: var(--color-black);\n        }\n\n        path {\n          fill: var(--color-black);\n          stroke: var(--colar-black);\n        }\n      }\n\n      &:hover {\n        color: var(--color-secondary);\n\n        .icon {\n          g {\n            fill: var(--color-secondary);\n          }\n\n          path {\n            fill: var(--color-secondary);\n            stroke: var(--colar-secondary);\n          }\n        }\n      }\n    }\n  }\n"]))));function rn(){return Object(u.jsxs)(tn,{children:[Object(u.jsx)("p",{children:"Feel free to contact me any time through the social networks below. I will get back to you as soon as possible."}),Object(u.jsxs)("div",{className:"social-networks",children:[Object(u.jsx)("a",{href:"https://github.com./gedsonmarcelino",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(J,{className:"icon"})}),Object(u.jsx)("a",{href:"https://linkedin.com/in/gedsonmarcelino",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(D,{className:"icon"})}),Object(u.jsx)("a",{href:"https://twitter.com/gedsonmarcelino",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(en,{className:"icon"})})]})]})}var an=b.b.div(nn||(nn=Object(p.a)(['\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 1fr));\n  grid-gap: 2.8rem;\n  align-items: center;\n\n  h1 {\n    text-align: right;\n    font-size: 2.4rem;\n    margin-bottom: 2.4rem;\n\n    span {\n      color: var(--color-secondary);\n    }\n  }\n\n  p {\n    text-align: right;\n    font-size: 1.6rem;\n  }\n\n  .img-me {\n    border-radius: 50%;\n    box-shadow: 0 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.25);\n    width: 300px;\n    height: 300px;\n    top: 0;\n    right: 0;\n    background: url("./assets/me.png") no-repeat;\n    background-position: 0 -300px;\n    filter: grayscale(75%);\n    transition: filter 0.3s ease-in-out;\n\n    &:hover {\n      filter: grayscale(0);\n    }\n  }\n\n  @media (max-width: 700px) {\n    grid-template-columns: 1fr;\n\n    .image {\n      order: -1;\n      display: flex;\n      justify-content: center;\n    }\n\n    h1,\n    p {\n      text-align: center;\n    }\n  }\n'])));function on(){return Object(u.jsxs)(an,{children:[Object(u.jsxs)("div",{className:"text",children:[Object(u.jsxs)("h1",{children:["It's ",Object(u.jsx)("span",{children:"Me"})]}),Object(u.jsx)("p",{children:"Hi! I'm Gedson Marcelino. I'm working with software development since 2005 with many technologies over time."})]}),Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("div",{className:"img-me"})})]})}function cn(){return Object(u.jsx)(l.a,{children:Object(u.jsx)(d.c,{children:Object(u.jsxs)(j,{children:[Object(u.jsx)(d.a,{path:"/",exact:!0,component:on}),Object(u.jsx)(d.a,{path:"/apps",component:W}),Object(u.jsx)(d.a,{path:"/about",component:k}),Object(u.jsx)(d.a,{path:"/contact",component:rn})]})})})}var sn,ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),i(n),o(n)}))},dn=Object(b.a)(sn||(sn=Object(p.a)(["\n  html{\n    --color-black: #000000;\n    --color-white: #ffffff;\n    --color-gray: #376582;\n  \n    --color-secondary: #f95231;\n  }\n\n  html,\n  body{\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n    padding: 0;\n    /* height: 100vh; */\n    /* width: 100vw; */\n  }\n\n  h1, h2, h3, p{\n    margin: 0;\n    padding: 0;\n  }\n\n  h1{\n    font-weight: 500;\n  }\n\n  h2{\n    font-weight: 400;\n  }\n\n  a{\n    text-decoration: none;\n    &:hover{\n      text-decoration: underline;\n    }\n  }\n\n  [disabled]{\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n\n  #root{\n    font-size: 62.5%;\n    height: 100vh;\n\n    display: grid;\n    grid-template-rows: 100px auto;\n    \n    align-items: stretch;\n    justify-content: center;\n  }\n\n"])));s.a.render(Object(u.jsxs)(o.a.StrictMode,{children:[Object(u.jsx)(cn,{}),Object(u.jsx)(dn,{})]}),document.getElementById("root")),ln()}},[[61,1,2]]]);
//# sourceMappingURL=main.a1ac7c8d.chunk.js.map