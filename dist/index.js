"use strict";var o=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var q=o(function(z,c){
function D(a,r,t,e,n,s){var v,u,i;if(a<=0)return e;for(v=s+r*n,i=r*2+1;i<a&&(u=s+i*n,i+1<a&&e[s+(i+1)*n]<e[u]&&(i+=1,u=s+i*n),!(e[u]>=t));)e[v]=e[u],r=i,v=u,i=r*2+1;return e[v]=t,e}c.exports=D
});var f=o(function(A,m){
var S=require('@stdlib/strided-base-stride2offset/dist'),l=q();function R(a,r,t,e,n){return l(a,r,t,e,n,S(a,n))}m.exports=R
});var y=o(function(B,w){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=f(),b=q();_(h,"ndarray",b);w.exports=h
});var d=require("path").join,k=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=y(),p,j=k(d(__dirname,"./native.js"));E(j)?p=O:p=j;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
