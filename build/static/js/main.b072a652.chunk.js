(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(21),r=c.n(n),i=(c(51),c(52),c(7)),h=c(6),j=c(4),l=c(14),d=c.n(l),o=c(0);function b(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],h=r[1],l=Object(a.useState)(""),b=Object(j.a)(l,2),u=b[0],O=b[1],x=Object(a.useState)(""),p=Object(j.a)(x,2),m=p[0],g=p[1],y=Object(a.useState)(""),w=Object(j.a)(y,2),f=w[0],v=w[1],k=Object(a.useState)(""),S=Object(j.a)(k,2),N=S[0],R=S[1],C=Object(a.useState)(""),L=Object(j.a)(C,2),T=L[0],A=L[1],D=Object(a.useState)(""),I=Object(j.a)(D,2),P=I[0],B=I[1],E=Object(a.useState)([]),U=Object(j.a)(E,2),F=U[0],K=U[1],G=Object(a.useState)(""),W=Object(j.a)(G,2),H=W[0],z=W[1],M=Object(a.useState)(""),q=Object(j.a)(M,2),Y=q[0],_=q[1],J=Object(a.useState)(""),V=Object(j.a)(J,2),Q=V[0],X=V[1],Z=Object(a.useState)(""),$=Object(j.a)(Z,2),ee=$[0],te=$[1],ce=Object(a.useState)(""),ae=Object(j.a)(ce,2),se=ae[0],ne=ae[1],re=Object(a.useState)(""),ie=Object(j.a)(re,2),he=ie[0],je=ie[1],le=Object(a.useState)(""),de=Object(j.a)(le,2),oe=de[0],be=de[1],ue=Object(a.useState)(""),Oe=Object(j.a)(ue,2),xe=Oe[0],pe=Oe[1];return Object(a.useEffect)((function(){d.a.get("http://localhost:5001/customer/read").then((function(e){K(e.data)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"crud",children:[Object(o.jsx)("h2",{children:"Customer items CRUD APP"}),Object(o.jsxs)("div",{className:"book-crud",children:[Object(o.jsx)("label",{children:"First Name"}),Object(o.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)}}),Object(o.jsx)("label",{children:"Last Name"}),Object(o.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)}}),Object(o.jsx)("label",{children:"User Name"}),Object(o.jsx)("input",{type:"text",onChange:function(e){O(e.target.value)}}),Object(o.jsx)("label",{children:"Contact"}),Object(o.jsx)("input",{type:"number",onChange:function(e){g(e.target.value)}}),Object(o.jsx)("label",{children:"Address"}),Object(o.jsx)("input",{type:"text",onChange:function(e){v(e.target.value)}}),Object(o.jsx)("label",{children:"Gender"}),Object(o.jsx)("input",{type:"text",onChange:function(e){R(e.target.value)}}),Object(o.jsx)("label",{children:"City"}),Object(o.jsx)("input",{type:"text",onChange:function(e){A(e.target.value)}}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"text",onChange:function(e){B(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){d.a.post("http://localhost:5001/customer/insert",{firstname:c,lastname:i,cusername:u,contact:m,address:f,gender:N,city:T,password:P}),alert("item Added Successfully")},children:"Add Customer"})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{children:"Customer List"}),Object(o.jsx)("div",{className:"show-books",children:F.map((function(e,t){return Object(o.jsxs)("div",{className:"book",children:[Object(o.jsxs)("h3",{className:"customerlist",children:["First Name ",e.firstname]}),Object(o.jsxs)("h3",{className:"customerlist",children:[" Last Name   ",e.lastname]}),Object(o.jsxs)("h3",{className:"customerlist",children:["Username",e.username]}),Object(o.jsxs)("h3",{className:"customerlist",children:["Contact",e.contact]}),Object(o.jsxs)("h3",{className:"customerlist",children:["Address",e.address]}),Object(o.jsxs)("h3",{className:"customerlist",children:["Gender",e.gender]}),Object(o.jsxs)("h3",{className:"customerlist",children:["City",e.city]}),Object(o.jsxs)("h3",{className:"customerlist",children:["Password",e.password]}),Object(o.jsx)("input",{type:"text",placeholder:"New First Name",onChange:function(e){z(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New Last Name",onChange:function(e){_(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New Username",onChange:function(e){X(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New Contact",onChange:function(e){te(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New Address",onChange:function(e){ne(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New Gender",onChange:function(e){je(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New City",onChange:function(e){be(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New Password",onChange:function(e){pe(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){return t=e._id,void d.a.put("http://localhost:5001/customer/update",{id:t,newfirstname:H,newlastname:Y,newcusername:Q,newcontact:ee,newaddress:se,newgender:he,newcity:oe,newpassword:xe});var t},className:"btn-book",children:"Update"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return t=e._id,void d.a.delete("http://localhost:5000/customer/delete/".concat(t));var t},className:"btn-book",children:"Delete"})]},t)}))})]})}function u(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],h=r[1],l=Object(a.useState)(""),b=Object(j.a)(l,2),u=b[0],O=b[1],x=Object(a.useState)([]),p=Object(j.a)(x,2),m=p[0],g=p[1],y=Object(a.useState)(""),w=Object(j.a)(y,2),f=w[0],v=w[1],k=Object(a.useState)(""),S=Object(j.a)(k,2),N=S[0],R=S[1],C=Object(a.useState)(""),L=Object(j.a)(C,2),T=L[0],A=L[1];return Object(a.useEffect)((function(){d.a.get("http://localhost:5001/admin/read").then((function(e){g(e.data)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"crud",children:[Object(o.jsx)("h2",{children:"Menu items CRUD APP"}),Object(o.jsxs)("div",{className:"admin-crud",children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)}}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)}}),Object(o.jsx)("label",{children:"Status"}),Object(o.jsx)("input",{type:"text",onChange:function(e){O(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){d.a.post("http://localhost:5001/admin/insert",{username:c,password:i,status:u}),alert("item Added Successfully")},children:"Add Admin"})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{children:"Admin List"}),Object(o.jsx)("div",{className:"show-admins",children:m.map((function(e,t){return Object(o.jsxs)("div",{className:"admin",children:[Object(o.jsxs)("h3",{className:"adminlist",children:["Username ",e.username]}),Object(o.jsxs)("h3",{className:"adminlist",children:[" Password   ",e.password]}),Object(o.jsxs)("h3",{className:"adminlist",children:["Status",e.status]}),Object(o.jsx)("input",{type:"text",placeholder:"New Username",onChange:function(e){v(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New Password",onChange:function(e){R(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"New Status",onChange:function(e){A(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return t=e._id,void d.a.put("http://localhost:5001/admin/update",{id:t,newusername:f,newpassword:N,newstatus:T});var t},className:"btn-admin",children:"Update"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return t=e._id,void d.a.delete("http://localhost:5001/admin/delete/".concat(t));var t},className:"btn-admin",children:"Delete"})]},t)}))})]})}var O=c(10),x=c.n(O),p=c.p+"static/media/test.ab44b3a7.mp4",m=c.p+"static/media/home1.9da90241.mp4",g=c.p+"static/media/home2.45504f5b.mp4";function y(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Welcome to GYM Trainer 2021"}),"\xa0",Object(o.jsxs)("center",{children:[Object(o.jsx)("h3",{children:" Regular exercise and physical activity promotes strong muscles and"})," ",Object(o.jsx)("h3",{children:"bones. It improves respiratory, cardiovascular health, and overall health. "}),Object(o.jsx)("h3",{children:"Staying active can also help you maintain a healthy weight, reduce your risk "}),Object(o.jsx)("h3",{children:"for type 2 diabetes, heart disease, and reduce your risk for some cancers."}),Object(o.jsx)(x.a,{src:m,width:"980",height:"550",className:"border border-dark",autoplay:!0}),"\xa0",Object(o.jsx)("h3",{children:" Staying active and healthy allows you to do activities that require"})," ",Object(o.jsx)("h3",{children:" a certain level of physical fitness. For example, hiking to the top of"})," ",Object(o.jsx)("h3",{children:"a mountain is a rewarding experience that instills a sense of accomplishment"})," ",Object(o.jsx)("h3",{children:"and provides spectacular scenery, but there are people who cannot experience"})," ",Object(o.jsx)("h3",{children:"this due to fitness limitations. "}),Object(o.jsx)(x.a,{src:g,width:"980",height:"550",className:"border border-dark",autoplay:!0}),"\xa0",Object(o.jsx)(x.a,{src:p,width:"980",height:"550",className:"border border-dark",autoplay:!0}),Object(o.jsx)("h3",{children:"Encourage your family to be more active, and challenge yourself to meet daily or weekly"})," ",Object(o.jsx)("h3",{children:" physical activity goals. Play outdoor sports with the whole family, schedule time each day"})," ",Object(o.jsx)("h3",{children:" to go to the gym, or pick up healthy, active hobbies like hiking or cycling. National Physical"})," ",Object(o.jsx)("h3",{children:" Fitness and Sports Month is a great time to get more active, but don\u2019t stop at the end of the"})," ",Object(o.jsx)("h3",{children:"  month. Make exercise and physical activity a permanent part of your daily routine! "})]})]})}function w(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"About Page"}),Object(o.jsx)("p",{children:"Lets Kill your Hunger!!!!."}),Object(o.jsx)("p",{children:"Supermeal is an online food ordering platform with a difference \u2013 We constantly reward our customers! Get instant cashback on every delivery, dine-in, or takeaway. Be it a cup of coffee or a treat for the entire family, you get cashback on every bite!."})]})}function f(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Contact Us"}),Object(o.jsx)("p",{children:"HEY VIST US NOW AND GET 50% ON NEW BOOKINGS"}),Object(o.jsx)("p",{children:"Call Us at +383456654455"}),Object(o.jsx)("p",{children:"email: testbuddy@gmail.com"}),Object(o.jsx)("p",{children:"Follow us on Snapchat Instahram and Facebook"})]})}function v(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"No Match"})})}var k,S,N=c(19),R=c(89),C=c(90),L=c(20),T=L.a.div(k||(k=Object(N.a)(["\n  .navbar {\n    background-color: #222;\n  }\n\n  a, .navbar-brand, .navbar-nav .nav-link {\n    color: #bbb;\n\n    &:hover {\n      color: white;\n    }\n  }\n"])));function A(){return Object(o.jsx)(T,{children:Object(o.jsxs)(R.a,{expand:"lg",children:[Object(o.jsx)(R.a.Brand,{href:"/",children:"Gym Trainer 2021"}),Object(o.jsx)(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsx)(R.a.Collapse,{id:"basic-navbar-nav",children:Object(o.jsxs)(C.a,{className:"ml-auto",children:[Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/",children:"Home"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/warmup",children:"Warmup Day"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/day1",children:"Day 1"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/day2",children:"Day 2"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/day3",children:"Day 3"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/day4",children:"Day 4"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/restday",children:"Rest Day"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)(i.b,{to:"/contact",children:"Contact"})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/login",children:"Login"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/admin",children:"Admin"})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsxs)("span",{children:[" ",Object(o.jsx)(i.b,{to:"/customer",children:"Customer"})]})})})]})})]})})}var D=L.a.div(S||(S=Object(N.a)(["\n  .navbar {\n    background-color: #222;\n  }\n\n  a, .navbar-brand, .navbar-nav .nav-link {\n    color: #bbb;\n\n    &:hover {\n      color: white;\n    }\n  }\n"])));var I,P=function(){return Object(o.jsx)(D,{children:Object(o.jsxs)(R.a,{expand:"lg",children:[Object(o.jsx)(R.a.Brand,{href:"/",children:"  "}),Object(o.jsx)(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsx)(R.a.Collapse,{id:"basic-navbar-nav",children:Object(o.jsxs)(C.a,{className:"ml-auto",children:[Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/",children:" Follow us on Instagram: @gymtrainer2021 "})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/",children:" Facebook: facebook.com/gymtrainer2021 "})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:"/",children:" Snapchat: @gymtrainer2021 "})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:" /",children:" Twitter: @gymtrainer2021 "})})})}),Object(o.jsx)(C.a.Item,{children:Object(o.jsx)(C.a.Link,{children:Object(o.jsx)("span",{children:Object(o.jsx)(i.b,{to:" /",children:" KakaoTalk: @gymtrainer2021 "})})})})]})})]})})},B=c(87),E=c(88),U=c.p+"static/media/food1.bf3a1745.jpg",F=L.a.div(I||(I=Object(N.a)(["\n  .jumbo {\n    background: url(",") no-repeat fixed bottom;\n    background-size: cover;\n    color: #efefef;\n    height: 400px;\n    position: relative;\n    z-index: -2;\n  }\n\n  .overlay {\n    background-color: #000;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n  }\n"])),U);function K(){return Object(o.jsx)("div",{children:Object(o.jsx)(F,{children:Object(o.jsxs)(B.a,{fluid:!0,className:"jumbo",children:[Object(o.jsx)("div",{className:"overlay"}),Object(o.jsxs)(E.a,{children:[Object(o.jsx)("h1",{children:"GET READY TO BURN"}),Object(o.jsx)("p",{children:"LETS GET YOU IN SHAPE"})]})]})})})}var G=c.p+"static/media/1-Neck-circles.720a76bd.mp4",W=c.p+"static/media/2-Shoulder-Rotation.34a014b8.mp4",H=c.p+"static/media/3-Arm-Circles.0b825486.mp4",z=c.p+"static/media/4-ElbowCircle.f0a19455.mp4",M=c.p+"static/media/5-hiprotation.e52dfd7e.mp4";function q(){return Object(o.jsxs)("div",{className:"Warmup",children:[Object(o.jsx)("h2",{children:"Its Time to Warmup your body "}),Object(o.jsxs)("center",{children:["\xa0",Object(o.jsx)("h2",{children:"1- Neck Circles "}),Object(o.jsx)(x.a,{src:G,width:"980",height:"550",className:"border border-dark"}),"\xa0",Object(o.jsx)("p",{className:"lead",children:" Duration 30 Seconds "}),Object(o.jsx)("p",{className:"font-weight-bold",children:"Standup and Straight your posture and Start rotating your neck in clockwise or Anticlockwise direction"}),Object(o.jsx)("h2",{children:"2- Shoulder Rotation "}),Object(o.jsx)(x.a,{src:W,width:"980",height:"550",className:"border border-dark"}),"\xa0",Object(o.jsx)("p",{className:"lead",children:" Duration 30 Seconds "}),Object(o.jsx)("p",{className:"font-weight-bold",children:" Keep your Standing Position and this time Rotate your shoulder in Cloclwise direction"}),Object(o.jsx)("h2",{children:"3- Arm Circles "}),Object(o.jsx)(x.a,{src:H,width:"980",height:"550",className:"border border-dark"}),"\xa0",Object(o.jsx)("p",{className:"lead",children:" Duration 30 Seconds "}),Object(o.jsx)("p",{className:"font-weight-bold",children:" Keep your Standing Position and Rotate your Arms in Cloclwise direction"}),Object(o.jsx)("h2",{children:"4- Elbow Circles "}),Object(o.jsx)(x.a,{src:z,width:"980",height:"550",className:"border border-dark"}),"\xa0",Object(o.jsx)("p",{className:"lead",children:" Duration 30 Seconds "}),Object(o.jsx)("p",{className:"font-weight-bold",children:" Keep your Standing Position and Rotate your Elbows in Circular direction"}),Object(o.jsx)("h2",{children:"5- Hip Rotation "}),Object(o.jsx)(x.a,{src:M,width:"980",height:"550",className:"border border-dark"}),"\xa0",Object(o.jsx)("p",{className:"lead",children:" Duration 30 Seconds "}),Object(o.jsx)("p",{className:"font-weight-bold",children:" Keep your Standing Position and Rotate your Uper Body along with Hips in Cloclwise direction"})]})]})}var Y=c.p+"static/media/day1.1.aff15b3a.jpg",_=c.p+"static/media/day1.2.23e8d895.jpg",J=c.p+"static/media/day1.3.2ac9032a.jpg",V=c.p+"static/media/day1.4.80722aa3.jpg",Q=c.p+"static/media/day1.5.61b0b745.jpg";function X(){return Object(o.jsxs)("div",{className:"Day1",children:[Object(o.jsx)("h1",{children:"Welcome to Day 1"}),"\xa0",Object(o.jsx)("h2",{children:" Chest And Triceps "}),"\xa0",Object(o.jsx)("h3",{children:" 1 Bench press "}),"\xa0",Object(o.jsx)("img",{src:Y,alt:""}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Sets 5 Reps 10 Tempo 2010 Rest 60sec Lie on a flat bench holding a barbell with your hands."}),Object(o.jsx)("h4",{children:"slightly wider than shoulder-width apart. Brace your core, then lower the bar towards your."}),Object(o.jsx)("h4",{children:"chest. Press it back up to the start."})," "]}),"\xa0",Object(o.jsx)("h3",{children:" 2 Triceps dip "}),Object(o.jsx)("img",{src:_,alt:""}),Object(o.jsx)("h4",{children:" Sets 5 Reps 6-10 Tempo 2110 Rest 60sec Grip rings or parallel bars with your arms straight."})," ",Object(o.jsx)("h4",{children:" Keeping your chest up, bend your elbows to lower your body as far as your shoulders allow."})," ",Object(o.jsx)("h4",{children:" Press back up powerfully to return to the start."}),"\xa0",Object(o.jsx)("h3",{children:" 3 Incline dumbbell press "}),Object(o.jsx)("img",{src:J,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Lie on an incline bench holding a dumbbell in each"})," ",Object(o.jsx)("h4",{children:" hand by your shoulders. Press the weights up until your arms are straight, then lower them"})," ",Object(o.jsx)("h4",{children:"   back to the start under control."}),"\xa0",Object(o.jsx)("h3",{children:" 4 Incline dumbbell flye"}),Object(o.jsx)("img",{src:V,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Lie on an incline bench holding a dumbbell in each hand above"})," ",Object(o.jsx)("h4",{children:"your face, with your palms facing and a slight bend in your elbows. Lower them to the sides, then bring"})," ",Object(o.jsx)("h4",{children:"them back to the top. Repeat it thrice and each set has max 15 Reps  "}),"\xa0",Object(o.jsx)("h3",{children:" 5 Triceps extension"}),Object(o.jsx)("img",{src:Q,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Stand tall holding a dumbbell over your head with both hands,"})," ",Object(o.jsx)("h4",{children:" arms straight. Keeping your chest up, lower the weight behind your head, then raise it back to the start."}),"\xa0"]})}var Z=c.p+"static/media/day2.1.804e117c.jpg",$=c.p+"static/media/day2.2.77874438.jpg",ee=c.p+"static/media/day2.3.c1d5d560.jpg",te=c.p+"static/media/day2.4.30893403.jpg",ce=c.p+"static/media/day2.5.ff70050c.jpg";function ae(){return Object(o.jsxs)("div",{className:"Day2",children:[Object(o.jsx)("h1",{children:"Welcome to Day 2 "}),"\xa0",Object(o.jsx)("h2",{children:" Back And Biceps "}),"\xa0",Object(o.jsx)("h3",{children:" 1 Pull-up "}),Object(o.jsx)("img",{src:Z,alt:""}),Object(o.jsx)("h4",{children:" Sets 5 Reps 6-10 Tempo 2011 Rest 60sec Hold a pull-up bar with an overhand grip, hands"})," ",Object(o.jsx)("h4",{children:"shoulder-width apart. Brace your core, then pull yourself up until your lower chest touches"})," ",Object(o.jsx)("h4",{children:" the bar. Lower until your arms are straight again."}),"\xa0",Object(o.jsx)("h3",{children:" 2 Bent-over row "}),Object(o.jsx)("img",{src:$,alt:""}),Object(o.jsx)("h4",{children:" Sets 5 Reps 10 Tempo 2010 Rest 60sec Hold a barbell using an overhand grip, hands just outside your"})," ",Object(o.jsx)("h4",{children:" legs, and lean forward from the hips. Bend your knees slightly and brace your core, then pull the bar"})," ",Object(o.jsx)("h4",{children:"up, leading with your elbows. Lower it back to the start"}),"\xa0",Object(o.jsx)("h3",{children:" 3 Chin-up "}),Object(o.jsx)("img",{src:ee,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 6-10 Tempo 2011 Rest 60sec Hold a pull-up bar with hands shoulder-width apart, palms"})," ",Object(o.jsx)("h4",{children:"facing you. Brace your core, then pull yourself up until your chin is over the bar. Lower until your"})," ",Object(o.jsx)("h4",{children:"varms are straight again. Repeat this thrice with max 10 Reps"}),"\xa0",Object(o.jsx)("h3",{children:" 4 Standing biceps curl "}),Object(o.jsx)("img",{src:te,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2011 Rest 60sec Stand with dumbbells by your sides, palms facing forwards."})," ",Object(o.jsx)("h4",{children:" Keeping your elbows tucked in, curl the weights up, squeezing your biceps at the top. Lower them back"})," ",Object(o.jsx)("h4",{children:" to the start. Repeat this Thrice with 15 Reps Max in each set"}),"\xa0",Object(o.jsx)("h3",{children:" 5 Seated incline curl"}),Object(o.jsx)("img",{src:ce,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2011 Rest 60sec Sit on an incline bench with dumbbells by your sides, palms facing"})," ",Object(o.jsx)("h4",{children:" forwards. Keeping your elbows tucked in, curl the weights up, squeezing your biceps at the top. Lower them"})," ",Object(o.jsx)("h4",{children:" back to the start. Repeat this thrice with 15 Reps max in a set"}),"\xa0"]})}var se=c.p+"static/media/day3.1.a7ad887f.jpg",ne=c.p+"static/media/day3.2.b8b45928.jpg",re=c.p+"static/media/day3.3.63792acc.jpg",ie=c.p+"static/media/day3.4.2ac9032a.jpg",he=c.p+"static/media/day3.5.80722aa3.jpg";function je(){return Object(o.jsxs)("div",{className:"Day3",children:[Object(o.jsx)("h2",{children:"Welcome to Day 3 "}),"\xa0",Object(o.jsx)("h2",{children:" Legs And Abs "}),"\xa0",Object(o.jsx)("h3",{children:" 1 Back squat"}),Object(o.jsx)("img",{src:se,alt:""}),Object(o.jsx)("h4",{children:" Sets 5 Reps 10 Tempo 2010 Rest 60sec"})," ",Object(o.jsx)("h4",{children:" Stand tall, holding a bar across the back of your shoulders. Keeping your chest up and core braced,"})," ",Object(o.jsx)("h4",{children:"squat down as deep as you can. Drive back up through your heels to return to the start."}),"\xa0",Object(o.jsx)("h3",{children:" 2 Good morning"}),Object(o.jsx)("img",{src:ne,alt:""}),Object(o.jsx)("h4",{children:" Sets 5 Reps 10 Tempo 2010 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Stand tall holding a light barbell across the backs of your shoulders, feet shoulder-width apart."})," ",Object(o.jsx)("h4",{children:" With your core braced, bend forwards slowly from the hips, as far as your hamstrings allow but"})," ",Object(o.jsx)("h4",{children:"not past horizontal. Return to the start."}),"\xa0",Object(o.jsx)("h3",{children:" 3 Hip thrust "}),Object(o.jsx)("img",{src:re,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2011 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Sit with your upper back supported on a bench, holding a barbell across the tops of your thighs."})," ",Object(o.jsx)("h4",{children:"Thrust your hips up, squeeze your glutes at the top, and then return to the start. "}),"\xa0",Object(o.jsx)("h3",{children:" 4 Incline dumbbell press"}),Object(o.jsx)("img",{src:ie,alt:""}),Object(o.jsx)("h4",{children:"Sets 3 Reps 12-15 Tempo 2110 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Lie on an incline bench, holding a dumbbell in each hand by your shoulders. Press the weights"})," ",Object(o.jsx)("h4",{children:"up until your arms are straight, then lower them back to the start under control."}),"\xa0",Object(o.jsx)("h3",{children:" 5 Incline dumbbell flye"}),Object(o.jsx)("img",{src:he,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2111 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Lie on an incline bench, holding a dumbbell in each hand above your face, with your palms facing and"})," ",Object(o.jsx)("h4",{children:"a slight bend in your elbows. Lower them to the sides, then bring them back to the top."}),"\xa0"]})}var le=c.p+"static/media/day4.1.672372b1.jpg",de=c.p+"static/media/day4.2.598bbc6b.jpg",oe=c.p+"static/media/day4.3.a8495a76.jpg",be=c.p+"static/media/day4.4.c42591d9.jpg",ue=c.p+"static/media/day4.5.e4502168.jpg";function Oe(){return Object(o.jsxs)("div",{className:"Day4",children:[Object(o.jsx)("h2",{children:"Welcome to Day 4 "}),"\xa0",Object(o.jsx)("h2",{children:"Back And Shoulders "}),"\xa0",Object(o.jsx)("h3",{children:" 1 Overhead press "}),Object(o.jsx)("img",{src:le,alt:""}),Object(o.jsx)("h4",{children:" Sets 5 Reps 10 Tempo 2010 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Hold a bar in front of your neck with your hands just wider than shoulder-width apart. Keeping your"})," ",Object(o.jsx)("h4",{children:"chest up and core braced, press the bar overhead until your arms are straight. Lower it back to the start."}),"\xa0",Object(o.jsx)("h3",{children:" 2 Rack pull "}),Object(o.jsx)("img",{src:de,alt:""}),Object(o.jsx)("h4",{children:" Sets 5 Reps 10 Tempo 2111 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Stand tall in front of a barbell resting on safety bars at knee height. Bend and grasp the bar with an"})," ",Object(o.jsx)("h4",{children:"overhand grip, then stand up until your back is straight again, squeezing your shoulder blades together"})," ",Object(o.jsx)("h4",{children:"at the top. Do this for 5 times and max 10 reps in a set"}),"\xa0",Object(o.jsx)("h3",{children:" 3 Seated dumbbell press "}),Object(o.jsx)("img",{src:oe,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2010 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Sit on an upright bench with a dumbbell in each hand at shoulder height. Keeping your chest up,"})," ",Object(o.jsx)("h4",{children:"press the weights directly overhead until your arms are straight, then lower them back to the start."}),"\xa0",Object(o.jsx)("h3",{children:" 4 Lateral raise "}),Object(o.jsx)("img",{src:be,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2011 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Stand tall, holding a light dumbbell in each hand with palms facing. Keeping your chest up and a bend in"})," ",Object(o.jsx)("h4",{children:"your elbows, raise the weights out to shoulder height, then lower back to the start."}),"\xa0",Object(o.jsx)("h3",{children:" 5 Reverse flye "}),Object(o.jsx)("img",{src:ue,alt:""}),Object(o.jsx)("h4",{children:" Sets 3 Reps 12-15 Tempo 2011 Rest 60sec"})," ",Object(o.jsx)("h4",{children:"Bend forward from the hips holding a light dumbbell in each hand with palms facing. Keeping a slight bend"})," ",Object(o.jsx)("h4",{children:"in your elbows, raise the weights out to shoulder height, then lower back to the start."}),"\xa0"]})}var xe=c.p+"static/media/Restday1.4ebb5139.mp4",pe=c.p+"static/media/Restday2.993f3dbc.mp4";function me(){return Object(o.jsxs)("div",{className:"Restday",children:[Object(o.jsx)("h1",{children:"Its Your Rest Day "}),Object(o.jsx)("h4",{children:" GRAB A CUP OF COFEE AND LET YOUR MUSCLES REST TODAY! "}),Object(o.jsxs)("center",{children:[Object(o.jsx)(x.a,{src:xe,width:"980",height:"550",className:"border border-dark",autoplay:!0}),Object(o.jsx)(x.a,{src:pe,width:"980",height:"550",className:"border border-dark",autoplay:!0})]}),"\xa0"]})}var ge=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(A,{}),Object(o.jsx)(K,{}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{exact:!0,path:"/",component:y}),Object(o.jsx)(h.a,{exact:!0,path:"/warmup",component:q}),Object(o.jsx)(h.a,{exact:!0,path:"/day1",component:X}),Object(o.jsx)(h.a,{exact:!0,path:"/day2",component:ae}),Object(o.jsx)(h.a,{exact:!0,path:"/day3",component:je}),Object(o.jsx)(h.a,{exact:!0,path:"/day4",component:Oe}),Object(o.jsx)(h.a,{exact:!0,path:"/restday",component:me}),Object(o.jsx)(h.a,{exact:!0,path:"/about",component:w}),Object(o.jsx)(h.a,{exact:!0,path:"/contact",component:f}),Object(o.jsx)(h.a,{exact:!0,path:"/customer",component:b}),Object(o.jsx)(h.a,{exact:!0,path:"/admin",component:u}),Object(o.jsx)(h.a,{component:v})]}),Object(o.jsx)(P,{})]})})},ye=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(ge,{})}),document.getElementById("root")),ye()}},[[85,1,2]]]);
//# sourceMappingURL=main.b072a652.chunk.js.map