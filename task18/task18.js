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
var items = [];//存放队列元素中的数组
var queue = {	 

	//对列左近
	Lenqueue: function(ele) {
         items.unshift(ele);
	},
	//对列右近
	Renqueue: function(ele) {
		items.push(ele);
	},
	Ldequeue: function(){
		return(items.shift());       
	},
	Rdequeue: function(){
		return(items.pop());       
	},	
   
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
      viewData(items);
 }
   


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
		/*text += '<div class="queueItem"'
		     +'data-item="'
		     +i
		     +'">'
		     +showArr[i]
		     +'</div>';*/
		    //尝试使用ES6的模板字符串来添加，表示很方便
		  text += `<div class="queueItem" data-item=${i}>${showArr[i]}</div>`
	}
	queueDiv.innerHTML = "";
	queueDiv.innerHTML += text;   
	document.getElementById('num').value = "";
	var queueItems = document.getElementsByClassName('queueItem');
	//为每一个新增的元素添加点击删除元素，使用splice(),删除完元素，在进行重新显示数组
    [].forEach.call(queueItems,function(v){
   	   addEventHandler(v, "click", function() {
   	   	  items.splice(v.dataset.item, 1);
   	   	  viewData(items);
   	   });
   	  
   })

}

  

