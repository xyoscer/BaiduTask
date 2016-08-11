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
        if(!(node == null)) {
            var tempNode = node.firstElementChild || null;
            treeList.push(node);
            while(tempNode) {
              preOrder(tempNode);
              tempNode = tempNode.nextElementSibliing;
            }
         }
      }
      
      ```
      
      ```
      function postOrder(node) {
        if(!(node == null)){
           var tempNode = node.firstElementChild || null;
           while(tempNode){
              postOrder(tempNode);
              tempNode = tempNode.nextElementSibling;
           }
           treeList.push(node);
         }
      }
      ```
      
      - 样式显示同样使用className来操作
      - 与22题不同之处就在于，一个对于二叉树的遍历，有三种方式：先序遍历，中序遍历，后序遍历，
      而对于树的遍历就只有前序遍历和后序遍历，二叉树只需要遍历firstElementChild,lastElementChild,
      而多叉树，则需要firstElementChild和nextElementChild来进行节点的遍历。
