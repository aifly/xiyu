﻿var imgs = {
	logo: './assets/images/logo.png',
	point: './assets/images/point.png',
	waiting: './assets/images/waiting.png',
	logo1: './assets/images/logo1.png',
	arrow: './assets/images/arrow.png',
	play: './assets/images/play.png',
	card: './assets/images/card.png',
	index1: './assets/images/index1.jpg',
	bg: './assets/images/bg.jpg',
	thum1:'./assets/images/thum1.jpg',
	thum2:'./assets/images/thum2.jpg',
	thum3:'./assets/images/thum3.jpg',
	thum4:'./assets/images/thum4.jpg',
	thum5:'./assets/images/thum5.jpg',

	yuehan:'./assets/images/yuehan.jpg',
	lianheguo:'./assets/images/lianheguo.jpg',
	dawosi:'./assets/images/dawosi.jpg',
	aodaliya: './assets/images/aodaliya.jpg',
	lima: './assets/images/lima.jpg',
	
	cDawosi:'./assets/images/c-dawosi.jpg',
	cAodaliya:'./assets/images/c-aodaliya.jpg',
	cDawosi2:'./assets/images/dawosi2.jpg',
	cLianheguo:'./assets/images/c-lianheguo.jpg',
	cYuehan:'./assets/images/c-yuehan.jpg',
	cLima:'./assets/images/c-lima.jpg',







	
}
 
 
var arr = [];
 
 
for (var attr in imgs) {
	arr.push(imgs[attr]);
}





window.config = {
	baseUrl: 'https://xlive.xinhuaapp.com',
	secretKey: "e9469538b0623783f38c585821459454",
	sceneList:[
		{
			id:'3',
			thumbnail:imgs.thum3,
			createImg:imgs.cAodaliya,
			imgsList:[
				{
					img: imgs.aodaliya,
					content: '2014年11月15日，布里斯班，出席二十国集团领导人第九次峰会并发表重要讲话'
				}
			],
			name: '澳大利亚',
			href: "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127120949/5bfcc37e5098914c4b7b44ea/index.html"
		},
		{
			id:'2',
			thumbnail:imgs.thum2,
			createImg:imgs.cLianheguo,
			imgsList:[
				{
					img: imgs.lianheguo,
					content: '2015年9月26日，纽约，出席联合国发展峰会并发表重要讲话'
				}
			],
			name: "联合国",
			href: "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127120650/5bfcc2d35098914c492ccf66/index.html"
		}, {
			id: '5',
			thumbnail: imgs.thum5,
			createImg: imgs.cLima,
			imgsList:[
				{
					img:imgs.lima,
					content: "2016年11月20日，利马，出席亚太经合组织第二十四次领导人非正式会议并发表重要讲话"
				}
			],
			name: '秘鲁利马',
			href: "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181128053817/5bfe61835098914c4f74cfee/index.html"
		},
		{
			id:'1',
			thumbnail:imgs.thum1,
			createImg:imgs.cYuehan,
			imgsList:[
				{
					img:imgs.yuehan,
					content: '2018年7月25日，习近平，约翰内斯堡，出席金砖国家工商论坛并发表重要讲话'
				}
			],
			name: '约翰内斯堡',
			href: 'http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127112803/5bfcb9805098914c593cb8f2/index.html'
		},
		 {
			id: '4',
			thumbnail: imgs.thum4,
			createImg:imgs.cDawosi,
			createImg1:imgs.cDawosi2,
			imgsList:[
				{
					img:imgs.dawosi,
					content: '2017年1月17日，达沃斯，出席世界经济论坛2017年年会开幕式并发表主旨演讲'
				}
			],
			imgsList1: [{
				img: imgs.dawosi,
				content: '2017年1月17日，达沃斯，出席世界经济论坛2017年年会开幕式并发表主旨演讲'
			}],
			name: '达沃斯',
			href: "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127121213/5bfcc40a5098914c484f021a/index.html",
			href1:"http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181128053817/5bfe61835098914c4f74cfee/index.html"
		}
	]
}
 
var musics = {
	music: {
		src: './assets/music/bg5.mp3',
		autoplay: false,
		name: 'bg2',
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