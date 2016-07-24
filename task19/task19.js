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
var bubblesort = document.getElementById('bubbleSort'); 
var randomNum = document.getElementById("randomNum");
var input = document.getElementById('num');


    addEventHandler(leftRu,'click', enqueueleftRu);
    addEventHandler(rightRu,'click', enqueuerightRu);
    addEventHandler(leftChu,'click', enqueueleftChu);  
    addEventHandler(rightChu,'click', enqueuerightChu);
    addEventHandler(bubblesort,'click', Bubblesort);
    addEventHandler(randomNum,'click', randomNUM);

var queue = new Queue();

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
function viewData(showArr){
	var text="",color="#33eee2";	
	for(var i=0;i<showArr.length;i++){	
	   /* color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);*/	  
		text+="<div style = 'background-color:"+color+";height:"+showArr[i]*5+"px;'>"+showArr[i]+"</div>";
	}
	queueDiv.innerHTML="";
	queueDiv.innerHTML=text;   
	document.getElementById('num').value=""; 
	
}

//左入
function enqueueleftRu(){	
	var inputValue = getInputValue();	
       if(inputValue){
        	if(queue.size()<60){
       		queue.Lenqueue(inputValue);       	 
	         viewData(queue.print());	
        	}
        	else{
        		alert("您队列中的数量已经超过60个了");
        	}
       	  
       }
		else{
            input.focus();
		}
	

} 
//右入
function enqueuerightRu(){	
	
	var inputValue = getInputValue();
      if(inputValue){
       	  queue.Renqueue(inputValue);       	 
	      viewData(queue.print());	
       }
		else{
            input.focus();
		}
	
	  
	
} 
//左出
function enqueueleftChu(){

       	  queue.Ldequeue();       	 
	      viewData(queue.print()); 
	

} 
//右出
function enqueuerightChu(){	

	queue.Rdequeue();
	viewData(queue.print());		
	
} 

//随机生成数据
function randomNUM(){
   var data = [];
	for(i=0;i<=10;i++){
			data[i]=Math.floor(Math.random()*20+10);
			queue.Renqueue(data[i]);

		}
		viewData(queue.print());
}
	
/*
  冒泡排序任何相邻俩个的项，如果第一个比第二个大，则交换他们。
  */
function Bubblesort(){
   var i = 0,j = 0;
   var temp;
   var data =  queue.print();   
   var len = queue.size();
   var timer = null;
   //用计数器实现一步步展示效果
	  timer = setInterval(run,1000);
		function run() {
			if (i < len) {
				if (j < len-1-i) {
					if (data[j] > data[j+1]) {
						temp = data[j];
						data[j] = data[j+1];
						data[j+1] = temp;						
						viewData(data);
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


