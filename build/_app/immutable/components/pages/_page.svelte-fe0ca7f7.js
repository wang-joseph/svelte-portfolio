import{I as nt,S as ae,i as ie,s as ne,e as Pe,b as M,g as fe,t as L,B as be,d as he,f as H,h,H as Se,o as lt,k as m,q as $,l as g,m as y,r as R,n as b,G as a,u as Le,J,K as Ve,a as D,c as T,L as Oe,M as qe,N as ke,O as Ie,w as ve,x as _e,y as pe,P as Ce,Q as V,R as ot,z as me,T as Be,U as at,V as xe,W as it,C as ct,D as ut,E as dt,F as ft,X as ht}from"../../chunks/index-2b316ca4.js";import{r as ze,w as vt}from"../../chunks/index-04190090.js";const _t=ze(["JDJUST","OBOUT ME","SOCIALS","EXPERIENCE","PORTFOLIO","HELLO"]),pt=ze([{rot:"90deg",startColor:"rgba(0, 0, 0, 1) 0%",midColor:"rgba(255, 255, 255, 1) 50%",endColor:"rgba(0, 0, 0, 1) 100%"},{rot:"90deg",startColor:"rgba(255, 89, 89, 1) 0%",midColor:"rgba(237, 255, 0, 1) 52%",endColor:"rgba(255, 89, 89, 1) 100%"},{rot:"90deg",startColor:"rgba(89, 255, 121, 1) 0%",midColor:"rgba(255, 229, 0, 1) 52%",endColor:"rgba(89, 255, 121, 1) 100%"},{rot:"90deg",startColor:"rgba(246, 89, 255, 1) 0%",midColor:"rgba(70, 0, 255, 1) 52%",endColor:"rgba(246, 89, 255, 1) 100%"},{rot:"90deg",startColor:"rgba(99, 89, 255, 1) 0%",midColor:"rgba(0, 239, 255, 1) 52%",endColor:"rgba(99, 89, 255, 1) 100%"},{rot:"90deg",startColor:"rgba(231,48,0,1) 0%",midColor:"rgba(220,101,243,1) 52%",endColor:"rgba(231,48,0,1) 100%"}]),Ne=vt(-1);function rt(d){const e=d-1;return e*e*e+1}function oe(d,{delay:e=0,duration:t=400,easing:s=nt}={}){const l=+getComputedStyle(d).opacity;return{delay:e,duration:t,easing:s,css:o=>`opacity: ${o*l}`}}function Me(d,{delay:e=0,duration:t=400,easing:s=rt,x:l=0,y:o=0,opacity:f=0}={}){const n=getComputedStyle(d),i=+n.opacity,r=n.transform==="none"?"":n.transform,v=i*(1-f);return{delay:e,duration:t,easing:s,css:(c,_)=>`
			transform: ${r} translate(${(1-c)*l}px, ${(1-c)*o}px);
			opacity: ${i-v*_}`}}function j(d,{delay:e=0,duration:t=400,easing:s=rt}={}){const l=getComputedStyle(d),o=+l.opacity,f=parseFloat(l.height),n=parseFloat(l.paddingTop),i=parseFloat(l.paddingBottom),r=parseFloat(l.marginTop),v=parseFloat(l.marginBottom),c=parseFloat(l.borderTopWidth),_=parseFloat(l.borderBottomWidth);return{delay:e,duration:t,easing:s,css:w=>`overflow: hidden;opacity: ${Math.min(w*20,1)*o};height: ${w*f}px;padding-top: ${w*n}px;padding-bottom: ${w*i}px;margin-top: ${w*r}px;margin-bottom: ${w*v}px;border-top-width: ${w*c}px;border-bottom-width: ${w*_}px;`}}const mt=ze(["the hopefully employed","not a UX designer",'the "one and only"',"the spent 3 days on this"]),gt=ze(5e3);function Ue(d){let e,t,s;return{c(){e=m("h4"),t=$(d[0]),this.h()},l(l){e=g(l,"H4",{class:!0});var o=y(e);t=R(o,d[0]),o.forEach(h),this.h()},h(){b(e,"class","svelte-12hurzn")},m(l,o){M(l,e,o),a(e,t)},p(l,o){o&1&&Le(t,l[0])},i(l){s||J(()=>{s=Ve(e,Me,{y:50,duration:500}),s.start()})},o:be,d(l){l&&h(e)}}}function bt(d){let e=d[0],t,s=Ue(d);return{c(){s.c(),t=Pe()},l(l){s.l(l),t=Pe()},m(l,o){s.m(l,o),M(l,t,o)},p(l,[o]){o&1&&ne(e,e=l[0])?(fe(),L(s,1,1,be),he(),s=Ue(l),s.c(),H(s,1),s.m(t.parentNode,t)):s.p(l,o)},i(l){H(s)},o(l){L(s)},d(l){l&&h(t),s.d(l)}}}function yt(d,e,t){let s,l;Se(d,gt,n=>t(3,s=n)),Se(d,mt,n=>t(2,l=n));let o=0,f;return lt(()=>{setInterval(()=>{t(1,o++,o)},s)}),d.$$.update=()=>{d.$$.dirty&6&&t(0,f=l[o%l.length])},[f,o,l]}class wt extends ae{constructor(e){super(),ie(this,e,yt,bt,ne,{})}}function Et(d){let e,t,s,l,o,f,n,i,r,v;return{c(){e=m("div"),t=m("img"),l=D(),o=m("span"),f=m("h4"),n=$("Now, give me a click!"),this.h()},l(c){e=g(c,"DIV",{class:!0});var _=y(e);t=g(_,"IMG",{class:!0,src:!0,alt:!0}),l=T(_),o=g(_,"SPAN",{});var w=y(o);f=g(w,"H4",{class:!0});var p=y(f);n=R(p,"Now, give me a click!"),p.forEach(h),w.forEach(h),_.forEach(h),this.h()},h(){b(t,"class","main-word-aside-img svelte-1fzt0xh"),Oe(t.src,s="./pointing-arrow.png")||b(t,"src",s),b(t,"alt",""),b(f,"class","side-note svelte-1fzt0xh"),b(e,"class","aside-container svelte-1fzt0xh")},m(c,_){M(c,e,_),a(e,t),a(e,l),a(e,o),a(o,f),a(f,n),v=!0},i(c){v||(J(()=>{r&&r.end(1),i=Ve(e,oe,{}),i.start()}),v=!0)},o(c){i&&i.invalidate(),r=qe(e,oe,{}),v=!1},d(c){c&&h(e),c&&r&&r.end()}}}function kt(d){let e,t,s,l,o,f,n,i,r,v;return{c(){e=m("div"),t=m("img"),l=D(),o=m("span"),f=m("h4"),n=$("Hey! Try clicking!"),this.h()},l(c){e=g(c,"DIV",{class:!0});var _=y(e);t=g(_,"IMG",{class:!0,src:!0,alt:!0}),l=T(_),o=g(_,"SPAN",{});var w=y(o);f=g(w,"H4",{class:!0});var p=y(f);n=R(p,"Hey! Try clicking!"),p.forEach(h),w.forEach(h),_.forEach(h),this.h()},h(){b(t,"class","main-word-aside-img svelte-1fzt0xh"),Oe(t.src,s="./pointing-arrow.png")||b(t,"src",s),b(t,"alt",""),b(f,"class","side-note svelte-1fzt0xh"),b(e,"class","aside-container svelte-1fzt0xh")},m(c,_){M(c,e,_),a(e,t),a(e,l),a(e,o),a(o,f),a(f,n),v=!0},i(c){v||(J(()=>{r&&r.end(1),i=Ve(e,Me,{y:50,duration:1e3}),i.start()}),v=!0)},o(c){i&&i.invalidate(),r=qe(e,oe,{}),v=!1},d(c){c&&h(e),c&&r&&r.end()}}}function It(d){let e,t,s,l,o,f,n,i,r,v;return{c(){e=m("div"),t=m("img"),l=D(),o=m("span"),f=m("h4"),n=$("Hover my name!"),this.h()},l(c){e=g(c,"DIV",{class:!0});var _=y(e);t=g(_,"IMG",{class:!0,src:!0,alt:!0}),l=T(_),o=g(_,"SPAN",{});var w=y(o);f=g(w,"H4",{class:!0});var p=y(f);n=R(p,"Hover my name!"),p.forEach(h),w.forEach(h),_.forEach(h),this.h()},h(){b(t,"class","main-word-aside-img svelte-1fzt0xh"),Oe(t.src,s="./pointing-arrow.png")||b(t,"src",s),b(t,"alt",""),b(f,"class","side-note svelte-1fzt0xh"),b(e,"class","aside-container svelte-1fzt0xh")},m(c,_){M(c,e,_),a(e,t),a(e,l),a(e,o),a(o,f),a(f,n),v=!0},i(c){v||(J(()=>{r&&r.end(1),i=Ve(e,Me,{y:50,duration:1e3}),i.start()}),v=!0)},o(c){i&&i.invalidate(),r=qe(e,oe,{}),v=!1},d(c){c&&h(e),c&&r&&r.end()}}}function Ct(d){let e,t,s,l;const o=[It,kt,Et],f=[];function n(i,r){return i[0]?0:i[1]&&i[3]&&!i[4]?1:i[2]&&!i[4]?2:-1}return~(e=n(d))&&(t=f[e]=o[e](d)),{c(){t&&t.c(),s=Pe()},l(i){t&&t.l(i),s=Pe()},m(i,r){~e&&f[e].m(i,r),M(i,s,r),l=!0},p(i,[r]){let v=e;e=n(i),e!==v&&(t&&(fe(),L(f[v],1,1,()=>{f[v]=null}),he()),~e?(t=f[e],t||(t=f[e]=o[e](i),t.c()),H(t,1),t.m(s.parentNode,s)):t=null)},i(i){l||(H(t),l=!0)},o(i){L(t),l=!1},d(i){~e&&f[e].d(i),i&&h(s)}}}function St(d,e,t){let{needsToShow:s=!1}=e,{cancelledEarly:l=!1}=e,{showed:o=!1}=e,{hasHovered:f=!1}=e,{hasClicked:n=!1}=e,{hoverPopup:i}=e;return lt(()=>{t(5,i=setTimeout(()=>{t(0,s=!0),t(2,o=!0),t(1,l=!1)},1500))}),d.$$set=r=>{"needsToShow"in r&&t(0,s=r.needsToShow),"cancelledEarly"in r&&t(1,l=r.cancelledEarly),"showed"in r&&t(2,o=r.showed),"hasHovered"in r&&t(3,f=r.hasHovered),"hasClicked"in r&&t(4,n=r.hasClicked),"hoverPopup"in r&&t(5,i=r.hoverPopup)},[s,l,o,f,n,i]}class Pt extends ae{constructor(e){super(),ie(this,e,St,Ct,ne,{needsToShow:0,cancelledEarly:1,showed:2,hasHovered:3,hasClicked:4,hoverPopup:5})}}function Je(d,e,t){const s=d.slice();return s[28]=e[t],s[30]=t,s}function Xe(d){let e,t,s,l,o,f,n,i,r,v;return i=new wt({}),{c(){e=m("div"),t=m("h3"),s=$("Hi, I'm"),o=D(),f=m("div"),n=m("span"),ve(i.$$.fragment),this.h()},l(c){e=g(c,"DIV",{class:!0});var _=y(e);t=g(_,"H3",{class:!0});var w=y(t);s=R(w,"Hi, I'm"),w.forEach(h),_.forEach(h),o=T(c),f=g(c,"DIV",{class:!0});var p=y(f);n=g(p,"SPAN",{class:!0});var E=y(n);_e(i.$$.fragment,E),E.forEach(h),p.forEach(h),this.h()},h(){b(t,"class","word svelte-103otuy"),b(e,"class","line svelte-103otuy"),b(n,"class","word svelte-103otuy"),b(f,"class","line svelte-103otuy")},m(c,_){M(c,e,_),a(e,t),a(t,s),M(c,o,_),M(c,f,_),a(f,n),pe(i,n,null),v=!0},i(c){v||(J(()=>{l||(l=V(e,oe,{},!0)),l.run(1)}),H(i.$$.fragment,c),J(()=>{r||(r=V(f,oe,{},!0)),r.run(1)}),v=!0)},o(c){l||(l=V(e,oe,{},!1)),l.run(0),L(i.$$.fragment,c),r||(r=V(f,oe,{},!1)),r.run(0),v=!1},d(c){c&&h(e),c&&l&&l.end(),c&&h(o),c&&h(f),me(i),c&&r&&r.end()}}}function Ye(d){let e,t,s,l=d[28].charAt(0)+"",o,f,n,i=d[28].slice(1)+"",r,v,c,_;function w(){return d[13](d[30])}function p(){return d[14](d[30])}function E(){return d[15](d[30])}return{c(){e=m("span"),t=m("span"),s=m("span"),o=$(l),f=D(),n=m("span"),r=$(i),v=D(),this.h()},l(O){e=g(O,"SPAN",{class:!0});var B=y(e);t=g(B,"SPAN",{id:!0,class:!0});var C=y(t);s=g(C,"SPAN",{class:!0});var F=y(s);o=R(F,l),F.forEach(h),f=T(C),n=g(C,"SPAN",{id:!0,class:!0});var A=y(n);r=R(A,i),A.forEach(h),C.forEach(h),v=T(B),B.forEach(h),this.h()},h(){b(s,"class","clickable letter svelte-103otuy"),b(n,"id","letter-"+d[30]),b(n,"class","clickable smaller-letter svelte-103otuy"),b(t,"id","big-letter-"+d[30]),b(t,"class","name bigger-letter svelte-103otuy"),b(e,"class","big-letter-container svelte-103otuy")},m(O,B){M(O,e,B),a(e,t),a(t,s),a(s,o),a(t,f),a(t,n),a(n,r),a(e,v),c||(_=[Be(t,"mouseenter",w),Be(t,"mouseleave",p),Be(t,"click",E),Be(t,"keydown",d[12])],c=!0)},p(O,B){d=O,B&128&&l!==(l=d[28].charAt(0)+"")&&Le(o,l),B&128&&i!==(i=d[28].slice(1)+"")&&Le(r,i)},d(O){O&&h(e),c=!1,at(_)}}}function Ke(d){let e,t,s,l,o;return{c(){e=m("div"),t=m("h3"),s=$("Wang"),this.h()},l(f){e=g(f,"DIV",{class:!0});var n=y(e);t=g(n,"H3",{class:!0});var i=y(t);s=R(i,"Wang"),i.forEach(h),n.forEach(h),this.h()},h(){b(t,"class","word svelte-103otuy"),b(e,"class","line svelte-103otuy")},m(f,n){M(f,e,n),a(e,t),a(t,s),o=!0},i(f){o||(J(()=>{l||(l=V(e,oe,{},!0)),l.run(1)}),o=!0)},o(f){l||(l=V(e,oe,{},!1)),l.run(0),o=!1},d(f){f&&h(e),f&&l&&l.end()}}}function Dt(d){let e,t,s,l,o,f,n,i,r,v,c,_,w,p,E,O,B,C=d[8]==-1&&Xe(),F=d[7],A=[];for(let u=0;u<F.length;u+=1)A[u]=Ye(Je(d,F,u));function G(u){d[16](u)}function K(u){d[17](u)}function x(u){d[18](u)}function W(u){d[19](u)}function Z(u){d[20](u)}function U(u){d[21](u)}let q={};d[0]!==void 0&&(q.needsToShow=d[0]),d[2]!==void 0&&(q.cancelledEarly=d[2]),d[1]!==void 0&&(q.showed=d[1]),d[3]!==void 0&&(q.hasHovered=d[3]),d[4]!==void 0&&(q.hasClicked=d[4]),d[5]!==void 0&&(q.hoverPopup=d[5]),n=new Pt({props:q}),ke.push(()=>Ie(n,"needsToShow",G)),ke.push(()=>Ie(n,"cancelledEarly",K)),ke.push(()=>Ie(n,"showed",x)),ke.push(()=>Ie(n,"hasHovered",W)),ke.push(()=>Ie(n,"hasClicked",Z)),ke.push(()=>Ie(n,"hoverPopup",U));let P=d[8]==-1&&Ke();return{c(){e=m("div"),t=m("div"),C&&C.c(),s=D(),l=m("div"),o=m("h1");for(let u=0;u<A.length;u+=1)A[u].c();f=D(),ve(n.$$.fragment),p=D(),P&&P.c(),this.h()},l(u){e=g(u,"DIV",{id:!0,class:!0});var S=y(e);t=g(S,"DIV",{class:!0,style:!0});var k=y(t);C&&C.l(k),s=T(k),l=g(k,"DIV",{class:!0});var I=y(l);o=g(I,"H1",{class:!0});var Y=y(o);for(let N=0;N<A.length;N+=1)A[N].l(Y);Y.forEach(h),f=T(I),_e(n.$$.fragment,I),I.forEach(h),p=T(k),P&&P.l(k),k.forEach(h),S.forEach(h),this.h()},h(){b(o,"class","fancy word svelte-103otuy"),b(l,"class","line svelte-103otuy"),b(t,"class","center svelte-103otuy"),b(t,"style",E=`height: ${d[6]}vh`),b(e,"id","main-text"),b(e,"class","svelte-103otuy")},m(u,S){M(u,e,S),a(e,t),C&&C.m(t,null),a(t,s),a(t,l),a(l,o);for(let k=0;k<A.length;k+=1)A[k].m(o,null);a(l,f),pe(n,l,null),a(t,p),P&&P.m(t,null),B=!0},p(u,[S]){if(u[8]==-1?C?S&256&&H(C,1):(C=Xe(),C.c(),H(C,1),C.m(t,s)):C&&(fe(),L(C,1,1,()=>{C=null}),he()),S&3712){F=u[7];let I;for(I=0;I<F.length;I+=1){const Y=Je(u,F,I);A[I]?A[I].p(Y,S):(A[I]=Ye(Y),A[I].c(),A[I].m(o,null))}for(;I<A.length;I+=1)A[I].d(1);A.length=F.length}const k={};!i&&S&1&&(i=!0,k.needsToShow=u[0],Ce(()=>i=!1)),!r&&S&4&&(r=!0,k.cancelledEarly=u[2],Ce(()=>r=!1)),!v&&S&2&&(v=!0,k.showed=u[1],Ce(()=>v=!1)),!c&&S&8&&(c=!0,k.hasHovered=u[3],Ce(()=>c=!1)),!_&&S&16&&(_=!0,k.hasClicked=u[4],Ce(()=>_=!1)),!w&&S&32&&(w=!0,k.hoverPopup=u[5],Ce(()=>w=!1)),n.$set(k),u[8]==-1?P?S&256&&H(P,1):(P=Ke(),P.c(),H(P,1),P.m(t,null)):P&&(fe(),L(P,1,1,()=>{P=null}),he()),(!B||S&64&&E!==(E=`height: ${u[6]}vh`))&&b(t,"style",E)},i(u){B||(H(C),H(n.$$.fragment,u),H(P),J(()=>{O||(O=V(t,j,{},!0)),O.run(1)}),B=!0)},o(u){L(C),L(n.$$.fragment,u),L(P),O||(O=V(t,j,{},!1)),O.run(0),B=!1},d(u){u&&h(e),C&&C.d(),ot(A,u),me(n),P&&P.d(),u&&O&&O.end()}}}function Tt(d,e,t){let s,l,o;Se(d,_t,u=>t(7,s=u)),Se(d,Ne,u=>t(8,l=u)),Se(d,pt,u=>t(22,o=u));let f=!1,n=!1,i=!0,r=!1,v=!1,c,_=100;const w=u=>{const S=document.getElementById(`letter-${u}`),k=document.getElementById(`big-letter-${u}`);if(!(!S||!k)&&(s[u].slice(1).length>0&&(t(0,f=!1),t(3,r=!0),t(1,n=!0),clearTimeout(c)),S.style.letterSpacing="0em",O(S,u),O(k,u),l!=0))for(let I=0;I<s.length;I++)I!==u&&E(I)},p=u=>{if(l===u)return;const S=document.getElementById(`letter-${u}`),k=document.getElementById(`big-letter-${u}`);!S||!k||(S.style.letterSpacing="-1em",B(S),B(k),l!=0&&w(l))},E=u=>{const S=document.getElementById(`letter-${u}`),k=document.getElementById(`big-letter-${u}`);!S||!k||(console.log("collapsing"),S.style.letterSpacing="-1em")},O=(u,S)=>{const I=o[S];I===void 0||Object.keys(I).length===0||(u.style.background=`linear-gradient(${I.rot}, ${I.startColor}, ${I.midColor}, ${I.endColor})`,u.style.backgroundSize="400% 400%",u.style.webkitBackgroundClip="text",u.style.backgroundClip="text",u.style.webkitTextFillColor="transparent")},B=u=>{u.style.background="",u.style.webkitBackgroundClip="",u.style.backgroundClip="",u.style.webkitTextFillColor=""},C=u=>{if(u==0){window.document.body.classList.toggle("light-mode");return}l==u?(xe(Ne,l=-1,l),t(6,_=100)):(xe(Ne,l=u,l),t(6,_=20)),s.forEach((S,k)=>{k!=u&&p(k)}),t(4,v=!0)};function F(u){it.call(this,d,u)}const A=u=>w(u),G=u=>p(u),K=u=>C(u);function x(u){f=u,t(0,f)}function W(u){i=u,t(2,i)}function Z(u){n=u,t(1,n)}function U(u){r=u,t(3,r)}function q(u){v=u,t(4,v)}function P(u){c=u,t(5,c)}return[f,n,i,r,v,c,_,s,l,w,p,C,F,A,G,K,x,W,Z,U,q,P]}class At extends ae{constructor(e){super(),ie(this,e,Tt,Dt,ne,{})}}function Ht(d){let e,t,s,l,o,f,n,i,r,v,c,_,w,p,E,O,B,C,F,A,G,K,x,W,Z,U,q;return{c(){e=m("div"),t=m("div"),s=m("span"),l=$("About Me"),f=D(),n=m("div"),i=m("div"),r=m("p"),v=$(`Howdy! I'm Joseph, a current University of Waterloo CS undergraduate.\r
				`),c=m("br"),_=m("br"),w=$(`\r
				I have a passion of learning whatever I find interesting, tech or not. Right now, I'm learning Cardistry and Svelte (hope u like the site), but I yearn to one day proudly say "wow, I know rust now".\r
				`),p=m("br"),E=m("br"),O=$(` \r
				I think effervescent is the best word to make you sound smart, Lysol is the best cleaning product, and video game OSTs are underappreciated. Say hi to me whenever!\r
				`),B=m("br"),C=m("br"),F=D(),A=m("small"),G=$(":)"),K=D(),x=m("div"),W=m("img"),this.h()},l(P){e=g(P,"DIV",{});var u=y(e);t=g(u,"DIV",{class:!0});var S=y(t);s=g(S,"SPAN",{class:!0});var k=y(s);l=R(k,"About Me"),k.forEach(h),S.forEach(h),f=T(u),n=g(u,"DIV",{class:!0});var I=y(n);i=g(I,"DIV",{class:!0});var Y=y(i);r=g(Y,"P",{class:!0});var N=y(r);v=R(N,`Howdy! I'm Joseph, a current University of Waterloo CS undergraduate.\r
				`),c=g(N,"BR",{}),_=g(N,"BR",{}),w=R(N,`\r
				I have a passion of learning whatever I find interesting, tech or not. Right now, I'm learning Cardistry and Svelte (hope u like the site), but I yearn to one day proudly say "wow, I know rust now".\r
				`),p=g(N,"BR",{}),E=g(N,"BR",{}),O=R(N,` \r
				I think effervescent is the best word to make you sound smart, Lysol is the best cleaning product, and video game OSTs are underappreciated. Say hi to me whenever!\r
				`),B=g(N,"BR",{}),C=g(N,"BR",{}),F=T(N),A=g(N,"SMALL",{class:!0});var ee=y(A);G=R(ee,":)"),ee.forEach(h),N.forEach(h),Y.forEach(h),K=T(I),x=g(I,"DIV",{class:!0});var ce=y(x);W=g(ce,"IMG",{class:!0,src:!0,alt:!0}),ce.forEach(h),I.forEach(h),u.forEach(h),this.h()},h(){b(s,"class","inner-bg-text svelte-7v1abi"),b(t,"class","background-text svelte-7v1abi"),b(A,"class","svelte-7v1abi"),b(r,"class","svelte-7v1abi"),b(i,"class","intro-text svelte-7v1abi"),b(W,"class","me-png svelte-7v1abi"),Oe(W.src,Z="./me.png")||b(W,"src",Z),b(W,"alt","me"),b(x,"class","image svelte-7v1abi"),b(n,"class","text-image-split svelte-7v1abi")},m(P,u){M(P,e,u),a(e,t),a(t,s),a(s,l),a(e,f),a(e,n),a(n,i),a(i,r),a(r,v),a(r,c),a(r,_),a(r,w),a(r,p),a(r,E),a(r,O),a(r,B),a(r,C),a(r,F),a(r,A),a(A,G),a(n,K),a(n,x),a(x,W),q=!0},p:be,i(P){q||(J(()=>{o||(o=V(t,j,{},!0)),o.run(1)}),J(()=>{U||(U=V(e,j,{},!0)),U.run(1)}),q=!0)},o(P){o||(o=V(t,j,{},!1)),o.run(0),U||(U=V(e,j,{},!1)),U.run(0),q=!1},d(P){P&&h(e),P&&o&&o.end(),P&&U&&U.end()}}}class $t extends ae{constructor(e){super(),ie(this,e,null,Ht,ne,{})}}function Rt(d){let e,t,s,l,o,f;const n=d[5].default,i=ct(n,d,d[4],null);return{c(){e=m("div"),i&&i.c(),this.h()},l(r){e=g(r,"DIV",{id:!0,class:!0,style:!0});var v=y(e);i&&i.l(v),v.forEach(h),this.h()},h(){b(e,"id",d[0]),b(e,"class","dots svelte-jwlpfu"),b(e,"style",t=`height: ${d[1]}`)},m(r,v){M(r,e,v),i&&i.m(e,null),l=!0,o||(f=Be(e,"mousemove",d[2]),o=!0)},p(r,[v]){i&&i.p&&(!l||v&16)&&ut(i,n,r,r[4],l?ft(n,r[4],v,null):dt(r[4]),null),(!l||v&1)&&b(e,"id",r[0]),(!l||v&2&&t!==(t=`height: ${r[1]}`))&&b(e,"style",t)},i(r){l||(H(i,r),r&&J(()=>{s||(s=V(e,j,{},!0)),s.run(1)}),l=!0)},o(r){L(i,r),r&&(s||(s=V(e,j,{},!1)),s.run(0)),l=!1},d(r){r&&h(e),i&&i.d(r),r&&s&&s.end(),o=!1,f()}}}function Bt(d,e,t){let{$$slots:s={},$$scope:l}=e,{id:o}=e,{shiftMultiplier:f=5}=e,{height:n="100vh"}=e;const i=r=>{const v=document.getElementById(o),c=r.clientX/window.innerWidth,_=r.clientY/window.innerHeight,w=c*f,p=_*f;v.style.backgroundPosition=`${w}px ${p}px, 7.5vmin 7.5vmin`};return d.$$set=r=>{"id"in r&&t(0,o=r.id),"shiftMultiplier"in r&&t(3,f=r.shiftMultiplier),"height"in r&&t(1,n=r.height),"$$scope"in r&&t(4,l=r.$$scope)},[o,n,i,f,l,s]}class Ot extends ae{constructor(e){super(),ie(this,e,Bt,Rt,ne,{id:0,shiftMultiplier:3,height:1})}}function Nt(d){let e,t,s,l,o,f,n,i,r,v,c,_,w,p,E,O,B,C,F,A,G,K,x,W,Z,U,q,P,u,S,k,I,Y,N,ee,ce,Q,ge,te,se,ue,ye,le,X;return{c(){e=m("div"),t=m("div"),s=m("span"),l=$("YOU'RE HERE GOOD WORK"),f=D(),n=m("div"),i=m("p"),r=$("Welcome, glad you made it!"),v=D(),c=m("p"),_=$("The other letters have other functions too."),w=D(),p=m("p"),E=$("Click to bring up their page."),O=D(),B=m("br"),C=m("br"),F=m("br"),A=D(),G=m("p"),K=$("This site was made in a few days with Svelte as a learning project."),x=D(),W=m("p"),Z=$("Please excuse any bugs as a result! I'll probably get to it."),U=D(),q=m("p"),P=$("For what I've done, check out the EP trio in my name."),u=D(),S=m("br"),k=m("br"),I=m("br"),Y=D(),N=m("p"),ee=$("if you like light mode, click the J."),ce=D(),Q=m("p"),ge=$("After realizing your mistake, click again for the sweet embrace of dark mode."),te=D(),se=m("p"),ue=m("small"),ye=$("I also have plans to hide a few things in here...good luck finding them"),this.h()},l(re){e=g(re,"DIV",{});var de=y(e);t=g(de,"DIV",{class:!0});var De=y(t);s=g(De,"SPAN",{class:!0});var we=y(s);l=R(we,"YOU'RE HERE GOOD WORK"),we.forEach(h),De.forEach(h),f=T(de),n=g(de,"DIV",{class:!0});var z=y(n);i=g(z,"P",{class:!0});var Te=y(i);r=R(Te,"Welcome, glad you made it!"),Te.forEach(h),v=T(z),c=g(z,"P",{class:!0});var Ee=y(c);_=R(Ee,"The other letters have other functions too."),Ee.forEach(h),w=T(z),p=g(z,"P",{class:!0});var Ae=y(p);E=R(Ae,"Click to bring up their page."),Ae.forEach(h),O=T(z),B=g(z,"BR",{}),C=g(z,"BR",{}),F=g(z,"BR",{}),A=T(z),G=g(z,"P",{class:!0});var He=y(G);K=R(He,"This site was made in a few days with Svelte as a learning project."),He.forEach(h),x=T(z),W=g(z,"P",{class:!0});var $e=y(W);Z=R($e,"Please excuse any bugs as a result! I'll probably get to it."),$e.forEach(h),U=T(z),q=g(z,"P",{class:!0});var Re=y(q);P=R(Re,"For what I've done, check out the EP trio in my name."),Re.forEach(h),u=T(z),S=g(z,"BR",{}),k=g(z,"BR",{}),I=g(z,"BR",{}),Y=T(z),N=g(z,"P",{class:!0});var We=y(N);ee=R(We,"if you like light mode, click the J."),We.forEach(h),ce=T(z),Q=g(z,"P",{class:!0});var je=y(Q);ge=R(je,"After realizing your mistake, click again for the sweet embrace of dark mode."),je.forEach(h),te=T(z),se=g(z,"P",{class:!0});var Fe=y(se);ue=g(Fe,"SMALL",{class:!0});var Ge=y(ue);ye=R(Ge,"I also have plans to hide a few things in here...good luck finding them"),Ge.forEach(h),Fe.forEach(h),z.forEach(h),de.forEach(h),this.h()},h(){b(s,"class","inner-bg-text svelte-zp5bd5"),b(t,"class","background-text svelte-zp5bd5"),b(i,"class","svelte-zp5bd5"),b(c,"class","inner-thoughts svelte-zp5bd5"),b(p,"class","inner-thoughts svelte-zp5bd5"),b(G,"class","inner-thoughts svelte-zp5bd5"),b(W,"class","inner-thoughts svelte-zp5bd5"),b(q,"class","inner-thoughts svelte-zp5bd5"),b(N,"class","inner-thoughts svelte-zp5bd5"),b(Q,"class","inner-thoughts svelte-zp5bd5"),b(ue,"class","svelte-zp5bd5"),b(se,"class","inner-thoughts svelte-zp5bd5"),b(n,"class","intro-text svelte-zp5bd5")},m(re,de){M(re,e,de),a(e,t),a(t,s),a(s,l),a(e,f),a(e,n),a(n,i),a(i,r),a(n,v),a(n,c),a(c,_),a(n,w),a(n,p),a(p,E),a(n,O),a(n,B),a(n,C),a(n,F),a(n,A),a(n,G),a(G,K),a(n,x),a(n,W),a(W,Z),a(n,U),a(n,q),a(q,P),a(n,u),a(n,S),a(n,k),a(n,I),a(n,Y),a(n,N),a(N,ee),a(n,ce),a(n,Q),a(Q,ge),a(n,te),a(n,se),a(se,ue),a(ue,ye),X=!0},p:be,i(re){X||(J(()=>{o||(o=V(t,j,{},!0)),o.run(1)}),J(()=>{le||(le=V(e,j,{},!0)),le.run(1)}),X=!0)},o(re){o||(o=V(t,j,{},!1)),o.run(0),le||(le=V(e,j,{},!1)),le.run(0),X=!1},d(re){re&&h(e),re&&o&&o.end(),re&&le&&le.end()}}}class Vt extends ae{constructor(e){super(),ie(this,e,null,Nt,ne,{})}}function zt(d){let e,t,s,l,o,f,n,i,r,v,c,_,w,p,E,O,B,C,F,A,G,K,x,W,Z,U,q,P,u,S,k,I,Y,N,ee,ce,Q,ge;return{c(){e=m("div"),t=m("div"),s=m("span"),l=$("SUPER SOCIALS"),f=D(),n=m("div"),i=m("div"),r=m("p"),v=$("LinkedIn: "),c=m("a"),_=m("u"),w=$("wang-joseph"),p=D(),E=m("p"),O=$("Github: "),B=m("a"),C=m("u"),F=$("wang-joseph"),A=D(),G=m("p"),K=$("Devpost: "),x=m("a"),W=m("u"),Z=$("/EmeraldEntities"),U=D(),q=m("br"),P=m("br"),u=m("br"),S=D(),k=m("p"),I=$("this page is a bit barren so here is a picture of my cat"),Y=D(),N=m("div"),ee=m("img"),this.h()},l(te){e=g(te,"DIV",{});var se=y(e);t=g(se,"DIV",{class:!0});var ue=y(t);s=g(ue,"SPAN",{class:!0});var ye=y(s);l=R(ye,"SUPER SOCIALS"),ye.forEach(h),ue.forEach(h),f=T(se),n=g(se,"DIV",{class:!0});var le=y(n);i=g(le,"DIV",{class:!0});var X=y(i);r=g(X,"P",{class:!0});var re=y(r);v=R(re,"LinkedIn: "),c=g(re,"A",{href:!0,class:!0});var de=y(c);_=g(de,"U",{});var De=y(_);w=R(De,"wang-joseph"),De.forEach(h),de.forEach(h),re.forEach(h),p=T(X),E=g(X,"P",{class:!0});var we=y(E);O=R(we,"Github: "),B=g(we,"A",{href:!0,class:!0});var z=y(B);C=g(z,"U",{});var Te=y(C);F=R(Te,"wang-joseph"),Te.forEach(h),z.forEach(h),we.forEach(h),A=T(X),G=g(X,"P",{class:!0});var Ee=y(G);K=R(Ee,"Devpost: "),x=g(Ee,"A",{href:!0,class:!0});var Ae=y(x);W=g(Ae,"U",{});var He=y(W);Z=R(He,"/EmeraldEntities"),He.forEach(h),Ae.forEach(h),Ee.forEach(h),U=T(X),q=g(X,"BR",{}),P=g(X,"BR",{}),u=g(X,"BR",{}),S=T(X),k=g(X,"P",{class:!0});var $e=y(k);I=R($e,"this page is a bit barren so here is a picture of my cat"),$e.forEach(h),X.forEach(h),Y=T(le),N=g(le,"DIV",{class:!0});var Re=y(N);ee=g(Re,"IMG",{class:!0,src:!0,alt:!0}),Re.forEach(h),le.forEach(h),se.forEach(h),this.h()},h(){b(s,"class","inner-bg-text svelte-wnt42q"),b(t,"class","background-text svelte-wnt42q"),b(c,"href","https://linkedin.com/in/wang-joseph"),b(c,"class","svelte-wnt42q"),b(r,"class","svelte-wnt42q"),b(B,"href","https://github.com/wang-joseph"),b(B,"class","svelte-wnt42q"),b(E,"class","svelte-wnt42q"),b(x,"href","https://devpost.com/EmeraldEntities"),b(x,"class","svelte-wnt42q"),b(G,"class","svelte-wnt42q"),b(k,"class","inner-thoughts svelte-wnt42q"),b(i,"class","intro-text svelte-wnt42q"),b(ee,"class","cat-jpg svelte-wnt42q"),Oe(ee.src,ce="./cat.jpg")||b(ee,"src",ce),b(ee,"alt","cat"),b(N,"class","image svelte-wnt42q"),b(n,"class","text-image-split svelte-wnt42q")},m(te,se){M(te,e,se),a(e,t),a(t,s),a(s,l),a(e,f),a(e,n),a(n,i),a(i,r),a(r,v),a(r,c),a(c,_),a(_,w),a(i,p),a(i,E),a(E,O),a(E,B),a(B,C),a(C,F),a(i,A),a(i,G),a(G,K),a(G,x),a(x,W),a(W,Z),a(i,U),a(i,q),a(i,P),a(i,u),a(i,S),a(i,k),a(k,I),a(n,Y),a(n,N),a(N,ee),ge=!0},p:be,i(te){ge||(J(()=>{o||(o=V(t,j,{},!0)),o.run(1)}),J(()=>{Q||(Q=V(e,j,{},!0)),Q.run(1)}),ge=!0)},o(te){o||(o=V(t,j,{},!1)),o.run(0),Q||(Q=V(e,j,{},!1)),Q.run(0),ge=!1},d(te){te&&h(e),te&&o&&o.end(),te&&Q&&Q.end()}}}class Lt extends ae{constructor(e){super(),ie(this,e,null,zt,ne,{})}}function qt(d){let e,t,s,l,o,f,n,i,r,v;return{c(){e=m("div"),t=m("div"),s=m("span"),l=$("EXP GAINED"),f=D(),n=m("p"),i=$("This is in To-do! Don't worry, it's not forgotten 😀"),this.h()},l(c){e=g(c,"DIV",{id:!0,class:!0});var _=y(e);t=g(_,"DIV",{class:!0});var w=y(t);s=g(w,"SPAN",{class:!0});var p=y(s);l=R(p,"EXP GAINED"),p.forEach(h),w.forEach(h),f=T(_),n=g(_,"P",{class:!0});var E=y(n);i=R(E,"This is in To-do! Don't worry, it's not forgotten 😀"),E.forEach(h),_.forEach(h),this.h()},h(){b(s,"class","inner-bg-text svelte-12q10dd"),b(t,"class","background-text svelte-12q10dd"),b(n,"class","svelte-12q10dd"),b(e,"id","experience"),b(e,"class","svelte-12q10dd")},m(c,_){M(c,e,_),a(e,t),a(t,s),a(s,l),a(e,f),a(e,n),a(n,i),v=!0},p:be,i(c){v||(J(()=>{o||(o=V(t,j,{},!0)),o.run(1)}),J(()=>{r||(r=V(e,j,{},!0)),r.run(1)}),v=!0)},o(c){o||(o=V(t,j,{},!1)),o.run(0),r||(r=V(e,j,{},!1)),r.run(0),v=!1},d(c){c&&h(e),c&&o&&o.end(),c&&r&&r.end()}}}class Mt extends ae{constructor(e){super(),ie(this,e,null,qt,ne,{})}}function Wt(d){let e,t,s,l,o,f,n,i,r,v;return{c(){e=m("div"),t=m("div"),s=m("span"),l=$("PORT FOLIO"),f=D(),n=m("p"),i=$("Sorry, I'm still working on this section! Gotta make it nice and cooool 😎"),this.h()},l(c){e=g(c,"DIV",{id:!0,class:!0});var _=y(e);t=g(_,"DIV",{class:!0});var w=y(t);s=g(w,"SPAN",{class:!0});var p=y(s);l=R(p,"PORT FOLIO"),p.forEach(h),w.forEach(h),f=T(_),n=g(_,"P",{class:!0});var E=y(n);i=R(E,"Sorry, I'm still working on this section! Gotta make it nice and cooool 😎"),E.forEach(h),_.forEach(h),this.h()},h(){b(s,"class","inner-bg-text svelte-1v0v2fj"),b(t,"class","background-text svelte-1v0v2fj"),b(n,"class","svelte-1v0v2fj"),b(e,"id","portfolio"),b(e,"class","svelte-1v0v2fj")},m(c,_){M(c,e,_),a(e,t),a(t,s),a(s,l),a(e,f),a(e,n),a(n,i),v=!0},p:be,i(c){v||(J(()=>{o||(o=V(t,j,{},!0)),o.run(1)}),J(()=>{r||(r=V(e,j,{},!0)),r.run(1)}),v=!0)},o(c){o||(o=V(t,j,{},!1)),o.run(0),r||(r=V(e,j,{},!1)),r.run(0),v=!1},d(c){c&&h(e),c&&o&&o.end(),c&&r&&r.end()}}}class jt extends ae{constructor(e){super(),ie(this,e,null,Wt,ne,{})}}function Qe(d){let e,t;return e=new $t({}),{c(){ve(e.$$.fragment)},l(s){_e(e.$$.fragment,s)},m(s,l){pe(e,s,l),t=!0},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){me(e,s)}}}function Ze(d){let e,t;return e=new Lt({}),{c(){ve(e.$$.fragment)},l(s){_e(e.$$.fragment,s)},m(s,l){pe(e,s,l),t=!0},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){me(e,s)}}}function et(d){let e,t;return e=new Mt({}),{c(){ve(e.$$.fragment)},l(s){_e(e.$$.fragment,s)},m(s,l){pe(e,s,l),t=!0},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){me(e,s)}}}function tt(d){let e,t;return e=new jt({}),{c(){ve(e.$$.fragment)},l(s){_e(e.$$.fragment,s)},m(s,l){pe(e,s,l),t=!0},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){me(e,s)}}}function st(d){let e,t;return e=new Vt({}),{c(){ve(e.$$.fragment)},l(s){_e(e.$$.fragment,s)},m(s,l){pe(e,s,l),t=!0},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){me(e,s)}}}function Ft(d){let e,t,s,l,o,f,n,i;e=new At({});let r=d[0]==1&&Qe(),v=d[0]==2&&Ze(),c=d[0]==3&&et(),_=d[0]==4&&tt(),w=d[0]==5&&st();return{c(){ve(e.$$.fragment),t=D(),r&&r.c(),s=D(),v&&v.c(),l=D(),c&&c.c(),o=D(),_&&_.c(),f=D(),w&&w.c(),n=Pe()},l(p){_e(e.$$.fragment,p),t=T(p),r&&r.l(p),s=T(p),v&&v.l(p),l=T(p),c&&c.l(p),o=T(p),_&&_.l(p),f=T(p),w&&w.l(p),n=Pe()},m(p,E){pe(e,p,E),M(p,t,E),r&&r.m(p,E),M(p,s,E),v&&v.m(p,E),M(p,l,E),c&&c.m(p,E),M(p,o,E),_&&_.m(p,E),M(p,f,E),w&&w.m(p,E),M(p,n,E),i=!0},p(p,E){p[0]==1?r?E&1&&H(r,1):(r=Qe(),r.c(),H(r,1),r.m(s.parentNode,s)):r&&(fe(),L(r,1,1,()=>{r=null}),he()),p[0]==2?v?E&1&&H(v,1):(v=Ze(),v.c(),H(v,1),v.m(l.parentNode,l)):v&&(fe(),L(v,1,1,()=>{v=null}),he()),p[0]==3?c?E&1&&H(c,1):(c=et(),c.c(),H(c,1),c.m(o.parentNode,o)):c&&(fe(),L(c,1,1,()=>{c=null}),he()),p[0]==4?_?E&1&&H(_,1):(_=tt(),_.c(),H(_,1),_.m(f.parentNode,f)):_&&(fe(),L(_,1,1,()=>{_=null}),he()),p[0]==5?w?E&1&&H(w,1):(w=st(),w.c(),H(w,1),w.m(n.parentNode,n)):w&&(fe(),L(w,1,1,()=>{w=null}),he())},i(p){i||(H(e.$$.fragment,p),H(r),H(v),H(c),H(_),H(w),i=!0)},o(p){L(e.$$.fragment,p),L(r),L(v),L(c),L(_),L(w),i=!1},d(p){me(e,p),p&&h(t),r&&r.d(p),p&&h(s),v&&v.d(p),p&&h(l),c&&c.d(p),p&&h(o),_&&_.d(p),p&&h(f),w&&w.d(p),p&&h(n)}}}function Gt(d){let e,t,s;return t=new Ot({props:{id:"main-dots",shiftMultiplier:10,$$slots:{default:[Ft]},$$scope:{ctx:d}}}),{c(){e=D(),ve(t.$$.fragment),this.h()},l(l){ht("svelte-1m6i6t3",document.head).forEach(h),e=T(l),_e(t.$$.fragment,l),this.h()},h(){document.title="Joseph Wang"},m(l,o){M(l,e,o),pe(t,l,o),s=!0},p(l,[o]){const f={};o&3&&(f.$$scope={dirty:o,ctx:l}),t.$set(f)},i(l){s||(H(t.$$.fragment,l),s=!0)},o(l){L(t.$$.fragment,l),s=!1},d(l){l&&h(e),me(t,l)}}}function xt(d,e,t){let s;return Se(d,Ne,l=>t(0,s=l)),[s]}class Xt extends ae{constructor(e){super(),ie(this,e,xt,Gt,ne,{})}}export{Xt as default};
