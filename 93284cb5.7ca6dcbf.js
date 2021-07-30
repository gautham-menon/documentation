(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(271)),o={title:"Create and access bot variables in UI",sidebar_label:"Variables"},l={unversionedId:"platform_concepts/studio/bot-variables",id:"platform_concepts/studio/bot-variables",isDocsHomePage:!1,title:"Create and access bot variables in UI",description:"Three types of variables can be used in our flow:",source:"@site/docs/platform_concepts/studio/bot-variables.md",slug:"/platform_concepts/studio/bot-variables",permalink:"/docs/platform_concepts/studio/bot-variables",version:"current",sidebar_label:"Variables",sidebar:"platform_concepts",previous:{title:"Understand different settings and options in Tools",permalink:"/docs/platform_concepts/studio/tools"},next:{title:"Cloud Function",permalink:"/docs/platform_concepts/studio/cloud-function"}},c=[{value:"Bot variables",id:"bot-variables",children:[{value:"How to create a bot variable",id:"how-to-create-a-bot-variable",children:[]},{value:"Storing in a variable",id:"storing-in-a-variable",children:[]},{value:"How to access a bot variable",id:"how-to-access-a-bot-variable",children:[]},{value:"Advanced example - accessing variable fields and index in JSON object, array type stored in a variable",id:"advanced-example---accessing-variable-fields-and-index-in-json-object-array-type-stored-in-a-variable",children:[]}]},{value:"System variables",id:"system-variables",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Three types of variables can be used in our flow: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Bot variables (customisable)"),Object(i.b)("li",{parentName:"ol"},"System variables (exposed on platform)"),Object(i.b)("li",{parentName:"ol"},"Profile variables (Partially customisable)")),Object(i.b)("h2",{id:"bot-variables"},"Bot variables"),Object(i.b)("h3",{id:"how-to-create-a-bot-variable"},"How to create a bot variable"),Object(i.b)("p",null,"You can create bot variables using below option from UI. Variables are nothing but a way to store data that can vary/is not fixed.\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/rQFoICf.gif",alt:null}))),Object(i.b)("h3",{id:"storing-in-a-variable"},"Storing in a variable"),Object(i.b)("p",null,"For storing something in a variable, you get an option in each prompt and in action nodes where needed to store.\nAdditionally, you can also use variables action node for this purpose."),Object(i.b)("h3",{id:"how-to-access-a-bot-variable"},"How to access a bot variable"),Object(i.b)("p",null,"You can access a bor variable inside any node using this notation ",Object(i.b)("inlineCode",{parentName:"p"},"{{variables.variable_name}}")," or clicking on variables icon.\nSo for the variable you just created above, you can access using {{variables.category}}"),Object(i.b)("h3",{id:"advanced-example---accessing-variable-fields-and-index-in-json-object-array-type-stored-in-a-variable"},"Advanced example - accessing variable fields and index in JSON object, array type stored in a variable"),Object(i.b)("p",null,"Above was very simple, but often, in this example in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.yellowmessenger.com/docs/documentation/concepts/response-types-action-logic#api"}),"API action node"),", the response you store is not a simple string or value."),Object(i.b)("p",null,"Consider following response from a weather API"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "coord": {\n    "lon": 77.2167,\n    "lat": 28.6667\n  },\n  "weather": [\n    {\n      "id": 761,\n      "main": "Dust",\n      "description": "dust",\n      "icon": "50d"\n    }\n  ],\n  "base": "stations",\n  "main": {\n    "temp": 32.54,\n    "feels_like": 30.55,\n    "temp_min": 32,\n    "temp_max": 33,\n    "pressure": 1002,\n    "humidity": 21\n  },\n  "visibility": 3500,\n  "wind": {\n    "speed": 3.09,\n    "deg": 260,\n    "gust": 8.23\n  },\n  "clouds": {\n    "all": 0\n  },\n  "dt": 1617278187,\n  "sys": {\n    "type": 1,\n    "id": 9161,\n    "country": "IN",\n    "sunrise": 1617237667,\n    "sunset": 1617282517\n  },\n  "timezone": 19800,\n  "id": 1273294,\n  "name": "Delhi",\n  "cod": 200\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"To access any fields of this you can simply do {{variables.variable_name.field_name}} and this can go upto fields of fields."))),Object(i.b)("p",null,"For example: to access temp in above, {{variables.API_var.main.temp}} can be used. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"You can also access array values using keys."),"\nTo access weather description in above, you can see it's inside an array ","[ ]"," and is the first ","[0th index]"," value of array.\n{{variables.API_var.weather.0.description}} will be used. ")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"system-variables"},"System variables"),Object(i.b)("p",null,"Following system variables have been exposed on the platform for quick use: -"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"{{{var_name}}}")," notation is used to access system variables. "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{{{source}}}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns channel source like yellowmessenger , whatsapp")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{{{sender}}}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns sender ID")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{{{pageUrl}}}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns current page URL")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{{{sessionMessageLogUrl}}}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns current chat's transcript URL")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{{{profile}}}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns business profile object , to access individual fields , use like {{{profile.name}}}")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{{{date}}}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns date object with ",Object(i.b)("strong",{parentName:"td"},"current")," date and time in detected timezone. Following can be detected - {{{date.day}}}, {{{date.month}}}, {{{date.year}}} , {{{date.date}}} , {{{date.timestamp}}}, {{{date.hour}}}, {{{date.minute}}}.")))),Object(i.b)("hr",null))}b.isMDXComponent=!0},271:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);