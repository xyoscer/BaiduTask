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
    point.parentElement.parentElement.firstElementChild.innerHTML='&#xe60c';
    point.parentElement.parentElement.firstElementChild.setAttribute('onclick','onIsShow(this,1)');
    var node=point.parentNode.parentNode.nextElementSibling;
    node.style.display='block';
    //创建元素
    var ul=document.createElement("ul");
    var li=document.createElement("li");
    var div=document.createElement("div");
    var div1=document.createElement("span");
    var div2=document.createElement("div");
    var add=document.createElement("i");
    var del=document.createElement("i");
    var ren=document.createElement("i");
    var show=document.createElement("i");
    //添加样式
    div.setAttribute('class','title');
    div2.setAttribute('class','btnGroup');
    show.setAttribute('class','iconfont');
    add.innerHTML='&#xe600添加';
    if(id){
        add.setAttribute('id',id);
    }
    add.setAttribute('onclick','onAddItem(this)');
    add.setAttribute('class','iconfont');
    del.innerHTML='&#xe608删除';
    del.setAttribute('onclick','onDelItem(this)');
    del.setAttribute('class','iconfont');
    ren.innerHTML='&#xe604重命名';
    ren.setAttribute('onclick','onRename(this)');
    ren.setAttribute('class','iconfont');
    //添加分支
    div2.appendChild(add);
    div2.appendChild(del);
    div2.appendChild(ren);
    div1.innerHTML=name||initName||'未命名';
    div1.setAttribute('onclick','onIsShow(this,1)');
    div.appendChild(show);
    div.appendChild(div1);
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
    var node=point.parentNode.nextElementSibling;
    if(type){
        if(node.style.display=='none'){
            node.style.display='block';
            if(node.childElementCount){
                point.parentElement.firstElementChild.innerHTML='&#xe60c';
            }
        }else{
            node.style.display='none';
            if(node.childElementCount){
                point.parentElement.firstElementChild.innerHTML='&#xe60b';
            }
        }
    }else{
        if(node.childElementCount){
            point.parentElement.firstElementChild.innerHTML='&#xe60c';
        }else{
            point.parentElement.firstElementChild.innerHTML='';
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
        for(l=element.childNodes.length;l;){
            e=element.childNodes[--l];
            if(e.firstElementChild){
                if(e.firstElementChild.firstElementChild.nextElementSibling.innerText==name){
                    e.firstElementChild.firstElementChild.nextElementSibling.style.display='inline-block';
                    e.firstElementChild.firstElementChild.nextElementSibling.style.color='#'+color;
                    e.parentNode.style.display='block';
                    e.parentElement.previousElementSibling.firstElementChild.innerHTML='&#xe60c';
                    //匹配展开
                    function listShow(e){
                        if(e.parentNode.parentNode.tagName=='UL'){
                            e.parentNode.parentNode.style.display='block';
                            e.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML='&#xe60c';
                            listShow(e.parentNode.parentNode)
                        }else{
                            return e;
                        }
                    }
                    listShow(e.parentNode);
                    count++;
                }
                if(e.lastElementChild.childNodes.length){
                    more = getChild(e.lastElementChild,name);
                    if (more) return more
                }
            }
        }

    };
    var color=Math.floor(2+8*Math.random())*100+Math.floor(2+8*Math.random())*10+Math.floor(2+8*Math.random());
    getChild(tree,search);
    alert('共找到'+count+'个同名文件');
}

//文本初始化
(function (){
    var SEO=document.getElementById('menu').lastElementChild.firstElementChild;
  
    onAddItem(SEO,'SEO','SEO');
   /* var guangYiSEO=document.getElementById('SEO');
    onAddItem(guangYiSEO,'广义上的SEO','guangYiSEO');
    var xiaYiSEO=document.getElementById('SEO');
    onAddItem(xiaYiSEO,'狭义上的SEO','xiaYiSEO');
    var wangWaiSEO=document.getElementById('guangYiSEO');
    onAddItem(wangWaiSEO,'网站外部SEO','wangWaiSEO');
    var wangNeiSEO=document.getElementById('guangYiSEO');
    onAddItem(wangNeiSEO,'网站内部SEO','wangNeiSEO');
    var pingPai=document.getElementById('xiaYiSEO');
    onAddItem(pingPai,'平台','pingPai');
    var kan=document.getElementById('pingPai');
    onAddItem(kan,'看','kan');
    var B2B=document.getElementById('kan');
    onAddItem(B2B,'B2B','B2B');
    var souSuo=document.getElementById('kan');
    onAddItem(souSuo,'搜索平台','souSuo');
    var lunTan=document.getElementById('kan');
    onAddItem(lunTan,'相关论坛','lunTan');
    var menHu=document.getElementById('kan');
    onAddItem(menHu,'地方门户','menHu');
    var ganZhi=document.getElementById('pingPai');
    onAddItem(ganZhi,'感知','ganZhi');
    var wangYuanChuang=document.getElementById('xiaYiSEO');
    onAddItem(wangYuanChuang,'网络原创内容','wangYuanChuang');*/
}());
