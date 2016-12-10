//跨浏览器事件绑定
 
function addEventHandle(ele, event, handle) {
    if (ele.addEventListener) {
        ele.addEventListener(event, handle, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, handle);
    } else {
        ele["on" + event] = handle;
    }
}

 
var treeList = [];
var head = null;
var timer1 = null;
var root = document.getElementById('root');
var divs = document.getElementsByTagName('div');
var deal = document.getElementById('deal');
 
addEventHandle(deal, "click", treeDeal);
 
function treeDeal(event) {
    var event = event || window.event;
    var target = event.target || event.srcElement; 
    reset(); 
    switch (target.id) {
    case "pre":
        preOrder(root);
        break;
    case "post":
        postOrder(root);
        break;
    case "preSearch":
        preOrder(root);
        break;
    case "postSearch":
        postOrder(root);
        break;
    default:
        break;
    }
    if (target.id == "pre" || target.id == "post") {
        changeStyle();
    }
    if (target.id == "preSearch" || target.id == "postSearch") {
        showValue();
    }
 
}
//树的先序遍历
 
function preOrder(node) {
    if (node) {
        var tempNode = node.firstElementChild || null;
        treeList.push(node);
        while (tempNode) {
            preOrder(tempNode);
            tempNode = tempNode.nextElementSibling;
        }
 
    }
 
 
}
//树的后序遍历
 
function postOrder(node) {
    if (node) {
        var tempNode = node.firstElementChild || null;
        while (tempNode) {
            postOrder(tempNode);
            tempNode = tempNode.nextElementSibling;
        }
        treeList.push(node);
    }
}
 
//显示的样式,使用setTimeout()来进行动画显示
 
function changeStyle() {
   head = treeList.shift(); //出队
    if (head) {
        head.className += " animate";
        timer1 = setTimeout(function () {
            head.className = head.className.replace(/animate/, "normal");
            changeStyle(); //递归调用，使要显示的节点不停出队显示，直至为空
        }, 800);
 
    }
    /*var i = 0;    
    treeList[i].classList.add("animate");
    timer = setInterval(function () {
        i++;
        if (i < treeList.length) {           
            treeList[i - 1].className = treeList[i - 1].className.replace(/animate/, "normal");            
            treeList[i].classList.add("animate");
 
        } else {
            clearInterval(timer);
            treeList[treeList.length - 1].className = treeList[i - 1].className.replace(/animate/, "normal");
 
 
        }
    }, 1000);*/
   
}
 
 
//每次进行遍历前都将所有样式去掉，并且使treeList[]清空
 
function reset() {
    clearTimeout(timer1);
    for (var i = 0; i < divs.length; i++) {
        divs[i].className = divs[i].className.replace(/normal|animate|search/, "");
    } 
    treeList = []; //清空队列
}
 
 
//搜索结果时的样式展示
 
function showValue() {
    var input = document.getElementsByTagName('input')[0].value.trim();
    var flag = false;
    head = treeList.shift(); //出队
    if (head) {
        text = head.firstChild.nodeValue.trim();
        if(input == "") {
            alert("请输入搜索的值")
        }else {
            if (text === input) {
                head.className += " search";
                flag = true;
            return;
           } else {
                head.className += " animate";
                timer1 = setTimeout(function () {
                head.className = head.className.replace(/animate|search/, "normal");
                showValue(); //递归调用，使要显示的节点不停出队显示，直至为空
            }, 800);
        } 
        }
       
    } else {
        if (flag == false) {
            alert("该元素不存在");
            document.getElementsByTagName('input')[0].value = "";
            document.getElementsByTagName('input')[0].focus();
        }
    }
 
 
}