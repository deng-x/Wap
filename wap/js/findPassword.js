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
	var inputPhone = document.getElementById('phone');
	var inputYanzheng = document.getElementById('yanzheng');
	var input = document.getElementsByTagName('input');
	var getYanzheng = document.getElementById('btn-yanzheng');

	// 找回密码/登陆界面点击切换
	icon.onclick = function() {
		window.location.href = "login.html";
	};
	//如果input为空 按钮不可点击
	for(var i = 0; i < input.length; i++) {
		(function(i) {
			input[i].onkeyup = function() {
				if(inputPhone.value != '' && inputYanzheng.value != '') {
					btn.removeAttribute('disabled');
					btn.parentNode.className = 'main-btn-highlight';
				} else {
					btn.setAttribute('disabled', 'flase');
					btn.parentNode.className = 'main-btn';
				}
			};
		})(i);
	}
	// 安全验证/设置密码界面点击切换
	btn.onclick = function() {
		window.location.href = "findPassword2.html";
	};
	//点击获取验证码
	getYanzheng.onclick = function() {
		var countdown = 60;
		function settime() {
			if(countdown == 0) {
				getYanzheng.innerText = '获取';
				getYanzheng.removeAttribute('disabled');
				getYanzheng.parentNode.className = 'input-yanzheng-btn';
				countdown = 60;
				clearInterval(timer); 
				return;
			} else {
			getYanzheng.parentNode.className = 'input-yanzheng-btn-after';
				getYanzheng.setAttribute('disabled', false);
				getYanzheng.innerText = countdown + 's';
				countdown--;
			}
		};
		var timer = setInterval(function() {
			settime()
		}, 1000)
	};
};