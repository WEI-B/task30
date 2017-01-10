var name = document.getElementById("name");
var mes = document.getElementById("mes");
var password = document.getElementById("password");
var subPassword = document.getElementById("subPassword");
var pas = document.getElementById("pas");
var subPas = document.getElementById("subPas");

var flag1 , flag2, flag3;
flag1 = false, flag2 = false, flag3 = false;

//////////////////////////////////////名称
function show() {
	mes.innerHTML = "必填，长度为4-16字符";
};

function testName() {
	var num = 0;
	var names= name.value;
	num = getLength(names);
	if (num == 0) {
		mes.innerHTML= '姓名不能为空';
	} else if (num >= 4 && num <=16) {
		mes.innerHTML = '符合规范';
		flag1 = true;

	} else {
		mes.innerHTML = '输入不符合规范';
	}
};

function getLength(str) {
	var len = 0;
	for( var i = 0; i < str.length; i++) {
		charCode = str.charCodeAt(i)
		if(charCode >-1 && charCode <129)
			len += 1;
		else
			len += 2;
	}
	return len;
};
///////////////////////////////////密码


function showPasmes() {
	pas.innerHTML = "请输入由数字和字母组成的8~16位密码！";
}

function testPassword () {
	var passmes = password.value;
	var strExp=/^[a-zA-Z0-9]{1,16}$/;
	var len = passmes.length;
	if (len == 0) {
		pas.innerHTML = "密码不可以为空";
	} else if (len <=7 || len >= 17) {
		pas.innerHTML = "密码长度错误，应为8-16";
	} else if (strExp.test(passmes) != true ) {
		pas.innerHTML = "密码应为数字和字母组成";
	} else {
		pas.innerHTML = "密码符合规范";
		flag2 = true;
	}
};
//////////////////////////////////////////////确认密码
function showSubpas () {
	subPas.innerHTML = '请验证密码';
};

function testSubpassword() {
	var subPa = subPassword.value;
	var passmes = password.value;
	if (subPa === passmes ) {
		subPas.innerHTML = '验证正确';
		flag3 = true;
	} else {
		subPas.innerHTML = '验证错误，请重新输入';
	}
};
////////////////////////////提交按钮
function sunmitMes () {
	if((flag1 && flag2) && flag3)
		alert("输入正确！");
	else
		alert("输入错误");
}



/////////////////////////////////////////////////
function addEvent(element, type, handler) {
	if (element.addEventListener) {
		element.addEventListener(type, handler);
	}else if (element.attachEvent) {
		element.attachEvent("on" + type, handler);
	}else {
		element["on" +type] = handler;
	}
};

