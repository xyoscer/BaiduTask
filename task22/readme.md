## 任务目的

    熟练JavaScript
    学习树这种数据结构的基本知识

## 任务描述

    在页面中展现一颗二叉树的结构
    提供一个按钮，显示开始遍历，点击后，以动画的形式呈现遍历的过程
    二叉树的遍历算法和方式自定，前序中序后序皆可，但推荐可以提供多种算法的展示（增加多个按钮，每个按钮对应不同的算法）
    当前被遍历到的节点做一个特殊显示（比如不同的颜色）
    每隔一段时间（500ms，1s等时间自定）再遍历下一个节点
  ##任务收获
 1.  学会使用跨浏览器事件绑定
    - addEventListener();
    - attachEvent();
 2. 学会使用事件代理机制，将事件绑定到父元素上，减少绑定事件的个数，使用target.id获得该进行前序遍历或中序遍历，或后续遍历。
    - 先序遍历：
```javascript
function preOrder(node){
 if(!(node == null)){ treeList.push(node); preOrder(node.firstElementChild);
 preOrder(node.lastElementChild);
 }
}
```
 3. 将遍历结果以动画的形式在一定的时间间隔下进行显示：使用计时器函数setInterval(), clearInterval()给遍历过的节点数组循环进行样式显示。使用
  - 对象.className = " 类名"，空格类名，在原有类的基础上在给它添加样式类
  -treeList[i-1].className = treeList[i-1].className.replace(/animate/,"normal");使用replace()函数，用后面的类样式取代前面的类样式。
  4. 学习forEach()函数，对数组中的每一项进行运行给定的函数，这个函数没有返回值。
     - array.forEach(callback[, thisArg]);
   callback 函数会被依次传入三个参数：
        数组当前项的值
        数组当前项的索引
        数组对象本身
        如果给forEach传递了thisArg 参数，它将作为 callback 函数的执行上下文
使用样例：
```javascript
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```