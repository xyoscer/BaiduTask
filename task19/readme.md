####任务目的

      
    学习与实践JavaScript的基本语法、语言特性
    练习使用JavaScript实现简单的排序算法
    
####任务描述


     基于任务18的队列操作，对队列的数据量限制为60，当超过60个时，添加元素时alert出提示，限制输入的数字在10-100
     队列展现方式变化显示为柱状图，直接用高度表示数字大小
     实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来
     
####任务思路

      在上一题的基础上，在输入上增加过滤操作，在输出上，使用元素的值作为元素的高度，使用flex布局，在整个可视区内形成柱状图
      冒泡排序的算法：时间复杂度	O(n*n) 最优时间复杂度O(n)
      
         它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。
         走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
     冒泡排序算法的运作如下：
        比较相邻的元素。如果第一个比第二个大，就交换他们两个。
        对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
        针对所有的元素重复以上的步骤，除了最后一个。
        持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 ```javascript
 Array.prototype.bubble_sort = function() {
	var i, j, temp;
	for (i = 0; i < this.length - 1; i++)
		for (j = 0; j < this.length - 1 - i; j++)
			if (this[j] > this[j + 1]) {
				temp = this[j];
				this[j] = this[j + 1];
				this[j + 1] = temp;
			}
	return this;
};
```

####任务总结


  - 使用命名空间的方法，将一个对列的操作封装在一个对象中，调用起来比较方便
  
 ```javascript
   
   var items = [];//存放队列元素中的数组
   var queue = {	 

	//对列左近
	Lenqueue: function(ele) {
         items.unshift(ele);
	},
	//对列右近
	Renqueue: function(ele) {
		items.push(ele);
	},
	Ldequeue: function(){
		return(items.shift());       
	},
	Rdequeue: function(){
		return(items.pop());       
	},
	Size: function() {
		return items.length;
	}
   
};
     
 ```
 
 - 继续使用事件代理，为每一个button的父元素绑定点击事件，根据不同情况来响应各个button的事件，尽量的减少页面上的dom操作和事件监听
 
 - 学习使用ES6中的`字符串模板`，代替字符串拼接，操作很方便
 
    模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。模板字符串使用`反引号（``）`包裹，变量使用`${}`包裹
    
  使用字符串模板与不使用对比：：
    
```javascript
  function viewData(showArr,color){
	var text = "";	
	for(var i=0;i<showArr.length;i++){  
		//使用简单的字符串拼接 
		
		text += '<div title="'
		       +showArr[i]
		       +'"'
		       +'style = height:'
		       +showArr[i]*5
		       +'px;background:'
		       +color
		       +'>'
		       +'</div>';
		       
                    //使用字符串模板		
        text +=`<div title="${showArr[i]}" style="height:${showArr[i]*5}px;background:${color}"></div>`

	}
	queueDiv.innerHTML = "";
	queueDiv.innerHTML = text;   
	document.getElementById('num').value = ""; 
	
}
``` 
- 使用定时器`setInterval`完成排序算法的一步步显示

        使用两个嵌套if语句控制排序过程，外部if语句表示执行次数，内部if语句进行相邻两个数的比较，每两个相邻数字，通过比较，交换完之后，绘制一次图形，j++，然后通过定时器继续执行函数，当一次的相邻数字比较完之后，一个数字冒泡出来，i++，此时内部j=0,继续执行定时器函数，如此反复，直到i=数组的长度，定时器清除掉。
