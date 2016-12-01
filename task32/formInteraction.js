function ResponseInput(id,validators){    
    //表单控件和提示控件
    this.inputObj= document.getElementById(id);
        //验证规则
    this.validators = validators;

    
}
ResponseInput.prototype.showTip = function(){               
        var checkValue = function() {
        	var flag = false;        	
        	var value = this.value.trim();        	 
               switch (this.id) {                 
                    case "username":  
                         flag = /^\S{2,11}$/.test(value);
                        break;
                    case "userpwd":
                         flag = /^\S{6,11}$/.test(value);              
                        break; 
                    case "email":
                         flag = /^(\S)+[@]{1}(\S)+[.]{1}(\w)+$/.test(value);                     
                        break; 
                    case "tel":
                          flag = /^[1][0-9]{10}$/.test(value); 
                          break;              
                }
               if(flag) {
                    this.style.borderBottom = "1px solid lightgreen";
                    this.nextElementSibling.innerHTML = this.dataset.success;
                            
                 }
               else {
                    this.nextElementSibling.style.color = 'red';
                    this.style.border = '1px solid red';
                    this.nextElementSibling.innerHTML = this.dataset.rule; 
                        
                    }
            };
            EventUtil.addHandler(this.inputObj,"blur",checkValue);
            
             
                
};

