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
var root = document.getElementById('root');
var timer = null;
var deal = document.getElementById('deal');
addEventHandle(deal,"click",treeDeal);

function treeDeal(event){
	var event = event||window.event;
	var target = event.target||event.srcElement;
	reset();
	switch(target.id){
		case "pre":preOrder(root);
		break;
		case "in":inOrder(root);
		break;
		case "post":postOrder(root);
		break;
		default:
		break;
	}
	changeStyle();
}

function preOrder(node){
    if(!(node ==null)){
    	var tempNode = node.firstElementChild||null;
    	    treeList.push(node);
    	if(tempNode){
    		preOrder(tempNode);
    		tempNode = tempNode.nextElementSibling;
    	}
    	
    }  
    console.log(treeList);  
        
}

function changeStyle(){
	var i = 0;
	treeList[i].className +=" animate";
	timer = setInterval(function(){
		i++;
		if(i<treeList.length){
			treeList[i-1].className = treeList[i-1].className.replace(/animate/,"normal");
			treeList[i].className +=" animate";
		}else{
			clearInterval(timer);
			treeList[treeList.length-1].className = treeList[treeList.length-1].className.replace(/animate/,"normal");
		}
	},1000)
}

function reset(){
	clearInterval(timer);
	treeList.forEach(function(ele){
		ele.className = ele.className.replace(/normal|animate/,"");
	});
	treeList = [];
}