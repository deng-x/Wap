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
	var getYanzheng = document.getElementById('btn-yanzheng');
	var inputPhone = document.getElementById('input-phone');
	var inputYanzheng1 = document.getElementById('input-yanzheng1');
	var inputYanzheng2 = document.getElementById('input-yanzheng2');
	var inputPsw1 = document.getElementById('input-psw1');
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
		if (window.location.href != "pesRegisterBefore.html") {
			window.location.href = "pesRegisterBefore.html";
		}
	};
	entRegister.onclick = function() {
		if (window.location.href != "entRegisterBefore.html") {
			window.location.href = "entRegisterBefore.html";
		}
	};
	//点击获取验证码
	getYanzheng.onclick = function() {
		var countdown = 60;
		function settime() {
			if(countdown == 0) {
				getYanzheng.innerText = '获取';
				getYanzheng.removeAttribute('disabled');
				getYanzheng.parentNode.className = 'input-yanzheng1-btn';
				countdown = 60;
				clearInterval(timer); 
				return;
			} else {
			getYanzheng.parentNode.className = 'input-yanzheng1-btn-after';
				getYanzheng.setAttribute('disabled', false);
				getYanzheng.innerText = countdown + 's';
				countdown--;
			}
		};
		var timer = setInterval(function() {
			settime()
		}, 1000)
	};
	//点击注册进行判断，信息正确则跳转登录页面
	mainBtn.onclick = function() {
		if(inputPhone.value == '') {
			alert('手机号不可为空！');
		}
		else if(inputYanzheng1.value == '' || inputYanzheng2.value == '') {
			alert('验证码不可为空！');
		}
		else if(inputPsw1.value == '' || inputPsw2.value == '') {
			alert('密码不可为空！');
		}
		else if(inputPsw1.value != inputPsw2.value ) {
			alert('两次密码不一致！');
		}
		else {
			window.location.href = "login.html";
		}
	};
};