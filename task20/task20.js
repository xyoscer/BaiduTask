
var  show = document.getElementById('show');
var search = document.getElementById('search');

 
//跨浏览器事件绑定
function addEventHandler(ele, event, hanlder) {
   if(ele.addEventListener){
   	   ele.addEventListener(event,hanlder,false);
   }else if(ele.attachEvent){
   	   ele.attachEvent("on"+event,hanlder);
   }else{
       ele["on" + event] = hanlder;
   }
}

addEventHandler(search,"click",showContent);

function showContent(){

	var  inputValue = document.getElementById('inputValue').value.trim();
	var  searchValue = document.getElementById('searchValue').value;
	
	 show.innerHTML =inputValue;
	 show.innerHTML=hightKey(searchValue,"show");
//查找字符的高亮显示
	 function hightKey(key,id){
		  var arr=null;
		  var regStr=null;
		  var inputContent=null;
		  var Reg=null;
		  var newContent=null;
		  var theObj=document.getElementById(id);
		       arr=key.split(/\s+/);//使用空格将查找字符串转化为字符串数组
		       regStr=createExp(arr);//对查找的字符串数组进行处理
		       inputContent=theObj.innerHTML;
		       Reg=new RegExp(regStr,"g");//创建一个匹配regStr字符串的表达式
		       if(Reg.test(inputContent)){
		       	//用查找的字符串加上样式来替换原串中存在的字符串
		       	   return newContent=inputContent.replace(Reg,"<span>$1</span>");
		       }
		   else{
		      	return newContent = inputContent+"<span>"+"没有找到匹配字符"+"</span>";
		   }
   }
 //处理查找的字符串数组
	function createExp(arry){
       var str="";
       for(var i=0;i<arry.length;i++) {
       if(i!=arry.length-1){
           str=str+arry[i]+"|";//多个查找字符串使用或选择模式拼装
         }
       else {
           str=str+arry[i];
        }
    }
       return "("+str+")";//返回最后拼装好的查找字符串的一个分组
   }

	/**
	  记录查找字符串中的第一个字符出现的位置，并根据这个位置算起，将后面的查找字符串
      的字符也进行高亮显示，这种情况只能匹配最新一次出现的相同字符，而且查找串的长度+第一次
      出现的字符的位置必须小于原串的长度。
    */
	/*arr1 = inputValue.split('');
	arr2 = searchValue.split('');
	for(var i=0;i<arr1.length;i++){	
	    text += "<span>"+arr1[i]+"</span>";		   
		  show.innerHTML =text;
	}
	  for(var j=p;j<arr2.length+p;j++){
	    	
	  		 span[j].style.color = "red";
	   	 }*/
            
          
	 //对查找的字符按照单个字符进行处理，每一个字符去与原串进行比较，相同则进行高亮显示

	/*arr1 = inputValue.split('');
	arr2 = searchValue.split('');
	for(var i=0;i<arr1.length;i++){	
	    text += "<span>"+arr1[i]+"</span>";		   
		  show.innerHTML =text;
	}
   for(var j= 0;j<span.length;j++){
   	      for(var i=0;i<arr2.length;i++){
   	      	  if(arr2[i]==span[j].innerHTML)
                 span[j].style.color = "red";
   	      }
      
     }
	*/
     
}