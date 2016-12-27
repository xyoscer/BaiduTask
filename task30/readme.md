####任务目的
 
  - 加强对JavaScript的掌握
    
  - 熟悉常用表单处理逻辑
    
####任务描述
 
   基于上一个任务（任务29），在页面中添加多个表单  要求:

    （1） 表单获得焦点时，下方显示表单填写规则
    
    （2） 表单失去焦点时校验表单内容
    
    （3） 校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
    
    （4） 校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
    
    （5） 点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹窗显示“提交成功”，否则显示“提交失败”

####任务总结

  （1）使用for循环给每一个input添加获得焦点事件，遇到问题：
  
  ```javascript
  var focusMsg = ["必填，字符数应为4~16位","必填，字符数应为4~16位","请确认密码",
       "填写正确的邮箱格式如：xxx@163.com","填写正确的联系方式"];    
     var inputsLen = inputs.length;  
       for( var i = 0;i < inputsLen;i++) {       	 
           inputs[i].onfocus = function() {           	
           	  this.nextElementSibling.innerHTML = focusMsg[i];//结果是每一个都弹出undefined
           }
  ```
  这样的问题是：
  
  - 每一个input的获得焦点事件都公用了一个i
  
  - 当focus事件执行时，此时for语句中的i值已经是inputslen，已经类似数组越界，所以，出现undefined、
  
解决问题：

  - 让每一个input的focus都有独自的空间对i值的使用，因此使用匿名函数创造一个新的作用域，使每个函数获得当前i值的一个快照
  
```javascript
  var inputsLen = inputs.length;  
       for( var i = 0;i < inputsLen;i++) {
       	 (function() {
       	 	var pos = i;
       	 	inputs[pos].onfocus = function() {
       	 		this.nextElementSibling.innerHTML = focusMsg[pos];
       	 	}
       	 })();
         }
    
```

 (2)给每一个input添加onblur事件，并调用不同的验证函数，使得代码看起来比较散乱，准备学习使用设计模式来结局这一问题。
 
 - 策略模式的学习
 
    将定义的一组算法封装起来，使其相互之间可以替换，封装的算法具有一定的独立性
  
