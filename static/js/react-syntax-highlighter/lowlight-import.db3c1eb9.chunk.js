(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8727],{7460:(e,t,n)=>{"use strict";var r=n(1756),i=a(Error);function a(e){return t.displayName=e.displayName||e.name,t;function t(t){return t&&(t=r.apply(null,arguments)),new e(t)}}e.exports=i,i.eval=a(EvalError),i.range=a(RangeError),i.reference=a(ReferenceError),i.syntax=a(SyntaxError),i.type=a(TypeError),i.uri=a(URIError),i.create=a},1756:e=>{!function(){var t;function n(e){for(var t,n,r,i,a=1,s=[].slice.call(arguments),o=0,l=e.length,c="",u=!1,g=!1,h=function(){return s[a++]},d=function(){for(var n="";/\d/.test(e[o]);)n+=e[o++],t=e[o];return n.length>0?parseInt(n):null};o<l;++o)if(t=e[o],u)switch(u=!1,"."==t?(g=!1,t=e[++o]):"0"==t&&"."==e[o+1]?(g=!0,t=e[o+=2]):g=!0,i=d(),t){case"b":c+=parseInt(h(),10).toString(2);break;case"c":c+="string"===typeof(n=h())||n instanceof String?n:String.fromCharCode(parseInt(n,10));break;case"d":c+=parseInt(h(),10);break;case"f":r=String(parseFloat(h()).toFixed(i||6)),c+=g?r:r.replace(/^0/,"");break;case"j":c+=JSON.stringify(h());break;case"o":c+="0"+parseInt(h(),10).toString(8);break;case"s":c+=h();break;case"x":c+="0x"+parseInt(h(),10).toString(16);break;case"X":c+="0x"+parseInt(h(),10).toString(16).toUpperCase();break;default:c+=t}else"%"===t?u=!0:c+=t;return c}(t=e.exports=n).format=n,t.vsprintf=function(e,t){return n.apply(null,[e].concat(t))},"undefined"!==typeof console&&"function"===typeof console.log&&(t.printf=function(){console.log(n.apply(null,arguments))})}()},1966:e=>{function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var r=e[n];"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}var n=t,r=t;n.default=r;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e){const t=Object.create(null);for(const a in e)t[a]=e[a];for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const o=e=>!!e.kind;class l{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!o(e))return;let t=e.kind;e.sublanguage||(t="".concat(this.classPrefix).concat(t)),this.span(t)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+='<span class="'.concat(e,'">')}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"===typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!==typeof e&&e.children&&(e.children.every((e=>"string"===typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"===typeof e?e:e.source:null}const h=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;const d="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",p="\\b\\d+(\\.\\d+)?",m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",v={begin:"\\\\[\\s\\S]",relevance:0},x={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},E={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},y={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},w=function(e,t){const n=s({className:"comment",begin:e,end:t,contains:[]},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});return n.contains.push(y),n.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),n},N=w("//","$"),R=w("/\\*","\\*/"),k=w("#","$"),_={className:"number",begin:p,relevance:0},M={className:"number",begin:m,relevance:0},O={className:"number",begin:b,relevance:0},A={className:"number",begin:p+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},L={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]}]},I={className:"title",begin:d,relevance:0},S={className:"title",begin:f,relevance:0},j={begin:"\\.\\s*"+f,relevance:0};var T=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:d,UNDERSCORE_IDENT_RE:f,NUMBER_RE:p,C_NUMBER_RE:m,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=/^#![ ]*\//;return e.binary&&(e.begin=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((e=>g(e))).join("")}(t,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:v,APOS_STRING_MODE:x,QUOTE_STRING_MODE:E,PHRASAL_WORDS_MODE:y,COMMENT:w,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:k,NUMBER_MODE:_,C_NUMBER_MODE:M,BINARY_NUMBER_MODE:O,CSS_NUMBER_MODE:A,REGEXP_MODE:L,TITLE_MODE:I,UNDERSCORE_TITLE_MODE:S,METHOD_GUARD:j,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function B(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function P(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=B,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function C(e,t){Array.isArray(e.illegal)&&(e.illegal=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"("+t.map((e=>g(e))).join("|")+")"}(...e.illegal))}function D(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function H(e,t){void 0===e.relevance&&(e.relevance=1)}const U=["of","and","for","in","not","or","if","then","parent","list","value"],z="keyword";function K(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z;const r={};return"string"===typeof e?i(n,e.split(" ")):Array.isArray(e)?i(n,e):Object.keys(e).forEach((function(n){Object.assign(r,K(e[n],t,n))})),r;function i(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");r[n[0]]=[e,$(n[0],n[1])]}))}}function $(e,t){return t?Number(t):function(e){return U.includes(e.toLowerCase())}(e)?0:1}function G(e,t){let{plugins:n}=t;function r(t,n){return new RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=r(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"|",n=0;return e.map((e=>{n+=1;const t=n;let r=g(e),i="";for(;r.length>0;){const e=h.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>"(".concat(e,")"))).join(t)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new i;return this.rules.slice(e).forEach((e=>{let[n,r]=e;return t.addRule(n,r)})),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(n,i){const o=n;if(n.isCompiled)return o;[D].forEach((e=>e(n,i))),e.compilerExtensions.forEach((e=>e(n,i))),n.__beforeBegin=null,[P,C,H].forEach((e=>e(n,i))),n.isCompiled=!0;let l=null;if("object"===typeof n.keywords&&(l=n.keywords.$pattern,delete n.keywords.$pattern),n.keywords&&(n.keywords=K(n.keywords,e.case_insensitive)),n.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||n.lexemes||/\w+/,o.keywordPatternRe=r(l,!0),i&&(n.begin||(n.begin=/\B|\b/),o.beginRe=r(n.begin),n.endSameAsBegin&&(n.end=n.begin),n.end||n.endsWithParent||(n.end=/\B|\b/),n.end&&(o.endRe=r(n.end)),o.terminatorEnd=g(n.end)||"",n.endsWithParent&&i.terminatorEnd&&(o.terminatorEnd+=(n.end?"|":"")+i.terminatorEnd)),n.illegal&&(o.illegalRe=r(n.illegal)),n.contains||(n.contains=[]),n.contains=[].concat(...n.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return s(e,{variants:null},t)})));if(e.cachedVariants)return e.cachedVariants;if(F(e))return s(e,{starts:e.starts?s(e.starts):null});if(Object.isFrozen(e))return s(e);return e}("self"===e?n:e)}))),n.contains.forEach((function(e){t(e,o)})),n.starts&&t(n.starts,i),o.matcher=function(e){const t=new a;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(o),o}(e)}function F(e){return!!e&&(e.endsWithParent||F(e.starts))}function V(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn('The language "'.concat(this.language,'" you specified could not be found.')),this.unknownLanguage=!0,a(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const W={"after:highlightElement":e=>{let{el:t,result:n,text:r}=e;const i=q(t);if(!i.length)return;const s=document.createElement("div");s.innerHTML=n.value,n.value=function(e,t,n){let r=0,i="";const s=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){function t(e){return" "+e.nodeName+'="'+a(e.value)+'"'}i+="<"+X(e)+[].map.call(e.attributes,t).join("")+">"}function c(e){i+="</"+X(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){let t=o();if(i+=a(n.substring(r,t[0].offset)),r=t[0].offset,t===e){s.reverse().forEach(c);do{u(t.splice(0,1)[0]),t=o()}while(t===e&&t.length&&t[0].offset===r);s.reverse().forEach(l)}else"start"===t[0].event?s.push(t[0].node):s.pop(),u(t.splice(0,1)[0])}return i+a(n.substr(r))}(i,q(s),r)}};function X(e){return e.nodeName.toLowerCase()}function q(e){const t=[];return function e(n,r){for(let i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:r,node:i}),r=e(i,r),X(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:i}));return r}(e,0),t}const J={},Z=e=>{console.error(e)},Y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console.log("WARN: ".concat(e),...n)},Q=(e,t)=>{J["".concat(e,"/").concat(t)]||(console.log("Deprecated as of ".concat(e,". ").concat(t)),J["".concat(e,"/").concat(t)]=!0)},ee=a,te=s,ne=Symbol("nomatch");var re=function(e){const t=Object.create(null),r=Object.create(null),a=[];let s=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function h(e){return g.noHighlightRe.test(e)}function d(e,t,n,r){let i="",a="";"object"===typeof t?(i=e,n=t.ignoreIllegals,a=t.language,r=void 0):(Q("10.7.0","highlight(lang, code, ...args) has been deprecated."),Q("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,i=t);const s={code:i,language:a};_("before:highlight",s);const o=s.result?s.result:f(s.language,s.code,n,r);return o.code=s.code,_("after:highlight",o),o}function f(e,n,r,o){function c(e,t){const n=y.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function u(){null!=k.subLanguage?function(){if(""===O)return;let e=null;if("string"===typeof k.subLanguage){if(!t[k.subLanguage])return void M.addText(O);e=f(k.subLanguage,O,!0,_[k.subLanguage]),_[k.subLanguage]=e.top}else e=p(O,k.subLanguage.length?k.subLanguage:null);k.relevance>0&&(A+=e.relevance),M.addSublanguage(e.emitter,e.language)}():function(){if(!k.keywords)return void M.addText(O);let e=0;k.keywordPatternRe.lastIndex=0;let t=k.keywordPatternRe.exec(O),n="";for(;t;){n+=O.substring(e,t.index);const r=c(k,t);if(r){const[e,i]=r;if(M.addText(n),n="",A+=i,e.startsWith("_"))n+=t[0];else{const n=y.classNameAliases[e]||e;M.addKeyword(t[0],n)}}else n+=t[0];e=k.keywordPatternRe.lastIndex,t=k.keywordPatternRe.exec(O)}n+=O.substr(e),M.addText(n)}(),O=""}function h(e){return e.className&&M.openNode(y.classNameAliases[e.className]||e.className),k=Object.create(e,{parent:{value:k}}),k}function d(e,t,n){let r=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e);e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return d(e.parent,t,n)}function m(e){return 0===k.matcher.regexIndex?(O+=e[0],1):(S=!0,0)}function b(e){const t=e[0],n=e.rule,r=new i(n),a=[n.__beforeBegin,n["on:begin"]];for(const i of a)if(i&&(i(e,r),r.isMatchIgnored))return m(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?O+=t:(n.excludeBegin&&(O+=t),u(),n.returnBegin||n.excludeBegin||(O=t)),h(n),n.returnBegin?0:t.length}function v(e){const t=e[0],r=n.substr(e.index),i=d(k,e,r);if(!i)return ne;const a=k;a.skip?O+=t:(a.returnEnd||a.excludeEnd||(O+=t),u(),a.excludeEnd&&(O=t));do{k.className&&M.closeNode(),k.skip||k.subLanguage||(A+=k.relevance),k=k.parent}while(k!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),h(i.starts)),a.returnEnd?0:t.length}let x={};function E(t,i){const a=i&&i[0];if(O+=t,null==a)return u(),0;if("begin"===x.type&&"end"===i.type&&x.index===i.index&&""===a){if(O+=n.slice(i.index,i.index+1),!s){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=x.rule,t}return 1}if(x=i,"begin"===i.type)return b(i);if("illegal"===i.type&&!r){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(k.className||"<unnamed>")+'"');throw e.mode=k,e}if("end"===i.type){const e=v(i);if(e!==ne)return e}if("illegal"===i.type&&""===a)return 1;if(I>1e5&&I>3*i.index){throw new Error("potential infinite loop, way more iterations than matches")}return O+=a,a.length}const y=N(e);if(!y)throw Z(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const w=G(y,{plugins:a});let R="",k=o||w;const _={},M=new g.__emitter(g);!function(){const e=[];for(let t=k;t!==y;t=t.parent)t.className&&e.unshift(t.className);e.forEach((e=>M.openNode(e)))}();let O="",A=0,L=0,I=0,S=!1;try{for(k.matcher.considerAll();;){I++,S?S=!1:k.matcher.considerAll(),k.matcher.lastIndex=L;const e=k.matcher.exec(n);if(!e)break;const t=E(n.substring(L,e.index),e);L=e.index+t}return E(n.substr(L)),M.closeAllNodes(),M.finalize(),R=M.toHTML(),{relevance:Math.floor(A),value:R,language:e,illegal:!1,emitter:M,top:k}}catch(j){if(j.message&&j.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:j.message,context:n.slice(L-100,L+100),mode:j.mode},sofar:R,relevance:0,value:ee(n),emitter:M};if(s)return{illegal:!1,relevance:0,value:ee(n),emitter:M,language:e,top:k,errorRaised:j};throw j}}function p(e,n){n=n||g.languages||Object.keys(t);const r=function(e){const t={relevance:0,emitter:new g.__emitter(g),value:ee(e),illegal:!1,top:c};return t.emitter.addText(e),t}(e),i=n.filter(N).filter(k).map((t=>f(t,e,!1)));i.unshift(r);const a=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0})),[s,o]=a,l=s;return l.second_best=o,l}const m={"before:highlightElement":e=>{let{el:t}=e;g.useBR&&(t.innerHTML=t.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":e=>{let{result:t}=e;g.useBR&&(t.value=t.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,v={"after:highlightElement":e=>{let{result:t}=e;g.tabReplace&&(t.value=t.value.replace(b,(e=>e.replace(/\t/g,g.tabReplace))))}};function x(e){let t=null;const n=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t);if(n){const t=N(n[1]);return t||(Y(l.replace("{}",n[1])),Y("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>h(e)||N(e)))}(e);if(h(n))return;_("before:highlightElement",{el:e,language:n}),t=e;const i=t.textContent,a=n?d(i,{language:n,ignoreIllegals:!0}):p(i);_("after:highlightElement",{el:e,result:a,text:i}),e.innerHTML=a.value,function(e,t,n){const i=t?r[t]:n;e.classList.add("hljs"),i&&e.classList.add(i)}(e,n,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const E=()=>{if(E.called)return;E.called=!0,Q("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(x)};let y=!1;function w(){if("loading"===document.readyState)return void(y=!0);document.querySelectorAll("pre code").forEach(x)}function N(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function R(e,t){let{languageName:n}=t;"string"===typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=n}))}function k(e){const t=N(e);return t&&!t.disableAutodetect}function _(e,t){const n=e;a.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!==typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){y&&w()}),!1),Object.assign(e,{highlight:d,highlightAuto:p,highlightAll:w,fixMarkup:function(e){return Q("10.2.0","fixMarkup will be removed entirely in v11.0"),Q("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),t=e,g.tabReplace||g.useBR?t.replace(o,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):t;var t},highlightElement:x,highlightBlock:function(e){return Q("10.7.0","highlightBlock will be removed entirely in v12.0"),Q("10.7.0","Please use highlightElement now."),x(e)},configure:function(e){e.useBR&&(Q("10.3.0","'useBR' will be removed entirely in v11.0"),Q("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=te(g,e)},initHighlighting:E,initHighlightingOnLoad:function(){Q("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),y=!0},registerLanguage:function(n,r){let i=null;try{i=r(e)}catch(a){if(Z("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw a;Z(a),i=c}i.name||(i.name=n),t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&R(i.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(r))r[t]===e&&delete r[t]},listLanguages:function(){return Object.keys(t)},getLanguage:N,registerAliases:R,requireLanguage:function(e){Q("10.4.0","requireLanguage will be removed entirely in v11."),Q("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=N(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:k,inherit:te,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),a.push(e)},vuePlugin:V(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.7.3";for(const i in T)"object"===typeof T[i]&&n(T[i]);return Object.assign(e,T),e.addPlugin(m),e.addPlugin(W),e.addPlugin(v),e}({});e.exports=re},6107:(e,t,n)=>{"use strict";var r=n(1966),i=n(7460);t.highlight=s,t.highlightAuto=function(e,t){var n,o,l,c,u=t||{},g=u.subset||r.listLanguages(),h=u.prefix,d=g.length,f=-1;null!==h&&void 0!==h||(h=a);if("string"!==typeof e)throw i("Expected `string` for value, got `%s`",e);o={relevance:0,language:null,value:[]},n={relevance:0,language:null,value:[]};for(;++f<d;)c=g[f],r.getLanguage(c)&&((l=s(c,e,t)).language=c,l.relevance>o.relevance&&(o=l),l.relevance>n.relevance&&(o=n,n=l));o.language&&(n.secondBest=o);return n},t.registerLanguage=function(e,t){r.registerLanguage(e,t)},t.listLanguages=function(){return r.listLanguages()},t.registerAlias=function(e,t){var n,i=e;t&&((i={})[e]=t);for(n in i)r.registerAliases(i[n],{languageName:n})},o.prototype.addText=function(e){var t,n,r=this.stack;if(""===e)return;t=r[r.length-1],(n=t.children[t.children.length-1])&&"text"===n.type?n.value+=e:t.children.push({type:"text",value:e})},o.prototype.addKeyword=function(e,t){this.openNode(t),this.addText(e),this.closeNode()},o.prototype.addSublanguage=function(e,t){var n=this.stack,r=n[n.length-1],i=e.rootNode.children,a=t?{type:"element",tagName:"span",properties:{className:[t]},children:i}:i;r.children=r.children.concat(a)},o.prototype.openNode=function(e){var t=this.stack,n=this.options.classPrefix+e,r=t[t.length-1],i={type:"element",tagName:"span",properties:{className:[n]},children:[]};r.children.push(i),t.push(i)},o.prototype.closeNode=function(){this.stack.pop()},o.prototype.closeAllNodes=l,o.prototype.finalize=l,o.prototype.toHTML=function(){return""};var a="hljs-";function s(e,t,n){var s,l=r.configure({}),c=(n||{}).prefix;if("string"!==typeof e)throw i("Expected `string` for name, got `%s`",e);if(!r.getLanguage(e))throw i("Unknown language: `%s` is not registered",e);if("string"!==typeof t)throw i("Expected `string` for value, got `%s`",t);if(null!==c&&void 0!==c||(c=a),r.configure({__emitter:o,classPrefix:c}),s=r.highlight(t,{language:e,ignoreIllegals:!0}),r.configure(l||{}),s.errorRaised)throw s.errorRaised;return{relevance:s.relevance,language:s.language,value:s.emitter.rootNode.children}}function o(e){this.options=e,this.rootNode={children:[]},this.stack=[this.rootNode]}function l(){}}}]);
//# sourceMappingURL=lowlight-import.db3c1eb9.chunk.js.map