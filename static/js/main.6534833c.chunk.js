(this["webpackJsonpreact-coding-exercise"]=this["webpackJsonpreact-coding-exercise"]||[]).push([[0],{47:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e);var r,i,a,c,d,o,l,s,u,j,x,h,b=t(37),p=t.n(b),g=t(94),k=t(96),f=t(93),m=(t(47),t(32)),F=t(1),O=t(97),M=t(40),v=t(11),y=t(12),w=y.a.div(r||(r=Object(v.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n"])),(function(n){return n.darkMode?"#121212":"#F5F5F5"})),_=y.a.header(i||(i=Object(v.a)(["\n  display: flex;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  background: ",";\n  box-shadow: ",";\n"])),(function(n){return n.darkMode?"#202224":"#FFFFFF"}),(function(n){return n.darkMode?"rgb(255 255 255 / 30%) 0px 1px 2px 0px":"rgb(0 0 0 / 30%) 0px 1px 2px 0px"})),S=y.a.h3(a||(a=Object(v.a)(["\n  cursor: pointer;\n  color: ",";\n"])),(function(n){return n.darkMode?"#FFFFFF":"#000000"})),E=y.a.div(c||(c=Object(v.a)(["\n  padding: 0 10%;\n  @media (max-width: 600px) {\n    padding: 0;\n  }\n"]))),D=y.a.h2(d||(d=Object(v.a)(["\n  padding: 0 1rem;\n  color: ",";\n"])),(function(n){return n.darkMode?"#FFFFFF":"#000000"})),J=y.a.div(o||(o=Object(v.a)(["\n  background-color: ",";\n  display: grid;\n  gap: 2rem;\n  justify-items: center;\n  padding: 0 1rem;\n  padding-bottom: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  @media (max-width: 600px) {\n    grid-template-columns: repeat(auto-fit, 100%);\n    gap: 1rem;\n  }\n"])),(function(n){return n.darkMode?"#121212":"#F5F5F5"})),L=y.a.div(l||(l=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 450px;\n  min-height: 250px;\n  border-radius: 5%;\n  background: ",";\n  opacity: 0.8;\n  transition: 0.3s;\n  overflow: hidden;\n  &:hover {\n    opacity: 1;\n    box-shadow: ",";\n  }\n"])),(function(n){return n.darkMode?"#202224":"#FFFFFF"}),(function(n){return n.darkMode?"rgb(255 255 255 / 50%) 0px 0px 10px 2px":"rgb(0 0 0 / 50%) 0px 0px 10px 2px"})),P=y.a.img(s||(s=Object(v.a)(["\n  width: 100%;\n  height: 200px;\n  min-height: 200px;\n  object-fit: cover;\n"]))),q=y.a.div(u||(u=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  padding: 1.5rem 0;\n  color: ",";\n"])),(function(n){return n.darkMode?"#FFFFFF":"#000000"})),z=y.a.a(j||(j=Object(v.a)(["\n  text-decoration: none;\n  color: ",";\n"])),(function(n){return n.darkMode?"#FFFFFF":"#000000"})),B=y.a.div(x||(x=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n"]))),C=t(3),I=function(){return Object(C.jsx)(B,{children:Object(C.jsx)(M.SyncLoader,{})})},X=function(n){var e=n.darkMode,t=n.toggleDarkMode;return Object(C.jsx)(_,{darkMode:e,children:Object(C.jsx)(S,{darkMode:e,onClick:t,children:"rolandovlz"})})},A=function(n){var e=n.launches,t=n.darkMode;return Object(C.jsx)(C.Fragment,{children:e.map((function(n){var e=n.id,r=n.mission_name,i=n.links;return Object(C.jsxs)(L,{darkMode:t,children:[Object(C.jsx)(z,{href:i.video_link,target:"_blank",children:Object(C.jsx)(P,{src:i.flickr_images,alt:r})}),Object(C.jsx)(q,{darkMode:t,children:Object(C.jsx)(z,{href:i.article_link,target:"_blank",darkMode:t,children:Object(C.jsx)("strong",{children:r})})})]},e)}))})},G=function(n){var e=n.launches,t=n.darkMode;return Object(C.jsxs)(E,{children:[Object(C.jsxs)(D,{darkMode:t,children:["SpaceX Launches ",Object(C.jsx)("span",{role:"img","aria-label":"rocket",children:"\ud83d\ude80"})]}),Object(C.jsx)(J,{darkMode:t,children:Object(C.jsx)(A,{launches:e,darkMode:t})})]})},H=t(95),K=Object(H.a)(h||(h=Object(v.a)(["\n  {\n    launchesPast(limit: 30) {\n      id\n      mission_name\n      links {\n        flickr_images\n        article_link\n        video_link\n      }\n    } \n  }\n"]))),N=function(){var n=Object(F.useState)([]),e=Object(m.a)(n,2),t=e[0],r=e[1],i=Object(F.useState)(!1),a=Object(m.a)(i,2),c=a[0],d=a[1],o=Object(O.a)(K),l=o.data,s=o.error,u=o.loading;if(Object(F.useEffect)((function(){l&&r(l.launchesPast.filter((function(n){return n.links.flickr_images.length>0&&null!=n.links.article_link&&null!=n.links.video_link})))}),[l]),u)return Object(C.jsx)(I,{});if(s)return"Error: ".concat(s);return Object(C.jsxs)(w,{darkMode:c,children:[Object(C.jsx)(X,{darkMode:c,toggleDarkMode:function(){return d(!c)}}),Object(C.jsx)(G,{launches:t,darkMode:c})]})},Q=new g.a({uri:"https://api.spacex.land/graphql",cache:new k.a});p.a.render(Object(C.jsx)(f.a,{client:Q,children:Object(C.jsx)(N,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.6534833c.chunk.js.map