(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(16),n=s.n(r),a=s(11),i=(s(41),s(42),s(8)),o=s(7),l="CHANGE_LOGIN_STATUS",j="SET_USER",h="SET_MEMBERSHIP",b=function(e){return{type:l,info:"Change login status",payload:e}},d=s(2),p=s.n(d),m=s(9),u=s(15),O=s(32),x=s(1),g=function(){var e=Object(a.c)((function(e){return e.utils.isLoggedIn})),t=Object(a.c)((function(e){return e.utils.user})),s=Object(a.c)((function(e){return e.utils.membership})),c=Object(a.b)(),r=Object(o.f)(),n=function(){sessionStorage.removeItem("token"),c(b(!e)),r.push("/login")},l=function(){var e=Object(m.a)(p.a.mark((function e(){var t,s,c,r,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,sessionStorage.getItem("token");case 3:return t=e.sent,s="https://sumit-fitness-flask.herokuapp.com/download?token=".concat(t),e.next=7,fetch(s,{method:"GET",mode:"cors"});case 7:return c=e.sent,r=c.clone(),e.next=11,r.json();case 11:if(n=e.sent,200===c.status){e.next=14;break}throw new Error(n.message);case 14:return e.next=16,c.blob();case 16:return a=e.sent,Object(O.saveAs)(a,"user_list"),e.abrupt("return",a);case 21:e.prev=21,e.t0=e.catch(0),u.NotificationManager.error("Error message",e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("header",{children:[Object(x.jsxs)("div",{className:"top",children:[Object(x.jsx)("span",{children:"Try our services. Get 7 day free trial"}),e?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.b,{to:"#",onClick:n,children:"Logout"}),t&&"admin"===t.type&&Object(x.jsx)(i.b,{to:"#",onClick:l,children:"Download JSON"}),t&&"admin"!==t.type&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("span",{children:[t.name," - "]}),Object(x.jsxs)("span",{children:[" (Membership: ",s.title,")"]})]})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.b,{to:"/login",children:"Login"}),Object(x.jsx)(i.b,{to:"/register",children:"Register"})]})]}),Object(x.jsxs)("nav",{children:[Object(x.jsxs)("menu",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:"/",data:"HOME",children:"HOME"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:"/gallery",data:"GALLERY",children:"GALLERY"})})]}),Object(x.jsx)("img",{src:"/static/images/Logo Sumit Fitness.png",alt:"logo",title:"baker",className:"logo"}),Object(x.jsxs)("menu",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:"/about",data:"ABOUT",children:"ABOUT"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:"/contact",data:"CONTACT",children:"CONTACT"})})]})]}),Object(x.jsx)(u.NotificationContainer,{})]})},f=function(){return Object(x.jsxs)("footer",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:"/static/images/Logo Sumit Fitness.png",alt:"logo",className:"logo"}),Object(x.jsx)("p",{children:"Open 15 New Clubs Accross the Country"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"secondary_heading",children:"MENU"}),Object(x.jsx)(i.b,{to:"/",children:"HOME"}),Object(x.jsx)(i.b,{to:"/gallery",children:"GALLERY"}),Object(x.jsx)(i.b,{to:"/about",children:"ABOUT"}),Object(x.jsx)(i.b,{to:"/contact",children:"CONTACT"})]}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"\xa92021 Sumit Fitness"})})]})},v=s(3),y=s(13),N=s(19),w=function(){var e=Object(N.a)({defaultValues:{name:"",email:"",subject:"",concern:""}}),t=e.register,s=e.handleSubmit,r=e.reset,n=Object(c.useState)(!1),a=Object(y.a)(n,2),i=a[0],o=a[1];return Object(x.jsx)("div",{children:Object(x.jsxs)("section",{className:"contact",children:[Object(x.jsxs)("div",{className:"contact_details",children:[Object(x.jsx)("h1",{className:"primary_heading",children:"GET IN TOUCH"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Address:"})," 35 Bolton Street, Northside, Dublin."]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Phone:"})," +353 505 23681"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Email:"})," sumitfitness@contact.us.com"]})]}),Object(x.jsxs)("form",{className:"contact_form",onSubmit:s((function(e){console.log(e),alert("Your form submitted successfully!"),o(!1),r()})),children:[Object(x.jsx)("h1",{className:"secondary_heading",children:"Send Us Your Query"}),Object(x.jsx)("p",{}),Object(x.jsx)("input",Object(v.a)(Object(v.a)({},t("name",{required:!0})),{},{placeholder:"Name"})),Object(x.jsx)("input",Object(v.a)(Object(v.a)({type:"email"},t("email",{required:!0,pattern:/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i})),{},{placeholder:"Email Address"})),Object(x.jsxs)("select",Object(v.a)(Object(v.a)({},t("subject",{required:!0})),{},{onChange:function(e){"other"!==e.target.value?o(!1):o(!0)},children:[Object(x.jsx)("option",{value:"",children:"Select a Subject"}),Object(x.jsx)("option",{value:"membership",children:"Membership"}),Object(x.jsx)("option",{value:"payment",children:"Payment"}),Object(x.jsx)("option",{value:"other",children:"Other"})]})),i&&Object(x.jsx)("input",Object(v.a)(Object(v.a)({},t("specific_subject",{required:!0})),{},{placeholder:"Your Specific Subject"})),Object(x.jsx)("textarea",Object(v.a)(Object(v.a)({},t("concern",{required:!0})),{},{id:"concern",cols:"30",rows:"10",placeholder:"SEND MESSAGE"})),Object(x.jsx)("button",{type:"submit",className:"btn btn_dark",children:"SEND MESSAGE"})]})]})})},E=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("section",{className:"team",children:[Object(x.jsxs)("div",{className:"tradition",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"primary_heading",children:"ABOUT SUMIT FITNESS PLAYZONE "}),Object(x.jsx)("p",{className:"secondary_para",children:"Our gym members are provided with unlimited access to our home club which provide support to the friends and knowledge staff at any instance. The members even receive additional benefits inclusive of additional benefits which do have the ability to bring up guests for free. Our mere target is all about providing clean, safe and welcome environment for individual who can walk with all our equipment and amenities to provide support during the instance of need."}),Object(x.jsx)("p",{className:"secondary_para",children:"The gym aims to give an organization depended CSR platform to improve the lives of people and thereby creating a healthier world. All this is merely done by emphasizing on three important problems namely public health, emotional health and plane health."})]}),Object(x.jsx)("div",{className:"tradition_img",children:Object(x.jsx)("img",{src:"https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""})})]}),Object(x.jsxs)("div",{className:"members",children:[Object(x.jsx)("h1",{className:"primary_heading",children:"THIS ARE OUR COACHES"}),Object(x.jsxs)("div",{className:"member",children:[Object(x.jsx)("img",{src:"https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940    ",alt:""}),Object(x.jsx)("h1",{children:"JAMES COSTELLI"}),Object(x.jsx)("p",{children:"Gym Instructor"})]}),Object(x.jsxs)("div",{className:"member",children:[Object(x.jsx)("img",{src:"https://images.pexels.com/photos/7675407/pexels-photo-7675407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""}),Object(x.jsx)("h1",{children:"MARRY ALLEN"}),Object(x.jsx)("p",{children:"Yoga Instructor"})]}),Object(x.jsxs)("div",{className:"member",children:[Object(x.jsx)("img",{src:"https://images.pexels.com/photos/8810066/pexels-photo-8810066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""}),Object(x.jsx)("h1",{children:"Adam Pierce"}),Object(x.jsx)("p",{children:"Boxing Coach"})]}),Object(x.jsxs)("div",{className:"member",children:[Object(x.jsx)("img",{src:"https://images.pexels.com/photos/1738629/pexels-photo-1738629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""}),Object(x.jsx)("h1",{children:"MICHAEL Mayers"}),Object(x.jsx)("p",{children:"Gym Instructor"})]})]})]})})},S=function(e){var t=e.url;return Object(x.jsx)("div",{className:"gallery-img",children:Object(x.jsx)("img",{src:t,alt:""})})},T=function(){return Object(x.jsx)("div",{className:"gallery",children:["https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"].map((function(e,t){return Object(x.jsx)(S,{url:e},t)}))})},k=(s(49),function(){var e=Object(N.a)(),t=e.register,s=e.handleSubmit,c=e.reset,r=(Object(a.c)((function(e){return e.utils.isLoggedIn})),Object(a.b)()),n=Object(o.f)(),i=function(){var e=Object(m.a)(p.a.mark((function e(t){var s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://sumit-fitness-flask.herokuapp.com/api/login/",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return s=e.sent,e.next=6,s.json();case 6:if(a=e.sent,201===s.status){e.next=9;break}throw new Error(a.message);case 9:sessionStorage.setItem("token",a.token),r(b(!0)),r((o=a.user,{type:j,info:"Set logged in user",payload:o})),r((i=a.membership,{type:h,info:"Set logged in user's membership",payload:i})),n.push("/"),c(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),u.NotificationManager.error("Error message",e.t0.message);case 20:case"end":return e.stop()}var i,o}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"user-form-container",children:Object(x.jsxs)("form",{className:"user-form",onSubmit:s(i),children:[Object(x.jsx)("input",Object(v.a)(Object(v.a)({type:"email"},t("email",{required:!0,pattern:/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i})),{},{placeholder:"Email Address"})),Object(x.jsx)("input",Object(v.a)(Object(v.a)({type:"password"},t("password",{required:!0})),{},{placeholder:"******"})),Object(x.jsx)("button",{type:"submit",className:"btn btn_dark",children:"LOGIN"})]})}),Object(x.jsx)(u.NotificationContainer,{})]})}),_=function(){var e=Object(N.a)(),t=e.register,s=e.handleSubmit,r=e.reset,n=Object(c.useState)([]),a=Object(y.a)(n,2),i=a[0],l=a[1],j=Object(o.f)(),h=function(){var e=Object(m.a)(p.a.mark((function e(t){var s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://sumit-fitness-flask.herokuapp.com/api/register/",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return s=e.sent,e.next=6,s.json();case 6:if(c=e.sent,201===s.status){e.next=9;break}throw new Error(c.message);case 9:u.NotificationManager.success("Success message","Registration successful"),setTimeout((function(){j.push("/login")}),1e3),r(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.table([e.t0.name,e.t0.stack]),u.NotificationManager.error("Error message",e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(m.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://sumit-fitness-flask.herokuapp.com/api/memberships/",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}});case 3:if(200===(t=e.sent).status){e.next=6;break}throw new Error("Membership load failed");case 6:return e.next=8,t.json();case 8:s=e.sent,l(s.list),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.table([e.t0.name,e.t0.stack]),u.NotificationManager.error("Error message",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"user-form-container",children:Object(x.jsxs)("form",{className:"user-form",onSubmit:s(h),children:[Object(x.jsx)("input",Object(v.a)(Object(v.a)({type:"text"},t("name",{required:!0})),{},{placeholder:"Full Name"})),Object(x.jsx)("input",Object(v.a)(Object(v.a)({type:"email"},t("email",{required:!0,pattern:/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i})),{},{placeholder:"Email Address"})),Object(x.jsx)("input",Object(v.a)(Object(v.a)({type:"password"},t("password",{required:!0})),{},{placeholder:"******"})),Object(x.jsxs)("select",Object(v.a)(Object(v.a)({},t("gender",{required:!0})),{},{children:[Object(x.jsx)("option",{value:"",children:"Select Gender"}),Object(x.jsx)("option",{value:"male",children:"Male"}),Object(x.jsx)("option",{value:"female",children:"Female"}),Object(x.jsx)("option",{value:"others",children:"Others"})]})),Object(x.jsx)("input",Object(v.a)(Object(v.a)({type:"number"},t("age",{required:!0,min:16})),{},{placeholder:"Your Age"})),Object(x.jsxs)("select",Object(v.a)(Object(v.a)({},t("membership_id",{required:!0})),{},{children:[Object(x.jsx)("option",{value:"",children:"Select Membership"}),i&&i.map((function(e){return Object(x.jsx)("option",{value:e.id,children:"".concat(e.title," - Charge: \u20ac").concat(e.cost,".00")})}))]})),Object(x.jsx)("button",{type:"submit",className:"btn btn_dark",children:"Register"})]})}),Object(x.jsx)(u.NotificationContainer,{})]})},A=function(){var e=Object(a.c)((function(e){return e.utils.isLoggedIn}));return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"hero",children:[Object(x.jsx)("h1",{className:"primary_heading",children:"PUT YOURSELF FIRST"}),!e&&Object(x.jsx)(i.b,{to:"register",className:"btn btn_light",children:"Join"})]}),Object(x.jsxs)("section",{className:"custom-message",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"primary_heading",children:"GET THERE WITH SUMIT FITNESS"}),Object(x.jsx)("p",{className:"secondary_para",children:"Our gym aims to provide some exclusive offers from partners and even much more. With our membership plan, an individual can check out the classic membership and PF black. At this fitness firm, the mere focus is all about improving physical and mental wellness which can give priority to melt away the going stress. In addition, it can help in decreasing anxiety and enhance the positive level of energy."}),Object(x.jsx)("p",{className:"secondary_para",children:"An individual can feel healthy and strong all throughout the year. The gym focuses on keeping our commitment clean as individual welcome back. We are doing an important part of clean clubs where the cleaner with touchless check-in and cleaning is stocked by using disinfectant sprays. "})]}),Object(x.jsx)("div",{className:"custom-message_img",children:Object(x.jsx)("img",{src:"https://images.pexels.com/photos/4164772/pexels-photo-4164772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""})}),Object(x.jsx)("div",{className:"custom-message_img",children:Object(x.jsx)("img",{src:"https://images.pexels.com/photos/4164525/pexels-photo-4164525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""})})]}),Object(x.jsx)("section",{className:"email_register",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"primary_heading",children:"BE MORE PRODUCTIVE"}),Object(x.jsx)("p",{className:"secondary_para",children:"Get free trial. There is need for practicing social fitness to allow our members with minimum room."}),Object(x.jsxs)("div",{className:"email_input",children:[Object(x.jsx)("input",{type:"email",name:"email",id:"email"}),Object(x.jsx)("button",{children:"JOIN"})]})]})})]})};var I=function(){var e=Object(a.b)();return Object(c.useEffect)((function(){sessionStorage.getItem("token")&&e(b(!0))}),[]),Object(x.jsxs)(i.a,{children:[Object(x.jsx)(g,{}),Object(x.jsx)("div",{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(A,{})}),Object(x.jsx)(o.a,{path:"/gallery",children:Object(x.jsx)(T,{})}),Object(x.jsx)(o.a,{path:"/about",children:Object(x.jsx)(E,{})}),Object(x.jsx)(o.a,{path:"/contact",children:Object(x.jsx)(w,{})}),Object(x.jsx)(o.a,{path:"/login",children:Object(x.jsx)(k,{})}),Object(x.jsx)(o.a,{path:"/register",children:Object(x.jsx)(_,{})})]})}),Object(x.jsx)(f,{})]})},C=s(27),L={isLoggedIn:!1,user:{},membership:{}},M=Object(C.b)(Object(C.a)({utils:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(v.a)(Object(v.a)({},e),{},{isLoggedIn:t.payload});case j:return Object(v.a)(Object(v.a)({},e),{},{user:t.payload});case h:return Object(v.a)(Object(v.a)({},e),{},{membership:t.payload});default:return e}}}),{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(x.jsx)(a.a,{store:M,children:Object(x.jsx)(I,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.d57b2ff0.chunk.js.map