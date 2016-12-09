##任务描述
  - 对多叉树进行遍历，并且每一个节点中带有内容
  - 增加一个输入框及一个“查询”按钮，点击按钮时，开始在树中以动画形式查找节点内容和输入框中内容一致的节点，
  找到后以特殊样式显示该节点，找不到的话给出找不到的提示。查询过程中的展示过程和遍历过程保持一致
  
##任务收获

 -  继续学习使用事件的代理机制，减少事件的绑定事件，只在父元素上注册一次点击事件，使用switch语句来判断是哪个事件源响应事件
    ， 并进行相应的操作
 - 学习使用递归方式实现树的先序遍历，和后序遍历
    
    ```javascript
    function preOrder(node) {
        if(node) {
            var tempNode = node.firstElementChild || null;
            treeList.push(node); //根节点操作
           while(tempNode) {
              preOrder(tempNode);
              tempNode = tempNode.nextElementSibliing;
            }
         }
      }
      
      ```
 
   
      function postOrder(node) {
        if(node){
           var tempNode = node.firstElementChild || null;
           while(tempNode){
              postOrder(tempNode);
              tempNode = tempNode.nextElementSibling;
           }
           treeList.push(node);//根节点操作
       }
      }
      

      
      
 - 样式显示同样使用className来操作
 
 - 与22题不同之处就在于，一个对于二叉树的遍历，有三种方式：先序遍历，中序遍历，后序遍历，
      而对于树的遍历就只有前序遍历和后序遍历，二叉树只需要遍历firstElementChild,lastElementChild,
      而多叉树，则需要firstElementChild和nextElementSibling来进行节点的遍历。
    
 -   在树中根据不同的遍历方法进行搜索要查找的节点值，对每一个数组里面的及节点，进行判断，如果该节点的nodeValue值等于文本输入框的值，
     则对这个节点进行不同的样式显示，如果不等于，则继续使用定时器从数组
