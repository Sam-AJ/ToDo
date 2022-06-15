(()=>{"use strict";var e={d:(t,o)=>{for(var s in o)e.o(o,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:o[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{L:()=>r});class t{static fromJson({id:e,task:o,completed:s,created:l}){const d=new t(o);return d.id=e,d.completed=s,d.created=l,d}constructor(e){this.task=e,this.id=(new Date).getTime(),this.completed=!1,this.created=new Date}}const o=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),l=document.querySelector(".clear-completed"),d=document.querySelector(".filters"),c=document.querySelectorAll(".filtro"),a=document.querySelector(".todo-count"),n=e=>{const t=`\n        <li class="${e.completed?"completed":""}" data-id="${e.id}">\n            <div class="view">\n                <input class="toggle" type="checkbox" ${e.completed?"checked":""}>\n                <label>${e.task}</label>\n                <button class="destroy"></button>\n            </div>\n            <input class="edit" value="Create a TodoMVC template">\n        </li>`,s=document.createElement("div");return s.innerHTML=t,o.append(s.firstElementChild),s.firstElementChild},i=()=>{let e=r.todos.filter((e=>0==e.completed));return a.children[0].innerText=e.length};s.addEventListener("keyup",(e=>{if(13===e.keyCode&&s.value.length>0){console.log(s.value);const e=new t(s.value);r.newTodo(e),n(e),s.value="",i()}})),o.addEventListener("click",(e=>{const t=e.target.localName,s=e.target.parentElement.parentElement,l=s.getAttribute("data-id");t.includes("input")?(r.markAsCompleted(l),s.classList.toggle("completed"),i()):t.includes("button")&&(r.deleteTodo(l),o.removeChild(s),i())})),l.addEventListener("click",(()=>{r.deleteCompleted();for(let e=o.children.length-1;e>=0;e--){const t=o.children[e];t.classList.contains("completed")&&(o.removeChild(t),i())}})),d.addEventListener("click",(e=>{const t=e.target.text;if(t){c.forEach((e=>e.classList.remove("selected"))),e.target.classList.add("selected");for(const e of o.children){e.classList.remove("hidden");const o=e.classList.contains("completed");switch(t){case"Pendientes":o&&e.classList.add("hidden");break;case"Completados":o||e.classList.add("hidden")}}}}));const r=new class{constructor(){this.loadLocalStorage()}newTodo(e){this.todos.push(e),this.saveLocalStorage()}deleteTodo(e){this.todos=this.todos.filter((t=>t.id!=e)),this.saveLocalStorage()}markAsCompleted(e){for(const t of this.todos)if(t.id==e){t.completed=!t.completed,this.saveLocalStorage();break}}deleteCompleted(){this.todos=this.todos.filter((e=>!e.completed)),this.saveLocalStorage()}saveLocalStorage(){localStorage.setItem("toDo",JSON.stringify(this.todos))}loadLocalStorage(){this.todos=localStorage.getItem("toDo")?JSON.parse(localStorage.getItem("toDo")):[],this.todos=this.todos.map(t.fromJson)}};r.todos.forEach(n),i()})();