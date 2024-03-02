import{e as p,r as u,j as t}from"./index-DCUZ8D66.js";import{B as _,A as L,Q as q}from"./aos-BQhg99BQ.js";import{m as j}from"./motion-BN_XilrQ.js";var P={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=p.createContext&&p.createContext(P),Z=["attr","size","title"];function U(e,n){if(e==null)return{};var s=F(e,n),o,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}function F(e,n){if(e==null)return{};var s={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(n.indexOf(a)>=0)&&(s[a]=e[a]);return s}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},b.apply(this,arguments)}function S(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),s.push.apply(s,o)}return s}function x(e){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?S(Object(s),!0).forEach(function(o){R(e,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):S(Object(s)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(s,o))})}return e}function R(e,n,s){return n=K(n),n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function K(e){var n=W(e,"string");return typeof n=="symbol"?n:String(n)}function W(e,n){if(typeof e!="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var o=s.call(e,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function E(e){return e&&e.map((n,s)=>p.createElement(n.tag,x({key:s},n.attr),E(n.child)))}function v(e){return n=>p.createElement($,b({attr:x({},e.attr)},n),E(e.child))}function $(e){var n=s=>{var{attr:o,size:a,title:r}=e,d=U(e,Z),c=a||s.size||"1em",i;return s.className&&(i=s.className),e.className&&(i=(i?i+" ":"")+e.className),p.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,o,d,{className:i,style:x(x({color:e.color||s.color},s.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),r&&p.createElement("title",null,r),e.children)};return C!==void 0?p.createElement(C.Consumer,null,s=>n(s)):n(P)}function G(e){return v({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"},child:[]}]})(e)}function J(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"},child:[]}]})(e)}function Q({updateBlogData:e={},updateCallback:n}){console.log(e.blog_id),console.log(e.blog_title),console.log(e.blog_content);const[s,o]=u.useState(e.blog_title),[a,r]=u.useState(e.blog_content),d=async c=>{c.preventDefault();const i={blog_title:s,blog_content:a},m=`/api/update_blogs/${e.blog_id}`,y={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},h=await fetch(m,y);if(h.status!==201&&h.status!==200){const g=await h.json();alert(g.message)}else{const g=await h.json();_(g.message),n()}};return t.jsxs("form",{className:"create-blog-content",onSubmit:d,children:[t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"blog_title",children:"Title"}),t.jsx("input",{type:"text",id:"blog_title",value:s,onChange:c=>o(c.target.value),required:!0})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"blog_content",children:"Post Content"}),t.jsx("textarea",{id:"blog_content",type:"text",value:a,onChange:c=>r(c.target.value),required:!0})]})]}),t.jsx("div",{children:t.jsx(j.button,{type:"submit",whileTap:{scale:.9},whileHover:{scale:1.01},transition:{bounceDamping:100,bounceStiffness:1e3},children:"Update Post"})})]})}function X(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function Y(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"},child:[]}]})(e)}function ee({deleteBlogData:e={},updateCallback:n,closedModal:s}){console.log(e.blog_id),console.log(e.blog_title);const o=async r=>{console.log(e.blog_id);try{const d={method:"DELETE"},c=`/api/delete_blogs/${e.blog_id}`,i=await fetch(c,d);if(i.status==201||i.status==200){const m=await i.json();n(),_(m.message)}else{const m=await i.json();alert(m.message)}}catch(d){alert(d)}},a=()=>{s()};return t.jsxs("div",{className:"delete-blog-section",children:[t.jsxs("div",{children:[t.jsx("p",{children:"Are you sure you want to remove this post?"}),t.jsxs("p",{children:['"',e.blog_title,'"']})]}),t.jsxs("div",{children:[t.jsx(j.button,{type:"submit",onClick:()=>o(),whileTap:{scale:.9},whileHover:{scale:1.01},transition:{bounceDamping:100,bounceStiffness:1e3},children:"Remove"}),t.jsx(j.button,{type:"submit",onClick:()=>a(),whileTap:{scale:.9},whileHover:{scale:1.01},transition:{bounceDamping:100,bounceStiffness:1e3},children:"Cancel"})]})]})}function te(){const[e,n]=u.useState([]),[s,o]=u.useState(!1),[a,r]=u.useState(!1),[d,c]=u.useState(null),[i,m]=u.useState(""),[y,h]=u.useState(!1),g=l=>{const f=l.target.value.replace(/[^a-zA-Z0-9\s]/g,"");m(f)},H=l=>{l.key==="Enter"&&l.preventDefault()};u.useEffect(()=>{O()},[i]);const O=async()=>{let l="/api/blogs";i&&(l=l+`/${i}`),V();const f=await(await fetch(l)).json();f.blogs.length==0&&(console.log("Blog's Doesnt Exist"),M()),n(f.blogs)},M=()=>{h(!0)},V=()=>{h(!1)},w=()=>{o(!1)},z=l=>{c(l),D()},D=()=>{s||o(!0)},B=()=>{w(),O()},N=()=>{r(!1)},I=()=>{a||r(!0)},T=l=>{c(l),I()},k=()=>{N(),O()};return L.init({offset:200,duration:300,easing:"ease-out",delay:10,debounceDelay:50,throttleDelay:99,once:!1,mirror:!0}),t.jsxs("section",{className:"home-section",children:[t.jsx(q,{}),a&&t.jsx("section",{className:"delete-modal",children:t.jsx("div",{className:"modal-content","data-aos":"zoom-out",children:t.jsx(ee,{deleteBlogData:d,updateCallback:k,closedModal:N})})}),s&&t.jsx("section",{className:"update-modal",children:t.jsxs("div",{className:"modal-content","data-aos":"zoom-out",children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h1",{children:"UPDATE POST"}),t.jsx("div",{children:t.jsx(X,{onClick:w,className:"update-icon"})})]}),t.jsx(Q,{updateBlogData:d,updateCallback:B})]})}),t.jsxs(j.div,{className:"home-section-container",initial:{y:"100%"},animate:{y:"0%"},transition:{duration:.75,ease:"easeOut"},exit:{opacity:1},children:[t.jsx("form",{className:"search-form",children:t.jsx("div",{children:t.jsxs("div",{className:"search-bar","data-aos":"slide-right","data-aos-delay":"800",children:[t.jsx(Y,{}),t.jsx("input",{placeholder:"type search post",id:"search-input",value:i,onChange:g,onKeyDown:H,className:"search-input"})]})})}),y&&t.jsx("div",{className:"home-section-content",children:t.jsxs("div",{className:"blog-contents",children:[t.jsxs("div",{children:[t.jsx("p",{children:"Sorry Post Doesnt Exist"}),t.jsx("p",{children:new Date().toLocaleString()+""})]}),t.jsx("div",{}),t.jsx("div",{children:t.jsx("p",{children:"Lorem ipsum dolor sit amet. In voluptatem voluptas est magni sunt non voluptatibus similique aut molestiae repudiandae rem eligendi laudantium eos neque sint! Aut ullam libero eos soluta praesentium aut assumenda numquam ex deserunt adipisci est modi dolor quo maxime totam est quia quia."})})]})}),e.map(l=>t.jsxs("div",{className:"home-section-content","data-aos":"fade-up",children:[t.jsxs("div",{className:"delete-update-icon",children:[t.jsx(G,{onClick:()=>z(l),className:"update-icon"}),t.jsx(J,{onClick:()=>T(l),className:"update-icon"})]}),t.jsxs("div",{className:"blog-contents",children:[t.jsxs("div",{children:[t.jsx("p",{children:l.blog_title}),t.jsx("p",{children:l.blog_date})]}),t.jsx("div",{}),t.jsx("div",{children:t.jsx("p",{children:l.blog_content})})]})]},l.blog_id))]})]})}function ae(){return t.jsx(t.Fragment,{children:t.jsx(te,{})})}export{ae as default};