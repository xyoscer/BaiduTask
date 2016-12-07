####任务目的

   
    学习与实践JavaScript的基本语法、语言特性
  
####任务描述
 
 
     
    基于任务20，将任务20的代码进行抽象、封装，然后在此基础上实现两个需求：Tag输入和兴趣爱好输入
    实现一个tag输入框
        要求遇到用户输入空格，逗号，回车时，都自动把当前输入的内容作为一个tag放在输入框下面。
        Tag不能有重复的，遇到重复输入的Tag，自动忽视。
        每个Tag请做trim处理
        最多允许10个Tag，多于10个时，按照录入的先后顺序，把最前面的删掉
        当鼠标悬停在tag上时，tag前增加删除二字，点击tag可删除
      实现一个兴趣爱好输入的功能
        通过一个Textarea进行兴趣爱好的输入，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为间隔。
        当点击“确认兴趣爱好”的按钮时，将textarea中的输入按照你设定的间隔符，拆解成一个个的爱好，显示在textarea下方
        爱好不能重复，所以在下方呈现前，需要做一个去重
        每个爱好内容需要做trim处理
        最多允许10个兴趣爱好，多于10个时，按照录入的先后顺序，把最前面的删掉
        
####任务思路

       对输入文本框的内容进行trim()处理，并根据（；;）分割   split() 
       对数组进行去重操作
       对输入的数组进行数量限制，根据队列的的思想，每次超过数量，对头的元素出去
       对于鼠标悬停在tag上出现删除二字，可以使用伪元素：after的content属性来实现,点击tag,hobby进行删除，直接     target.paretNode.removeChild（target）
   
     
####任务总结

     熟悉字符串的处理函数 split()，splice(),trim()
     数组去重
     
     - 第一种情况，向数组中输入元素时，把与这个元素相同的数组里面的元素去重处理
      遍历数组，记录与输入元素相同的数组元素的下标，然后使用splice(i,1)删除掉数组中这个元素，最后再把要输入的元素push到数组中，
      这样数组里面的元素就不会有重复
     
    - 第二种情况，生成的数组中就有重复的元素，对其进行去重操作
    
      方法1：新建一个空数组，遍历原数组，若新数组中不存在当前元素，将其 push 入新数组中，返回新数组
      
``` javascript

  // 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
  function delDuplicateArr(arr) {
    var newArr = [];    //创建空数组
     for(let i=0;i<arr.length;i++) {//遍历旧数组
        if((newArr.indexOf(arr[i])) == -1) {//如果新数组中不存在当前元素
             newArr.push(arr[i]);
         }
     }    
    return newArr;
  }
 ```
  
    方法2：使用两个for循环，去比较每一个元素与后面剩下的元素是否一样，一样的话，终止当前的循坏，同时进入第一层的for循环的下一轮判断
    再对这个元素与其后面剩下的所有元素比较，直到找出这个值与后面剩下的元素都不登，才把它放入新数组，这样存入到数组的值，取得都是重复的
    最右的那个值
    
```javascript

   function delDuplicateArr1(arr) {  
    var newArr = [];
    var len = arr.length;
    for(var i = 0; i < len; i++) {
      for(var j = i+1; j < len; j++) {
           if (arr[i] === arr[j]) {
                 j = ++i;                
            } 
      }            
        newArr.push(arr[i]);       
     
    }
    return newArr;
}   

```
  方法3：使用对象的键值来存数组的值，数组的值，作为对象的键，又作为对象的值，由于对象中不能有重复的键值，后面就会直接覆盖前面的
  直接遍历对象，push到新数组中，就得到不重复的数组

```javascript

function delDuplicateArr1(arr) {  
    var obj = {}, len = arr.length, newArr = [];
    for(var i = 0; i < len; i++) {
        obj[arr[i]] = arr[i];//将数组的值作为对象的键值
    }
    for(i in obj) { //遍历对象，将对象的值push到新数组中
       newArr.push(obj[i]);
  
    }
    return newArr;
}    

```

  方法4：使用ES6中的Set数据结构，来对数组去重，因为Set数据结构要求成员的值都是唯一的，没有重复的值。
  
   var newArr =  [...new Set(arr)];
   
   var newArr = Array.from(new Set(arr));
