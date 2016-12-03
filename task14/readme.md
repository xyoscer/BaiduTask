####任务要求：

 将数组中的数据，筛选出大于60的，并按照从大到小排序输出到ul列表中
 
      数据为：
     var aqiData = [
        ["北京", 90],
        ["上海", 50],
        ["福州", 10],
        ["广州", 50],
        ["成都", 90],
        ["西安", 100]
     ];
     
     
####任务总结：

   - 继续学习使用innerHTML给页面上添加内容，觉得很方便
   - 学习数组的基本知识
     - sort()： sort() 方法对数组的元素做原地的排序，并返回这个数组。默认按照字符串的Unicode码位点（code point）排序。
     
     
                arr.sort([compareFunction])
                compareFunction可选。用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的诸个字符的Unicode位点进行排序。
                function compareNumbers(a, b) {
                         return a - b;
                 }将会对数组进行升序排列
                   function compareNumbers(a, b) {
                         return b - a;
                 }将会对数组进行降序排列
     - filter()： filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组
     
     
                var new_arrary = arr.filter(callback[, thisArg])
                callback： 用来测试数组的每个元素的回调函数。调用时使用参数 (element, index, array)元素的值，元素的索引，元素的数组。
                返回true表示保留该元素（通过测试），false则不保留。
                thisArg：可选。执行 callback 时的用于 this 的值。
                filter 不会改变原数组。
     - for语句遍历数组
       
