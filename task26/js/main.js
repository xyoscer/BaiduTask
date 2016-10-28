/**
 * 获取时间
 */
function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
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
 */ (function () {
    //按钮事件
    var buttonClick = function (event) {
        var event = event || window.event;
        var target = event.target || event.srcElement;
        var orbit = parseInt(target.parentNode.dataset.id);
        var message = target.dataset.type;
        switch (message) {
        case 'create':
            commander.createSpaceShip(orbit);
            target.nextElementSibling.disabled = false;
            target.nextElementSibling.nextElementSibling.disabled = false;
            target.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;
            target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;
            target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.disabled =
                false;
            break;
        case 'drive':
            commander.start(orbit);
            break;
        case 'stop':
            commander.stop(orbit);
            break;
        case 'destory':
            commander.destroy(orbit);
            target.disabled = true;
            target.previousElementSibling.disabled = true;
            target.previousElementSibling.previousElementSibling.disabled = true;
            target.previousElementSibling.previousElementSibling.previousElementSibling.disabled = false;
            target.nextElementSibling.value = 1;
            target.nextElementSibling.nextElementSibling.disabled = true;
            break;
        case 'rate':
            var value = parseInt(target.previousElementSibling.value);
            commander.setRate(orbit, value);
            break;
        }
    };
 
    //绑定控制面板的按钮事件
    var controlMain = document.getElementById("control-main");
    controlMain.addEventListener("click", buttonClick, false);
 
 
})();