/**
 * 获取时间
 */
function getTime() {
    var date = new Date(); 
    var year = date.getFullYear();  
    var month = date.getMonth()+1;   
    var day = date.getDay();   
    var hour = date.getHours();   
    var minute = date.getMinutes();  
    var second = date.getSeconds(); 
    var millisecond = date.getMilliseconds();
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "." + millisecond;
}
/**
 * 控制台输出
 * @param message 消息
 * @param colour 颜色
 */
var consoleText = document.getElementById("console-text");
function log(message, colour) {   
    var p = document.createElement("p");
    p.innerHTML = getTime() + " ";
    var span = document.createElement("span");
    span.innerHTML = message;
    span.style.color = colour;
    p.appendChild(span);
    consoleText.appendChild(p);
    console.log("%c" + message, "background-color:" + colour);
   
}

/**
 * 操作面板
 */
(function() {
    //按钮事件
    var buttonClick = function() {      
        var orbit = parseInt(this.parentNode.dataset.id);
        var message = this.dataset.type;
        switch(message) {
            case 'create':             
                    commander.createSpaceShip(orbit);                   
                    this.nextElementSibling.disabled = false;
                    this.nextElementSibling.nextElementSibling.disabled = false;
                    this.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;
                    this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;
                    this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;          
                   
              
                break;                
            case 'drive':
                    commander.start(orbit);               
                break;
            case 'stop':
                    commander.stop(orbit);
                break;
            case 'destory':
                    commander.destroy(orbit);   
                    this.disabled = true;               
                    this.previousElementSibling.disabled = true;                   
                    this.previousElementSibling.previousElementSibling.disabled = true;
                    this.previousElementSibling.previousElementSibling.previousElementSibling.disabled = false;
                    this.nextElementSibling.value = 1;                    
                    this.nextElementSibling.nextElementSibling.disabled = true;
                    
            case 'rate':
                var value = parseInt(this.previousElementSibling.value);
                commander.setRate(orbit, value);
                break;
        }
    };
    //绑定按钮事件
    var buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", buttonClick);
    }
})();