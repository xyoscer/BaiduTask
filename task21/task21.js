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
var arrDeal = function(array) {
    this.arr = array;
   
};
arrDeal.prototype.addArray = function(element) {
     this.arr.push(element);
     if(this.arr.lenght > 10) {
         this.arr.shift();
     }
};
arrDeal.prototype.delDuplicateArr = function(element) {
    for(let i=0;i<this.arr.length;i++) {
         if(element == this.arr[i]) {
             this.arr.splice(i,1); //去重操作
                 }
              }
};
arrDeal.prototype.showArray = function(showArea) {
    var text = "";
    this.arr.forEach(function(ele,index,arr) {
        text += `<div class = "tag">${ele}</div>`;
    })
    showArea.innerHTML = "";
    showArea.innerHTML = text;
    input.value = '';  
     
}

var tagArray = [];

var tag = new arrDeal(tagArray);


addEventHandler(input, 'keyup', showTag);
addEventHandler(show, 'click', change);
addEventHandler(hobby, 'click', showHobby);
addEventHandler(showhobby, 'click', change);
//输入文本进行处理
function inputDeal(inputValue) {
	 var inputArray = [];
     //遇到空格，回车，逗号
    inputArray = inputValue.split(/[,，\s]+/);   
    return inputArray;
}

//展示标签
 function showTag(event) {    
    var tagValue = input.value; 
    //遇到空格，回车，逗号，显示过滤后的tag     
     if (/[[,，\s]+/.test(tagValue) ||event.keyCode === 13) {
        var showTagValue = tagValue.trim().split(/[,，\s]+/)[0];    
         if(tagArray.length) {
             tag.delDuplicateArr(showTagValue);
             tag.addArray(showTagValue);
             tag.showArray(show);
         }
         else {
            tag.addArray(showTagValue);
            tag.showArray(show);
         }    	
     	
    }
}
	
//删除标签
function  change(event) {
	var event = window.event || event;
	var target = event.target || event.srcElement;
	    target.parentNode.removeChild(target); 
		
	}
var hobbyArray = [];	
//显示爱好
function showHobby(){
	 var hobbyValue = document.getElementsByTagName('textarea')[0].value.trim();     
     var hobbyArray = hobbyValue.split(/[；;]+/);    
     var set =  [...new Set(hobbyArray)];    
    
     if(set.length > 10) {
             set.shift();
         }
     var hobby = new arrDeal(set);    
     var hobby = new arrDeal(set);
      hobby.showArray(showhobby); 	
     	
}

 