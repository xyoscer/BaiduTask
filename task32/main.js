function createForm(type) {  
        //读取表单配置文件  
        var configData = document.getElementById('form1-config').value;
        try {
            var formData = JSON.parse(configData);
        }
        catch(err) {
            alert('JSON格式错误，请修改！');
            return;
        }
        //实例化表单
        var formFactory = new FormFactory('form1-factory',type);
        //替换生成不同表单样式，将原来的样式清空 
        formFactory.wapper.innerHTML = "";      
        for(var i in formData){ 
             if(Object.prototype.hasOwnProperty.call(formData,i)) {
                if(i == "submit") {
                    formFactory.createButton(formData[i]);
                }
                else {
                   var inputObj =  formFactory.createInput(formData[i]);
                   inputObj.showTip();
                   
               }            
           }        
        } 
}

function Init(){
   var createFormBtn = document.getElementById('form1-create');
   var type1 = createFormBtn.getAttribute('id').split("-")[0];
   var createFormBtn1 = document.getElementById('form2-create');
   var type2 = createFormBtn1.getAttribute('id').split("-")[0];
  // EventUtil.addHandler(createFormBtn,"click",createForm(type1));
   EventUtil.addHandler(createFormBtn,"click",function(){createForm(type1)}); 
   EventUtil.addHandler(createFormBtn1,"click",function(){createForm(type2)}); 
   
}

Init();
