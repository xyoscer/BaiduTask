//表单工厂
var FormFactory = function(wapperId,type) {
	 this.wapper = document.getElementById(wapperId);
	 this.type = type;
}
FormFactory.prototype = {
	constructor : "formFactory",	
	createInput :function(formData) {	  
          
          var box = document.createElement('div');
           box.className = 'form-group';
           if(this.type == "form1") {
           	  box.innerHTML = '<label class="label1"'
           	              +'>' 
           	              + formData.label + '</label>'
                          +'<input type="'
                          + formData.type 
                          + '" id="' 
                          + formData.id 
                          +'"'
                          +'name="'
                          +formData.name
                          +'"'
                          + 'class="form-control"'
                          +'data-rule="'
                          +formData.rule
                          +'"'
                          +'data-success="'
                          +formData.success
                          +'"'
                          +'/>'; 
                   var p = document.createElement('p');
                   box.appendChild(p);  
           }
           else {
           	 box.innerHTML = '<label class="label"'
           	              +'>' 
           	              + formData.label + '</label>'
                          +'<input type="'
                          + formData.type 
                          + '" id="' 
                          + formData.id 
                          +'"'
                          +'name="'
                          +formData.name
                          +'"'
                          + 'class="form-control"'
                          +'data-rule="'
                          +formData.rule
                          +'"'
                          +'data-success="'
                          +formData.success
                          +'"'
                          +'/>'; 
                 var span = document.createElement('span');
                 box.appendChild(span);  
           }    
       
          this.wapper.appendChild(box);                   
          var inputObj = new ResponseInput(formData.id,formData.validators);
          return inputObj;

       },
       createButton :function(formData) {	  
          
          var box = document.createElement('div');
           box.className = 'form-group';
           box.innerHTML = '<button type="'                         
                          + formData.type 
                          + '" id="' 
                          + formData.id 
                          +'"'
                          + 'class="btn btnpos"'
                          +'>'
                          +formData.value
                          +'<button>';        
         
          this.wapper.appendChild(box);
                  
       }
} 