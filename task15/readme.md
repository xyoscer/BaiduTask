####任务目的

      在上一任务基础上继续JavaScript的体验
      接触一下JavaScript中的高级选择器
      学习JavaScript中的数组对象遍历、读写、排序等操作
      学习简单的字符串处理操作
    
    
####任务要求

      读取页面上已有的source列表，从中提取出城市以及对应的空气质量
      将数据按照某种顺序排序后，在resort列表中按照顺序显示出来
      
      
####任务总结
- 学习使用querySelector(),querySelectorAll()获得页面元素，匹配指定`css选择器`的元素们.
       elementList = baseElement.querySelectorAll(selectors);
       querySelectorAll()返回一个nodelist,而querySelector()，返回取得的某个元素-
       
       
- 学习了解了数组：
     -  通过字面量创建数组
    
                   var arr = [];//创建一个空数组
                   var arr = ['a','b','c']//创建数组为a,b，c，三个元素的数组
     - 通过数组构造函数创建数组(不建议使用)
    
                   var arr = new Array(2) //创建给定长度为2的空数组
                   var arr = new Array('a','b','c')
                   
     - 数组的长度length属性：length表示数组的最大索引，并不是计算元素的个数
                         ['a','b'].length   //2
                         ['a',,'c'].length  //3
                         
                         
 - 数组push,push() 方法添加一个或多个元素到数组的末尾，并返回数组新的长度。
 
      arr.push(element1, ..., elementN)
      
- 使用函数形式，完成各个功能。
 
        getData()获取页面上列表中的信息，
        sortAqiData()对获取到的数据，进行排序。
        render()用来将数据写在页面上
        btnHandle()监听的事件函数，
        
- 使用disabled = 'true'，来使button按钮第一次使用按完，就禁用按钮。
              
                       
