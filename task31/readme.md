####任务目的

- 加强对javascript的掌握

- 熟悉常用表单处理逻辑

####任务描述

  - 在页面中完成两个单选框，切换单选框的不同选项时下方显示的表单随之切换。
   
  - 当选择在校生这个单选框的时候，出现两个select下拉菜单，一个下拉菜单表示选择城市，一个下拉菜单表示选择学校，当城市发生变化时，学校也跟着发生变化
   
  - 当选择非在校生这个单选框时，显示一个文本输入框
  
####任务总结

       (1)使用css给radio添加样式，原理是先隐藏原本radio的样式，然后使用label标签和input的关联性质，给label增加after,before的样式，来模拟radio的选项
       框框。
       
       (2)给每一个radio添加点击事件，点击切换表单的随之切换，使用display:none;与display：block,来实现
        
      （3）了解select中的value值与<option></option>内的文字的区别
         
         value值：是提交给服务器的值，option内的值是显示在页面中select下来菜单显示的值，
                source.options[source.selectedIndex].value;获得的是option中的value的值，使用innerHTML获得option之间的值
                
 - 学习Option对象：代表HTML表单中下拉列表中的一个选项，HTML表单中<option>标签每出现一次，一个 Option 对象就会被创建
      
      Option对象的属性：
      
         index: 	返回下拉列表中某个选项的索引位置。
         
         selected:  设置或返回 selected选中的属性的值
         
 - Select 对象
 
    Select 对象代表HTML表单中的一个下拉列表,在HTML表单中，<select>标签每出现一次，一个 Select 对象就会被创建。
    
    Select对象属性：
    
       selectedIndex 	设置或返回下拉列表中被选项目的索引号
       
       
