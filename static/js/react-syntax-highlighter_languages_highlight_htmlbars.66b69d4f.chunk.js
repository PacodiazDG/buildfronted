(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7959],{5082:e=>{function n(e){return e?"string"===typeof e?e:e.source:null}function a(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.map((e=>n(e))).join("")}function t(e){const t={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},s=/\[\]|\[[^\]]+\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,r=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return"("+a.map((e=>n(e))).join("|")+")"}(/""|"[^"]+"/,/''|'[^']+'/,s,i),l=a(a("(",/\.|\.\/|\//,")?"),r,function(e){return a("(",e,")*")}(a(/(\.|\/)/,r)));const o=a("(",s,"|",i,")(?==)"),c={begin:l,lexemes:/[\w.\/]+/},m=e.inherit(c,{keywords:{literal:["true","false","undefined","null"]}}),d={begin:/\(/,end:/\)/},g={className:"attr",begin:o,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,m,d]}}},u={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},g,m,d],returnEnd:!0},b=e.inherit(c,{className:"name",keywords:t,starts:e.inherit(u,{end:/\)/})});d.contains=[b];const h=e.inherit(c,{keywords:t,className:"name",starts:e.inherit(u,{end:/\}\}/})}),p=e.inherit(c,{keywords:t,className:"name"}),N=e.inherit(c,{className:"name",keywords:t,starts:e.inherit(u,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[h],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[p]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[p]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[N]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[N]}]}}e.exports=function(e){const n=t(e);return n.name="HTMLbars",e.getLanguage("handlebars")&&(n.disableAutodetect=!0),n}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_htmlbars.66b69d4f.chunk.js.map