
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

function inputDeal(inputValue){
	 var inputArray = [];
    inputArray = inputValue.split(/[,，;；、\s\n]+/);
    return inputArray;
}
function showContent(){
    var text = "",text1 = "";
	var  inputValue = document.getElementById('inputValue').value.trim();
	var  searchValue = document.getElementById('searchValue').value;
	var dealValue =  inputDeal(inputValue);
	for(var i=0;i<dealValue.length;i++){		
		 text+="<span>"+dealValue[i]+"</span>";
	}
	 show.innerHTML = text;
	 var spanNum = show.getElementsByTagName('span');
	  hightKey(searchValue,"show");
      
	 function hightKey(key,id){
		  var arr=null;
		  var regStr=null;
		  var inputContent=[];
		  var Reg=null;
		  var newContent=null;
		   var spanNum = show.getElementsByTagName('span');
		  var theObj=document.getElementById(id);
		       arr=key.split(/\s+/);
		       regStr=createExp(arr);

		  for(var j = 0;j<spanNum.length;j++){
              inputContent[j] = spanNum[j].innerHTML;
               Reg=new RegExp(regStr,"g");		     
		       inputContent[j] = inputContent[j].replace(Reg,"<p>$1</p>");
		       text1 += "<span>"+inputContent[j]+"</span>"; 		 
		   }         
           show.innerHTML=text1;      
		      
   }
 
	function createExp(arry){
       var str="";
       for(var i=0;i<arry.length;i++) {
       if(i!=arry.length-1){
           str=str+arry[i]+"|";
         }
       else {
           str=str+arry[i];
        }
    }
       return "("+str+")";
   }

}	