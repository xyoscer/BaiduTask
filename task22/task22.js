//跨浏览器事件绑定
function addEventHander(ele,event,handle){
	if(ele.addEventListener){
		ele.addEventListener(event,handle,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,handle);
	}else{
		ele["on"+event] = handle;
	}
}
var treeList = [];
var root =  document.getElementById('root');
var child1 = document.getElementsByClassName('child1');
var btn = document.getElementsByTagName('button');
var timer = null;
addEventHander(btn[0],"click",dealNode);
addEventHander(btn[1],"click",dealNode1);
addEventHander(btn[2],"click",dealNode2);
function dealNode(){
	reset();
	preOrder(root);
    changeStyle();
}
function dealNode1(){
	reset();
	inOrder(root);	
    changeStyle();
}
function dealNode2(){
    reset();
	postOrder(root);		
    changeStyle();
}
function preOrder(node){
   if (!(node == null)) {
		treeList.push(node);		
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
}
}
function inOrder(node){
    if (!(node == null)) {
		
		inOrder(node.firstElementChild);
			treeList.push(node);	
		inOrder(node.lastElementChild);
} 
}
function postOrder(node){
    if (!(node == null)) {		
		postOrder(node.firstElementChild);				
		postOrder(node.lastElementChild);
		treeList.push(node);
} 
}

function changeStyle() {
	var i = 0; 	
	treeList[i].className += " animate";	
	timer = setInterval(function (argument) {
		i++;
		if (i < treeList.length) {	

			treeList[i-1].className = treeList[i-1].className.replace(/animate/,"normal");	    
			treeList[i].className += " animate";
			
		} else {
			clearInterval(timer);	
			treeList[treeList.length-1].className = treeList[i-1].className.replace(/animate/,"normal");
		
			
		}
	},1000)
}
function reset() {

	clearInterval(timer);
	var divEles = document.getElementsByTagName("div");
	for(var i=0; i<divEles.length;i++){
		divEles[i].className = divEles[i].className.replace(/normal|animate/,"");
}
	
}