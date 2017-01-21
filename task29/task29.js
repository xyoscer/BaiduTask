(function(){
   var name1 = document.getElementById('name1');
	 var tip  = document.getElementById('tip');
	 var validateBtn = document.getElementsByClassName('btn');
/*	validateBtn[0].onclick = function() {
		validate();
	    return false;//阻止默认行为，不返回false页面又被重新刷新
	}*/

	 // 这种监听事件方法不起作用,该参数要求的第二个参数要么是函数所有，要么是函数声明
	 validateBtn[0].addEventListener("click",validate,false);
	
   //验证字符数是否在范围内，并有相应的样式提示
	 function validate() {
		 var name1Value = name1.value.trim();
         if(GetLength(name1Value) == 0){
            tip.innerHTML = '姓名不能为空';
            tip.style.color = 'red';
            name1.style.border = '2px solid red';
           
        }
         else if(GetLength(name1Value) >= 4 && GetLength(name1Value) <= 16){
            tip.innerHTML = '格式正确';
            tip.style.color = 'lightgreen';
            name1.style.border = '2px solid lightgreen';
             
        }  
        else {
           tip.innerHTML = '字符数应为4~16位';
           tip.style.color = 'red';
           name1.style.border = '2px solid red';
         
        }
	};
   //取得表单中字符的长，中文按2个字符算，英文算1
   var GetLength = function(str)
   {  //中文及字符方法的正则表达式
   	 var chineseReg = /[\u4E00-\u9FA5\uF900-\uFA2D]/g;   //匹配中文汉子
   	 //匹配中文符号 。 ；  ， ： “ ”（ ） 、 ？ 《 》
   	 var chineseChar=/[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]/g;	 
    var realLength = 0;
    for (var i = 0; i < str.length; i++)
    {   if(str.match(chineseReg)||str.match(chineseChar)) {
            realLength += 2;
        }else{
        	  realLength += 1;
        }  
       
    }
    return realLength;
};
}());
	

	
	
