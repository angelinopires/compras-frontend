(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"H+bZ":function(e,t,r){"use strict";r.d(t,"a",function(){return S});var n=r("Ji7U"),a=r("LK+K"),s=r("ODXe"),i=r("KQm4"),o=r("vuIU"),u=r("1OyB"),h=r("fXoL"),l=r("LRne"),c=r("HDdC"),d=r("bOdf"),p=r("pLZG"),f=r("lJxs"),y=(r("ofXK"),function e(){Object(u.a)(this,e)}),v=function(){function e(t){var r=this;Object(u.a)(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){r.headers=new Map,t.split("\n").forEach(function(e){var t=e.indexOf(":");if(t>0){var n=e.slice(0,t),a=n.toLowerCase(),s=e.slice(t+1).trim();r.maybeSetNormalizedName(n,a),r.headers.has(a)?r.headers.get(a).push(s):r.headers.set(a,[s])}})}:function(){r.headers=new Map,Object.keys(t).forEach(function(e){var n=t[e],a=e.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(r.headers.set(a,n),r.maybeSetNormalizedName(e,a))})}:this.headers=new Map}return Object(o.a)(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(r){t.headers.set(r,e.headers.get(r)),t.normalizedNames.set(r,e.normalizedNames.get(r))})}},{key:"clone",value:function(t){var r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([t]),r}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);var n=("a"===e.op?this.headers.get(t):void 0)||[];n.push.apply(n,Object(i.a)(r)),this.headers.set(t,n);break;case"d":var a=e.value;if(a){var s=this.headers.get(t);if(!s)return;0===(s=s.filter(function(e){return-1===a.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(r){return e(t.normalizedNames.get(r),t.headers.get(r))})}}]),e}(),b=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"encodeKey",value:function(e){return g(e)}},{key:"encodeValue",value:function(e){return g(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function m(e,t){var r=new Map;return e.length>0&&e.split("&").forEach(function(e){var n=e.indexOf("="),a=-1==n?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,n)),t.decodeValue(e.slice(n+1))],i=Object(s.a)(a,2),o=i[0],u=i[1],h=r.get(o)||[];h.push(u),r.set(o,h)}),r}function g(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var w=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Object(u.a)(this,e),this.updates=null,this.cloneFrom=null,this.encoder=r.encoder||new b,r.fromString){if(r.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=m(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(function(e){var n=r.fromObject[e];t.map.set(e,Array.isArray(n)?n:[n])})):this.map=null}return Object(o.a)(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map(function(t){var r=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return r+"="+e.encoder.encodeValue(t)}).join("&")}).filter(function(e){return""!==e}).join("&")}},{key:"clone",value:function(t){var r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat([t]),r}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var r=("a"===t.op?e.map.get(t.param):void 0)||[];r.push(t.value),e.map.set(t.param,r);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var n=e.map.get(t.param)||[],a=n.indexOf(t.value);-1!==a&&n.splice(a,1),n.length>0?e.map.set(t.param,n):e.map.delete(t.param)}}),this.cloneFrom=this.updates=null)}}]),e}();function O(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function k(e){return"undefined"!=typeof Blob&&e instanceof Blob}function j(e){return"undefined"!=typeof FormData&&e instanceof FormData}var z=function(){function e(t,r,n,a){var s;if(Object(u.a)(this,e),this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||a?(this.body=void 0!==n?n:null,s=a):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.params&&(this.params=s.params)),this.headers||(this.headers=new v),this.params){var i=this.params.toString();if(0===i.length)this.urlWithParams=r;else{var o=r.indexOf("?");this.urlWithParams=r+(-1===o?"?":o<r.length-1?"&":"")+i}}else this.params=new w,this.urlWithParams=r}return Object(o.a)(e,[{key:"serializeBody",value:function(){return null===this.body?null:O(this.body)||k(this.body)||j(this.body)||"string"==typeof this.body?this.body:this.body instanceof w?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body||j(this.body)?null:k(this.body)?this.body.type||null:O(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof w?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.method||this.method,n=t.url||this.url,a=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,o=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,h=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce(function(e,r){return e.set(r,t.setHeaders[r])},u)),t.setParams&&(h=Object.keys(t.setParams).reduce(function(e,r){return e.set(r,t.setParams[r])},h)),new e(r,n,s,{params:h,headers:u,reportProgress:o,responseType:a,withCredentials:i})}}]),e}(),T=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({}),C=function(e){Object(n.a)(r,function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";Object(u.a)(this,e),this.headers=t.headers||new v,this.status=void 0!==t.status?t.status:r,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300});var t=Object(a.a)(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.a)(this,r),(e=t.call(this,n)).type=T.Response,e.body=void 0!==n.body?n.body:null,e}return Object(o.a)(r,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new r({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),r}();function E(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var P=function(){var e=function(){function e(t){Object(u.a)(this,e),this.handler=t}return Object(o.a)(e,[{key:"request",value:function(e,t){var r,n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof z)r=e;else{var s=void 0;s=a.headers instanceof v?a.headers:new v(a.headers);var i=void 0;a.params&&(i=a.params instanceof w?a.params:new w({fromObject:a.params})),r=new z(e,t,void 0!==a.body?a.body:null,{headers:s,params:i,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials})}var o=Object(l.a)(r).pipe(Object(d.a)(function(e){return n.handler.handle(e)}));if(e instanceof z||"events"===a.observe)return o;var u=o.pipe(Object(p.a)(function(e){return e instanceof C}));switch(a.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return u.pipe(Object(f.a)(function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return u.pipe(Object(f.a)(function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return u.pipe(Object(f.a)(function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return u.pipe(Object(f.a)(function(e){return e.body}))}case"response":return u;default:throw new Error("Unreachable: unhandled observe type ".concat(a.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new w).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,E(r,t))}},{key:"post",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,E(r,t))}},{key:"put",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,E(r,t))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(h.Ib(y))},e.\u0275prov=h.zb({token:e,factory:e.\u0275fac}),e}(),N=r("JIr8"),A=r("AytR"),U=r("tyNb"),S=function(){function e(e,t){this.http=e,this.router=t}return e.prototype.get=function(e,t){var r=this;return void 0===t&&(t=new w),this.http.get(""+A.a.api_url+e,{headers:{"Content-Type":"application/json"}}).pipe(Object(N.a)(function(e){return r.handleError(e,r.router)}))},e.prototype.post=function(e,t){var r=this;return void 0===t&&(t={}),this.http.post(""+A.a.api_url+e,JSON.stringify(t),{headers:{"Content-Type":"application/json"}}).pipe(Object(N.a)(function(e){return r.handleError(e,r.router)}))},e.prototype.put=function(e,t){var r=this;return void 0===t&&(t={}),this.http.put(""+A.a.api_url+e,JSON.stringify(t),{headers:{"Content-Type":"application/json"}}).pipe(Object(N.a)(function(e){return console.log("errrrrrr put ",e),r.handleError(e,r.router)}))},e.prototype.delete=function(e){var t=this;return this.http.delete(""+A.a.api_url+e,{headers:{"Content-Type":"application/json"}}).pipe(Object(N.a)(function(e){return console.log("errrrrrr",e),t.handleError(e,t.router)}))},e.prototype.handleError=function(e,t){var r=e.error;return console.log("handleError this = ",r),r.error&&"UNAUTHORIZED"===r.error.code&&(console.log("caiu no n\xe3o autorizado"),t.navigate(["/"])),function(e,t){return new c.a(function(t){return t.error(e)})}(r)},e.\u0275fac=function(t){return new(t||e)(h.Ib(P),h.Ib(U.a))},e.\u0275prov=h.zb({token:e,factory:e.\u0275fac}),e}()}}]);