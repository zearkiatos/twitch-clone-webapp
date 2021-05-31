(this["webpackJsonpstreams-client-webapp"]=this["webpackJsonpstreams-client-webapp"]||[]).push([[0],{238:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(52),i=n.n(c),s=n(15),o=n(8),u=n(105),l=n(42),d=n(7),O=n(9),p=n(28),j=n(29),b=n(33),E=n(32),h=n(240),m=n(239),S=n(18),_=n.n(S),T=n(35),v=n(106),f=n.n(v);n(134).config();var A="develop"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",REACT_APP_STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/"}).ENVIRONMENT,I={ENVIRONMENT:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",REACT_APP_STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/"}).ENVIRONMENT,DEVELOP:A,GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/"},g=f.a.create({baseURL:I.STREAMS_API_BASE_URL}),N={SIGN_IN:"SIGN_IN",SIGN_OUT:"SIGN_OUT",CREATE_STREAM:"CREATE_STREAM",FETCH_STREAMS:"FETCH_STREAMS",FETCH_STREAM:"FETCH_STREAM",DELETE_STREAM:"DELETE_STREAM",EDIT_STREAM:"EDIT_STREAM"},x=n(2),C=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderInput=function(t){var n=t.input,r=t.label,a=t.meta,c="field ".concat(a.error&&a.touched?"error":"");return Object(x.jsxs)("div",{className:c,children:[Object(x.jsx)("label",{children:r}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},n),{},{autoComplete:"off"})),e.renderError(a)]})},e.onSubmit=function(t){e.props.createStream(t)},e}return Object(j.a)(n,[{key:"renderError",value:function(e){var t=e.error;return e.touched&&t&&Object(x.jsx)("div",{className:"ui error message",children:Object(x.jsx)("div",{className:"header",children:t})})}},{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error",children:[Object(x.jsx)(h.a,{name:"title",component:this.renderInput,label:"Enter Title"}),Object(x.jsx)(h.a,{name:"description",component:this.renderInput,label:"Enter Description"}),Object(x.jsx)("button",{className:"ui button primary",children:"Submit"})]})}}]),n}(a.a.Component),R=Object(m.a)({form:"streamCreate",validate:function(e){var t={};return e.title||(t.title="\u26d4\ufe0f You must enter a title"),e.description||(t.description="\u26d4\ufe0f You must enter a description"),t}})(C),y=Object(s.b)(null,{createStream:function(e){return function(){var t=Object(T.a)(_.a.mark((function t(n,r){var a,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,g.post("/streams",Object(O.a)(Object(O.a)({},e),{},{userId:a}));case 3:c=t.sent,n({type:N.CREATE_STREAM,payload:c.data});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(R),L=function(){return Object(x.jsx)("div",{children:"StreamEdit"})},k=function(){return Object(x.jsx)("div",{children:"StreamDelete"})},M=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId&&e.userId===this.props.currentUserId)return Object(x.jsxs)("div",{className:"right floated content",children:[Object(x.jsx)("button",{className:"ui button primary",children:"Edit"}),Object(x.jsx)("button",{className:"ui button negative",children:"Delete"})]})}},{key:"renderList",value:function(){var e=this;return this.props.streams.map((function(t){return Object(x.jsxs)("div",{className:"item",children:[e.renderAdmin(t),Object(x.jsx)("i",{className:"large middle aligned icon camera"}),Object(x.jsxs)("div",{className:"content",children:[t.title,Object(x.jsx)("div",{className:"description",children:t.description})]})]},t.id)}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Streams"}),Object(x.jsx)("div",{className:"ui celled list",children:this.renderList()})]})}}]),n}(a.a.Component),U=Object(s.b)((function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId}}),{fetchStreams:function(){return function(){var e=Object(T.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/streams");case 2:n=e.sent,t({type:N.FETCH_STREAMS,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(M),D=function(){return Object(x.jsx)("div",{children:"StreamShow"})},G=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:I.GOOGLE_OAUTH_CLIENT_ID,scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(x.jsxs)("button",{onClick:this.onSignOutClick,className:"ui red google button",children:[Object(x.jsx)("i",{className:"google icon"}),"Sign Out"]}):Object(x.jsxs)("button",{onClick:this.onSignInClick,className:"ui red google button",children:[Object(x.jsx)("i",{className:"google icon"}),"Sign In with Google"]})}},{key:"render",value:function(){return Object(x.jsx)("div",{children:this.renderAuthButton()})}}]),n}(a.a.Component),w=Object(s.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:N.SIGN_IN,payload:e}},signOut:function(){return{type:N.SIGN_OUT}}})(G),P=function(){return Object(x.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(x.jsx)(l.b,{to:"/",className:"item",children:"Streamer"}),Object(x.jsxs)("div",{className:"right menu",children:[Object(x.jsx)(l.b,{to:"/",className:"item",children:"All Streams"}),Object(x.jsx)(w,{})]})]})},H=function(){return Object(x.jsx)("div",{className:"ui container",children:Object(x.jsx)(l.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(P,{}),Object(x.jsx)(d.a,{path:"/",exact:!0,component:U}),Object(x.jsx)(d.a,{path:"/streams/new",exact:!0,component:y}),Object(x.jsx)(d.a,{path:"/streams/edit",exact:!0,component:L}),Object(x.jsx)(d.a,{path:"/streams/delete",exact:!0,component:k}),Object(x.jsx)(d.a,{path:"/streams/show",exact:!0,component:D})]})})})},F=n(241),B={isSignedIn:null,userId:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.SIGN_IN:return Object(O.a)(Object(O.a)({},e),{},{isSignedIn:!0,userId:t.payload});case N.SIGN_OUT:return Object(O.a)(Object(O.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},K=n(34),V=n(76),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.FETCH_STREAMS:return Object(O.a)(Object(O.a)({},e),Object(V.mapKeys)(t.payload,"id"));case N.FETCH_STREAM:case N.CREATE_STREAM:case N.EDIT_STREAM:return Object(O.a)(Object(O.a)({},e),{},Object(K.a)({},t.payload.id,t.payload));case N.DELETE_STREAM:return Object(V.omit)(e,t.payload);default:return e}},W=Object(o.c)({auth:q,form:F.a,streams:Q}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,X=Object(o.e)(W,J(Object(o.a)(u.a)));i.a.render(Object(x.jsx)(s.a,{store:X,children:Object(x.jsx)(H,{})}),document.querySelector("#root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.074f6298.chunk.js.map