!function(e){function t(t){for(var r,l,a=t[0],u=t[1],s=t[2],p=0,f=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={12:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var c=u;i.push([205,0]),n()}({205:function(e,t,n){e.exports=n(206)},206:function(e,t,n){"use strict";n.r(t);var r=n(25),o=n(2),i=n(21),l=n(39),a=n(24),u=n(17),s=n(26),c=n(28);Cesium.Ion.defaultAccessToken=c.a;const p=new s.a({layers:[new u.a({source:new a.b})],controls:Object(l.a)({attributionOptions:{collapsible:!1}}),target:"map",view:new i.a({center:Object(o.r)([25,20],"EPSG:4326","EPSG:3857"),zoom:3})}),f=document.getElementById("time"),d=new r.a({map:p,time(){const e=f.value;if(d.getCesiumScene().globe.enableLighting&&e){const t=new Date;return t.setUTCHours(e),Cesium.JulianDate.fromDate(t)}return Cesium.JulianDate.now()}}),b=d.getCesiumScene();b.terrainProvider=Cesium.createWorldTerrain(),d.setEnabled(!0),f.style.display="none",document.getElementById("enable").addEventListener("click",()=>d.setEnabled(!d.getEnabled())),window.toggleTime=function(){b.globe.enableLighting=!b.globe.enableLighting,"none"==f.style.display?f.style.display="inline-block":f.style.display="none"}}});
//# sourceMappingURL=main.a35f08293de07880daca.js.map