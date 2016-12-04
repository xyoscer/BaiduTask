##任务目的：

    深入学习JavaScript的事件机制及DOM操作
    学习事件代理机制
    学习简单的表单验证功能
    学习外部加载JavaScript文件
    
##任务描述：

       用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
       用户输入的城市名必须为中英文字符，空气质量指数必须为整数
       用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
       用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
       用户可以点击表格列中的“删除”按钮，删掉那一行的数据
       
       
##任务总结：

      - 学习trim()方法：trim() 方法会删除一个字符串两端的空白字符。
         在这个字符串里的空格包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。
         str.trim()，trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。
         
 如果 trim() 不存在，可以在所有代码前执行下面代码
         
  ```javascript
       if (!String.prototype.trim) {
          String.prototype.trim = function () {
             return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
       };
    }
 ```
     replace()方法使用一个替换值（replacement）替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串
     上面的例子就是用''替换字符串中的空白字符
     
   - 正则表达式
   
            匹配中英文字符使用 var pattern = /^[A-Za-z\u4E00-\u9FA5]+$/
            
            匹配整数   var  pattern = /^[0-9]+$/
            
    - 正则表达式的match()：支持正则表达式的 String 对象的方法；test()：正则对象的方法
   
          test() 方法用于检测一个字符串是否匹配某个模式.返回值是 true 或 false。RegExpObject.test(string),使用正则表达式调用
          参数为要检测的字符串。
          
          match()方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。stringObject.match(regexp),使用字符串调用，参数为正则
          表达式
          
- for -in 遍历对象：列出一个对象的所有属性（包括自有的和继承的），遍历自有属性的最佳方法是：
  
    - 结合for-in和hasOwnProperty()
      
 ```javascript
       for(var pro in aqiData){
        if(Object.prototype.hasOwnProperty.call(aqiData,pro)) {
           tableItem+="<tr>"+"<td>"+pro+"</td>"+"<td>"+aqiData[pro]+"</td>"+"<td>"+"<button data-city='"+pro+"''>"+"删除"+"</button>"+"</td>";
        }
   	  
   }
```
  - Object.keys(obj) 返回obj的所有（自有）可枚举的属性键
  - Object.getOwnPropertyNames(obj) 返回obj所有自有的属性键
  
  - 删除对象的某个属性 
  
        delete操作符从一个对象中完成移除一个属性（键值对），删除一个属性 delete obj.foo 这个foo属性就不存在了
        
  本示例的删除表格数据，使用在渲染表格时，给每一个行添加一个自定义属性<button data-city='"+pro+"''>"+"删除"+"</button>
  所以，删除时，直接使用delete aqiData[target.dataset.city];就可以把这一个对象的这个属性删除掉，然后在页面上，在进行重新渲染表格
        
        
- 学习事件代理：删除表格的每一行记录，不必给么一行都监听一个删除事件，而是通过事件冒泡的机制，直接给父元素table上监听删除事件，然后根据
  点击判断需要删除哪一行，这样明显提高了性能。
  
               事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务，
               
               事件代理核心是：事件冒泡以及目标元素。
               
           事件代理的用处是：对于Javascript，添加到页面的事件程序数量会直接关系到页面的整体运行性能，在javascript中每个函数都是对象，都会在内存中占用一定的空间，对象越多性能就越差，还有，DOM操作是十分消耗性能的，添加多个事件就会增多DOM的访问次数，所以会延迟整个页面的交互就绪事件。而事件代理的核心思想，就是通过尽量少的绑定，去监听尽量多的事件。从而达到，从一方面提升性能。
  
- 学习使用data-自定义属性
