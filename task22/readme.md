####任务目的

    熟练JavaScript
    学习树这种数据结构的基本知识

####任务描述

    参考示例图，在页面中展现一颗二叉树的结构
    提供一个按钮，显示开始遍历，点击后，以动画的形式呈现遍历的过程
    二叉树的遍历算法和方式自定，前序中序后序皆可，但推荐可以提供多种算法的展示（增加多个按钮，每个按钮对应不同的算法）
    当前被遍历到的节点做一个特殊显示（比如不同的颜色）
    每隔一段时间（500ms，1s等时间自定）再遍历下一个节点
    
    
####任务思路

  树的遍历的可视化分为三步：
    
       - 第一步初始化树    
       
       - 第二步进行遍历树（利用递归的遍历算法），将遍历的结果存入数组； 
       
       -  第三步对数组中的树按照顺序以某种动画某个时间显示出来
     
    
##任务收获

 1.  学会使用跨浏览器事件绑定
    - addEventLiatener();
    - attachEvent();
 2. 学会使用事件代理机制，将事件绑定到父元素上，减少绑定事件的个数，使用target.id获得该进行前序遍历或中序遍历，或后续遍历。
 
 -  先序遍历：
 
```javascript
function preOrder(node){
 if(!(node == null)) {
   treeList.push(node);//操作根节点
   preOrder(node.firstElementChild);
   preOrder(node.lastElementChild);
 }
}
```
  - 中序遍历
  
 ```javascript
 function inOrder(node) {
    if(node) {
       inOrder(node.firstElementChild);
        treeList.push(node);//操作根节点
        inOrder(node.lastElementChild);
    }
 }
 ```
  - 后序遍历
 
 ```javascript
 function postOrder(node) {
     if(node) {
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        treeList.push(node);//操作根节点
        }
 }
 ```
 
  3. 将遍历结果以动画的形式在一定的时间间隔下进行显示：使用计时器函数setInterval(),给遍历过的节点数组循环进行样式显示。
setTimeout和setInterval只是简简单单地通过插入代码到代码队列来实现代码的延迟执行（或者说异步执行）
 
   -  setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。返回一个 intervalID会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
     
             第一个参数：想要重复的函数代码
             第二个参数：每次延迟的毫秒数
     
 -  clearInterval() 方法取消setINterval()设置的定时器 
 
          window.clearInterval(intervalID)    参数为：setINterval()传回的id
        
 - setTimeout() 设置一个定时器,在定时器到期后执行一次函数或指定代码段
  
          var timeoutId = window.setTimeout(code,delay)  
       
      
 - clearTimeout() 清除由setTimeout()设置的延时定时器。 
 
              window.clearTimeout(timeoutID)  参数为setTimeout返回的ID
   
  -  对象.className = " 类名"，空格类名，在原有类的基础上在给它添加样式类
  
    treeList[i-1].className = treeList[i-1].className.replace(/animate/,"normal");使用replace()函数，用后面的类样式取代前面的类样式。
  
        （1）className 用来获取或设置指定元素的class属性的值.
    
               cName = elementNodeReference.className;
                elementNodeReference.className = cName; cName是一个字符串变量
     
       （2）classList  返回一个元素的类属性的实时 DOMTokenList集合,DOMTokenList 接口表示一组空格分隔的符号
   
         可以使用的方法
         
      
                  elementNodeReference.classList.`add(String)` 添加指定的类值。如果这些类已经存在于元素的属性中，那么它们将被忽略。
       
                    elementNodeReference.classList.`remove(String)` 删除指定的类值
      
                    elementNodeReference.classList.`item(Number) `返回索引对应的类名
      
                      elementNodeReference.classList.`toggle(String,[])` 当只有一个参数时，就是这个类名存在就删除，返回false,不存在的话就添加，返回true  当存在第二个参数时，第二个参数为true,表示添加这个类，如果是false,表示删除这个类
      
      elementNodeReference.classList.`contains(String)` 检查元素的类属性中是否存在这个类值。存在返回true,不存在返回false
     
       
 
