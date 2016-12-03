##任务13：本任务完成的功能为：
### 用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

## 本任务总结：
###(1)获得文本框值使用.document.getElementById("inputA").value;
###(2)添加点击事件使用：addEventListener("click",handle,false);
###(3)页面添加新内容使用：innerHTML,innerHTML  

        属性可以用来获取、修改指定元素内的所有标签和内容
        innerHTML指的是从对象的起始位置到终止位置的全部内容,包括Html标签。
        innerText指的是从起始位置到终止位置的内容,但它去除Html标签。
        同时，innerHTML 是所有浏览器都支持的，innerText 是IE浏览器和chrome 浏览器支持的，Firefox浏览器不支持。
        outerHTML:操作开始标签与结束标签之间的内容，包括标签与文本，还有对象的标签。