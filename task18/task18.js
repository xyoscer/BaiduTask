//跨浏览器事件绑定
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else  {
        ele["on" + event] = hanlder;
    }
}
//实现对列的类,利用数组实现类操作
function Queue(){
	var items = [];
    //对列左近
	this.Lenqueue = function(element){
		items.unshift(element);
	};
    //对列右近
	this.Renqueue = function(element){
		items.push(element);
	};
    //对列左出
	this.Ldequeue = function(){
		return(items.shift());       
	};
	 //对列右出
	this.Rdequeue = function(){
		return(items.pop());
       
	};	
	this.size = function(){
		return items.length;
	};
	this.print = function(){
		return items;
	}
}
var queueDiv = document.getElementById('queue');

var parentBtn = document.getElementById('parentBtn');
 addEventHandler(parentBtn,'click',move);
 function move(event) {
    var e = event||window.event;
    var target = event.target||event.srcElement;
    
    switch(target.id) {
    	case 'leftRu':
    	      var inputValue = getInputValue();
    	       if(inputValue) {
	 	        queue.Lenqueue(inputValue);	 	       
	          }
    	  break;
    	case  'rightRu':
    	      var inputValue = getInputValue();
    	      if(inputValue) {
	 	         queue.Renqueue(inputValue);	

	          }
    	  break;
    	case  'leftChu':    	     
	 	        var itemValue = queue.Ldequeue(inputValue); 
	 	        alert("删除的元素是"+itemValue);        
	          
    	 break;
    	 case 'rightChu':    	   
	 	        var ritemValue = queue.Rdequeue(inputValue);
	 	        alert("删除的元素是"+ritemValue);	 	        
	         
    	 break;

     }
      viewData(queue.print());
 }
   
var queue = new Queue();

//获得input中的值
function getInputValue(){
	var input = document.getElementById('num');
	var inputValue = input.value.trim();
	if(inputValue.match(/^[0-9]+$/)) {
		   return inputValue;
		}
	else {
			alert("请输入整数！");
		}
}
//可视化队列数据
function viewData(showArr){
	var text = "";
     for(var i=0 ,len=showArr.length;i<len;i++){	    
		text += '<div class="queueItem"'
		     +'data-item="'
		     +i
		     +'">'
		     +showArr[i]
		     +'</div>';
	}
	queueDiv.innerHTML = "";
	queueDiv.innerHTML += text;   
	document.getElementById('num').value = "";
}

  addEventHandler(queueDiv,'click',delItem);


