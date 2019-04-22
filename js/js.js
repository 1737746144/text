function tijiao(){
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var ly = document.getElementById('Leaving_a_message').value;
	var reg=/^[\u0391-\uFFE5]+$/;
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if(name == ''||null) {
		alert('请填写姓名(つ´ω`)つ')
	}
	else if(name!=""&&!reg.test(name)){
		alert('请填写中文名⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄')
	}
	else if(phone == ''){
		alert('请填写手机号_(¦3」∠)_')
	}
	else if(phone.length!=11){
		alert('请输入有效的手机号码，需是11位！Σ( ° △ °)')
	}
	else if(!myreg.test(phone)){
		alert('请输入有效的手机号码ΩДΩ')
	}
	else if(ly == ''){
		alert('请填写您的留言(灬ºωº灬)')
	}
	else{
		alert('我们已收到您的留言⁽⁽٩(๑˃̶͈̀ ᗨ ˂̶͈́)۶⁾⁾')
	}
}