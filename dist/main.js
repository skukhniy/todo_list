(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"html, body {\n    margin: 0;\n    height: 100%;\n    width:100%;\n}\n#header {\n    height: 90px;\n    width: 100%;\n    background-color: green;\n    display: grid;\n    grid-template-columns: repeat(5,minmax(0,1fr));\n\n}\n\n#add{\n    grid-column-start: 5;\n    margin-top: auto;\n    margin-bottom: auto;\n    text-align: center;\n    border: 1px solid;\n    border-radius: 50%;\n    width:60px;\n    margin-left: auto;\n    margin-right: auto;\n}\n#add :hover{\n    cursor: pointer;\n}\n#add p{\n    margin: 0;\n    padding-bottom: 5px;\n    display: inline-block;\n    font-size: xxx-large;\n\n}\n\n#addProject{\n    display: inline-block;\n    border: 1px solid;\n    border-radius: 50%;\n    text-align: center;\n    width:28px;\n}\n#addProject p{\n    margin: 0;\n    font-size: x-large;\n    font-weight: 500;\n}\n\n#header h1{\n    text-align: center;\n    grid-column-start: 3;\n    font-family: 'Courier New', Courier, monospace;\n}\n#dark-mode {\n    text-align: right;\n    grid-column-start: 4;\n    font-size: xxx-large;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-right:10px;\n}\n#dark-mode p{\n    display: inline;\n}\n#dark-mode :hover{\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n#sidebar {\n    height:100%;\n    width:20%;\n    background-color: rgba(3, 141, 3, 0.521);\n    display: inline-block;\n    font-family: 'Courier New', Courier, monospace;\n    text-align: center;\n}\n#sidebar h2:hover{\n    background-color: rgba(3, 173, 3, 0.452);\n    cursor: pointer;\n}\n#sidebar h2:focus{\n    background-color: rgba(3, 173, 3, 0.452);\n}\n#projectsTab{\n    margin-bottom: 5px;\n}\n.dropdown {\n    position: relative;\n}\n.dropdown-content{\n    display: none;\n    cursor: pointer;\n    margin-left: auto;\n    margin-right:auto;\n    width:70%\n}\n.dropdown-content h4{\n    margin-top: 0px;\n    margin-bottom:15px;\n}\n\n.projectFolder:hover{\n    background-color: rgba(5, 202, 5, 0.315);\n}\n.show{display:block;}\n.tabColor{background-color: rgba(3, 173, 3, 0.452);}\n\n#addProject :hover{\n    cursor:pointer;\n}\n\n\n\n\n\n\n\n\n\n#taskDisplay{\n    height: 100%;\n    width: 80%;\n    float: right;\n    overflow-y: auto;\n}\n\n.task{\n    margin: 30px 40px 0px 40px;\n    border: solid;\n    padding:15px 10px 10px 10px;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 15px;\n    display: flex;\n}\n.task label {\n    display: block;\n    padding-top: 2px;\n}\n.task label input[type=checkbox] {\n    vertical-align: middle;\n    position: relative;\n    bottom: 1px;\n}\n.task label input[type=checkbox]:checked + span{\n    text-decoration: line-through;\n}\n.task span{\n\n}\n.taskRightAlign{\n    margin-left: auto;\n    align-self: center;\n    font-family: 'Courier New', Courier, monospace;\n}\n.taskRightAlign p{\n    margin-top: 0;\n    margin-bottom: 5px;\n    display: inline-block;\n}\n.taskRightAlign button{\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.task h2{\n    margin: 0px;\n\n}\n.taskDate{\n}\n\n\n\n\n\n\n.modal{\n    position: fixed;\n    top:50%;\n    left:50%;\n    transform: translate(-50%,-50%) scale(0);\n    transition:200ms ease-in-out;\n    border: 1px solid black;\n    border-radius:10px;\n    z-index:10;\n    background-color: white;\n    width:500px;\n    max-width:90%;\n    height:425px;\n}\n#overlay.active{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(128, 128, 128, 0.808);\n    opacity: .5;\n    z-index:9;\n}\n#modal3{\n    height:125px;\n    width:300px;\n}\n.form{\n    margin:0 auto;\n    text-align: left;\n}\nform{\n    padding: 10px;\n    margin: 0 auto;\n}\nul{\n    list-style: none;\n    padding: 0;\n    margin:0;\n}\nli{\n    margin-bottom: 5px;\n}\nlabel{\n    display: inline-block;\n    text-align: left;\n}\n.form input{\n    clear: both;\n    width: 80%;\n}\n#modal3 input{\n    width:60%;\n}\n#modal3 h3{\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.description{\n    width:100%\n}\n#date{\n    width: 35%;\n}\n.btnSubmit{\n    margin-top: 0px;\n    margin-bottom: 10px;\n    margin-left: 40%;\n}\n\n.modal.active{\n    transform: translate(-50%,-50%) scale(1);\n}\n.modal-header {\n    padding: 10px 15px;\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n    border-bottom: 1px solid black;\n}\n.modal-header .closebutton{\n    cursor:pointer;\n    border:none;\n    outline:none;\n    background:none;\n    font-size: 1.25rem;\n    font-weight: bold;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=o.base?l[0]+o.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var g=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var l=o(e,r),d=0;d<a.length;d++){var s=t(a[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),l=t.n(c),d=t(216),s=t.n(d),u=t(589),p=t.n(u),m=t(426),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=s(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var h=(()=>{const e=document.getElementById("dark-mode"),n=document.getElementById("add"),t=document.getElementById("homeTab"),o=document.getElementById("todayTab"),r=document.getElementById("weekTab"),a=document.getElementById("projectsTab"),i=document.getElementById("myDropdown"),c=document.getElementById("addProject"),l=document.querySelectorAll("[data-modal-target]"),d=document.querySelectorAll("[data-modal-close]"),s=document.getElementById("overlay");var u=document.getElementById("title"),p=document.getElementById("description"),m=document.getElementById("date"),g=document.getElementById("project");const h=document.getElementById("taskForm"),b=document.getElementById("btnSubmit");var f=document.getElementById("title2"),v=document.getElementById("description2"),y=document.getElementById("date2"),x=document.getElementById("project2");const k=document.getElementById("taskForm2"),E=document.getElementById("btnSubmit2");var w=document.getElementById("ProjectName");const j=document.getElementById("btnSubmit3");return document.getElementById("title"),{darkModeBtn:e,addBtn:n,homeTab:t,todayTab:o,weekTab:r,projectsTab:a,projectsDropdown:i,addProject:c,openModalButton:l,closeModalButtons:d,overlay:s,btnSubmit:b,taskDisplay:document.getElementById("taskDisplay"),deleteButton:document.querySelectorAll(".deleteButton"),title:u,description:p,date:m,project:g,taskForm:h,ProjName:w,btnSubmit3:j,title2:f,description2:v,date2:y,project2:x,taskForm2:k,btnSubmit2:E}})();function b(){return[document.querySelectorAll("[data-modal-target]"),document.querySelectorAll(".deleteButton"),document.querySelectorAll(".selectProject")]}let f=[{title:"test",description:"wee",dueDate:"2021-12-23",project:""},{title:"test2",description:"weeweeweewee",dueDate:"2022-01-23",project:""},{title:"test",description:"wee",dueDate:"2021-12-23",project:""},{title:"test",description:"wee",dueDate:"2021-12-23",project:""}],v=["Project 1","Project 2","Project 3"];function y(e){var n;if(0!==e.length){document.querySelectorAll(".task").forEach((e=>e.remove())),e.forEach(((e,n)=>{if(void 0===e)return;const t=document.createElement("label"),o=document.createElement("input");o.type="checkbox";const r=document.createElement("span");r.innerHTML=e.title,t.appendChild(o),t.appendChild(r);const a=document.createElement("div");a.classList.add("taskRightAlign"),a.innerHTML="<p class='taskDate'>"+e.dueDate+"</p>",a.innerHTML+="<button data-modal-target='#modal2' class= 'editButton'><i class='fa fa-pencil ' ></i></button>",a.innerHTML+="<button class= 'deleteButton'>X</button>";const i=document.createElement("div");i.classList.add("task"),i.id="index #"+n,i.appendChild(t),i.appendChild(a),h.taskDisplay.appendChild(i)}));n=b()[0],Array.from(n).forEach((e=>{e.removeEventListener("click",j),e.addEventListener("click",j)})),function(e){Array.from(e).forEach((e=>{e.removeEventListener("click",B),e.addEventListener("click",B)}))}(b()[1])}}function x(e){if(0===e.length)return console.log("project array is empty"),void console.log(e);!function(e){document.querySelectorAll(".projectFolder").forEach((e=>e.remove())),e.forEach(((e,n)=>{const t=document.createElement("div");t.classList.add("projectFolder"),t.innerHTML="<h4>"+e+"</h4>",h.projectsDropdown.appendChild(t)}))}(e),function(e){h.project.innerHTML="<option>Choose a Project:</option>",h.project2.innerHTML="<option>Choose a Project:</option>",e.forEach((e=>{h.project.innerHTML+="<option>"+e+"</option",h.project2.innerHTML+="<option>"+e+"</option"}))}(e)}console.log(v);let k=0;const E=[h.homeTab,h.todayTab,h.weekTab];function w(e){null!=e&&(e.classList.add("active"),h.overlay.classList.add("active"))}function j(e){const n=e.target.closest("button");if(null==n)return;console.log(n);const t=document.querySelector(n.dataset.modalTarget);console.log(t);const o=L(n);k=o,console.log(h.title2.value),h.title2.value=f[o].title,h.description2.value=f[o].description,h.date2.value=f[o].dueDate,h.project2.value=f[o].project,w(t)}function B(e){const n=L(e.target);f[n]=void 0,y(f)}function L(e){const n=e.parentNode.parentNode.getAttribute("id").match(/\d+/);return parseInt(n[0])}E.forEach((e=>{e.addEventListener("click",(()=>{document.querySelectorAll(".tabColor").forEach((e=>{e.classList.remove("tabColor")})),h.projectsDropdown.classList.remove("show"),e!=h.homeTab&&e.classList.toggle("tabColor")}))})),h.projectsTab.addEventListener("click",(()=>(h.projectsDropdown.classList.toggle("show"),E.forEach((e=>{e.classList.remove("tabColor")})),void h.projectsTab.classList.toggle("tabColor")))),h.closeModalButtons.forEach((e=>{e.addEventListener("click",(()=>{var n;null!=(n=e.closest(".modal"))&&(n.classList.remove("active"),h.overlay.classList.remove("active"))}))})),h.openModalButton.forEach((e=>{console.log(e),e.addEventListener("click",(()=>{const n=document.querySelector(e.dataset.modalTarget);console.log(n),w(n)}))})),h.btnSubmit.addEventListener("click",(()=>{var e,n,t,o,r=(e=h.title.value,n=h.description.value,t=h.date.value,o=h.project.value,{title:e,description:n,dueDate:t,project:o});f.push(r),h.taskForm.reset(),y(f)})),h.btnSubmit2.addEventListener("click",(()=>{f[k].title=h.title2.value,f[k].description=h.description2.value,f[k].dueDate=h.date2.value,f[k].project=h.project2.value,y(f)})),h.btnSubmit3.addEventListener("click",(()=>{v.push(h.ProjName.value),x(v)})),console.log("Hi"),console.log(f),y(f),x(v)})()})();