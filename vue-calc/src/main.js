import Vue from 'vue/dist/vue.js';

var app = new Vue({
	el:"#app",
	data:{
		buttons:[
			{
				value:"C",
				is:"func",
				callback:"clearFormula"
			},
			{
				value:"AC",
				is:"func",
				callback:"clearFormula"
			},
			{
				value:"",
				is:"func",
				callback:""
			},
			{
				value:"BACK",
				is:"func",
				callback:"back",
			},
			{
				value:"7",
				is:"num"
			},
			{
				value:"8",
				is:"num"
			},
			{
				value:"9",
				is:"num"
			},
			{
				value:"/",
				is:"math"
			},
			{
				value:"4",
				is:"num"
			},
			{
				value:"5",
				is:"num"
			},
			{
				value:"6",
				is:"num"
			},
			{
				value:"*",
				is:"math"
			},
			{
				value:"1",
				is:"num"
			},
			{
				value:"2",
				is:"num"
			},
			{
				value:"3",
				is:"num"
			},
			{
				value:"-",
				is:"math"
			},
			{
				value:"0",
				is:"num"
			},
			{
				value:"00",
				is:"num"
			},
			{
				value:".",
				is:"num"
			},
			{
				value:"+",
				is:"math"
			},
			{
				value:"=",
				is:"func",
				callback:"runCalc",
				class:"w100p"
			}
		],
		formula:"",
		beforePushed:"num"
	},
	methods:{
		getBtn:function(value,is,callback){
			if( is == "num" ){
				this.formula = this.formula + value;

			} else if( is == "math" ){
				if(this.beforePushed == "math"){
					this.formula = this.formula.slice( 0, -1 ) + value;
				} else{
					this.formula = this.formula + value;
				}

			} else if( is == "func" ){
				switch (callback){
					case "clearFormula":
						this.clearFormula();
						break;
					case "back":
						this.back();
						break;
					case "runCalc":
						this.runCalc();
						break;
				}
			}

			this.beforePushed = is;
		},
		clearFormula:function(){
			this.formula = "";
		},
		back:function(){
			this.formula = String(this.formula).slice( 0, -1 );
		},
		runCalc:function(){
			this.formula = eval(this.formula);
		}
	}
});
