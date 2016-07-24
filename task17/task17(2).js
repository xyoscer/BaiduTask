/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/
/**
   （1）首先使用pageState这个对象记录当前页面的选项，根据不同选项来切换数据显示
   （2）使用时期函数，随机生成测试数据
   （3）使用innerHTML给页面实时添加渲染的内容图表
    （4）使用随机数，生成随机的不同颜色给条形图
    （5）使用title属性，来实现当鼠标移动到某个层面上，显示title内容的提示框
    （6）使用事件代理将各个radio的变化事件函数，绑定到其父元素上
    （7）使用new Date(item)).getDay() == 6来某一天是周几，如果是6,就说明此时是日历上的完整一周
    （8）使用getMonth()来统计月份
     最终获得月平均量，周平均量，天平均量数值，通过柱形图显示出来

*/  
//跨浏览器事件绑定
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else  {
        ele["on" + event] = hanlder;
    }
}
// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}
var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};
// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: "北京",
  nowGraTime: "day"
}
var flag = 0;//0，表示当前是通过改变时间，1.表示改变城市
var formGraTime = document.getElementById('form-gra-time');

var citySelect = document.getElementById('city-select');
var aqiChartWrap = document.getElementsByClassName('aqi-chart-wrap')[0];

/**
 * 渲染图表
 */
function renderChart() {	
	var color = '',text = '';
   text += "<div class='title'>" + pageState.nowSelectCity + "市01-03月"+pageState.nowGraTime+"平均空气质量报告</div>";
	for (var item in chartData) {
		color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    text += '<div title="'+item+":"+chartData[item]+'"  style="height:'+chartData[item]+'px; background-color:'+color+'"></div>';
   
}
  aqiChartWrap.innerHTML = text;
}

/**
  radio，select变化时的处理函数
 * 根据选择的flag，以及targetValue值来确定进行切换显示，flag=0表示是根据选择
 的日，周，月，进行切换，flag=1表示是根据选择的城市来进行切换。
 */
 function showChange(flag,targetValue){
  if(flag == 0){
    if (pageState.nowGraTime !== targetValue) {  
        pageState.nowGraTime = targetValue;
        // 设置对应数据
       initAqiChartData();
       // 调用图表渲染函数
       renderChart();
    }
   
  }
  if(flag == 1){
    if (pageState.nowSelectCity !== targetValue) {
        pageState.nowSelectCity = targetValue;
        // 设置对应数据
        initAqiChartData();
        // 调用图表渲染函数
         renderChart();
     } 
  }
    
  

 }
  
function graTimeChange(event) {
  // 根据点击的获得的不同value值，进行选择执行哪个case语句
  var event = event||window.event;
  var target = event.target||event.srcElement; 
  var selectValue = target.value;
  switch(selectValue){
    case "day":
          showChange(flag,selectValue);
       break;
    case "week":
         showChange(flag,selectValue);
       break;
    case "month":
         showChange(flag,selectValue);
       break;

}

  } 

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 根据flag的值来确定，怎么样执行showChange()函数
  var city = this.value;   
  showChange(1,city);
 
}

/**
 * 初始化日、周、月的radio事件，将该各个radio的事件委托给父元素，只绑定一次事件
   当点击时，调用函数graTimeChange，来确定变化时的处理函数
 */
function initGraTimeForm() {  

  addEventHandler(formGraTime,'click',graTimeChange);
  

  
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var cityList = '';
  for (var i in aqiSourceData) {
  	cityList += '<option>' + i +'</option>';
  }
  citySelect.innerHTML = cityList;
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
 addEventHandler(citySelect,'change',citySelectChange)
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式,现在数据都在aqiSourceData[]中
  // 处理好的数据存到 chartData 中
  var nowCityData = aqiSourceData[pageState.nowSelectCity];
  //nowCityData是确定的一个城市的92天降水数组，key是日期，nowCityData[key]是降水量

  if (pageState.nowGraTime == 'day') {
    chartData = nowCityData;
  }
  if (pageState.nowGraTime == 'week') {
    chartData = {};
    var countSum=0, daySum=0, week=0;
    for (var item in nowCityData) {
      countSum += nowCityData[item];
      daySum ++;
      if ((new Date(item)).getDay() == 6 ) {
        week ++;
        chartData['第'+week+'周'] = Math.floor(countSum/daySum);;
        countSum = 0;
        daySum = 0;
      }
    }
    if (daySum!=0) {
      week ++;
      chartData['第'+week+'周'] = Math.floor(countSum/daySum);
    }//保证最后一周若不满也能算一周
  }
  if (pageState.nowGraTime == 'month') {
    chartData = {};
    var countSum=0, daySum=0, month=0;
    for (var item in nowCityData) {
      countSum += nowCityData[item];
      daySum ++;
      if ((new Date(item)).getMonth() !== month) {
        month ++;
        chartData['第'+month+'月'] = Math.floor(countSum/daySum);
        countSum = 0
        daySum = 0;
      }
    }
    if (daySum != 0) {
      month ++;
      chartData['第'+month+'月'] = Math.floor(countSum/daySum);
    }
  }
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
  renderChart();
}

init();