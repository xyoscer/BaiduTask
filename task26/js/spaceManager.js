/**
 * 宇宙管理员（上帝），使用单例模式创建宇宙管理员
 */
var spaceManager = {
    // 宇宙管理员（上帝）的记事本
    notebook: {
        //飞船列表
        spaceShipList: [],
        //飞船飞行管理ID
        spaceShipFlyManager: 0,
        //太阳能管理ID
        solarManager: 0
    },
    /**
     * 创建宇宙飞船
     * @param orbitId 轨道ID
     */
    createSpaceShip: function(orbitId) {
        //创建飞船对象并保存到数组
        var planet = document.getElementById('planet');
        var shipId = this.notebook.spaceShipList.push(SpaceShip(orbitId));
        //创建飞船主体div
        var spaceshipDiv = document.createElement("div");
        spaceshipDiv.id = "spaceship" + shipId;
        spaceshipDiv.className = "space-ship orbit-ship" + orbitId;
       // 创建能量条div
        var energyDiv = document.createElement("div");
        energyDiv.className = "energy";
        spaceshipDiv.appendChild(energyDiv);
        //创建能量文本div      
        var textDiv = document.createTextNode("100%");    
        spaceshipDiv.appendChild(textDiv);
        //将飞船显示到页面上
       planet.appendChild(spaceshipDiv);
    },
    //无线电，向宇宙中的飞船广播消息
    Mediator: {
        /**
         * 发送消息
         * @param message 消息
         */
        sendMessage: function(message) {
            //1秒后发送消息
            setTimeout(function() {
                //一定概率（30%）丢包
                if(Math.random() <= 0.3) {
                    log("[广播消息]:"+"向轨道" + (message.id + 1) + "发送的 " + message.command + " 指令丢包了！", "red");
                    return;
                }
                log("[广播消息]:"+"向轨道" + (message.id + 1) + "发送 " + message.command + " 指令成功！", "green");
                for(var i = 0; i < spaceManager.notebook.spaceShipList.length; i++) {
                    //已销毁的飞船不处理
                    if(spaceManager.notebook.spaceShipList[i]._destroyed) {
                        continue;
                    }
                    //向飞船发送消息
                    spaceManager.notebook.spaceShipList[i].telegraph.sendMessage(message);
                }
            }, 1000);
        },
        /**
         * 创建宇宙飞船
         * @param orbitId 轨道ID
         */
        createSpaceShip: function(orbitId) {
            //1秒后发送创建飞船消息
            setTimeout(function() {
                //一定概率（30%）丢包
                if(Math.random() <= 0.3) {
                    log("[广播消息]:"+"向轨道" + (orbitId + 1) + "发送的 create 指令丢包了！", "red");
                    return;
                }
                log("[广播消息]:"+"向轨道" + (orbitId + 1) + "发送 create 指令成功！", "green");
                spaceManager.createSpaceShip(orbitId);
            }, 1000);
        }
    }
};

