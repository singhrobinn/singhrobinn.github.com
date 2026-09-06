import{c,u as a,aU as n,b4 as s,b5 as r}from"./index-BLM162Yt.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=c("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=c("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),y=e=>["activity","card",e??"none"],o=e=>["activity","board",e??"none"];function f(e){const{status:i}=a(),t=n({queryKey:y(e),queryFn:()=>s(e),enabled:i==="signed-in"&&!!e,staleTime:2*6e4,gcTime:10*6e4,refetchOnWindowFocus:!1,retry:1});return{entries:t.data??[],isLoading:t.isLoading,refetch:t.refetch}}function h(e){const{status:i}=a(),t=n({queryKey:o(e),queryFn:()=>r(e),enabled:i==="signed-in"&&!!e,staleTime:2*6e4,gcTime:10*6e4,refetchOnWindowFocus:!1,retry:1});return{entries:t.data??[],isLoading:t.isLoading,refetch:t.refetch}}export{l as C,d as T,f as a,h as u};
