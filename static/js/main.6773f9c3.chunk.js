(this["webpackJsonptwitter-concept"]=this["webpackJsonptwitter-concept"]||[]).push([[0],{189:function(e,t,c){},190:function(e,t,c){},216:function(e,t){},218:function(e,t){},227:function(e,t){},229:function(e,t){},257:function(e,t){},259:function(e,t){},260:function(e,t){},265:function(e,t){},267:function(e,t){},286:function(e,t){},298:function(e,t){},301:function(e,t){},349:function(e,t,c){},351:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(180),r=c.n(s),i=(c(189),c(7)),l=c(12),o=c(5),j=(c(190),c(0)),u=function(e){var t=e.children;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"wrapper",children:t})})})},d=function(){return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("h1",{children:"NestedUserPage l2 Page"})})},b=c.p+"static/media/logo.89093620.svg",m=function(e){var t=e.children;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("main",{className:"container_one col-12",children:t})})},O=c(3),h=c(6),p=c(21),x=c(2),v=function(e){var t,c,a,n,s,r,i=e.name,l=e.label,o=e.type,u=e.placeholder,d=e.errors,b=e.register,m=e.maxLength,O=e.validationSchema,h=e.watch;return Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsxs)("div",{className:"input_group",children:[Object(j.jsx)("label",{children:l}),Object(j.jsx)("input",Object(x.a)(Object(x.a)({type:o,name:i,placeholder:u},b(i,O)),{},{maxLength:m||null}))]}),Object(j.jsxs)("div",{className:"error-message-group",children:[d&&"required"===(null===(t=d[i])||void 0===t?void 0:t.type)&&Object(j.jsx)("span",{className:"error",children:null===(c=d[i])||void 0===c?void 0:c.message}),d&&"minLength"===(null===(a=d[i])||void 0===a?void 0:a.type)&&Object(j.jsx)("span",{className:"error",children:null===(n=d[i])||void 0===n?void 0:n.message}),d&&"pattern"===(null===(s=d[i])||void 0===s?void 0:s.type)&&Object(j.jsx)("span",{className:"error",children:null===(r=d[i])||void 0===r?void 0:r.message}),Object(j.jsxs)("span",{className:"limit-num",children:[h(i)?h(i).length:"0","/50"]})]})]})},f=c(39),g=c.n(f),N=function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var c,a,n,s;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.account,a=t.password,e.prev=1,e.next=4,g.a.post("".concat("https://calm-eyrie-50498.herokuapp.com/api","/signin"),{account:c,password:a});case 4:if(n=e.sent,s=n.data,!s.data.token){e.next=9;break}return e.abrupt("return",Object(x.a)({success:!0},s));case 9:return e.abrupt("return",s);case 12:e.prev=12,e.t0=e.catch(1),console.error("[Login Failed]:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),w=c(181),k={isAuthentic:!1,currentMember:null,login:null,logout:null,register:null},y=Object(a.createContext)(k),S=function(){return Object(a.useContext)(y)},I=function(e){var t=e.children,c=Object(a.useState)(null),n=Object(i.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(null),o=Object(i.a)(l,2),u=o[0],d=o[1];return Object(j.jsx)(y.Provider,{value:{isAuthentical:s,currentMember:u&&{id:u.id,name:u.name},login:function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var c,a,n,s,i;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ok"),e.next=3,N({account:t.account,password:t.password});case 3:return c=e.sent,a=c.success,n=c.data,s=n.token,(i=w.decode(s))?(r(!0),localStorage.setItem("authToken",s),d(i)):r(!1),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=Object(h.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("authToken"),r(!1),d(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},children:t})},T=function(){var e=Object(p.a)(),t=e.register,c=e.handleSubmit,n=e.reset,s=e.formState.errors,r=e.watch,i=S(),u=i.login,d=i.isAuthentical,b=Object(o.l)(),m=function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.username.length){e.next=2;break}return e.abrupt("return");case 2:if(0!==t.password.length){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,u({account:t.username,password:t.password});case 6:c=e.sent,console.log("Login: ",c),n();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d&&b("/main")}),[b,d]),Object(j.jsx)("div",{className:"formLayout login-form",children:Object(j.jsxs)("form",{onSubmit:c(m),children:[Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"username",label:"\u5e33\u865f",type:"text",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",maxLength:"50",errors:s,register:t,validationSchema:{required:"username is required",minLength:{value:3,message:"Please enter a minimum of 3 characters"}},watch:r})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"password",label:"\u5bc6\u78bc",type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",errors:s,register:t,validationSchema:{required:"password is required",minLength:{value:8,message:"Please enter a minimum of 8 characters"}},watch:r})}),Object(j.jsx)("button",{className:"button-filled button-lg",type:"submit",children:"\u767b\u5165"}),Object(j.jsxs)("div",{className:"button-group-row login-button-group",children:[Object(j.jsx)(l.b,{to:"/register",className:"button-link",children:"\u8a3b\u518a"}),Object(j.jsx)("span",{children:"\u30fb"}),Object(j.jsx)(l.b,{to:"/admin",className:"button-link",children:"\u5f8c\u53f0\u767b\u5165"})]})]})})},L=function(){var e=S().isAuthentical,t=Object(o.l)();return Object(a.useEffect)((function(){e&&t("/main")}),[t,e]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:"login-container col-4 flex_col_cc",children:[Object(j.jsx)("div",{className:"page-logo",children:Object(j.jsx)("img",{src:b,alt:"Alphitter Icon",className:"icon-logo cursor-point"})}),Object(j.jsx)("h3",{className:"page-title",children:"\u767b\u5165 Alphitter"}),Object(j.jsx)(T,{})]})})})},M=function(e){var t=e.tabIndex,c=e.setTabIndex;return Object(j.jsxs)("div",{className:"tab-group",children:[Object(j.jsx)("div",{className:["tab","0"===t?"active":""].join(" "),onClick:function(){return c("0")},children:"\u63a8\u6587"}),Object(j.jsx)("div",{className:["tab","1"===t?"active":""].join(" "),onClick:function(){return c("1")},children:"\u56de\u8986"}),Object(j.jsx)("div",{className:["tab","2"===t?"active":""].join(" "),onClick:function(){return c("2")},children:"\u559c\u6b61\u7684\u5167\u5bb9"})]})},q=function(){return Object(j.jsxs)("div",{className:"tab-group",children:[Object(j.jsx)("div",{className:"tab active",tabIndex:"0",children:"\u8ffd\u8e64\u8005"}),Object(j.jsx)("div",{className:"tab",tabIndex:"1",children:"\u6b63\u5728\u8ffd\u96a8"})]})},C=(c(349),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"storybook-layout",children:Object(j.jsxs)("div",{className:"storybook-container",children:[Object(j.jsx)("h2",{children:"Storybooks"}),Object(j.jsx)("h4",{className:"page-sec-title",children:"=== Buttons-\u5143\u4ef6\u672c\u8eab\u76ee\u524d\u6c92\u6709\u88fd\u4f5c\u4e0a\u4e0bmargin\uff0c\u662f\u672c\u8868\u986f\u793a\u7528 ==="}),Object(j.jsxs)("div",{className:"flex_col_cc comp-container",children:[Object(j.jsx)("button",{className:"button-filled button-lg",type:"submit",children:"\u767b\u5165"}),Object(j.jsx)("button",{className:"button-sm button-m active",type:"submit",children:"\u63a8\u6587"}),Object(j.jsx)("button",{className:"button-bg button-m active",type:"submit",children:"\u5132\u5b58"}),Object(j.jsx)("button",{className:"button-md button-m active",type:"submit",children:"\u6b63\u5728\u8ffd\u8e64"}),Object(j.jsx)("button",{className:"button-md button-m",type:"submit",children:"\u7de8\u8f2f\u500b\u4eba\u8cc7\u6599"}),Object(j.jsx)(l.b,{className:"button-link",type:"submit",children:"\u53d6\u6d88"})]}),Object(j.jsx)("h4",{className:"page-sec-title",children:"=== tabs -\u5143\u4ef6\u672c\u8eab\u7d81\u5b9a\u5207\u63db\u5167\u5bb9\uff0c\u9019\u9801\u7684tab \u9ede\u4e86\u6703\u58de\u4e0d\u8981\u7ba1\u4ed6lol ==="}),Object(j.jsx)(M,{}),Object(j.jsx)(q,{})]})})})}),F=function(e){var t=e.role,c=e.setModalTweetOpen,a=e.pageIndex,n=e.memberId,s=S().logout;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"left-nav col-2",children:Object(j.jsxs)("div",{className:"left-nav-link",children:[Object(j.jsxs)("div",{className:"left-nav-link-items",children:[Object(j.jsx)(l.b,{to:"admin"===t?"/admin":"/main",className:"link-logo",children:Object(j.jsx)("img",{src:b,alt:"Alphitter Icon",className:"icon-logo cursor-point"})}),Object(j.jsxs)(l.b,{to:"admin"===t?"/admin":"/main",className:"nav-link ",children:[Object(j.jsx)("span",{className:["nav-icon icon-home",0===a?"active":""].join(" ")}),Object(j.jsx)("p",{children:"admin"===t?"\u63a8\u6587\u6e05\u55ae":"\u9996\u9801"})]}),Object(j.jsxs)(l.b,{to:"admin"===t?"/admin/users":"/user/".concat(n),children:[Object(j.jsx)("span",{className:["nav-icon icon-user",1===a?"active":""].join(" ")}),Object(j.jsx)("p",{children:"admin"===t?"\u4f7f\u7528\u8005\u5217\u8868":"\u500b\u4eba\u8cc7\u6599"})]}),"admin"!==t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(l.b,{to:"/setting",children:[Object(j.jsx)("span",{className:["nav-icon icon-setting",2===a?"active":""].join(" ")}),Object(j.jsx)("p",{children:"\u8a2d\u5b9a"})]}),Object(j.jsxs)("button",{className:"button-filled button-lg button-tweet",type:"submit",onClick:function(){return c(!0)},children:[Object(j.jsx)("span",{className:"button-tweet-view",children:"\u63a8\u6587"}),Object(j.jsx)("span",{className:"button-tweet-view-m"})]})]})]}),Object(j.jsx)("div",{className:"left-nav-link-logout",children:Object(j.jsxs)(l.b,{to:"/login",onClick:function(){s()},children:[Object(j.jsx)("span",{className:"nav-icon icon-logout"}),Object(j.jsx)("p",{children:"\u767b\u51fa"})]})})]})})})},P=function(e){var t=e.children,c=e.role,a=e.setModalTweetOpen,n=e.pageIndex,s=e.id;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("main",{className:"container_sec",children:[Object(j.jsx)(F,{role:c,setModalTweetOpen:a,pageIndex:n,memberId:s}),t]})})},A=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(P,{role:"admin",pageIndex:0,children:Object(j.jsx)("div",{className:"section-outer-l col-10",children:Object(j.jsx)("div",{className:"section-main-l",children:Object(j.jsx)("h1",{children:" AdminPage"})})})})})},U=function(){var e=Object(p.a)(),t=e.register,c=e.handleSubmit,a=e.reset,n=e.formState.errors,s=e.watch;return Object(j.jsx)("div",{className:"formLayout setting-form",children:Object(j.jsxs)("form",{onSubmit:c((function(e){console.log(e),a()})),children:[Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"account",label:"\u5e33\u865f",type:"text",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",maxLength:"50",errors:n,register:t,validationSchema:{required:"account is required",minLength:{value:3,message:"Please enter a minimum of 3 characters"}},watch:s})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"username",label:"\u540d\u7a31",type:"text",placeholder:"\u8acb\u8f38\u5165\u540d\u7a31",maxLength:"50",errors:n,register:t,validationSchema:{required:"username is required",minLength:{value:3,message:"Please enter a minimum of 3 characters"}},watch:s})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"email",label:"Email",type:"email",placeholder:"\u8acb\u8f38\u5165Email",errors:n,register:t,validationSchema:{required:"email is required",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"}},watch:s})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"password",label:"\u5bc6\u78bc",type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",errors:n,register:t,validationSchema:{required:"password is required",minLength:{value:8,message:"Please enter a minimum of 8 characters"}},watch:s})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"cpassword",label:"\u5bc6\u78bc\u518d\u78ba\u8a8d",type:"password",placeholder:"\u8acb\u518d\u6b21\u8f38\u5165\u5bc6\u78bc",errors:n,register:t,validationSchema:{required:"password is required",minLength:{value:8,message:"Please enter a minimum of 8 characters"}},watch:s})}),Object(j.jsx)("div",{className:"button-group-row login-button-group",children:Object(j.jsx)("button",{className:"button-bg button-m active",type:"submit",children:"\u5132\u5b58"})})]})})},E=c.p+"static/media/back.de35b2eb.svg",B=function(e){var t=e.pageTitle;return Object(j.jsx)("div",{className:"header-container header-main",children:Object(j.jsx)("h5",{children:t})})},D=function(e){var t=e.userAccountName,c=e.userTweetsLength;return Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)(l.b,{to:"/main",children:Object(j.jsx)("img",{src:E,alt:"Back to pre page",className:"icon-back cursor-point"})}),Object(j.jsxs)("div",{className:"header-user-info",children:[Object(j.jsx)("h5",{children:t}),Object(j.jsx)("p",{children:c})]})]})},_=function(e){var t=e.setModalTweetOpen;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(P,{role:"user",setModalTweetOpen:t,pageIndex:2,children:Object(j.jsx)("section",{className:"section-outer-m col-7",children:Object(j.jsxs)("div",{className:"section-main-m",children:[Object(j.jsx)(B,{pageTitle:"\u5e33\u6236\u8a2d\u5b9a"}),Object(j.jsx)(U,{})]})})})})},R="https://calm-eyrie-50498.herokuapp.com/api",G=g.a.create({baseUrl:R});G.interceptors.request.use((function(e){var t=localStorage.getItem("authToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){console.error(e)}));var J=function(){var e=Object(h.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("".concat(R,"/tweets"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("[Get Tweets failed]:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(h.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("".concat(R,"/users/top"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("[get topUser failed]:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(h.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("".concat(R,"/tweets/1"));case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("[Get Tweet Failed]: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),V=c(41),W=c.p+"static/media/avatar.bd02c62f.svg",Y=function(e){var t=e.avatar,c=e.onClick,a=e.userId;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"avatar",onClick:function(e){null===c||void 0===c||c({userId:a}),e.stopPropagation()},children:Object(j.jsx)("img",{src:t||W,alt:"userAvatar",className:"user-avatar"})})})},Z=function(e){var t=e.name,c=e.account;return Object(j.jsxs)("div",{className:"tweet-username-2",children:[Object(j.jsx)("span",{className:"user-name",children:t}),Object(j.jsxs)("span",{className:"user-account",children:["@",c]})]})},K=c(72),Q=function(e){var t=Object.assign({},(Object(V.a)(e),e));return Object(j.jsxs)("div",{className:"follow-card",children:[Object(j.jsxs)("div",{className:"follow-card-info",children:[Object(j.jsx)(Y,{avatar:t.avatar}),Object(j.jsx)(Z,{name:t.name,account:t.account})]}),Object(j.jsx)("div",{className:"follow-card-button",children:Object(j.jsx)("button",{className:"".concat(Object(K.a)("",{active:t.isFollowing})," button-md button-m"),type:"submit",children:t.isFollowing?"\u6b63\u5728\u8ddf\u96a8":"\u8ddf\u8e64"})})]})},X=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"follow-list-container",children:[Object(j.jsx)("div",{className:"title-secondary",children:Object(j.jsx)("h4",{children:"\u63a8\u85a6\u8ddf\u96a8"})}),c.map((function(e){return Object(j.jsx)(Q,Object(x.a)({},e),e.id)}))]})})},$=c(53),ee=c.n($),te=c(182),ce=c.n(te);c(350);function ae(e){ee.a.extend(ce.a),ee.a.locale("zh-tw");return function(e){return function(e){return ee()(e).subtract(1,"hour")}(e).fromNow()}(e)}var ne=function(e){var t=e.name,c=e.account,a=e.time;return Object(j.jsxs)("div",{className:"tweet-username-3",children:[Object(j.jsx)("span",{className:"user-name",children:t}),Object(j.jsxs)("span",{className:"user-account",children:["@",c]}),Object(j.jsxs)("span",{className:"user-time",children:[" \xb7",ae(a)]})]})},se=c.p+"static/media/like-filled.a23cc5e1.svg",re=c.p+"static/media/reply.1d9be076.svg",ie=c.p+"static/media/like.81043da8.svg",le=function(e){var t=e.likeCount,c=e.repliesCount,a=e.isLiked;return Object(j.jsxs)("div",{className:"tweet-card-icon-count",children:[Object(j.jsxs)("div",{className:"tweet-card-reply-count",children:[Object(j.jsx)("img",{src:re,alt:"reply",className:"reply-icon"}),Object(j.jsx)("span",{className:"tweet-count",children:c})]}),Object(j.jsxs)("div",{className:"tweet-card-like-count",children:[Object(j.jsx)("img",{src:a?ie:se,alt:"like",className:"".concat(Object(K.a)("",{active:a})," like-icon")}),Object(j.jsx)("span",{className:"tweet-count",children:t})]})]})},oe=function(e){var t=Object.assign({},(Object(V.a)(e),e));return Object(j.jsxs)("div",{className:"tweet-card-basic",onClick:function(){var e;null===(e=t.onClick)||void 0===e||e.call(t,{tweetId:t.id})},children:[Object(j.jsx)(Y,{avatar:t.User.avatar,userId:t.UserId,onClick:function(e){var c,a=e.userId;null===(c=t.onClick)||void 0===c||c.call(t,{userId:a})}}),Object(j.jsxs)("div",{className:"tweet-card-left-info",children:[Object(j.jsx)(ne,{name:t.User.name,account:t.User.account,time:"2023-06-10T03:29:40.000Z"}),Object(j.jsx)("p",{className:"tweet-card-basic-description",children:t.description}),Object(j.jsx)(le,{likeCount:t.likeCount,repliesCount:t.repliesCount,isLiked:t.isLiked})]})]})},je=function(e){var t=e.tweets,c=e.onClick;return Object(j.jsx)("div",{className:"TweetLists",children:t.map((function(e){return Object(j.jsx)(oe,Object(x.a)(Object(x.a)({},e),{},{onClick:function(e){var t=e.tweetId,a=e.userId;null===c||void 0===c||c({tweetId:t,userId:a})}}),e.id)}))})},ue=c.p+"static/media/bk.953d3799.jpg",de=function(e){var t=e.bkUrl;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"profile-bk-clip",children:Object(j.jsx)("img",{src:t||ue,alt:"mountain pic",className:"profile-bk-image"})})})},be=c.p+"static/media/message.4c9af58b.svg",me=c.p+"static/media/notice.60c0a6cc.svg",Oe=function(e){var t=e.userInfo,c=e.name,a=e.account,n=e.introduction,s=e.avatar,r=e.banner,i=e.followersCount,l=e.followingsCount,o=e.setModalProOpen;return console.log(t),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"profile-card",children:[Object(j.jsx)(de,{bkUrl:r}),Object(j.jsx)(Y,{avatar:s}),Object(j.jsxs)("div",{className:"profile-btn-group",children:[Object(j.jsx)("img",{src:be,alt:"icon of message",className:"icon-round icon-message icon-round cursor-point"}),Object(j.jsx)("img",{src:me,alt:"icon of Notice",className:"icon-round icon-notice icon-round cursor-point"}),Object(j.jsx)("button",{className:"button-md button-m",onClick:function(){return o(!0)},children:"\u7de8\u8f2f\u500b\u4eba\u8cc7\u6599"})]}),Object(j.jsxs)("div",{className:"profile-info",children:[Object(j.jsx)("h5",{className:"user-name",children:c}),Object(j.jsxs)("p",{className:"user-account",children:["@",a]}),Object(j.jsx)("p",{className:"user-desc",children:n})]}),Object(j.jsxs)("div",{className:"user-follow-info",children:[Object(j.jsxs)("p",{children:[i," \u500b ",Object(j.jsx)("span",{children:"\u8ddf\u96a8\u4e2d"})]}),Object(j.jsxs)("p",{children:[l," \u4f4d",Object(j.jsx)("span",{children:"\u8ddf\u96a8\u8005"})]})]})]})})},he="https://calm-eyrie-50498.herokuapp.com/api",pe=g.a.create({baseUrl:he});pe.interceptors.request.use((function(e){var t=localStorage.getItem("authToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){console.error(e)}));var xe=function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.get("".concat(he,"/users/").concat(t));case 3:return c=e.sent,console.log(c),e.abrupt("return",c.data);case 8:e.prev=8,e.t0=e.catch(0),console.error("[getUser Info failed]",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ve=function(e){var t=e.setModalProOpen,c=e.setModalTweetOpen,n=Object(a.useState)("0"),s=Object(i.a)(n,2),r=s[0],l=s[1],u=Number(Object(o.n)().id),d=Object(o.l)(),b=S(),m=b.isAuthentical,p=b.currentMember,v=Object(a.useState)({}),f=Object(i.a)(v,2),g=f[0],N=f[1];return console.log(p),Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe(u);case 3:t=e.sent,N(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("[getUser Info  with Async failed]",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){m||d("/login")}),[d,m]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(P,Object(x.a)(Object(x.a)({role:"user",setModalTweetOpen:c,setModalProOpen:t,pageIndex:1},p),{},{children:[Object(j.jsx)("section",{className:"section-outer-m col-7",children:Object(j.jsxs)("div",{className:"section-main-m",children:[Object(j.jsx)(D,{userAccountName:"John Doe",userTweetsLength:"25\u63a8\u6587"}),Object(j.jsx)(Oe,Object(x.a)(Object(x.a)({},g),{},{setModalProOpen:t})),Object(j.jsx)(M,{tabIndex:r,setTabIndex:l})]})}),Object(j.jsx)("section",{className:"section-right col-3",children:Object(j.jsx)(X,{})})]}))})},fe=c.p+"static/media/avatar1.e64705b6.jpg",ge=function(){var e=Object(p.a)(),t=e.register,c=e.handleSubmit,a=e.reset,n=e.formState.errors;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"formLayout tweet-card-form",children:Object(j.jsxs)("form",{onSubmit:c((function(e){alert("\u6210\u529f\u7e73\u4ea4"),console.log(e),a()})),children:[Object(j.jsxs)("div",{className:"form-group-inner-wrapper",children:[Object(j.jsx)(Y,{avatar:fe}),Object(j.jsx)("div",{className:"textarea-group-container",children:Object(j.jsx)("div",{className:"grow-wrap",children:Object(j.jsx)("textarea",Object(x.a)(Object(x.a)({type:"textarea",id:"tweetarea",name:"tweetarea"},t("tweetarea",{required:!0,maxLength:250})),{},{placeholder:"\u6709\u4ec0\u9ebc\u65b0\u9bae\u4e8b\uff1f",maxLength:"250",className:"tweet-text-area"}))})})]}),Object(j.jsxs)("div",{children:[n.tweetarea&&"required"===n.tweetarea.type&&Object(j.jsx)("span",{className:"error",children:"This is required"}),Object(j.jsx)("button",{className:"button-md button-m active",type:"submit",children:"\u63a8\u6587"})]})]})})})},Ne=function(e){var t=e.setModalTweetOpen,c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],r=n[1],l=Object(o.l)(),u=S(),d=u.isAuthentical,b=u.currentMember;return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){d||l("/login")}),[l,d]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(P,Object(x.a)(Object(x.a)({role:"user",setModalTweetOpen:t,pageIndex:0},b),{},{children:[Object(j.jsx)("section",{className:"section-outer-m col-7",children:Object(j.jsxs)("div",{className:"section-main-m ",children:[Object(j.jsx)(B,{pageTitle:"\u9996\u9801"}),Object(j.jsx)("div",{className:"tweet-form-wrapper",children:Object(j.jsx)(ge,{avatar:null===b||void 0===b?void 0:b.avatar})}),Object(j.jsx)(je,{tweets:s,onClick:function(e){var t=e.tweetId,c=e.userId;t&&l("/main/tweet/".concat(t)),c&&l("/user/".concat(c))}})]})}),Object(j.jsx)("section",{className:"section-right col-3",children:Object(j.jsx)(X,{})})]}))})},we=c.p+"static/media/post.38b40641.svg",ke=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"profile-mini-card",children:[Object(j.jsx)(de,{bkUrl:"https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"}),Object(j.jsx)(Y,{avatar:fe}),Object(j.jsxs)("div",{className:"profile-info",children:[Object(j.jsx)("h5",{className:"user-name",children:"John Doe"}),Object(j.jsx)("p",{className:"user-account",children:"@heyjohn"})]}),Object(j.jsxs)("div",{className:"user-tweet-info",children:[Object(j.jsxs)("div",{className:"user-card-post-count",children:[Object(j.jsx)("img",{src:we,alt:"post",className:"icon-post"}),Object(j.jsx)("span",{className:"tweet-count",children:"1.5k"})]}),Object(j.jsxs)("div",{className:"user-card-like-count",children:[Object(j.jsx)("img",{src:ie,alt:"like",className:"icon-like"}),Object(j.jsx)("span",{className:"tweet-count",children:"20k"})]})]}),Object(j.jsxs)("div",{className:"user-follow-info",children:[Object(j.jsxs)("p",{children:["34 \u500b ",Object(j.jsx)("span",{children:"\u8ddf\u96a8\u4e2d"})]}),Object(j.jsxs)("p",{children:["59 \u4f4d",Object(j.jsx)("span",{children:"\u8ddf\u96a8\u8005"})]})]})]})})},ye=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(P,{role:"admin",pageIndex:1,children:Object(j.jsx)("div",{className:"section-outer-l col-10",children:Object(j.jsxs)("div",{className:"section-main-l",children:[Object(j.jsx)(B,{pageTitle:"\u4f7f\u7528\u8005\u5217\u8868"}),Object(j.jsxs)("div",{className:"admin-user-wrapper",children:[Object(j.jsx)(ke,{})," ",Object(j.jsx)(ke,{})," ",Object(j.jsx)(ke,{})," ",Object(j.jsx)(ke,{})," ",Object(j.jsx)(ke,{})," ",Object(j.jsx)(ke,{})," ",Object(j.jsx)(ke,{})," ",Object(j.jsx)(ke,{})]})]})})})})},Se=function(e){var t=e.children;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"modal-outer-container modal-transparent-bk",children:Object(j.jsx)("div",{className:"modal-flex-box",children:Object(j.jsx)("div",{className:"modal-container",children:t})})})})},Ie=c.p+"static/media/close.8d623dc5.svg",Te=function(e){var t=e.setModalTweetOpen;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"modal-header",children:Object(j.jsx)("img",{src:Ie,alt:"icon of close button",className:"icon-close",onClick:function(){t(!1)}})})})},Le=function(e){var t=e.setModalProOpen;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"modal-header modal-header-with-btn",children:[Object(j.jsx)("img",{src:Ie,alt:"icon of close button",className:"icon-close",onClick:function(){return t(!1)}}),Object(j.jsx)("h5",{children:"\u7de8\u8f2f\u500b\u4eba\u8cc7\u6599"}),Object(j.jsx)("button",{className:"button-md button-m active",type:"submit",children:"\u5132\u5b58"})]})})},Me=c.p+"static/media/addphoto.2e797657.svg",qe=function(e){var t=e.setModalProOpen,c=Object(p.a)(),n=c.register,s=c.handleSubmit,r=c.reset,l=c.formState.errors,o=c.watch,u=function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),r();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=Object(a.useRef)(null),b=Object(a.useRef)(null),m=Object(a.useRef)(null),f=Object(a.useState)(""),g=Object(i.a)(f,2),N=g[0],w=g[1],k=Object(a.useState)(""),y=Object(i.a)(k,2),S=y[0],I=y[1],T=function(e){console.log(e.target.className);var t="input-file-avatar";"input-file-bk"===e.target.className&&(t="input-file-bk");var c=Object(i.a)(e.target.files,1)[0];if(c){var a=new FileReader;d.current.file=c,a.onload=function(e){"input-file-avatar"===t?w(e.target.result):"input-file-bk"===t&&(console.log("bk-file"),I(e.target.result))},a.readAsDataURL(c)}};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(Se,{children:[Object(j.jsx)(Le,{setModalProOpen:t}),Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"profile-bk-wrapper",children:[Object(j.jsx)(de,{bkUrl:S}),Object(j.jsx)("img",{alt:"bk-camera",src:Me,className:"icon-camera",ref:d,onClick:function(){return m.current.click()}}),Object(j.jsx)("img",{src:Ie,alt:"icon of close button",className:"icon-close",onClick:function(){return alert("\u63db\u56de\u539f\u672c\u7167\u7247")}}),Object(j.jsx)("input",{type:"file",accept:"image/*",onChange:T,ref:m,className:"input-file-bk"})]}),Object(j.jsxs)("div",{className:"avatar-edit-wrapper",children:[Object(j.jsx)(Y,{avatar:N}),Object(j.jsx)("img",{alt:"bbb",src:Me,className:"icon-camera",ref:d,onClick:function(){return b.current.click()}}),Object(j.jsx)("input",{type:"file",accept:"image/*",onChange:T,ref:b,className:"input-file-avatar"})]}),Object(j.jsxs)("form",{className:"modal-info-form",onSubmit:s(u),children:[Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"username",label:"\u540d\u7a31",type:"text",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",maxLength:"50",errors:l,register:n,validationSchema:{required:"username is required",minLength:{value:3,message:"Please enter a minimum of 3 characters"}},watch:o})}),Object(j.jsxs)("div",{className:"textarea-group-container",children:[Object(j.jsxs)("div",{className:"textarea-group grow-wrap",children:[Object(j.jsx)("label",{children:"\u81ea\u6211\u4ecb\u7d39"}),Object(j.jsx)("textarea",Object(x.a)(Object(x.a)({type:"textarea",id:"description",name:"description"},n("description",{required:!0,maxLength:30})),{},{placeholder:"\u6709\u4ec0\u9ebc\u65b0\u9bae\u4e8b\uff1f",maxLength:"30",className:"desc-text-area"}))]}),Object(j.jsxs)("div",{className:"error-message-group",children:[l.description&&"required"===l.description.type&&Object(j.jsx)("span",{className:"error",children:"This is required"}),Object(j.jsxs)("span",{className:"limit-num",children:[o("description")?o("description").length:"0","/50"]})]})]})]})]})]})})},Ce=function(e){var t=e.setModalTweetOpen,c=Object(p.a)();c.register,c.handleSubmit,c.reset,c.formState.errors,c.watch;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(Se,{children:[Object(j.jsx)(Te,{setModalTweetOpen:t}),Object(j.jsx)("div",{className:"modal-content modal-tweet-content",children:Object(j.jsx)("div",{className:"tweet-form-wrapper",children:Object(j.jsx)(ge,{})})})]})})},Fe=function(e){var t=e.tweetInfo;return console.log({tweetInfo:t}),Object(j.jsxs)("div",{className:"TweetBigCard",children:[Object(j.jsxs)("div",{className:"TweetUserInfo",children:[Object(j.jsxs)("div",{className:"TweetUserInfo-head",children:[Object(j.jsx)(Y,{avatar:t.user.avatar}),Object(j.jsx)(Z,{name:t.user.name,account:t.user.account})]}),Object(j.jsx)("p",{className:"tweet-card-basic-description",children:t.description}),Object(j.jsx)("p",{className:"tweetDate",children:"\u4e0a\u534810:05\xb72021\u5e7411\u670810\u65e5"})]}),Object(j.jsxs)("div",{className:"TweetUserInfo",children:[Object(j.jsxs)("span",{className:"TweetUserInfo-replies",children:["34 ",Object(j.jsx)("span",{children:"\u56de\u8986"})]}),Object(j.jsxs)("span",{className:"TweetUserInfo-likes",children:["808 ",Object(j.jsx)("span",{children:"\u559c\u6b61\u6b21\u6578"})]})]}),Object(j.jsx)("div",{className:"TweetUserInfo",children:Object(j.jsx)(le,{})})]})},Pe=function(e){var t=e.setModalTweetOpen,c=Object(a.useState)({description:"",user:{avatar:"",name:"",account:""}}),n=Object(i.a)(c,2),s=n[0],r=n[1],l=S(),o=(l.isAuthentical,l.currentMember);return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H();case 3:t=e.sent,r(t.tweet),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(s),Object(j.jsxs)(P,Object(x.a)(Object(x.a)({role:"user",setModalTweetOpen:t,pageIndex:0},o),{},{children:[Object(j.jsx)("section",{className:"section-outer-m col-7",children:Object(j.jsxs)("div",{className:"section-main-m",children:[Object(j.jsx)(D,{userAccountName:"\u63a8\u6587"}),Object(j.jsx)(Fe,{tweetInfo:s})]})}),Object(j.jsx)("section",{className:"section-right col-3",children:Object(j.jsx)(X,{})})]}))},Ae=function(){var e=Object(p.a)(),t=e.register,c=e.handleSubmit,a=e.reset,n=e.formState.errors,s=e.watch,r=function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.username.length){e.next=2;break}return e.abrupt("return");case 2:if(0!==t.password.length){e.next=4;break}return e.abrupt("return");case 4:console.log(t),a();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"formLayout register-form",children:Object(j.jsxs)("form",{onSubmit:c(r),children:[Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"account",label:"\u5e33\u865f",type:"text",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",maxLength:"50",errors:n,register:t,validationSchema:{required:"account is required",minLength:{value:3,message:"Please enter a minimum of 3 characters"}},watch:s})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"username",label:"\u540d\u7a31",type:"text",placeholder:"\u8acb\u8f38\u5165\u540d\u7a31",maxLength:"50",errors:n,register:t,validationSchema:{required:"username is required",minLength:{value:3,message:"Please enter a minimum of 3 characters"}},watch:s})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"email",label:"Email",type:"email",placeholder:"\u8acb\u8f38\u5165Email",errors:n,register:t,validationSchema:{required:"email is required",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"}},watch:s})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"password",label:"\u5bc6\u78bc",type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",errors:n,register:t,validationSchema:{required:"password is required",minLength:{value:8,message:"Please enter a minimum of 8 characters"}},watch:s})}),Object(j.jsx)("div",{className:"input-group-container",children:Object(j.jsx)(v,{name:"cpassword",label:"\u5bc6\u78bc\u518d\u78ba\u8a8d",type:"password",placeholder:"\u8acb\u518d\u6b21\u8f38\u5165\u5bc6\u78bc",errors:n,register:t,validationSchema:{required:"password is required",minLength:{value:8,message:"Please enter a minimum of 8 characters"}},watch:s})}),Object(j.jsxs)("div",{className:"button-group-column",children:[Object(j.jsx)("button",{className:"button-filled button-lg",type:"submit",children:"\u767b\u5165"}),Object(j.jsx)(l.b,{to:"/login",className:"button-link",children:"\u53d6\u6d88"})]})]})})},Ue=function(){var e=S().isAuthentical,t=Object(o.l)();return Object(a.useEffect)((function(){e&&(console.log("s"),t("/main"))}),[t,e]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:"login-container col-4 flex_col_cc",children:[Object(j.jsx)("div",{className:"page-logo",children:Object(j.jsx)("img",{src:b,alt:"Alphitter Icon",className:"icon-logo cursor-point"})}),Object(j.jsx)("h3",{className:"page-title",children:"\u5efa\u7acb\u4f60\u7684\u5e33\u865f"}),Object(j.jsx)(Ae,{})]})})})};var Ee=function(e){e.router;var t=Object(a.useState)(!1),c=Object(i.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),b=Object(i.a)(r,2),m=b[0],O=b[1];return console.log("modalTweetOpen",m),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(I,{children:Object(j.jsxs)(u,{children:[Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"*",element:Object(j.jsx)(L,{})}),Object(j.jsx)(o.a,{path:"/storybook",element:Object(j.jsx)(C,{})}),Object(j.jsx)(o.a,{path:"/login",element:Object(j.jsx)(L,{})}),Object(j.jsx)(o.a,{path:"/admin",element:Object(j.jsx)(A,{})}),Object(j.jsx)(o.a,{path:"/register",element:Object(j.jsx)(Ue,{})}),Object(j.jsx)(o.a,{path:"/main",element:Object(j.jsx)(Ne,{setModalTweetOpen:O})}),Object(j.jsx)(o.a,{path:"/user/:id",element:Object(j.jsx)(ve,{setModalProOpen:s,setModalTweetOpen:O})}),Object(j.jsx)(o.a,{path:"/main/tweet/:id",element:Object(j.jsx)(Pe,{setModalTweetOpen:O})}),Object(j.jsx)(o.a,{path:"/setting",element:Object(j.jsx)(_,{setModalTweetOpen:O})}),Object(j.jsx)(o.a,{path:"/admin/users",element:Object(j.jsx)(ye,{})}),Object(j.jsx)(o.a,{path:"/main/self2",element:Object(j.jsx)(d,{})})]}),m&&Object(j.jsx)(Ce,{setModalTweetOpen:O}),n&&Object(j.jsx)(qe,{setModalProOpen:s})]})})})})},Be=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,352)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(Ee,{})})),Be()}},[[351,1,2]]]);
//# sourceMappingURL=main.6773f9c3.chunk.js.map