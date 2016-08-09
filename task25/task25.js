//跨浏览器事件绑定
function addEventHandler(ele,event,handle) {
    if(ele.addEventListener){
        ele.addEventListener(event,handle,false);
    }else if(ele.attachEvent){
        ele.attachEvent("on"+event,handle);
    }else{
        ele["on"+event] = handle;
    }
}
//添加节点
function onAddItem(point,initName,id){

    var name;
    if(initName){
        name = initName;
    }else{
        name = prompt("请输入新建文件的名称:","");
        if (name == null){
            return
        }
    }
    point.parentElement.parentElement.firstElementChild.innerHTML='+';
    var child =  point.parentElement.parentElement.firstElementChild;
  
    point.parentElement.parentElement.firstElementChild.setAttribute('onclick','onIsShow(this,1)');
    var node=point.parentNode.parentNode.nextElementSibling;
    node.style.display='block';
    //创建元素
    var ul=document.createElement("ul");
    var li=document.createElement("li");
    var div=document.createElement("div");
    var span=document.createElement("span");
    var div2=document.createElement("div");
    var add=document.createElement("i");
    var del=document.createElement("i");
    var ren=document.createElement("i");
    var show=document.createElement("i");
    //添加样式
    div.setAttribute('class','title');
    div2.setAttribute('class','btnGroup');
    show.setAttribute('class','iconfont');
    add.innerHTML='添加';
    if(id){
        add.setAttribute('id',id);
    }
  /* addEventHandler(add,"click",onAddItem);*/
    add.setAttribute('onclick','onAddItem(this)');
   
    del.innerHTML='删除';
  /*  addEventHandler(del,"click",onDelItem(del));*/
    del.setAttribute('onclick','onDelItem(this)');
  
    ren.innerHTML='重命名';
    /* addEventHandler(ren,"click",onRenItem(ren));*/
    ren.setAttribute('onclick','onRename(this)');
   
    //添加分支
    div2.appendChild(add);
    div2.appendChild(del);
    div2.appendChild(ren);
    span.innerHTML=name||initName||'未命名';
    /*addEventHandler(span,"click",onIsShow);*/
   span.setAttribute('onclick','onIsShow(this,1)');
    div.appendChild(show);
    div.appendChild(span);
    div.appendChild(div2);
    li.appendChild(div);
    li.appendChild(ul);
    node.appendChild(li);

   
}

//删除节点
function onDelItem(point){
    var node=point.parentNode.parentNode.parentNode;
    var nodeParent=node.parentNode;
    nodeParent.removeChild(node);
    onIsShow(nodeParent.previousElementSibling.firstElementChild,0)
}

//重命名
function onRename(point){
    var node=point.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
    var name = prompt("请输入修改文件的名称:",node);
    if (name == null){
        return
    }
    point.parentElement.parentElement.firstElementChild.nextElementSibling.innerText=name;
}

//是否展开
function onIsShow(point,type){
    var event = event||window.event;
    var target = event.target||event.srcElement;
    var node=point.parentNode.nextElementSibling;
    type = 1;
    if(type){
        if(node.style.display=='none'){
            node.style.display='block';
            if(node.childElementCount){
                point.parentElement.firstElementChild.innerHTML='-';
            }
        }else{
            node.style.display='none';
            if(node.childElementCount){
                point.parentElement.firstElementChild.innerHTML='+';
            }
        }
    }else{
        if(node.childElementCount){
            point.parentElement.firstElementChild.innerHTML='+';
        }else{
            point.parentElement.firstElementChild.innerHTML='-';
        }
    }
}

//匹配搜索
function onSearch(){
    var tree=document.getElementsByClassName('tree')[0];
    var search=document.getElementById("search").value;
    var count=0;
    var getChild=function(element,name){
        var e,l,more;

        for(l=element.childElementCount;l;){
            e=element.children[--l];
            if(e.firstElementChild){                                                                                                                                               
                if(e.firstElementChild.firstElementChild.nextElementSibling.innerText==name){
                    e.firstElementChild.firstElementChild.nextElementSibling.style.display='inline-block';
                    e.firstElementChild.firstElementChild.nextElementSibling.style.color="red";
                    e.parentNode.style.display='block';
                    e.parentElement.previousElementSibling.firstElementChild.innerHTML='-';
                    //匹配展开
                    function listShow(e){
                        if(e.parentNode.parentNode.tagName=='UL'){
                            e.parentNode.parentNode.style.display='block';
                            e.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML='+';
                            listShow(e.parentNode.parentNode)
                        }else{
                            return e;
                        }
                    }
                    listShow(e.parentNode);
                    count++;
                }
                if(e.lastElementChild.childElementCount){
                    more = getChild(e.lastElementChild,name);
                    if (more) return more
                }
            }
        }

    };
  
    getChild(tree,search);
    alert('红色文件名为找到'+count+'个同名文件');
}

//文本初始化
(function (){
    var Web=document.getElementById('menu').lastElementChild.firstElementChild; 
    onAddItem(Web,'web前端','Web'); 
    var root = document.getElementById('Web'); 
    onAddItem(root,'javascript学习','js');  
    onAddItem(root,'HTML学习','html');   
    onAddItem(root,'CSS学习','css');
   
}());

