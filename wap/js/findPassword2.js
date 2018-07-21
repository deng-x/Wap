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
	
	var btn = document.getElementById('btn');
	var icon = document.getElementById('icon-wrapper');
	var inputPsw = document.getElementById('psw');
	var input = document.getElementsByTagName('input');

	//如果input为空 按钮不可点击
	input[0].onkeyup = function() {
		if(inputPsw.value != '') {
			btn.removeAttribute('disabled');
			btn.parentNode.className = 'main-btn-highlight';
		} else {
			btn.setAttribute('disabled', 'flase');
			btn.parentNode.className = 'main-btn';
		}
	};
	// 登陆/重设密码界面点击切换
	btn.onclick = function() {
		window.location.href = "login.html";
	};
	// 找回密码/重设密码界面点击切换
	icon.onclick = function() {
		window.location.href = "findPassword.html";
	};
};