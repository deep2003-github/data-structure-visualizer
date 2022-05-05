(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{98260:function(e,r,t){"use strict";t.d(r,{M:function(){return d}});var n=t(67294),o=t(3857),a=t(10745),i=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const d=(0,n.forwardRef)(((e,r)=>{const t=(0,o.Z3)("Center",{},e),{inline:i,sx:d}=t,u=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(t,["inline","sx"]);return n.createElement(a.x,((e,r)=>{for(var t in r||(r={}))c.call(r,t)&&f(e,t,r[t]);if(l)for(var t of l(r))s.call(r,t)&&f(e,t,r[t]);return e})({ref:r,sx:[{display:i?"inline-flex":"flex",alignItems:"center",justifyContent:"center"},...Array.isArray(d)?d:[d]]},u))}));d.displayName="@mantine/core/Center"},76867:function(e,r,t){"use strict";t.d(r,{W:function(){return m}});var n=t(67294),o=t(3857),a=(0,t(58067).k)(((e,{fluid:r,size:t,sizes:n})=>({root:{maxWidth:r?"100%":e.fn.size({size:t,sizes:n}),marginLeft:"auto",marginRight:"auto"}}))),i=t(10745),l=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const u={px:"md",sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},m=(0,n.forwardRef)(((e,r)=>{const t=(0,o.Z3)("Container",u,e),{className:l,fluid:m,size:g,styles:p,classNames:h,sizes:b}=t,y=((e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&f.call(e,n)&&(t[n]=e[n]);return t})(t,["className","fluid","size","styles","classNames","sizes"]),{classes:v,cx:O}=a({fluid:m,size:g,sizes:b},{styles:p,classNames:h,name:"Container"});return n.createElement(i.x,((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&d(e,t,r[t]);if(c)for(var t of c(r))f.call(r,t)&&d(e,t,r[t]);return e})({className:O(v.root,l),ref:r},y))}));m.displayName="@mantine/core/Container"},63726:function(e,r,t){"use strict";t.d(r,{K:function(){return m}});var n=t(67294),o=t(3857),a=(0,t(58067).k)(((e,{spacing:r,align:t,justify:n})=>({root:{display:"flex",flexDirection:"column",alignItems:t,justifyContent:n,gap:e.fn.size({size:r,sizes:e.spacing})}}))),i=t(10745),l=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const u={spacing:"md",align:"stretch",justify:"top"},m=(0,n.forwardRef)(((e,r)=>{const t=(0,o.Z3)("Stack",u,e),{spacing:l,className:m,classNames:g,styles:p,align:h,justify:b}=t,y=((e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&f.call(e,n)&&(t[n]=e[n]);return t})(t,["spacing","className","classNames","styles","align","justify"]),{classes:v,cx:O}=a({spacing:l,align:h,justify:b},{name:"Stack",classNames:g,styles:p});return n.createElement(i.x,((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&d(e,t,r[t]);if(c)for(var t of c(r))f.call(r,t)&&d(e,t,r[t]);return e})({className:O(v.root,m),ref:r},y))}));m.displayName="@mantine/core/Stack"},50112:function(e,r,t){"use strict";t.d(r,{x:function(){return S}});var n=t(67294),o=t(3857),a=t(58067),i=t(34584),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&m(e,t,r[t]);if(f)for(var t of f(r))u.call(r,t)&&m(e,t,r[t]);return e};function p({theme:e,color:r,variant:t}){return"dimmed"===r?"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]:r in e.colors?e.colors[r]["dark"===e.colorScheme?5:7]:"link"===t?e.colors[e.primaryColor]["dark"===e.colorScheme?4:7]:r||"inherit"}function h(e){return"number"===typeof e?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical"}:null}var b=(0,a.k)(((e,{color:r,variant:t,size:n,lineClamp:o,inline:a,inherit:l,underline:f,gradientDeg:d,gradientTo:u,gradientFrom:m,weight:b,transform:y,align:v})=>{const O=(0,i.d)({theme:e,variant:"gradient",gradient:{from:m,to:u,deg:d}});return{root:(k=g(g(g({},e.fn.fontStyles()),e.fn.focusStyles()),h(o)),x={color:p({color:r,theme:e,variant:t}),fontFamily:l?"inherit":e.fontFamily,fontSize:l?"inherit":e.fontSizes[n],lineHeight:l?"inherit":a?1:e.lineHeight,textDecoration:f?"underline":"none",WebkitTapHighlightColor:"transparent",fontWeight:l?"inherit":b,textTransform:y,textAlign:v,"&:hover":"link"===t&&void 0===f?{textDecoration:"underline"}:void 0},c(k,s(x))),gradient:{backgroundImage:O.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}};var k,x})),y=t(10745),v=Object.defineProperty,O=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,w=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const j={size:"md",variant:"text",gradient:{from:"blue",to:"cyan",deg:45},inline:!1,inherit:!1},S=(0,n.forwardRef)(((e,r)=>{const t=(0,o.Z3)("Text",j,e),{className:a,component:i,size:l="md",weight:c,transform:s,color:f,align:d,variant:u="text",lineClamp:m,gradient:g={from:"blue",to:"cyan",deg:45},inline:p=!1,inherit:h=!1,underline:v,classNames:S,styles:C}=t,N=((e,r)=>{var t={};for(var n in e)k.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&O)for(var n of O(e))r.indexOf(n)<0&&x.call(e,n)&&(t[n]=e[n]);return t})(t,["className","component","size","weight","transform","color","align","variant","lineClamp","gradient","inline","inherit","underline","classNames","styles"]),{classes:z,cx:P}=b({variant:u,color:f,size:l,lineClamp:m,inline:p,inherit:h,underline:v,weight:c,transform:s,align:d,gradientFrom:g.from,gradientTo:g.to,gradientDeg:g.deg},{classNames:S,styles:C,name:"Text"});return n.createElement(y.x,((e,r)=>{for(var t in r||(r={}))k.call(r,t)&&w(e,t,r[t]);if(O)for(var t of O(r))x.call(r,t)&&w(e,t,r[t]);return e})({ref:r,component:i||"div",className:P(z.root,{[z.gradient]:"gradient"===u},a)},N))}));S.displayName="@mantine/core/Text"},41181:function(e,r,t){"use strict";t.d(r,{D:function(){return x}});var n=t(67294),o=t(3857),a=t(58067),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))d.call(r,t)&&u(e,t,r[t]);return e},g=(0,a.k)(((e,{element:r,align:t})=>{return{root:(n=m({},e.fn.fontStyles()),o={fontFamily:e.headings.fontFamily,fontWeight:e.headings.fontWeight,fontSize:e.headings.sizes[r].fontSize,lineHeight:e.headings.sizes[r].lineHeight,margin:0,color:"inherit",textAlign:t},l(n,c(o)))};var n,o})),p=t(10745),h=Object.defineProperty,b=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,O=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const k={order:1},x=(0,n.forwardRef)(((e,r)=>{const t=(0,o.Z3)("Title",k,e),{className:a,order:i,children:l,align:c}=t,s=((e,r)=>{var t={};for(var n in e)y.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&b)for(var n of b(e))r.indexOf(n)<0&&v.call(e,n)&&(t[n]=e[n]);return t})(t,["className","order","children","align"]),{classes:f,cx:d}=g({element:`h${i}`,align:c},{name:"Title"});return[1,2,3,4,5,6].includes(i)?n.createElement(p.x,((e,r)=>{for(var t in r||(r={}))y.call(r,t)&&O(e,t,r[t]);if(b)for(var t of b(r))v.call(r,t)&&O(e,t,r[t]);return e})({component:`h${i}`,ref:r,className:d(f.root,a)},s),l):null}));x.displayName="@mantine/core/Title"},34584:function(e,r,t){"use strict";t.d(r,{d:function(){return i}});const n="indigo",o="cyan",a=45;function i({color:e,theme:r,variant:t,gradient:i}){if("light"===t)return{border:"transparent",background:r.fn.rgba(r.fn.themeColor(e,"dark"===r.colorScheme?8:0),"dark"===r.colorScheme?.35:1),color:"dark"===e?"dark"===r.colorScheme?r.colors.dark[0]:r.colors.dark[9]:r.fn.themeColor(e,"dark"===r.colorScheme?2:6),hover:r.fn.rgba(r.fn.themeColor(e,"dark"===r.colorScheme?7:1),"dark"===r.colorScheme?.45:.65)};if("default"===t)return{border:"dark"===r.colorScheme?r.colors.dark[5]:r.colors.gray[4],background:"dark"===r.colorScheme?r.colors.dark[5]:r.white,color:"dark"===r.colorScheme?r.white:r.black,hover:"dark"===r.colorScheme?r.colors.dark[4]:r.colors.gray[0]};if("white"===t)return{border:"transparent",background:r.white,color:r.fn.themeColor(e,6),hover:null};if("outline"===t)return{border:r.fn.rgba(r.fn.themeColor(e,"dark"===r.colorScheme?4:7),.75),background:"transparent",color:r.fn.themeColor(e,"dark"===r.colorScheme?4:7),hover:"dark"===r.colorScheme?r.fn.rgba(r.fn.themeColor(e,4),.05):r.fn.rgba(r.fn.themeColor(e,0),.35)};if("gradient"===t){const e={from:(null==i?void 0:i.from)||n,to:(null==i?void 0:i.to)||o,deg:(null==i?void 0:i.deg)||a};return{background:`linear-gradient(${e.deg}deg, ${r.fn.themeColor(e.from,6,!1)} 0%, ${r.fn.themeColor(e.to,6,!1)} 100%)`,color:r.white,border:"transparent",hover:null}}return"subtle"===t?{border:"transparent",background:"transparent",color:"dark"===e?"dark"===r.colorScheme?r.colors.dark[0]:r.colors.dark[9]:r.fn.themeColor(e,"dark"===r.colorScheme?2:6),hover:r.fn.rgba(r.fn.themeColor(e,"dark"===r.colorScheme?8:0),"dark"===r.colorScheme?.35:1)}:{border:"transparent",background:r.fn.themeColor(e,"dark"===r.colorScheme?8:6),color:r.white,hover:r.fn.themeColor(e,7)}}},78581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(44369)}])},44369:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var n=t(85893),o=t(98260),a=t(76867),i=t(63726),l=t(41181),c=t(50112);function s(){return(0,n.jsx)(o.M,{className:"full-width-height",children:(0,n.jsx)(a.W,{children:(0,n.jsxs)(i.K,{children:[(0,n.jsx)(l.D,{align:"center",children:"Data Structure Visualizer"}),(0,n.jsx)(c.x,{align:"center",size:"xl",children:"Visually understand data structures."}),(0,n.jsx)(c.x,{align:"center",children:"Use the navigation panel on the left to see our different data structures."})]})})})}}},function(e){e.O(0,[774,888,179],(function(){return r=78581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);