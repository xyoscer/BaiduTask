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
var root = document.getElementById('root');
var divs = document.getElementsByTagName('div');
var presearch = document.getElementById('preSearch');
var postsearch = document.getElementById('postSearch');
var deal = document.getElementById('deal');
var delBtn = document.getElementById('del');
var addBtn = document.getElementById('add');
var selected = null;

//监听事件
addEventHandle(deal,"click",treeDeal);
addEventHandle(delBtn,"click",delNode);
addEventHandle(addBtn,"click",addNode);

for(var i=0;i<divs.length;i++){
        addEventHandle(divs[i],"click",highlightShow);
    }   
//点击某个节点元素，则该节点元素呈现一个特殊被选中的样式
function highlightShow(event){
     var event = event||window.event;
     this.style.backgroundColor = "blue";
     for(var i=0;i<divs.length;i++){
      if(divs[i]!= this){
         divs[i].style.backgroundColor = "#fff";
      }
    }
     if(event.stopPropagation){
        event.stopPropagation();
     }else{
        event.cancelBubble = true;
     }
      selected = this;//保存选中的节点在变量selected中

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
		default:
		break;
	}
	if(target.id =="pre"||target.id == "post"){
		changeStyle();
	}
	if(target.id =="preSearch"||target.id =="postSearch"){
		 showValue();
	}
	
}

//树的先序遍历
function preOrder(node){
    if(!(node ==null)){
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
	 if(!(node ==null)){	   
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
                head.className +=" animate";          
                timer1 = setTimeout(function () {
                    head.className = head.className.replace(/animate/,"normal");                      
                     changeStyle(); //递归调用，使要显示的节点不停出队显示，直至为空
                    }, 800);
                   
                }
}


//每次进行遍历前都将所有样式去掉，并且使treeList[]清空
function reset(){
	clearInterval(timer1);
	for(var i=0;i<divs.length;i++){
		divs[i].className = divs[i].className.replace(/normal|animate/,"");
	}	
	
	treeList = [];//清空队列
}


//搜索结果时的样式展示
 function showValue(){
  	var input = document.getElementsByTagName('input')[0].value.trim();
  	var flag = false;
  	head = treeList.shift(); //出队
            if (head) {
                text = head.firstChild.nodeValue.trim();
                  if(input ==""){
                    alert("请输入搜索内容");
                  }else{
                    if (text === input) {
                    head.style.backgroundColor = "pink"; 
                    flag = true;
                        return;
                } else {                 
                   head.className +=" animate";
                    timer1 = setTimeout(function () {
                        head.className = head.className.replace(/animate/,"normal");                      
                        showValue(); //递归调用，使要显示的节点不停出队显示，直至为空
                    }, 800);
                }
            }
        } else{
            	if(flag==false){
            		alert("该元素不存在");
            		document.getElementsByTagName('input')[0].value = "";
            		document.getElementsByTagName('input')[0].focus();
            	}
            }
            

 }
  //点击树中的节点对其进行删除 
 function delNode(){
    if(selected === null){
        alert("请先选择要删除的节点");
    }else{
    
          var parent = selected.parentNode;
          var childNum = selected.childElementCount;           
            while(childNum){
                selected.removeChild(selected.firstElementChild);                 
                childNum--;
            }          
            parent.removeChild(selected);
        }    
   }

//搜索框中获得要插入的节点内容，根据树中选中的节点，在其后进行插入操作
 function addNode(){
    var addValue = document.getElementsByTagName('input')[1].value.trim();

    if(addValue ==""){
        alert("请先输入插入节点内容");
    }else if(selected === null){
            alert("请先选中要操作的节点");
    }else{

        selected.innerHTML +="<div class='child3'>"+addValue+"</div>";
       
    } 
}
     
 