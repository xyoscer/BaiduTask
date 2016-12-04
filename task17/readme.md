####任务目的


       接触更加复杂的表单对象
       实现页面上的一个完整交互功能
       用DOM实现一个柱状图图表
       
       
####任务要求

    var aqiSourceData = {
      "北京": {
           "2016-01-01": 10,
           "2016-01-02": 10,
           "2016-01-03": 10,
           "2016-01-04": 10
           ...
       }，
       "西安": {
            "2016-01-01": 10,
            "2016-01-02": 10,
            "2016-01-03": 10,
            "2016-01-04": 10
       },
       ...
};
   根据给定的函数，生成这样的数据，并通过radio 和select来选取，获得某个城市，每天的污染量，每月的污染量，并用DOM实现柱状图显示出来
    
####任务思路

       根据给定的代码框架，函数名字，确定了每部分功能
       function init() {
         initGraTimeForm();
         //初始化日、周、月的radio事件，将该各个radio的事件委托给父元素，只绑定一次事件
           当点击时，调用函数graTimeChange，来确定变化时的处理函数
         initCitySelector();
         //初始化城市Select下拉选择框中的选项,读取生成aqiSourceData对象中的城市，设置下拉列表中的城市选项
         initAqiChartData();
         //初始化图表需要的数据格式,将生成的数据，根据不同日，周，月，进行处理
          是day：获得aqiSourceData对象中的城市，以及数据信息，保存在显示数据的对象对象中
          是week:使用if(new Date(data)).getDay() == 6 )来计算一周的平均数据量，保存在显示数据的对象对象中
          是month：使用 if ((new Date(data)).getMonth() !== month)来判断是否属于一个月，来计算一个月的平均数量，保存在显示数据的对象对象中
         renderChart();
         //将保存在对象中的信息，以柱状图的形式显示在页面，遍历对象，使用innerHTML显示在页面
      }


       
####任务笔记

  - 学习了时间函数
     - var dat = new Date("2016-01-01");
     
         Date()函数，创建Date实例用来处理时间和日期，Date基于1970年1月1日起的毫秒数
         
         new Date();
           Sun Dec 04 2016 19:19:05 GMT+0800 (中国标准时间)
           
        new Date(133333);
          Thu Jan 01 1970 08:02:13 GMT+0800 (中国标准时间)
          
       new Date('2016-12-4');
           Sun Dec 04 2016 00:00:00 GMT+0800 (中国标准时间)
           
    - Date.prototype 方法
    
           
               Getter方法
               Date.prototype.getFullYear():根据本地时间返回指定日期对象的`年份`（四位数年份时返回四位数字）。
               Date.prototype.getMonth():根据本地时间返回指定日期对象的月份（0-11）。
               Date.prototype.getDate():根据本地时间返回指定日期对象的`月份中`的第几天（1-31）。
               Date.prototype.getDay():根据本地时间返回指定日期对象的`星期中`的第几天（0-6）。
               Date.prototype.getHours()：根据本地时间返回指定日期对象的`小时`（0-23）。
              Setter方法
               Date.prototype.setFullYear():根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）
               Date.prototype.setDate():根据本地时间为指定的日期对象设置月份中的第几天
               Date.prototype.setMonth():根据本地时间为指定日期对象设置月份
  
- 使用innerHTML渲染页面，根据数据绘制柱状图，利用`flex布局`，排列柱状图，根据数据的量。设置为style = "height = "px，来画出柱状图
- 学习了解了title属性的作用：来实现当鼠标移动到某个层面上，显示title内容的提示框

      title 属性规定关于元素的额外信息。这些信息通常会在鼠标移到元素上时显示一段工具提示文本（tooltip text）。
