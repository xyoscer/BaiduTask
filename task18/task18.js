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
//实现对列的类
function Queue(){
	var items = [];

	this.Lenqueue = function(element){
		items.unshift(element);
	};

	this.Renqueue = function(element){
		items.push(element);
	};

	this.Ldequeue = function(){
		items.shift();
       
	};
	
	this.Rdequeue = function(){
		items.pop();
       
	};	
	this.size = function(){
		return items.length;
	};
	this.print = function(){
		return items;
	}
}

var leftRu = document.getElementById('leftRu');
var rightRu = document.getElementById('rightRu');
var queueDiv = document.getElementById('queue');
var leftChu = document.getElementById('leftChu');
var rightChu = document.getElementById('rightChu'); 

    addEventHandler(leftRu,'click', enqueueleftRu);
    addEventHandler(rightRu,'click', enqueuerightRu);
    addEventHandler(leftChu,'click', enqueueleftChu);  
    addEventHandler(rightChu,'click', enqueuerightChu);

var queue = new Queue();

//获得input中的值
function getInputValue(){
	var input = document.getElementById('num');
	var inputValue = input.value.trim();
	if(inputValue.match(/^[0-9]+$/)){
		   return inputValue;
		}
		else{
			alert("请输入整数！");
		}
}
//可视化队列数据
function viewData(showArr){
	var text="",color="";
     for(var i=0;i<showArr.length;i++){		
	   	color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
		text+="<div id='queueItem' style = 'background-color:"+color+"'>"+showArr[i]+"</div>";
	}
	queueDiv.innerHTML="";
	queueDiv.innerHTML+=text;   
	document.getElementById('num').value="";
}

//左入
function enqueueleftRu(){	
	var inputValue = getInputValue();	
		queue.Lenqueue(inputValue);
	var showArr = queue.print();
	    viewData(showArr);	

} 
//右入
function enqueuerightRu(){	
	
	var inputValue = getInputValue();
		queue.Renqueue(inputValue);
	var showArr = queue.print();
	    viewData(showArr);	
	  
	
} 
//左出
function enqueueleftChu(){	
	
	   queue.Ldequeue();
	var showArr = queue.print();	
	   viewData(showArr);	
	

} 
//右出
function enqueuerightChu(){	

	queue.Rdequeue();
	var showArr = queue.print();
	viewData(showArr);		
	
} 

