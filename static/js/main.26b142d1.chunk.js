(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),d=(n(18),n(9)),c=n(10),s=n(2),l=n(12),m=n(11),p=(n(19),n(4)),u=n(3),h=n(25);h.setOptions({breaks:!0});var v=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={input:"",editorExpanded:!1,previewExpanded:!1},a.copyText=a.copyText.bind(Object(s.a)(a)),a.download=a.download.bind(Object(s.a)(a)),a.expandEditor=a.expandEditor.bind(Object(s.a)(a)),a.expandPreview=a.expandPreview.bind(Object(s.a)(a)),a}return Object(c.a)(n,[{key:"expandEditor",value:function(){this.state.editorExpanded?(document.getElementById("editor-container").classList.remove("expanded"),document.getElementById("preview-container").classList.remove("preview-collapsed"),this.setState((function(e){return Object.assign({},e,{editorExpanded:!1})}))):(document.getElementById("editor-container").classList.add("expanded"),document.getElementById("preview-container").classList.add("preview-collapsed"),this.setState((function(e){return Object.assign({},e,{editorExpanded:!0})})))}},{key:"expandPreview",value:function(){this.state.previewExpanded?(document.getElementById("preview-container").classList.remove("expanded"),document.getElementById("editor-container").classList.remove("editor-collapsed"),this.setState((function(e){return Object.assign({},e,{previewExpanded:!1})}))):(document.getElementById("preview-container").classList.add("expanded"),document.getElementById("editor-container").classList.add("editor-collapsed"),this.setState((function(e){return Object.assign({},e,{previewExpanded:!0})})))}},{key:"download",value:function(){var e=this.state.input;e=e.replace(/\n/g,"\r\n");var t=new Blob([e],{type:"text/plain"}),n=document.createElement("a");n.download=this.props.fileName,n.href=window.URL.createObjectURL(t),n.target="_blank",n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}},{key:"copyText",value:function(){document.querySelector("#editor").select(),document.execCommand("copy"),alert("Markdown copy to clipboard")}},{key:"handleChange",value:function(e){var t=Object.assign({},this.state,{input:e.target.value});this.setState(t)}},{key:"componentDidMount",value:function(){var e=this;this.setState((function(t){return Object.assign({},t,{input:e.props.text})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{id:"editor-container"},o.a.createElement("div",{className:"header"},o.a.createElement("p",null,"Editor"),o.a.createElement("button",{onClick:this.download},o.a.createElement(p.a,{className:"icon",icon:u.d})),o.a.createElement("button",{onClick:this.copyText},o.a.createElement(p.a,{className:"icon",icon:u.b})),o.a.createElement("button",{onClick:this.expandEditor},o.a.createElement(p.a,{className:"icon expand",icon:this.state.editorExpanded?u.a:u.c}))),o.a.createElement("textarea",{id:"editor",className:"editor",value:this.state.input,onChange:this.handleChange.bind(this)})),o.a.createElement("div",{id:"preview-container"},o.a.createElement("div",{className:"header header-preview"},o.a.createElement("p",null,"Preview"),o.a.createElement("button",{onClick:this.expandPreview},o.a.createElement(p.a,{className:"icon expand",icon:this.state.previewExpanded?u.a:u.c}))),o.a.createElement("div",{id:"preview",className:"preview",dangerouslySetInnerHTML:{__html:h(this.state.input)}})))}}]),n}(o.a.Component);v.defaultProps={fileName:"markdown.txt"};var w=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",{className:"main-container"},o.a.createElement("div",{className:"previewer-container"},o.a.createElement(w,{text:"# Markdown Previewer\n![very good|512x397,20%](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Font_Awesome_5_brands_markdown.svg/200px-Font_Awesome_5_brands_markdown.svg.png)\nYou can use this tool to preview the markdown for your GitHub readme files.\n\n* Copy:\n\nCopy your markdown text directly to the clipboard so you can paste it directly on your readme file.\n\n* Download:\n\nDownload your markdown and then upload it to your repository.\n\n## Put some code in your files\n\n**Single line code** \n\n`<p>Like this</p>`\n\n**Full blocks**\n\n```\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n\nYou can use all the features of markdown format\nCheck [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) all your options.\n\n> F\xe9lix :)\n\n",fileName:"README.md"})),o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"Created by F\xe9lix Men\xe9ndez using React"),o.a.createElement("p",null,"Powered by ",o.a.createElement("a",{href:"https://marked.js.org/",target:"_blank",rel:"noopener noreferrer"},"Marked.js"))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.26b142d1.chunk.js.map