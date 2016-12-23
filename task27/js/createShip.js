//使用构造函数加原型模式创建对象
function Ship(orbit,flyrate,dischargerate,chargerate) {
	this.orbit = orbit; 
    this.currState = "stop"; //stop表示停止，fly表示飞行        
    this.energy = 100;//当前能源        
    this.destroyed = false;//已经销毁       
    this.flyrate = +flyrate || 30;  //飞行速度速度,"+"把数字字符串变为数字  
    this.chargerate = +chargerate || 5; //充电速率
    this.discharge = +dischargerate || 2; //飞船耗电速率
    this.angle = 0; //通过旋转的角度来控制速度 所在位置（旋转角度)
    this.timer; //确保互相在定时器的控制下运行不受影响
	
}

//动力系统--开始飞行
Ship.prototype.driveStart = function() {
	 clearInterval(this.timer);
     //使用箭头函数，来绑定上下文的this值
     this.timer = setInterval(() => {
         if(this.energy > 0) {           
           this.angle += parseInt(this.flyrate);          
            var ship = document.getElementById("spaceship"+this.orbit);
            ship.style.transform = `rotate(${this.angle}deg)`;
            this.consumeEnergy(this.discharge);
            if(this.energy <= 30) {
                ship.firstElementChild.className = "emptyEnergy";
            }
            ship.firstElementChild.style.width = this.energy + "%";
            ship.firstElementChild.innerHTML = this.energy + "%";
         }else{
            clearInterval(this.timer);
            this.driveStop(this.orbit);
         }
     },1000);	

};
//动力系统--停止飞行
Ship.prototype.driveStop = function() {	
    clearInterval(this.timer);  
    this.timer = setInterval(() => {
        this.addEnergy(this.chargerate);
        var ship = document.getElementById("spaceship" + this.orbit);
        if (this.energy <= 30) {
                 ship.firstElementChild.className = "emptyEnergy";
        } else {
                 ship.firstElementChild.className = "energy";
           }
        //能源显示
     
     ship.firstElementChild.style.width = this.energy + "%";
     ship.firstElementChild.innerHTML = this.energy + "%"
    },1000);
   
 };

//能量系统 -- 增加能量
 Ship.prototype.addEnergy = function(num) {
 	this.energy += num;
     if (this.energy > 100) {
          this.energy = 100;
     }
 };
//能量系统 -- 耗费能源
 Ship.prototype.consumeEnergy = function(num) {
    if (this.currState == "fly") {
            this.energy -= num;
      }
    if (this.energy <= 0) {          
          this.energy = 0;
          this.currState ="stop";
     }
 };

 
//自毁系统
 Ship.prototype.destroy = function() {
 	 this.destroyed = true;
     var ship = document.getElementById("spaceship" + this.orbit);
     var planet = document.getElementById('planet');
         planet.removeChild(ship);
 };

//状态系统 使用状态模式，封装飞船的状态
Ship.prototype.stateManager = function() { 
    //创建一个状态对象，保存状态的变量（start,stop,destroy）,
    //封装好每种状态对应的状态     
        var states = {
             start: (state) => {this.currState = "fly"; this.driveStart();},
             stop: (state) => {this.currState = "stop"; this.driveStop();},
             destroy: (state) => {this.currState = "destroy"; this.destroy();}
        };
        var changeState = (state) => {states[state]();}
      
     //返回接口对象
        return {
            changeState: changeState
        };
};
//信号系统--接收信息
 Ship.prototype.receiveMessage = function(msg) {
    var message = this.Adapter(msg);//接收来的信息进行先解码
   
     if (message.id != this.orbit) {
            return;
        }   
    this.stateManager().changeState(message.command);
   }     
//信号系统--信息解码
Ship.prototype.Adapter = function(msg) {
    var message = {}; //保存转化过后的对象形式        
    var shipNum = msg.substr(0,2);
    var command = msg.substr(2,2);   

    switch(shipNum) {
         case "00": message.id = 0; break;
         case "01": message.id = 1; break;
         case "10": message.id = 2; break;
         case "11": message.id = 3; break;

        }
    switch(command) {
        case "00": message.command = "start"; break;
        case "01": message.command = "stop";  break;
        case "10": message.command = "destroy"; break;
        }
    return message;

}       
          
 

