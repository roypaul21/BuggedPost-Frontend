import{r as a,j as e,L as b}from"./index-DCUZ8D66.js";import{A as f,Q as y,B as v}from"./aos-BQhg99BQ.js";import{m as o}from"./motion-BN_XilrQ.js";function C(){const[i,d]=a.useState(""),[l,u]=a.useState(""),[r,c]=a.useState(!1),m=async t=>{t.preventDefault();const j={blog_title:i,blog_content:l},g="/api/create_blogs",p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)},s=await fetch(g,p);if(console.log(s),s.status!==201&&s.status!==200){const n=await s.json();alert(n.message)}else{const n=await s.json();v(n.message),h()}},h=()=>{r||c(!0)},x=()=>{c(!1)};return f.init({offset:200,duration:300,easing:"ease-in-sine",delay:100,debounceDelay:50,throttleDelay:99,once:!1,mirror:!0}),e.jsxs("section",{className:"create-blog-section",children:[e.jsx(y,{}),r&&e.jsx("section",{className:"return-home-modal",children:e.jsxs("div",{className:"modal-content","data-aos":"zoom-out",children:[e.jsx("div",{children:e.jsx("h1",{children:"POST CREATED SUCCESSFULLY"})}),e.jsxs("div",{children:[e.jsx(b,{to:"/home-admin",children:e.jsx("button",{children:"Return Home"})}),e.jsx("button",{onClick:x,children:"Cancel"})]})]})}),e.jsxs(o.div,{className:"create-blog-container",initial:{y:"100%"},animate:{y:"0%"},transition:{duration:.5,ease:"easeOut"},exit:{opacity:1},children:[e.jsx("div",{children:e.jsx(o.h1,{animate:{y:0},initial:{y:"100%"},transition:{delay:.3,duration:.3},children:"CREATE POST"})}),e.jsxs("form",{className:"create-blog-content",onSubmit:m,children:[e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"blog_title",children:"Title"}),e.jsx("input",{type:"text",id:"blog_title",value:i,onChange:t=>d(t.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"blog_content",children:"Post Content"}),e.jsx("textarea",{id:"blog_content",type:"text",value:l,onChange:t=>u(t.target.value),required:!0})]})]}),e.jsx("div",{children:e.jsx(o.button,{type:"submit",whileTap:{scale:.9},whileHover:{scale:1.01},transition:{bounceDamping:100,bounceStiffness:1e3},children:"Create Post"})})]})]})]})}function E(){return e.jsx(e.Fragment,{children:e.jsx(C,{})})}export{E as default};
