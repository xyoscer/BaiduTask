/**
 * 定时器：飞行定时器
 * @type {function}
 */
var timer;
/**
 * 定时器：停止定时器
 * @type {function}
 */
var timer1;
//使用构造函数加原型模式创建对象
function Ship(orbit) {
	this.orbit = orbit;
	this.status = 0; //0表示停止，1表示开始
        //当前能源
    this.energy = 100;
        //已经销毁
    this.destroyed = false;
        //速度
    this.rate = 10;
        //所在位置（旋转角度)
    this.angle = 0;
	
}
//动力系统
Ship.prototype.driveStart = function(){
	 clearInterval(timer1);
     //使用箭头函数，来绑定上下文的this值
     timer = setInterval(() => {
         if(this.energy > 0) {
            this.status = 1;//开始飞行
            this.angle += this.rate;
            var ship = document.getElementById("spaceship"+this.orbit);
            ship.style.transform = `rotate(${this.angle}deg)`;
            this.consumeEnergy(2);
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
	/* var that = this; //使用that来保存当前的this对象     
     timer = setInterval(function () {
        if (that.energy > 0) {
             that.status = 1;
             that.angle += that.rate;
             var ship = document.getElementById("spaceship" + that.orbit);
                 //飞船的行驶轨道
             ship.style.transform = "rotate(" + that.angle + "deg)";
                that.consumeEnergy(2);
             if (that.getEnergy() <= 30) {
                   ship.firstElementChild.className = "emptyEnergy";
               }
             //能源显示
            ship.firstElementChild.style.width = that.getEnergy() + "%";
            ship.firstElementChild.innerHTML = that.getEnergy() + "%";
 
           } else { //飞船能量小于等于0自动停止行驶，并进行太阳能充电
                 clearInterval(timer);
                 that.driveStop(that.orbit);
              }
      }, 1000);
 */

};
Ship.prototype.driveStop = function() {
	this.status = 0;
    clearInterval(timer);
    var that = this; 
    timer1 = setInterval(function () {
         that.addEnergy(4); //添加能量
    var ship = document.getElementById("spaceship" + that.orbit);
        if (that.getEnergy() <= 30) {
                 ship.firstElementChild.className = "emptyEnergy";
        } else {
                 ship.firstElementChild.className = "energy";
           }
        //能源显示
     ship.firstElementChild.style.width = that.getEnergy() + "%";
     ship.firstElementChild.innerHTML = that.getEnergy() + "%";
   }, 1000);
 };
//能量系统
 Ship.prototype.addEnergy = function(num) {
 	this.energy += num;
     if (this.energy > 100) {
          this.energy = 100;
     }
 };

 Ship.prototype.consumeEnergy = function(num) {
    if (this.status == 1) {
            this.energy -= num;
      }
    if (this.energy <= 0) {
          this.status = 0;
          this.energy = 0;
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
//信号系统
 Ship.prototype.sendMessage = function(message) {
     if (message.id != this.orbit) {
                    return;
                }
                //执行命令
                switch (message.command) {
                    //开始飞行
                case 'start':
                    this.driveStart(this.orbit);
                    break;
                    //停止飞行
                case 'stop':
                    this.driveStop(this.orbit);
                    break;
                    //自爆
                case 'destroy':
                    this.destroy(this.orbit);
                    break;
                case 'rate':
                    this.rate = message.value;
                    break;
                }
            }

