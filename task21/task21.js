var  show = document.getElementById('show');
var search = document.getElementById('search');
var input  = document.getElementById('inputValue');
var hobby = document.getElementById('hobby');
var showhobby = document.getElementById('showhobby');
 
  //跨浏览器事件绑定
function addEventHandler(ele, event, hanlder) {
   if(ele.addEventListener){
   	   ele.addEventListener(event,hanlder,false);
   }else if(ele.attachEvent){
   	   ele.attachEvent("on"+event,hanlder);
   }else{
       ele["on" + event] = hanlder;
   }
}

//实现对列的类
function Queue(){
	var items = [];
	
	this.Renqueue = function(element){
		items.push(element);
	};

	this.Ldequeue = function(){
		items.shift();
       
	};	     

	this.size = function(){
		return items.length;
	};
	this.print = function(){
		return items;
	};
	
}
//可视化队列数据
function viewData(showArr,id){
	var text="";	
	for(var i=0;i<showArr.length;i++){	 	  
		text+="<div class= 'tag'>"+showArr[i]+"</div>";
	}
	id.innerHTML="";
	id.innerHTML=text;   
    input.value=""; 
	
}

var queue = new Queue();
var queue2 = new Queue();

addEventHandler(input,'keyup',showTag);
addEventHandler(show,'click',change);
addEventHandler(hobby,'click',showHobby);
addEventHandler(showhobby,'click',change);
//输入文本进行处理
function inputDeal(inputValue){
	 var inputArray = [];
    inputArray = inputValue.split(/[,，;；、\s\n]+/);   
    return inputArray;
}

//展示标签
 function showTag(event){
       var tagValue = input.value;      
     if (/[,，;；、\s\n]+/.test(tagValue) || event.keyCode == 13) {		
     	var data = inputDeal(tagValue.trim());
     	var  arr = queue.print();
     	if(arr.length){
     		 var quchong = arr.every(function(x){
                     return (x!=data[0])?true:false;
     		});
     		if(quchong){
     			 if(arr.length>9){                   
     			 	queue.Ldequeue();
     			 }else{
     			 	queue.Renqueue(data[0]);
			        viewData(queue.print(),show);
     			 }
     			 
     			
     		}
     		else{
     		 	input.value = '';
     		 	return;
     		 }
     		
     	}
			
     else{
     	queue.Renqueue(data[0]);
	    viewData(queue.print(),show);
     }
     	
     	}
}
	
//删除标签
function  change(event){
	var event = window.event||event;
	var target = event.target||event.srcElement;
	    target.parentNode.removeChild(target); 
		
	}
	
//显示爱好
function showHobby(){
	 var hobbyValue = document.getElementsByTagName('textarea')[0].value.trim();     

     var data = inputDeal(hobbyValue);
     var  arr = queue2.print();
     	for(var i=0;i<data.length;i++){
     		if(queue2.size()){
     		      var quchong = arr.every(function(x){
                     return (x!=data[i])?true:false;
     		    });
     		if(quchong){
     			 if(queue2.size()>=10){                   
     			 	queue2.Ldequeue();
     			 }
     			 	queue2.Renqueue(data[i]);
			        viewData(queue2.print(),showhobby);
     			
     			 
     			
     		} else{
     		 document.getElementsByTagName('textarea')[0].value = '';
     		 	return;
     		 }
     		
     	} else{
     	queue2.Renqueue(data[i]);
	    viewData(queue2.print(),showhobby);
     }
  }     	
     	
}

