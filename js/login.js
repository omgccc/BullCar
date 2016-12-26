var info=document.getElementById('info'),
tel=document.getElementById('tel'),
message=document.getElementById('message'),
send=document.getElementById('get-code'),
login=document.getElementById('login'),
form=document.getElementById('loginForm'),
err=document.getElementById('error'),
signup=document.getElementById('signup')
loading=document.getElementById('loading'),
close=document.getElementById('close'),
opacity=document.getElementById('opacity'),
box=document.getElementById('box'),
isCode=0;
send.onclick=function(){
	isCode=1
	var telVal=tel.value;
	console.log(telVal)
	var isValue=/^1[3578]\d{9}$/.test(telVal);
	console.log(isValue)
	if(isValue){
		info.innerText='';
		err.classList.remove('current')
	var i=60
	var timer=setInterval(function(){
			send.disabled='disabled';
			send.innerText=(--i)+"秒后可重发";
			if(i==0){
				send.innerText='发送验证码';
				send.disabled='';
				clearInterval(timer);
			}
		},1000)
	
	}else{
	info.innerText='请输入正确手机号';
	err.classList.add('current')}
}
login.onclick = function(e){
				e.preventDefault();
				if(/^1[3578]\d{9}$/.test(tel.value) && /^\d{6}$/.test(message.value) && isCode){
				form.submit();
				}
			};
loading.onclick=function(){
opacity.style.display='block';
box.style.display='block'
document.querySelector('.load-item').innerText='登录'
	document.querySelector('.button-login').value='登录'
	tel.value='';
	message.value=''
	
}
signup.onclick=function(){
	opacity.style.display='block';
	box.style.display='block'
	document.querySelector('.load-item').innerText='注册'
	document.querySelector('.button-login').value='注 册'
		tel.value='';
	message.value=''
}
close.onclick=function(){
opacity.style.display='none';
box.style.display='none'
}
