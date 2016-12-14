//跨浏览器事件绑定
function addEventHandler(ele, event, hanlder) {
   if(ele.addEventListener) {
   	   ele.addEventListener(event,hanlder,false);
   }else if(ele.attachEvent) {
   	   ele.attachEvent("on"+event,hanlder);
   }else {
       ele["on" + event] = hanlder;
   }
}
var  show = document.getElementById('show');
var search = document.getElementById('search');
var textarea = document.getElementById('inputValue');
addEventHandler(search,"click",showContent);
addEventHandler(textarea,"change",showOriginValue);
//对输入的字符串进行分割处理
function inputDeal(inputValue) {
	 var inputArray = [];	 
     inputArray = inputValue.split(/[,，；;、.。‘“：:'\s\n]+/);
    return inputArray;
}

function showOriginValue() {
	var text = '';
	var  inputValue = document.getElementById('inputValue').value.trim();
	var  dealValue =  inputDeal(inputValue);
	var showOrigin = document.getElementById('showOrigin');
	for(var i=0,len=dealValue.length; i<len; i++) {		
		 text += '<span>'
		      +dealValue[i]
		      +'</span>';
	}
	 showOrigin.innerHTML = text;
}
//查询这些字符串进行模糊匹配
function showContent() {
    var  text = '';
    var showOrigin = document.getElementById('showOrigin');	
	var  inputValue = document.getElementById('inputValue').value.trim();
	     showOriginValue(inputValue);
	var  searchValue = document.getElementById('searchValue').value;//获得搜索框的搜索值	
	var spans = document.getElementsByTagName('span');
	var spansArr = Array.from(spans);//ES6数组方法将类数组转化为数组
	spansArr.forEach(function(ele,index,array) {
		 var spanContent = ele.innerHTML;		 
		 var Reg = new RegExp(searchValue,"g");
		 var temp = `<mark>${searchValue}</mark>`
		 var newContent = spanContent.replace(Reg,temp);
		 	   ele.innerHTML = newContent;	 

		 });     

}	