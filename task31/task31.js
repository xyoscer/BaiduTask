	/*跨浏览器兼容事件*/
	function addEvent(element,type,handle) {
		if(element.addEventListener) {
		  element.addEventListener(type, handle, false); 

		}else if(element.attachEvent) {
			element.attachEvent("on"+type,handle);
		}else {
			element["on" + type] = handle;
		}
	}
	var student = document.getElementById('student'),
	    select = document.getElementById('select'),
	    outschool = document.getElementById('outschool');
	var changeRadio = document.getElementById('changeRadio');
	var change = function() {
	 if (student.checked) {
         select.style.display = "block";
         outschool.style.display = "none";
    }
    else {
    	  select.style.display = "none";
          outschool.style.display = "block";

   }
};
	addEvent(changeRadio,"click",change);
	//选择城市，对应表单的学校也随之发生变化
function selectDistrict() {
	//data对象，表示联动表单里面的值，0表示对应的value的值，1表示option中显示的值
    var data = {
        bj: [{"0":"bju","1":"北京大学"}, {"0":"qhu","1":"清华大学"}, {"0":"ydu","1":"邮电大学"}],
        sh: [{"0":"fdu","1":"复旦大学"}, {"0":"shjtu","1":"上海交通大学"}, {"0":"tju","1":"同济大学"}],
        hz: [{"0":"zju","1":"浙江大学"}, {"0":"hzdzu","1":"杭州电子科技大学"}, {"0":"gyu","1":"浙江工业大学"}],
        xa:[{"0":"dizu","1":"电子科技大学"},{"0":"jtu","1":"西安交通大学"},{"0":"xibegyu","1":"西北工业大学"},{"0":"xbu","1":"西北大学"}]
    }
    var source = document.getElementById("select1");
    var target = document.getElementById("select2");
    var selected = source.options[source.selectedIndex].value;

    target.innerHTML = "";
    for (var i = 0; i < data[selected].length; i++) {
        var opt = document.createElement('option');
		opt.value = data[selected][i][0];
		opt.innerHTML = data[selected][i][1];
		target.appendChild(opt);
    }
}
	