//跨浏览器事件绑定
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if(ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else {
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
	Size: function() {
		return items.length;
	}
   
};

var queueDiv = document.getElementById('queue');
var parentBtn = document.getElementById('parentBtn');
//使用事件代理给父元素上添加事件
 addEventHandler(parentBtn,'click',move);
//各个子元素响应事件
 function move(event) {
    var e = event||window.event;
    var target = event.target||event.srcElement;
    
    switch(target.id) {
    	case 'leftRu':
    	      var inputValue = getInputValue();
    	       if(inputValue) {
    	       	  if(queue.Size() < 15) {
    	       	  	queue.Lenqueue(inputValue);
    	       	  }
    	       	  else {
    	       	  	alert("对列中的元素个数超过15啦！");
    	       	  }
	 	           
	 	        	       
	          }
    	  break;
    	case  'rightRu':
    	      var inputValue = getInputValue();
    	      if(inputValue) {

	 	          if(queue.Size() < 15) {
    	       	  	queue.Renqueue(inputValue);
    	       	  }
    	       	  else {
    	       	  	alert("对列中的元素个数超过15啦！");
    	       	  }	

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
    	 case 'bubbleSort':
    	       Bubblesort();
    	  break;
    	  case 'quickSort':
    	       quickSort(items);
    	  break;
    	 case 'randomNum':
    	       randomNUM();
    	  break;

     }
      viewData(items,"#50e3c2");
 }

//获得input中的值
function getInputValue(){
	var input = document.getElementById('num');
	var inputValue = input.value.trim();
	if(inputValue.match(/^[1-9][0-9]$/)){
		   return inputValue;
		}
	else{
			alert("请输入10-100之间的整数！");
			
		}
}
//可视化队列数据
function viewData(showArr,color){
	var text = "";	
	for(var i=0;i<showArr.length;i++){	  
		
		 /* text += '<div title="'
		       +showArr[i]
		       +'"'
		       +'style = height:'
		       +showArr[i]*5
		       +'px;background:'
		       +color
		       +'>'
		       +'</div>';*/

		   text +=`<div title="${showArr[i]}" style="height:${showArr[i]*5}px;background:${color}"></div>`

	}
	queueDiv.innerHTML = "";
	queueDiv.innerHTML = text;   
	document.getElementById('num').value = ""; 
	
}


//随机生成数据
function randomNUM(){
   var data = [];
	for(i=0;i<10;i++){
			data[i] = Math.floor(Math.random()*20+10);
			queue.Renqueue(data[i]);

		}
		viewData(items);
}
	
/*
  冒泡排序任何相邻两个的项，如果第一个比第二个大，则交换他们。
  */
function Bubblesort(){
   var i = 0,j = 0;
   var temp;
   var data =  items;   
   var len = queue.Size(); 
   
   var timer = null;
   //用计数器实现一步步展示效果
	  timer = setInterval(run,500);
		function run() {			
			if (i < len) {
				if (j < len-1-i) {
					if (data[j] > data[j+1]) {
						temp = data[j];
						data[j] = data[j+1];
						data[j+1] = temp;						
						viewData(data,"#5cb85c");

					}
					j++;
				} else {//内层循环一次完，外层循环i++
					i++;
					j = 0;
				}
			} else {
				clearInterval(timer);
				return;
			}
			
		}	
		
	}


