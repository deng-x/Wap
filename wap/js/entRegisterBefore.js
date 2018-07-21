window.addEventListener('resize', function(e) {
	//获取屏幕宽度(viewport)
	var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	//获取html的dom
	var htmlDom = document.getElementsByTagName('html')[0];
	//设置html的fontsize
	htmlDom.style.fontSize = htmlWidth / 10 + "px";
});

window.onload = function() {
	//获取屏幕宽度(viewport)
	var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	//获取html的dom
	var htmlDom = document.getElementsByTagName('html')[0];
	//设置html的fontsize
	htmlDom.style.fontSize = htmlWidth / 10 + "px";
	
	var btnLogin = document.getElementById('btn-left');
	var btnRegister = document.getElementById('btn-right');
	var lb = document.getElementById('lb');
	var pesRegister = document.getElementsByClassName('title-left')[0];
	var entRegister = document.getElementsByClassName('title-right')[0];
	var inputEntname = document.getElementById('input-entname');
	var inputPeople = document.getElementById('input-people');
	var inputTel = document.getElementById('input-tel');
	var inputPhone = document.getElementById('input-phone');
	var inputName = document.getElementById('input-name');
	var inputEmail = document.getElementById('input-email');
	var inputPsw = document.getElementById('input-psw');
	var inputPsw2 = document.getElementById('input-psw2');
	var mainBtn = document.getElementById('main-btn');

	// 登陆/注册界面点击切换
	btnLogin.onclick = function() {
		if (window.location.href != "login.html") {
			window.location.href = "login.html";
		}
	};
	btnRegister.onclick = function() {
		if (window.location.href != "pesRegisterBefore.html") {
			window.location.href = "pesRegisterBefore.html";
		}
	};
	// 是否接受协议复选框点击
	lb.onclick = function() {
		if(lb.className == 'cbLabel') {
			lb.className = 'cbLabel2';
			mainBtn.removeAttribute('disabled');
		} else {
			lb.className = 'cbLabel';
			mainBtn.setAttribute('disabled', false);
		}
	};
	// 个人/企业注册界面点击切换
	pesRegister.onclick = function() {
		console.log(1);
		if (window.location.href != "pesRegisterBefore.html") {
			window.location.href = "pesRegisterBefore.html";
		}
	};
	entRegister.onclick = function() {
		console.log(1);
		if (window.location.href != "entRegisterBefore.html") {
			window.location.href = "entRegisterBefore.html";
		}
	};
	//点击注册进行判断，信息正确则跳转登录页面
	mainBtn.onclick = function() {
		if(inputEntname.value == '') {
			alert('公司名称不可为空！');
		}
		else if(inputPeople.value == '') {
			alert('联系人不可为空！');
		}
		else if(inputTel.value == '') {
			alert('办公号码不可为空！');
		}
		else if(inputPhone.value == '') {
			alert('手机号码不可为空！');
		}
		else if(inputName.value == '') {
			alert('用户名不可为空！');
		}
		else if(inputEmail.value == '') {
			alert('电子邮箱不可为空！');
		}
		else if(inputPsw.value == '' || inputPsw2.value == '') {
			alert('密码不可为空！');
		}
		else if(inputPsw.value != inputPsw2.value) {
			alert('两次密码不一致');
		}
		else {
			window.location.href = "login.html";
		}
	};
};