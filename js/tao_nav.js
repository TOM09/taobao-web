window.onload = function() {
		//获取变量
		var _nav = document.getElementsByClassName("nav")[0];
		var nav_on = document.getElementsByClassName("nav_on")[0];
		var nav_off = document.getElementsByClassName("nav_off")[0];
		var nav_bg = document.getElementsByClassName("nav_bg")[0];
		var nav_mute = document.getElementsByClassName("nav_mute")[0];
		var nav_muteOn = document.getElementsByClassName("nav_muteOn")[0];
		var nav_muteOff = document.getElementsByClassName("nav_muteOff")[0];
		var nav_fstAll = document.getElementsByClassName("nav_fstAll");
		var nav_inside = document.getElementsByClassName("nav_inside")[0];
		var nav_inside1 = document.getElementsByClassName("nav_inside1")[0];
		var nav_inside_off = document.getElementsByClassName("nav_inside_off")[0];
		var nav_inside_last = document.getElementsByClassName("nav_inside_last")[0];
		var nav_f5 = document.getElementsByClassName("nav_f5")[0];
		var nav_bgm = document.getElementsByClassName("nav_bgm")[0];
		//当点击右上角菜单按钮时,弹出导航栏
		nav_on.addEventListener("touchend", function(e) {
			_nav.style.transform = "translate3d(0%, 0px, 0px)";
			nav_off.style.transform = "translate3d(0%, 0px, 0px)";
			nav_bg.style.backgroundColor = "rgba(0,0,0,0.5)";
			nav_bg.style.display= "block";
		})

		//当点击返回箭头按钮时,收回导航栏
		nav_off.addEventListener("touchend", function(e) {
			_nav.style.transform = "translate3d(100%, 0px, 0px)";
			nav_off.style.transform = "translate3d(100%, 0px, 0px)";
			nav_bg.style.display= "none";

		})
		

		//当点击音乐时,开关切换
		var onOff;
		nav_mute.addEventListener("touchend", function(e) {
			if(onOff) {
				nav_muteOn.style.display = "block";
				nav_muteOff.style.display = "none";
				nav_bgm.play();
			} else {
				nav_muteOff.style.display = "block";
				nav_muteOn.style.display = "none";
				nav_bgm.pause();
			}
			onOff = !onOff;
		})

		//点击每一条内容时,弹出相应图片,(循环每条内容)
		for(var i = 0; i < nav_fstAll.length; i++) {
			//自定义属性
			nav_fstAll[i].index = i;

			nav_fstAll[i].addEventListener("touchend", function(e) {

				//导航栏收回
				_nav.style.transform = "translate3d(100%, 0px, 0px)";
				//广告图片显示
				nav_inside.style.display = "block";
				nav_inside_last.style.display = "";
				nav_on.style.display = "none";
				nav_mute.style.display = "none";
				nav_inside.style.opacity = "1";
				nav_bg.style.display = "block";
				
				//广告图片换成点击时对应的图片					
				nav_inside1.style.backgroundImage = "url(img/nav_inside" + (this.index + 1) + ".jpg)";
				console.log(this.index + 1)
				//图片底部的叉号旋转出现
				setTimeout(function() {
					nav_inside_off.style.transform = "rotateZ(180deg)";
				}, 100);
			})
			//当点击底部关闭叉号后,整体过渡消失
			nav_inside_off.addEventListener("touchend", function(e) {
				setTimeout(function() {
					nav_inside_off.style.transform = "rotateZ(360deg)";
				}, 1);
				//遮罩层透明度为0
				nav_inside.style.opacity = "0";
				//1秒后消失
				setTimeout(function() {
					nav_inside.style.display = "none";
					
				}, 1000);
				nav_on.style.display = "block";
				nav_mute.style.display = "block";
				nav_bg.style.display = "none";
			})
					//点击最后一行时,出现一个可以分享的遮罩
					nav_fstAll[nav_fstAll.length - 1].addEventListener("touchend", function(e) {
						nav_inside_last.style.display = "block";
						_nav.style.transform = "translate3d(100%, 0px, 0px)";
						nav_inside.style.display = "none";
					})
				}
				//当底部遮罩显示后,随便点击设备都可以关闭遮罩回到原手机桌面
			nav_inside_last.addEventListener("touchend", function(e) {
					this.style.display = "none";
					nav_on.style.display = "block";
					nav_mute.style.display = "block";
					nav_bg.style.display = "none";
				})
				//	nav_fstAll[0].addEventListener("touchend", function(e) {
				//		
				//	})

		}







//JS_28行换到84行    //81行增加nav_bg.style.display = "none";
//css中 增加270行和285行   37行增加层级
