import{r as t,j as e,N as c}from"./index-DpDu1Jrp.js";const m=()=>{const i=typeof window=="object";function r(){return{width:i?window.innerWidth:void 0,height:i?window.innerHeight:void 0}}const[a,n]=t.useState(r);return t.useEffect(()=>{if(!i)return!1;function l(){n(r())}return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),a};function x({isProjectPage:i}){const r=m().width,a=t.useRef(null),[n,l]=t.useState(!1),[d,o]=t.useState(!1);return t.useEffect(()=>{r<=640?o(!0):o(!1),l(!1)},[r]),t.useEffect(()=>{const s=u=>{a.current&&!a.current.contains(u.target)&&l(!1)};return n?document.addEventListener("mousedown",s):document.removeEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[n]),e.jsx("header",{className:`w-full mx-auto mt-4 absolute z-40 flex justify-center${i?"":" sm:mt-8"}`,children:e.jsxs("div",{className:"max-w-[1250px] md:w-[90%] flex justify-between items-center w-full px-5",children:[e.jsxs("h1",{className:"text-3xl font-semibold underline underline-offset-8 flex items-center",children:[e.jsx("img",{src:"/img/Logo-Skroma.jpg",alt:"",className:"w-12 h-12 rounded-full hidden sm:inline"}),e.jsx("span",{className:"drop-shadow mt-1 ml-2 font-vibes",children:"Matt Buchs"})]}),e.jsxs("nav",{ref:a,className:"h-full rounded-bl flex",children:[d&&e.jsx("button",{className:"sm:hidden hover:bg-black/30 flex justify-center items-center w-[50px] h-[50px] rounded-full",onClick:()=>l(!n),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"w-7 h-7",children:e.jsx("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})})}),e.jsxs("ul",{className:n?"absolute z-50 top-12 right-4 bg-slate-200 w-[150px] flex flex-col items-center py-1 rounded border border-gray-400/10 shadow":"items-center h-full text-lg hidden sm:flex",children:[e.jsx("li",{className:"sm:mr-4 mb-1",children:e.jsx(c,{to:"/",className:({isActive:s})=>`${s&&"underline underline-offset-4"}`,children:"Accueil"})}),e.jsx("li",{className:"sm:mr-4 mb-1",children:e.jsx(c,{to:"/projects",className:({isActive:s})=>`${s&&"underline underline-offset-4"}`,children:"Projets"})}),e.jsx("li",{className:"mb-1",children:e.jsx(c,{to:"/contact",className:({isActive:s})=>`${s&&"underline underline-offset-4"}`,children:"Contact"})})]})]})]})})}export{x as N,m as u};
