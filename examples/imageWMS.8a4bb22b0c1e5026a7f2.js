!function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={8:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=c;a.push([198,0]),n()}({198:function(e,t,n){e.exports=n(199)},199:function(e,t,n){"use strict";n.r(t);var r=n(25),o=n(21),a=n(39),u=n(117),i=n(24),c=n(97),l=n(17),s=n(26),p=n(28);const f=new u.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},ratio:1});Cesium.Ion.defaultAccessToken=p.a;const d=new s.a({layers:[new l.a({source:new i.b}),new c.a({extent:[-13884991,2870341,-7455066,6338219],source:f})],controls:Object(a.a)({attributionOptions:{collapsible:!1}}),target:"map",view:new o.a({center:[-10967567.978507737,4204193.972847062],zoom:3})}),b=new r.a({map:d,time:()=>Cesium.JulianDate.now()});b.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),b.setEnabled(!0),document.getElementById("enable").addEventListener("click",()=>b.setEnabled(!b.getEnabled()))}});
//# sourceMappingURL=imageWMS.8a4bb22b0c1e5026a7f2.js.map