(this.webpackJsonpcars=this.webpackJsonpcars||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(15),a(2)),l=a(9),s=a(3),u=a(4),h=a(1),m=a(6),b=a(5),f=(a(16),a(17),function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={ovnerName:n.props.ovnerName||"default",carLable:n.props.carLable||"stock",carEngine:n.props.carEngine||!1,carDriveMotion:n.props.carDriveMotion||!1,carWheels:n.props.carWheels||!1},n.carPusk=n.carPusk.bind(Object(h.a)(n)),n.carEngineOff=n.carEngineOff.bind(Object(h.a)(n)),n.carDriveEffect=n.carDriveEffect.bind(Object(h.a)(n)),n.carStop=n.carStop.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"carPusk",value:function(e){e.preventDefault(),this.setState((function(e){return{carEngine:!0}}))}},{key:"carEngineOff",value:function(e){e.preventDefault(),this.setState((function(e){return{carEngine:!1,carDriveMotion:!1,carWheels:!1}}))}},{key:"carDriveEffect",value:function(e){e.preventDefault(),!0===this.state.carEngine&&this.setState((function(e){return{carDriveMotion:!0,carWheels:!0}}))}},{key:"carStop",value:function(e){e.preventDefault(),this.setState((function(e){return{carDriveMotion:!1,carWheels:!1}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"main_claasOfCar"},r.a.createElement("div",{className:"car_text_status"},this.state.ovnerName,"                            "),r.a.createElement("div",{className:"car_text_status"},this.state.carLable,"                             "),r.a.createElement("div",{className:"car_text_status"},this.state.carEngine?"\u0417\u0430\u0432\u0435\u0434\u0435\u043d":"\u0417\u0430\u0433\u043b\u0443\u0448\u0435\u043d","     "),r.a.createElement("div",{className:"car_text_status"},this.state.carDriveMotion?"\u0415\u0434\u0435\u0442":"\u0421\u0442\u043e\u0438\u0442","      "),r.a.createElement("div",{className:"car_text_status"},this.state.carWheels?"\u041a\u0440\u0443\u0442\u044f\u0442\u0441\u044f":"\u041d\u0435 \u043a\u0440\u0443\u0442\u044f\u0442\u0441\u044f"),r.a.createElement("button",{onClick:this.carPusk,className:"button_car"},"\u0417\u0430\u0432\u0435\u0441\u0442\u0438                    "),r.a.createElement("button",{onClick:this.carEngineOff,className:"button_car"},"\u0417\u0430\u0433\u043b\u0443\u0448\u0438\u0442\u044c             "),r.a.createElement("button",{onClick:this.carDriveEffect,className:"button_car"},"\u041f\u043e\u0435\u0445\u0430\u0442\u044c             "),r.a.createElement("button",{onClick:this.carStop,className:"button_car"},"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u044f               "),r.a.createElement("button",{onClick:this.props.onClick,className:"button_car"},"CRASH IT             "))}}]),a}(r.a.Component)),v=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleDeliteCar=function(e){var t=n.state.cars;t=t.filter((function(t){return t.id!==e})),n.setState({cars:t})},n.state={cars:[{id:"f".concat((~~(1e8*Math.random())).toString(16)),ovnerName:"sosi",carLable:"mazda",carEngine:!0,carDriveMotion:!0,carWheels:!0},{id:"f".concat((~~(1e8*Math.random())).toString(16)),ovnerName:"da",carLable:"lada",carEngine:!0,carDriveMotion:!0,carWheels:!0},{id:"f".concat((~~(1e8*Math.random())).toString(16)),ovnerName:"net",carLable:"honda",carEngine:!1,carDriveMotion:!1,carWheels:!1}],formState:{id:"",ovnerName:"",carLable:"Stock",lableOptions:["","Mazda","Vesta","Shoha"],accepteCheck:!0}},n.handleChangeName=n.handleChangeName.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleChangeCarLable=n.handleChangeCarLable.bind(Object(h.a)(n)),n.handleCheckboxChange=n.handleCheckboxChange.bind(Object(h.a)(n)),n.handleDeliteCar=n.handleDeliteCar.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this,a={id:"f".concat((~~(1e8*Math.random())).toString(16)),ovnerName:this.state.formState.ovnerName,carLable:this.state.formState.carLable,carEngine:!1,carDriveMotion:!1,carWheels:!1};e.preventDefault(),this.setState((function(e){return{cars:[].concat(Object(l.a)(t.state.cars),[a])}})),console.log(this.state)}},{key:"handleChangeName",value:function(e){e.preventDefault();var t=e.target.value;this.setState((function(e){return{formState:Object(o.a)(Object(o.a)({},e.formState),{},{ovnerName:t})}}))}},{key:"handleChangeCarLable",value:function(e){e.preventDefault();var t=e.target.value;this.setState((function(e){return{formState:Object(o.a)(Object(o.a)({},e.formState),{},{carLable:t})}}))}},{key:"handleCheckboxChange",value:function(e){var t=this;this.setState((function(e){return{formState:Object(o.a)(Object(o.a)({},e.formState),{},{accepteCheck:!t.state.formState.accepteCheck})}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0438\u0440!"),r.a.createElement("div",null,this.state.cars.map((function(t,a){return r.a.createElement(f,{key:t.id,onClick:function(){return e.handleDeliteCar(t.id)},ovnerName:t.ovnerName,carLable:t.carLable,carEngine:t.carEngine,carDriveMotion:t.carDriveMotion,carWheels:t.carWheels})})),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"car_form"},r.a.createElement("label",null,"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430:",r.a.createElement("input",{type:"text",name:"ovnerName",value:this.state.formState.ovnerName,onChange:this.handleChangeName}),r.a.createElement("br",null),"\u041c\u0430\u0440\u043a\u0430 \u043c\u0430\u0448\u0438\u043d\u044b:",r.a.createElement("select",{onChange:this.handleChangeCarLable,placeholder:"pick em",value:this.state.formState.carLable},this.state.formState.lableOptions.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("br",null),r.a.createElement("input",{type:"checkbox",onChange:this.handleCheckboxChange}),r.a.createElement("span",null,"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 ",r.a.createElement("a",{href:""},"\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"))),r.a.createElement("input",{type:"submit",value:"Submit",id:"submit",disabled:this.state.formState.accepteCheck})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.4def9c73.chunk.js.map