webpackJsonp([0],{"07PK":function(e,t,n){"use strict";t.a={name:"hello",data:function(){return{msg:"Todo Management",todos:[{text:"todos in here",done:!1}],newTodo:""}},methods:{addTodo:function(e){var t=this.newTodo&&this.newTodo.trim();t&&(this.todos.push({text:t,done:!1,editing:!1}),this.newTodo="")},removeTodo:function(e){for(var t=this.todos.length-1;t>=0;t--)this.todos[t].done&&this.todos.splice(t,1)}}}},C30B:function(e,t){},GfN8:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={render:o,staticRenderFns:i};t.a=a},Jhm9:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",{staticClass:"header"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("form",[n("div",{staticClass:"btns"},[n("button",{on:{click:function(t){e.addTodo()}}},[e._v("ADD TASK")]),e._v(" "),n("button",{on:{click:function(t){e.removeTodo()}}},[e._v("DELETE FINISHED TASKS")])]),e._v(" "),n("div",{staticClass:"inputs"},[n("p",[e._v("input: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],attrs:{type:"text",placeholder:"enter todos"},domProps:{value:e.newTodo},on:{input:function(t){t.target.composing||(e.newTodo=t.target.value)}}})])])])]),e._v(" "),n("div",{staticClass:"task-list"},e._l(e.todos,function(t){return n("label",{staticClass:"task-list__item",class:{"task-list__item--checked":t.done}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editing,expression:"todo.editing"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.editing)?e._i(t.editing,null)>-1:t.editing},on:{change:function(n){var o=t.editing,i=n.target,a=!!i.checked;if(Array.isArray(o)){var s=e._i(o,null);i.checked?s<0&&(t.editing=o.concat([null])):s>-1&&(t.editing=o.slice(0,s).concat(o.slice(s+1)))}else e.$set(t,"editing",a)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"todo.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.done)?e._i(t.done,null)>-1:t.done},on:{change:function(n){var o=t.done,i=n.target,a=!!i.checked;if(Array.isArray(o)){var s=e._i(o,null);i.checked?s<0&&(t.done=o.concat([null])):s>-1&&(t.done=o.slice(0,s).concat(o.slice(s+1)))}else e.$set(t,"done",a)}}}),e._v(" "),t.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"todo.text"}],domProps:{value:t.text},on:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;t.editing=!t.editing},input:function(n){n.target.composing||e.$set(t,"text",n.target.value)}}}):n("span",[e._v(e._s(t.text))])])}))])},i=[],a={render:o,staticRenderFns:i};t.a=a},KNiw:function(e,t){},M93x:function(e,t,n){"use strict";function o(e){n("C30B")}var i=n("xJD8"),a=n("GfN8"),s=n("VU/8"),r=o,c=s(i.a,a.a,!1,r,null,null);t.a=c.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),i=n("M93x"),a=n("YaEn");o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},YaEn:function(e,t,n){"use strict";var o=n("7+uW"),i=n("/ocq"),a=n("gORT");o.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Hello",component:a.a}]})},gORT:function(e,t,n){"use strict";function o(e){n("KNiw"),n("xBN6")}var i=n("07PK"),a=n("Jhm9"),s=n("VU/8"),r=o,c=s(i.a,a.a,!1,r,"data-v-5f47b3f5",null);t.a=c.exports},xBN6:function(e,t){},xJD8:function(e,t,n){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.4f17670d99a570fb805d.js.map