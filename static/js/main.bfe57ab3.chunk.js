(this["webpackJsonpstreams-client-webapp"]=this["webpackJsonpstreams-client-webapp"]||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(16),a=n.n(r),s=n(9),o=n(2),O=n(1),j=function(){return Object(O.jsx)("div",{children:"StreamCreate"})},d=function(){return Object(O.jsx)("div",{children:"StreamEdit"})},u=function(){return Object(O.jsx)("div",{children:"StreamDelete"})},l=function(){return Object(O.jsx)("div",{children:"StreamList"})},b=function(){return Object(O.jsx)("div",{children:"StreamShow"})},m=n(17),h=n(18),p=n(21),E=n(20);n(27).config();var _={ENVIRONMENT:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:""}).ENVIRONMENT,GOOGLE_OAUTH_CLIENT_ID:"",GOOGLE_OAUTH_CLIENT_SECRET:""},x=function(e){Object(p.a)(n,e);var t=Object(E.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:_.GOOGLE_OAUTH_CLIENT_ID,scope:"email"})}))}},{key:"render",value:function(){return Object(O.jsx)("div",{children:"Google Auth"})}}]),n}(i.a.Component),T=function(){return Object(O.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(O.jsx)(s.b,{to:"/",className:"item",children:"Streamer"}),Object(O.jsxs)("div",{className:"right menu",children:[Object(O.jsx)(s.b,{to:"/",className:"item",children:"All Streams"}),Object(O.jsx)(x,{})]})]})},S=function(){return Object(O.jsx)("div",{className:"ui container",children:Object(O.jsx)(s.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(T,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:l}),Object(O.jsx)(o.a,{path:"/streams/new",exact:!0,component:j}),Object(O.jsx)(o.a,{path:"/streams/edit",exact:!0,component:d}),Object(O.jsx)(o.a,{path:"/streams/delete",exact:!0,component:u}),Object(O.jsx)(o.a,{path:"/streams/show",exact:!0,component:b})]})})})};a.a.render(Object(O.jsx)(S,{}),document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.bfe57ab3.chunk.js.map