//兼容浏览器的处理程序
var EventUtil = {
	addHandler:function(element,type,handler) {
		if(element.addEventListener) {//支持DOM2级的事件处理方法
			element.addEventListener(type,handler,false);
		}
		else if(element.attachEvent) {//支持IE的事件处理方法
			element.attachEvent("on"+type,handler);
		}
		else {//支持DOM0级的事件处理方法
			element["on"+type] = handler;
		}
	},
	remmoveHandler:function(element,type,handler) {
       if(element.removeEventListener) {
       	  element.remmoveHandler(type,handler,false);
       }
       else if(element.detachEvent) {
       	 element.detachEvent("on"+type,handler);
       }
       else {
       	element["on" + type] = null;
       }
	},
	//获取事件兼容哪个浏览器对象
	getEvent:function(event) {
		return event||window.event;
	},
	//获取事件来自哪个元素
    getElement:function(event){
	return event.target||event.srcElement;
    },
    //阻止默认行为
   preventDefault:function(event){
    if(event.preventDefault){
    	event.preventDefault();
    }else{
    	event.returnValue=false;
    }
}, 

}