//自适应屏幕宽度
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
	var eye = document.getElementById('eye');
	var inputPsw = document.getElementById('input-psw');
	var inputName = document.getElementById('input-name');
	var loginBtn = document.getElementById('login-btn');
	var forgetPsw = this.document.getElementById('forgetPsw');

	//登陆/注册界面点击切换
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
	//点击眼睛显示隐藏密码
	eye.onclick = function() {
		// console.log(eye.firstChild.getAttribute('src'));
		if(eye.firstChild.getAttribute('src') == 'img/eyesclose.png') {
			console.log(eye.firstChild.getAttribute('src'));
			eye.firstChild.setAttribute('src', 'img/eyesopen.png');
			eye.firstChild.className = 'eyesopen-img';
			inputPsw.setAttribute('type', 'text');
		} else {
			console.log(eye.firstChild.getAttribute('src'));
			eye.firstChild.setAttribute('src', 'img/eyesclose.png');
			eye.firstChild.className = 'eyesclose-img';
			inputPsw.setAttribute('type', 'password');
		}
	};
	//忘记密码被点击
	forgetPsw.onclick = function() {
		window.location.href = "findPassword.html";
	};
	//账号密码不能为空
	loginBtn.onclick = function() {
		if(inputName.value == '' || inputPsw.value == '') {
			alert('账号密码不能为空');
		}
	};
};