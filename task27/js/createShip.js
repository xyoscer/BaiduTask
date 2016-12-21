var timer; //飞行定时器
var timer1; //停止定时器

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
	
}
//动力系统
Ship.prototype.driveStart = function(){
	 clearInterval(timer1);
     //使用箭头函数，来绑定上下文的this值
     timer = setInterval(() => {
         if(this.energy > 0) {           
           this.angle += parseInt(this.flyrate);          
            var ship = document.getElementById("spaceship"+this.orbit);
            ship.style.transform = `rotate(${this.angle}deg)`;
            this.consumeEnergy(this.discharge);
            if(this.getEnergy() <= 30) {
                ship.firstElementChild.className = "emptyEnergy";
            }
            ship.firstElementChild.style.width = this.getEnergy() + "%";
            ship.firstElementChild.innerHTML = this.getEnergy() + "%";
         }else{
            clearInterval(timer);
            this.driveStop(this.orbit);
         }
     },1000);	

};

Ship.prototype.driveStop = function() {	
    clearInterval(timer);  
    timer1 = setInterval(() => {
        this.addEnergy(this.chargerate);
        var ship = document.getElementById("spaceship" + this.orbit);
        if (this.getEnergy() <= 30) {
                 ship.firstElementChild.className = "emptyEnergy";
        } else {
                 ship.firstElementChild.className = "energy";
           }
        //能源显示
     ship.firstElementChild.style.width = this.getEnergy() + "%";
     ship.firstElementChild.innerHTML = this.getEnergy() + "%";
    },1000);
   
 };

//能量系统
 Ship.prototype.addEnergy = function(num) {
 	this.energy += num;
     if (this.energy > 100) {
          this.energy = 100;
     }
 };

 Ship.prototype.consumeEnergy = function(num) {
    if (this.currState == "fly") {
            this.energy -= num;
      }
    if (this.energy <= 0) {          
          this.energy = 0;
          this.currState ="stop";
     }
 };

 Ship.prototype.getEnergy = function() {
 	return this.energy;
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
//信号系统
 Ship.prototype.receiveMessage = function(message) {
     if (message.id != this.orbit) {
            return;
        }
    if(message.command == "rate") {
        this.rate = message.value;
     }
        this.stateManager().changeState(message.command);
               
          
    }

