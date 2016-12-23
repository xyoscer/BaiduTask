var Mediator =  {

	notebook: {        
        spaceShipList: [], //飞船列表       
    },//保存宇宙中所有的飞船，订阅中介者的对象

    //中介者可以执行的操作，发送各种消息 ,消息的传播速度为300ms,
    //传播失败率为10%；
	sendMessage: function(message){
       setTimeout(function() {                       
                if(Math.random() <= 0.1) { //一定概率（10%）丢包
                    log("[广播消息]:"+"向轨道" + (message.id + 1) + "发送的 " + message.command + " 指令丢包了！,指令将继续发送", "red");
                    Mediator.sendMessage(message);
                }else {
                	log("[广播消息]:"+"向轨道" + (message.id + 1) + "发送 " + message.command + " 指令成功！", "green");
                	if(message.command == "create") {
                		Mediator.createnewShip(message);
                	}else { //向宇宙中的飞船广播消息指令
                        var transformMsg = Mediator.Adapter.encoder(message);
                       Mediator.notebook.spaceShipList.forEach(ele => ele.receiveMessage(transformMsg));
                	}                	
                }             
                
            }, 300);

       },
   createnewShip: function(message){
		var orbitId = message.id;
        var flyrate = message.flyrate;
        var dischargerate = message.dischargerate;
        var chargerate = message.chargerate;
        //创建飞船对象并保存到数组
        var planet = document.getElementById('planet');
        Mediator.notebook.spaceShipList.push(new Ship(orbitId,flyrate,dischargerate,chargerate));
        //创建飞船主体div
        var spaceshipDiv = document.createElement("div");
        spaceshipDiv.id = "spaceship" + orbitId;
        spaceshipDiv.className = "space-ship orbit-ship" + orbitId;
       // 创建能量条div
        var energyDiv = document.createElement("div");
        energyDiv.className = "energy";
        spaceshipDiv.appendChild(energyDiv);
        //创建能量文本节点     
        var textDiv = document.createTextNode("100%");    
        energyDiv.appendChild(textDiv);
        //将飞船显示到页面上
       planet.appendChild(spaceshipDiv);  
	},
    //将指挥关的json格式转换为二进制格式
    Adapter: {
      encoder: function(message) {
        var msg = "";
        switch(message.id.toString()) {
            case '0': 
              msg += "00";
              break;
            case '1':
               msg += "01";
               break;
            case '2':
               msg += "10";
               break;
            case '3':
                msg += "11";
                break;
        }
        switch(message.command) {
           
            case 'start':
               msg += "00";
               break;
            case 'stop':
               msg += "01";
               break;
            case 'destroy':
               msg += "10";
               break;
        }
        

      return msg;
      }
    }
	
  
}