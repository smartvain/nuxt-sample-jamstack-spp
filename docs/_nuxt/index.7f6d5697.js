import{b as l,w as u,f as s,h as c,F as m,v as p,u as d,o as n,x as f,y as x,z as h,A as y,t as v}from"./entry.8b2f93c2.js";import{u as C}from"./fetch.46222773.js";const g=c("h3",null,"MicroCMS+Nuxt3 SSG",-1),K={__name:"index",async setup(S){let e,o;const a=l(),i={serviceDomain:a.serviceDomain,apiKey:a.apiKey},{data:r}=([e,o]=u(()=>C("/blogs",{baseURL:`https://${i.serviceDomain}.microcms.io/api/v1`,headers:{"X-MICROCMS-API-KEY":i.apiKey}},"$PslAyef5YX")),e=await e,o(),e);return(k,w)=>{const _=h;return n(),s("div",null,[g,c("ol",null,[(n(!0),s(m,null,p(d(r).contents,t=>(n(),s("li",{key:t.id},[f(_,{to:`/${t.id}`},{default:x(()=>[y(v(t.title),1)]),_:2},1032,["to"])]))),128))])])}}};export{K as default};
