(function() {
   var inputs = document.getElementsByTagName('input');
   var tips = document.getElementsByTagName('p');
   var name1 = document.getElementById('name1');
   var submitbtn =document.getElementById('valite');
   var focusMsg = ["必填，字符数应为4~16位","必填，字符数应为4~16位","请确认密码",
       "填写正确的邮箱格式如：xxx@163.com","填写正确的联系方式"];       
   var inputsLen = inputs.length;  
       for( var i = 0;i < inputsLen;i++) {
       	 (function() {
       	 	var pos = i;
       	 	inputs[pos].onfocus = function() {
       	 		this.nextElementSibling.innerHTML = focusMsg[pos];
       	 	};
       	 })();
       	   /**使用这种方法就focusMsg[i] = undefinded
            /* inputs[i].onfocus = function() {           	
           	  this.nextElementSibling.innerHTML = focusMsg[i];*/
           }
    
  
   inputs[0].onblur = function() {
       validateName(event);
       return false;
   }
  
   inputs[1].onblur = function(event) {
       validatePwd(event);
       return false;
   }
 
   inputs[2].onblur = function(event) {
	  confirmPwd(event);
	return false;
   }
  
  inputs[3].onblur = function() {
	validateEmail(event);
	return false;
}
  
  inputs[4].onblur = function() {
 	validateTel(event);
 	return false;
 }
   //验证字符数是否在范围内，并有相应的样式提示
	var validateName = function(event) {
		 var name1Value = event.target.value.trim();
         if(GetLength(name1Value) == 0){
         	event.target.nextElementSibling.innerHTML ='姓名不能为空';           
             wrongStyle(event); 
             return false;          
        }
         else if(GetLength(name1Value) >= 4 && GetLength(name1Value) <= 16){
            event.target.nextElementSibling.innerHTML = '格式正确';
            rightStyle(event);     
             return false;
        }  
        else {
        event.target.nextElementSibling.innerHTML = '字符数应为4~16位';
        wrongStyle(event); 
        return false;        
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

 //验证密码  
var validatePwd = function(event) {
    var pwdValue = event.target.value.trim();
         if(GetLength(pwdValue) == 0){
         	event.target.nextElementSibling.innerHTML ='密码不能为空';           
            wrongStyle(event);           
        }
         else if(GetLength(pwdValue) >= 4 && GetLength(pwdValue) <= 16){
           event.target.nextElementSibling.innerHTML = '格式正确';
           rightStyle(event);      
             
        }  
        else {
        event.target.nextElementSibling.innerHTML = '字符数应为4~16位';
        wrongStyle(event);         
        }
  
};

 //确认密码
 var confirmPwd = function() {
    var pwdValue = inputs[1].value.trim();
	  var confirmPwdValue = event.target.value.trim();
	  if(confirmPwdValue == pwdValue) {
	  	  event.target.nextElementSibling.innerHTML = "密码输入一致";
	  	  rightStyle(event);	  	 
	  }else {
	  	  event.target.nextElementSibling.innerHTML = "密码输入不一致";
	  	  wrongStyle(event);
	  }
 };
 //验证邮箱
 var validateEmail = function(event) {
 	 var EmailValue = inputs[3].value.trim();
 	 var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	 if(EmailValue.match(pattern)){
 	 	  event.target.nextElementSibling.innerHTML = "格式正确";
 	 	  rightStyle(event);
	  	 
 	 }else {
 	 	  event.target.nextElementSibling.innerHTML = "邮箱格式不正确";
 	 	  wrongStyle(event);	  	  
 	 }
 };
 
var validateTel = function() {
	var telValue  = inputs[4].value.trim();
	var pattern =  /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
	if(telValue.match(pattern)) {
		 event.target.nextElementSibling.innerHTML = "格式正确";
		 rightStyle(event);
	  	 
	}else {
		event.target.nextElementSibling.innerHTML = "手机号码格式不正确";
		wrongStyle(event);	  	
	}
};
//正确时的样式函数
var rightStyle = function(event) {
	 event.target.nextElementSibling.style.color = 'lightgreen';
     event.target.style.border = '2px solid lightgreen';
};
//错误的样式函数
var wrongStyle = function(event) {
	 event.target.nextElementSibling.style.color = 'red';
     event.target.style.border = '2px solid red';
}
//提交按钮事件
 submitbtn.onclick = function() {
 	var tipsArr =[].slice.call(tips);  //将类数组转化为数组，并使用every函数
 	var isRight = function(element, index, array) { 		
 		return element.style.color =="lightgreen";
 	};
    if(tipsArr.every(isRight)) {
    	alert("表单填写正确");
    }else {
    	alert("表单填写信息有误");
    }    
 	
 	return false;
 }
})();