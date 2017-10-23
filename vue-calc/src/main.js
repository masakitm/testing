import Vue from 'vue/dist/vue.js';

var app = new Vue({
	el:"#app",
	data:{
		buttons:["1","2","3","4","5","6","7","8","9","0",".","+","-","*","/"],
		formula:"",
		pushedBtn:""
	},
	methods:{
		getBtn:function(value){
			this.pushedBtn = value;
			this.formula = this.formula + value;
		},
		clearFormula:function(){
			this.formula = "";
		},
		back:function(){
			this.formula = this.formula.slice( 0, -1 );
		},
		runCalc:function(){
			this.formula = eval(this.formula);
		}
	}
});
