//跨浏览器事件绑定
function addEventHandle(ele,event,handle){
	if(ele.addEventListener){
		ele.addEventListener(event,handle,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,handle);
	}else{
		ele["on"+event] = handle;
	}
}


var treeList = [];
var head = null;
var timer1 = null;
var root = document.getElementsByClassName('root')[0];
var divs = document.getElementsByTagName('div');
var tree = document.getElementById('tree');
var deal = document.getElementById('deal');
var del_add = document.getElementById('del_add');
var selected = null;


//监听事件
//给所有节点div的父元素添加点击事件，减少整个页面的注册事件太多
addEventHandle(tree,"click",highlightShow);
addEventHandle(deal,"click",treeDeal);
addEventHandle(del_add, "click",del_addNode);


//点击某个节点元素，则该节点元素呈现一个特殊被选中的样式
function highlightShow(event){
     var event = event||window.event;
     var target = event.target||event.srcElement;    
     if(target.nodeName === 'DIV'){      
        for(var i=0;i<divs.length;i++){   
             if(target != divs[i]) {
                divs[i].style.backgroundColor = '#fff';

             }else {
               target.style.backgroundColor = "#00ffff";
             }
         } 
               
        }  
        
      selected = target;//保存选中的节点在变量selected中，供增加删除节点使用


}
//对树进行遍历与搜索
function treeDeal(event){
	var event = event||window.event;
	var target = event.target||event.srcElement;	
	reset();
	switch(target.id){
		case "pre":preOrder(root);
		break;		
		case "post":postOrder(root);
		break;
		case "preSearch":preOrder(root);
		break;		
		case "postSearch":postOrder(root);
		break;
		
	}
	if(target.id =="pre"||target.id == "post"){
		changeStyle();
	}
	if(target.id =="preSearch"||target.id =="postSearch"){
		 showValue();
	}
	
}
//增删操作
function del_addNode(event) {
    var event = event || window.event;
    var target = event.target || event.srcElement;
   switch(target.id){    
    case "del": delNode();
    break;    
    case "add": addNode();
    break;
   
  }
 }    
 
//树的先序遍历
function preOrder(node){
    if(node){
    	var tempNode = node.firstElementChild||null;
    	    treeList.push(node);     	   
    	while(tempNode){
    		preOrder(tempNode);
    		tempNode = tempNode.nextElementSibling;
    	}
    	
    }  
  
        
}
//树的后序遍历
function postOrder(node){
	 if(node){	   
    	var tempNode = node.firstElementChild||null;    	    
    	while(tempNode){     		
    		postOrder(tempNode);
    		tempNode = tempNode.nextElementSibling;
    	}
    	 treeList.push(node);  
    }  
}

//显示的样式
function changeStyle(){	

	 	head = treeList.shift(); //出队
            if (head) {               
                head.style.backgroundColor = "yellow";
                head.className +=" animate";                 
                timer1 = setTimeout(function () {                  
                   head.style.backgroundColor = "#fff";
                    head.className = head.className.replace(/animate/,"normal");                      
                     changeStyle(); //递归调用，使要显示的节点不停出队显示，直至为空
                    }, 800);
                   
                }
}


//每次进行遍历前都将所有样式去掉，并且使treeList[]清空
function reset(){
	clearTimeout(timer1);
	for(var i=0;i<divs.length;i++){		
    divs[i].style.backgroundColor = "#fff";
    divs[i].className = divs[i].className.replace(/normal|animate/,"");
	}	
	
	treeList = [];//清空队列
}


//搜索结果时的样式展示
 function showValue(){
  	var  input = document.getElementsByTagName('input')[0].value.trim();
  	var flag = false;
  	head = treeList.shift(); //出队
            if (head) {
               var text = head.firstChild.nodeValue.trim();
                  if(input ==""){
                    alert("请输入搜索内容");
                  }else{
                    if (text === input) {
                    head.style.backgroundColor = "pink";  
                    flag = true;
                       return;
                   } else {    
                    head.style.backgroundColor = "yellow";          
                    head.className +=" animate";
                    timer1 = setTimeout(function () {
                        head.style.backgroundColor = "#fff";
                        head.className = head.className.replace(/animate/,"normal");                      
                        showValue(); //递归调用，使要显示的节点不停出队显示，直至为空
                    }, 800);
                }

            }
        } else{
            	if(flag == false){
            		alert("该元素不存在");
            		document.getElementsByTagName('input')[0].value = "";
            		document.getElementsByTagName('input')[0].focus();
            	}
            }
     
 }
  //点击树中的节点对其进行删除 
 function delNode() {
    if(selected === null) {
        alert("请先选择要删除的节点");
    }else{
    
          var parent = selected.parentNode;         
            parent.removeChild(selected);
        }    
   }

//搜索框中获得要插入的节点内容，根据树中选中的节点，在其后进行插入操作
 function addNode() {
    var addValue = document.getElementsByTagName('input')[1].value.trim();    
    if(addValue == "") {
        alert("请先输入插入节点内容");
    }else if(selected === null) {
            alert("请先选中要操作的节点");
    }else {
           selected.innerHTML += `<div class='child3'>${addValue}</div>`;
        
          document.getElementsByTagName('input')[1].value = "";
       
    } 
    
     addEventHandle(tree,"click",highlightShow);      
}
 