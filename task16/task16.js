
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var cityInput = document.getElementById('aqi-city-input');
	var num = document.getElementById('aqi-value-input');
    var cityInputValue =cityInput.value.trim();
    var  numINputValue =num.value.trim();
  
    	if(!cityInputValue.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
    	 alert("城市名字必须为中英文字符");
    	 cityInput.focus();
    	 return;
    	}    
 
      if(!numINputValue.match(/^[0-9]+$/)){
    	alert("请输入整数！")
    	num.focus();
    	return;
    }

   
    return aqiData[cityInputValue] =numINputValue;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
   var table = document.getElementById('aqi-table');
   var tableItem = "<tr>"+"<td>"+"城市"+"</td>"+"<td>"+"空气质量"+"</td>"+"<td>"+"操作"+"</td>";


   	for(var pro in aqiData){

   	tableItem+="<tr>"+"<td>"+pro+"</td>"+"<td>"+aqiData[pro]+"</td>"+"<td>"+"<button data-city='"+pro+"''>"+"删除"+"</button>"+"</td>";
   }

   if(pro){
   	table.innerHTML = tableItem;
   }else{
   	  table.innerHTML = "<p>"+"没有内容显示"+"</p>";
   }
  
   
   
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
  // do sth.
  var event = window.event||event;
  var target = event.target||event.srcElement;  
  if(target.nodeName === 'BUTTON'){
      delete aqiData[target.dataset.city];
        
  }
 /* delete aqiData[cityInputValue] ;*/
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
var add_btn = document.getElementById('add-btn');
var tableBtn = document.getElementById('aqi-table');
    add_btn.addEventListener("click",addBtnHandle,false);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
     tableBtn.addEventListener("click",delBtnHandle,false);
}

window.onload = function(){
	init();
}
