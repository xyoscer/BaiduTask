//跨浏览器事件绑定
 
function addEventHander(ele, event, handle) {
    if (ele.addEventListener) {
        ele.addEventListener(event, handle, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, handle);
    } else {
        ele["on" + event] = handle;
    }
}
var treeList = [];
var root = document.getElementById('root');
var btn = document.getElementsByTagName('button');
var timer = null;
var deal = document.getElementById('deal');
 
addEventHander(deal, "click", treeDeal);
 
/**
   树的遍历的可视化分为三步：
   第一步初始化树
   第二步进行遍历树，将遍历的结果存入数组；
   第三步对数组中的树按照顺序以某种动画某个时间显示出来
*/
function treeDeal(event) {
    var event = window.event || event;
    var target = event.target || event.srcElement;
    reset();
    switch (target.id) {
    case "pre":
        preOrder(root);
        break;
    case "in":
        inOrder(root);
        break;
    case "post":
        postOrder(root);
        break;
    default:
        break;
    }
    changeStyle();
}
//先序遍历
 
function preOrder(node) {
    if (!(node == null)) {
        treeList.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}
//中序遍历
 
function inOrder(node) {
    if (!(node == null)) {
 
        inOrder(node.firstElementChild);
        treeList.push(node);
        inOrder(node.lastElementChild);
 
    }
}
//后序遍历
 
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        treeList.push(node);
    }
}
//每个1s,动画形式显示一次遍历的结果
 
function changeStyle() {
    var i = 0;
    treeList[i].className += " animate";
    timer = setInterval(function () {
        i++;
        if (i < treeList.length) {
 
            treeList[i - 1].className = treeList[i - 1].className.replace(/animate/, "normal");
            treeList[i].className += " animate";
 
        } else {
            clearInterval(timer);
            treeList[treeList.length - 1].className = treeList[i - 1].className.replace(/animate/, "normal");
 
 
        }
    }, 1000)
}
//初始化树
 
function reset() {
 
    clearInterval(timer);
    treeList.forEach(function (ele) {
        ele.className = ele.className.replace(/normal|animate/, "");
    });
    treeList = [];
}