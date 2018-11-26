var imgs = {
	logo: './assets/images/logo.png',
	logo1: './assets/images/logo1.png',
	arrow: './assets/images/arrow.png',
	play: './assets/images/play.png',
	card: './assets/images/card.png',
	index1: './assets/images/index1.jpg',
	bg: './assets/images/bg.jpg',





	
}
 
 
var arr = [];
 
 
for (var attr in imgs) {
	arr.push(imgs[attr]);
}

window.config = {
	baseUrl: 'https://xlive.xinhuaapp.com',
	secretKey: "e9469538b0623783f38c585821459454"
}
 
var musics = {
	music: {
		src: './assets/music/bg4.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	}
};

 (function () {

 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
 		handleFontSize();
 	} else {
 		if (document.addEventListener) {
 			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
 		} else if (document.attachEvent) {
 			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
 			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
 		}
 	}

 	function handleFontSize() {
 		// 设置网页字体为默认大小
 		WeixinJSBridge.invoke('setFontSizeCallback', {
 			'fontSize': 0
 		});
 		// 重写设置网页字体大小的事件
 		WeixinJSBridge.on('menu:setfont', function () {
 			WeixinJSBridge.invoke('setFontSizeCallback', {
 				'fontSize': 0
 			});
 		});
 	}
 })();