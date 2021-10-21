(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(288)),s=["components"],r={title:"Prompts and Messages",sidebar_label:"Prompts and Message"},l={unversionedId:"platform_concepts/studio/steps/prompts-and-messages",id:"platform_concepts/studio/steps/prompts-and-messages",isDocsHomePage:!1,title:"Prompts and Messages",description:"In this section we will talk about Interactive nodes, viz,",source:"@site/docs/platform_concepts/studio/steps/prompts-and-messages.md",slug:"/platform_concepts/studio/steps/prompts-and-messages",permalink:"/docs/platform_concepts/studio/steps/prompts-and-messages",version:"current",sidebar_label:"Prompts and Message",sidebar:"platform_concepts",previous:{title:"Nodes",permalink:"/docs/platform_concepts/studio/steps/steps"},next:{title:"Operational/Logical Nodes - Action and Logic",permalink:"/docs/platform_concepts/studio/steps/action-nodes-and-logic"}},c=[{value:"Messages",id:"messages",children:[{value:"Text",id:"text",children:[]},{value:"Files, Images, Videos",id:"files-images-videos",children:[]}]},{value:"Prompts",id:"prompts",children:[{value:"Use case specific",id:"use-case-specific",children:[]},{value:"Location Prompt",id:"location-prompt",children:[]},{value:"Feedback Prompt",id:"feedback-prompt",children:[]},{value:"Date prompt",id:"date-prompt",children:[]},{value:"Whatsapp Reply Buttons",id:"whatsapp-reply-buttons",children:[]},{value:"WhatsApp List prompt",id:"whatsapp-list-prompt",children:[]},{value:"General - Question",id:"general---question",children:[]},{value:"Quick Replies",id:"quick-replies",children:[]},{value:"Carousal",id:"carousal",children:[]},{value:"Prompt settings",id:"prompt-settings",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,s);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section we will talk about Interactive nodes, viz, "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Messages")," are one-way communication nodes. Message nodes do not wait for any user input. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Prompts")," on the other hands are questions bot asks user. Prompts expected a response from users. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/N5367FZ.png",alt:null})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udccc ",Object(o.b)("strong",{parentName:"p"},"Note"),":  You can personalise prompts and messages based on language and channels\u2755 "),Object(o.b)("p",{parentName:"div"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/r9Z4P0C.gif",alt:null})))),Object(o.b)("h2",{id:"messages"},"Messages"),Object(o.b)("h3",{id:"text"},"Text"),Object(o.b)("p",null,"Text can be used when you wish to send a simple message to your user, without expecting any input from their end.\nFor example, an Acknowledgement message."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/QnQG7ck.png",alt:null})),Object(o.b)("h3",{id:"files-images-videos"},"Files, Images, Videos"),Object(o.b)("p",null,"Apart from Text, you can also send above three by simply attaching the respective file you need to send. "),Object(o.b)("h2",{id:"prompts"},"Prompts"),Object(o.b)("p",null,'Prompts are nodes that take some user input. All prompts have a "',Object(o.b)("strong",{parentName:"p"},"store response in"),'" option to store input user gives in a ',Object(o.b)("a",{parentName:"p",href:"./tools"},"bot variable.")),Object(o.b)("h3",{id:"use-case-specific"},"Use case specific"),Object(o.b)("h4",{id:"name-email--phone-"},"Name, Email , Phone :"),Object(o.b)("p",null,"Name, Email, Phone prompts are used for asking for respective details. They already have a Name/Email/Phone validator attached to them for validating user input and a 'validation failure message' shown when user input is not validated. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/oQ1IV5r.png",alt:null})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u2753 ",Object(o.b)("strong",{parentName:"p"},"What happens when user constantly keeps entering the wrong input?")," "),Object(o.b)("p",{parentName:"div"},"\ud83d\uddd2\ufe0f ",Object(o.b)("strong",{parentName:"p"},"Enable Limit for Retries")," in ",Object(o.b)("a",{parentName:"p",href:"../tools#prompt-validation-settings"},"Prompt-validation settings"),"\n"))),Object(o.b)("h3",{id:"location-prompt"},"Location Prompt"),Object(o.b)("p",null,"Location prompt can be used to ask for and validate location inputs."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/jwxiYsJ6GauO1627622859207.png",alt:null})),Object(o.b)("p",null,'Validation is passed only once we are able extract all the fields specified in "Required fields". This does not mean user needs to provide all these fields, we use whatever info the user has provided to extract the other fields.'),Object(o.b)("p",null,"It is then stored in the specified varialble with the folowwing format:\n{\nuserMessage: '',\ncoordinates: {\nlat: \"\",\nlng: \"\",\n},\nfullAddress: '',\ncity: '',\nstate: '',\ncountry: '',\npostalCode: '',\n}"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"All fields specified in required fields will definitely be present in the variable but fields that were not specified may also be present"),Object(o.b)("p",{parentName:"div"},'You can also send a "Share location" button to allow users to share their current location. You can customize the text in this button by clicking on it. '))),Object(o.b)("p",null,'The "share location" button will be sent only in Web/PWA channels.'),Object(o.b)("h3",{id:"feedback-prompt"},"Feedback Prompt"),Object(o.b)("p",null,"Feedback Prompt can be used to take user feedback. Like any other prompt you can attach it any journey in the flow. You can ask for bot feedback, to Question feedback etc. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/pv2tlzm.png",alt:null})),Object(o.b)("p",null,"On feedback prompt you can configure what your questions should be when you ask for feedback. Feedback prompt will ask for rating on a scale of 5, and additional comments prompt will take additional comments from user in a text field (not compulsory)"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Zu99Ssq.png",alt:null})),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),Object(o.b)("strong",{parentName:"h5"},"Feedback widget is only available on chat-widget 2.0")," \u26a0\ufe0f")),Object(o.b)("div",{parentName:"div",className:"admonition-content"})),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"}," \u2139\ufe0f All of the feedback data can be found in Growth section > Data Explorer. "),Object(o.b)("p",{parentName:"div"},"\u26a0\ufe0f ",Object(o.b)("strong",{parentName:"p"},"You do not need to store it seperately.")),Object(o.b)("p",{parentName:"div"},"Still, You can access this data if needed by using ",Object(o.b)("inlineCode",{parentName:"p"},"{{variables.var_name.rating}}")," and ",Object(o.b)("inlineCode",{parentName:"p"},"{{variables.var_name.comment}}")))),Object(o.b)("h3",{id:"date-prompt"},"Date prompt"),Object(o.b)("p",null,"You can use the date prompt to ask for and validate date inputs. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/EnNVBl4TeM1m1626264357943.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Widgets"),"\nYou can send a calendar widget along with your prompt message. There are 3 widget types you can choose from - single date picker, date range picker, and month picker."),Object(o.b)("p",null,"Widgets are optional. Chat will not be disabled when a widget is sent, users can choose to type in their response. If you want to disable chat for this step please do so in channel options."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Widget will be sent only if the channel is web/PWA."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Validation"),"\nIf the user input contains a date or a time, it will pass the validator. Else the specified validation fail message will be sent"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Time inputs will also pass validation "),Object(o.b)("p",{parentName:"div"},"Validation will pass as long as the user query contains a valid date, even if there are other words in it."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Storing date variables"),"\nPost validation, the user entered date will be stored in the specified variable as an object. The structure of the object is as follows:"),Object(o.b)("p",null,"For a single value"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "value": {\n        "timestamp": "2021-09-08T00:00:00.000Z",\n        "year": 2021,\n        "month": 8,\n        "date": 8,\n        "day": "Sunday",\n        "hour": 0,\n        "minute": 0\n    },\n    "range": {\n        "exists": false\n    }\n}\n')),Object(o.b)("p",null,"For a range"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "value": {\n                "timestamp": "2021-09-08T00:00:00.000Z",\n                "year": 2021,\n                "month": 8,\n                "date": 8,\n                "day": "Sunday",\n                "hour": 0,\n                "minute": 0\n            },\n    "range": {\n        "exists": true,\n        start:\n            {\n                "timestamp": "2021-09-08T00:00:00.000Z",\n                "year": 2021,\n                "month": 8,\n                "date": 8,\n                "day": "Sunday",\n                "hour": 0,\n                "minute": 0\n            },\n        end:\n            {\n                "timestamp": "2021-09-08T00:00:00.000Z",\n                "year": 2021,\n                "month": 8,\n                "date": 9,\n                "day": "Monday",\n                "hour": 0,\n                "minute": 0\n            }\n    }\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In the case of range, value key will be the same as start date"))),Object(o.b)("p",null,"Values can be accessed using moustache expressions. "),Object(o.b)("hr",null),Object(o.b)("h3",{id:"whatsapp-reply-buttons"},"Whatsapp Reply Buttons"),Object(o.b)("p",null,"Latest version of Whatsapp API allows for businesses to send reply buttons alongwith media(within 24 hours window). To use Whatsapp Reply Buttons, follow the steps mentioned below -"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In any node, drag the arrow and select Carousells under Prompt/Message Type.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/m87RvFIu6XgX1626345563047.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Click on Carousell in UI and in channel filters, select WhatsApp.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/uurhPH2Y6xze1626345610351.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Edit Body Message, Footer, add relevant files (image/video/pdf) and response buttons as shown below. ")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Each button name & text message should be unique.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/KOzvRiBN5xa11626345936353.png",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Limitations of Reply Button Node(in file size and character)"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"Maximum of 3 Buttons can be added.Multiple buttons cannot be selected in one go and are not supported in notifications."),Object(o.b)("li",{parentName:"ul"},"Character limit of Body is 1024."),Object(o.b)("li",{parentName:"ul"},"Character limit of Footer is 60."),Object(o.b)("li",{parentName:"ul"},"Character limit of Button Text and Response is 20."),Object(o.b)("li",{parentName:"ul"},"Maximum sizes : Image (5 MB), Video(16 MB) and Document(100 MB)"))),Object(o.b)("h3",{id:"whatsapp-list-prompt"},"WhatsApp List prompt"),Object(o.b)("p",null,"Latest version of Whatsapp API provides a better UI for businesses to send List items(within 24 hours window). To create Whatsapp List, follow the steps mentioned below -"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In any node, drag the arrow and select Whatsapp List under Prompt Nodes.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/hSulcVu7Aq2O1627961100292.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Edit Body Message, Footer, Section Title and Button Title/Name and list as shown below. ")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Combination of each button title & name should be unique.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Le4ABBmWj8SY1627961158582.png",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Limitations of Reply Button Node(in file size and character)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Maximum of 10 Buttons can be added. Multiple buttons cannot be selected in one go and are not supported in notifications."),Object(o.b)("li",{parentName:"ul"},"Character limit of Body is 1024."),Object(o.b)("li",{parentName:"ul"},"Character limit of Footer is 60."),Object(o.b)("li",{parentName:"ul"},"Character limit of Button Text and Response is 24."),Object(o.b)("li",{parentName:"ul"},"Section Title and List Headers are optional.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Widgets"),"\nYou can send a calendar widget along with your prompt message. There are 3 widget types you can choose from - single date picker, date range picker, and month picker."),Object(o.b)("p",null,"Widgets are optional. Chat will not be disabled when a widget is sent, users can choose to type in their response. If you want to disable chat for this step please do so in channel options."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Widget will be sent only if the channel is web/PWA."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Validation"),"\nIf the user input contains a date or a time, it will pass the validator. Else the specified validation fail message will be sent"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Time inputs will also pass validation "),Object(o.b)("p",{parentName:"div"},"Validation will pass as long as the user query contains a valid date, even if there are other words in it."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Storing date variables"),"\nPost validation, the user entered date will be stored in the specified variable as an object. The structure of the object is as follows:"),Object(o.b)("p",null,"For a single value"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "value": {\n        "timestamp": "2021-09-08T00:00:00.000Z",\n        "year": 2021,\n        "month": 8,\n        "date": 8,\n        "day": "Sunday",\n        "hour": 0,\n        "minute": 0\n    },\n    "range": {\n        "exists": false\n    }\n}\n')),Object(o.b)("p",null,"For a range"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "value": {\n                "timestamp": "2021-09-08T00:00:00.000Z",\n                "year": 2021,\n                "month": 8,\n                "date": 8,\n                "day": "Sunday",\n                "hour": 0,\n                "minute": 0\n            },\n    "range": {\n        "exists": true,\n        start:\n            {\n                "timestamp": "2021-09-08T00:00:00.000Z",\n                "year": 2021,\n                "month": 8,\n                "date": 8,\n                "day": "Sunday",\n                "hour": 0,\n                "minute": 0\n            },\n        end:\n            {\n                "timestamp": "2021-09-08T00:00:00.000Z",\n                "year": 2021,\n                "month": 8,\n                "date": 9,\n                "day": "Monday",\n                "hour": 0,\n                "minute": 0\n            }\n    }\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In the case of range, value key will be the same as start date"))),Object(o.b)("p",null,"Values can be accessed using moustache expressions. "),Object(o.b)("hr",null),Object(o.b)("h3",{id:"general---question"},"General - Question"),Object(o.b)("p",null,"Apart from these use case based questions, you can directly ask any custom question using ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Question"))," prompt and store response in variable if needed ahead."),Object(o.b)("h3",{id:"quick-replies"},"Quick Replies"),Object(o.b)("p",null,"Quick replies can be used to give end-user 'quick' options. ",Object(o.b)("strong",{parentName:"p"},"Users can  either select from options or type out option."),"  "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/TMsahjb.png",alt:null})),Object(o.b)("p",null,"You can drag and extend each quick reply to attach with further flow you want ahead of it.\nThere is also an option to configure ",Object(o.b)("em",{parentName:"p"},"fallback")," which will work when none of the quick replies are validated from user input (Nor any other intent detected)"),Object(o.b)("h4",{id:"quick-reply-settings"},"Quick reply settings"),Object(o.b)("p",null,"If you click on a quick reply button - you can find a few additional options (advanced settings) to configure. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Button value  : If configured, this is the actual value of this button - that will go to any Database insert or be stored in variable. "),Object(o.b)("li",{parentName:"ul"},"Text aliases : You can also configure different variations of quick reply word which has to be accepted for that button value/label."),Object(o.b)("li",{parentName:"ul"},"Link and Postback : You can also have a quick reply redirecting to a particular URL. "),Object(o.b)("li",{parentName:"ul"},"Text Color and Background color can also be configured. ")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2139\ufe0f ",Object(o.b)("a",{parentName:"p",href:"../tools#prompt-validation-settings"},"How Quick replies look on Whatsapp?"))),Object(o.b)("h4",{id:"dynamic-quick-replies"},"Dynamic Quick replies"),Object(o.b)("p",null,"In above way to add quick replies if you see, you had to add each button yourself. You knew the number and text of buttons beforehand to create quick replies.\nBut what about some options you want to generate from maybe an API response or Database query where you either don't know what will be the option or number of options can change from where you want to fetch it from. "),Object(o.b)("p",null,"In this case, you need to dynamically generate quick replies. "),Object(o.b)("p",null,"\ud83d\udca1 To do this, we have a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Fetch from"))," option in quick reply prompt.\nHere, instead of adding quick replies manually, you can select a variable containing a quick reply object.\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Format of quick reply object"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},' {\n    title: "My QR Title",\n    options: [\n            {title: "Project0", text: "Project0"},\n            {title: "Project1", text: "Project1"}\n            ]\n}\n')),Object(o.b)("p",null,"To dynamically generate quick replies, you can apply any logic in code (functions) around quick replies and store value of final object in intented variable. For example, you can apply for loop around options to dynamically add to them while parsing through some API response etc.\nYou will learn more about function nodes in next section. "),Object(o.b)("h3",{id:"carousal"},"Carousal"),Object(o.b)("p",null,"You can also add a Carousals to your bot. Carousal can be used in places like displaying a list of products."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Carousal response contains option to add image, title and description. "),Object(o.b)("li",{parentName:"ul"},"You can also add multiple buttons in carousal and control what these buttons do. ")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udccc Note: Carousals without buttons will act as ",Object(o.b)("inlineCode",{parentName:"p"},"Messages")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"Prompts"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/qAea1te.png",alt:null})),Object(o.b)("h4",{id:"dynamic-carousals"},"Dynamic Carousals"),Object(o.b)("p",null,"Similar to quick replies, Carousals can also be dynamically created using ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Fetch from"))," option. Carousal object is an array of each card (JSoN objects).\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Sample Carousal object"))," "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'[ \n                    {\n                        "title" : "Title1",\n                        "description" : "Description",\n                        "actions" : [ \n                            {\n                                "title" : "Button #1",\n                                "buttonDefault" : "text",\n                                "text" : "btn1"\n                            }, \n                            {\n                                "title" : "Btn2",\n                                "buttonDefault" : "text",\n                                "text" : "Btn2"\n                            }\n                        ],\n                        "image" : "https://cdn.yellowmessenger.com/P1EbYON6d3GK1623249355856.png",\n                        "video" : "",\n                        "text" : "Desc1"\n                    }, \n                    {\n                        "title" : "Title2",\n                        "description" : "Description",\n                        "actions" : [ \n                            {\n                                "title" : "Btn2.1",\n                                "buttonDefault" : "text",\n                                "text" : "btn2.1"\n                            }\n                        ],\n                        "image" : "",\n                        "video" : "",\n                        "text" : "Desc2"\n                    }\n                ]\n\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Actions")," above describe the card button, you can add multiple actions to a single card in carousal. "),Object(o.b)("p",null,"To add a URL type action, for example, format becomes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'    {\n        "title": "Explore more",\n        "buttonDefault": "url",\n        "url": "https://sampleurl.com",\n    }\n                    \n')),Object(o.b)("p",null,"Since we looked at objects, let's also look at one sample function to add carousals to understand this. You can call this function from function node we will learn about and store the returning value in a variable."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Sample code"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n    // Your logic goes here\n    let cars = data.variables.cars_h; //this bot variable contains an API response\n    let cars_cards = []; \n\n    for (let i = 0; i < cars.length; i++) {\n        \n            cars_cards.push({\n                "title": cars[i].model,\n\n                "actions": [\n                    {\n                        "title": "Explore more",\n                        "buttonDefault": "text",\n                        "text": cars[i].model,\n\n                    }\n                ],\n                "image": cars[i].main_img,\n                // "video" : "",\n                // "text" : "Desc1",\n\n            });\n\n    }\n\n    return resolve(cars_cards);\n});\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"prompt-settings"},"Prompt settings"),Object(o.b)("p",null,"There is also some additional options in prompt settings that you can use. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Zylyvin.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can choose ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"entity type/variable"))," to autoskip a prompt node if value of that entity or variable is available. (You will learn more about entities and variables later)"),Object(o.b)("li",{parentName:"ul"},"You can also mask this info from appearing in conversation logs by using ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"Mask sensitive info"))," button. ")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can also mask sensitive info channel wise :- "),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("img",{parentName:"li",src:"https://i.imgur.com/oJZhZvT.png",alt:null}))),Object(o.b)("ol",{parentName:"div",start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("img",{parentName:"li",src:"https://i.imgur.com/Sruf07q.png",alt:null}))))),Object(o.b)("hr",null))}p.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(u,r(r({ref:t},c),{},{components:n})):i.a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);