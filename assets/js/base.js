﻿var imgs = {
	logo: './assets/images/logo.png',
	point: './assets/images/point.png',
	waiting: './assets/images/waiting.png',
	logo1: './assets/images/logo1.png',
	code: './assets/images/code.png',
	arrow: './assets/images/arrow.png',
	play: './assets/images/play.png',
	card: './assets/images/card.png',
	index1: './assets/images/index2.jpg',
	bg: './assets/images/bg.jpg',
	thum1:'./assets/images/thum1.jpg',
	thum2:'./assets/images/thum2-1.jpg',
	thum3:'./assets/images/thum3.jpg',
	thum4:'./assets/images/thum4-1.jpg',
	thum5:'./assets/images/thum5.jpg',

	yuehan:'./assets/images/yuehan.jpg',
	lianheguo:'./assets/images/lianheguo.jpg',
	dawosi:'./assets/images/dawosi.jpg',
	aodaliya: './assets/images/aodaliya.jpg',
	lima: './assets/images/lima.jpg',
	
	cDawosi:'./assets/images/c-dawosi-7.jpg',
	cAodaliya:'./assets/images/c-aodaliya-3.jpg',
	cDawosi2:'./assets/images/c-dawosi-5.jpg',
	cLianheguo:'./assets/images/c-lianheguo-3.jpg',
	cYuehan:'./assets/images/c-yuehan-3.jpg',
	cLima:'./assets/images/c-lima-3.jpg',







	
}
 
 
var arr = [];
 
 
for (var attr in imgs) {
	arr.push(imgs[attr]);
}





window.config = {
  baseUrl: "https://xlive.xinhuaapp.com",
  secretKey: "e9469538b0623783f38c585821459454",
  sceneList: [
    {
      id: "3",
      thumbnail: imgs.thum3,
      createImg: imgs.cAodaliya,
      imgsList: [
        {
          img: imgs.aodaliya,
          content:
            "2014年11月15日，澳大利亚布里斯班，国家主席习近平出席二十国集团领导人第九次峰会，并发表题为《推动创新发展 实现联动增长》的重要讲话。"
        }
      ],
      name: "澳大利亚",
      href:
        "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127120949/5bfcc37e5098914c4b7b44ea/index.html"
    },
    {
      id: "2",
      thumbnail: imgs.thum2,
      createImg: imgs.cLianheguo,
      imgsList: [
        {
          img: imgs.lianheguo,
          content:
            "2015年9月26日，纽约联合国总部，国家主席习近平出席联合国发展峰会，并发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。"
        }
      ],
      name: "联合国",
      href:
        "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127120650/5bfcc2d35098914c492ccf66/index.html"
    },
    {
      id: "5",
      thumbnail: imgs.thum5,
      createImg: imgs.cLima,
      imgsList: [
        {
          img: imgs.lima,
          content:
            "2016年11月20日，秘鲁利马，国家主席习近平出席亚太经合组织第二十四次领导人非正式会议，并发表题为《面向未来开拓进取 促进亚太发展繁荣》的重要讲话。"
        }
      ],
      name: "秘鲁",
      href:
        "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181130104113/5c014be15098914c691a4c56/index.html"
    },
    {
      id: "4",
      thumbnail: imgs.thum4,
      createImg: imgs.cDawosi,
      createImg1: imgs.cDawosi2,
      imgsList: [
        {
          img: imgs.dawosi,
          content:
            "2017年1月17日，瑞士达沃斯，国家主席习近平出席世界经济论坛2017年年会开幕式，并发表了题为《共担时代责任 共促全球发展》的主旨演讲。"
        }
      ],
      imgsList1: [
        {
          img: imgs.dawosi,
          content:
            "2017年1月17日，瑞士达沃斯，国家主席习近平出席世界经济论坛2017年年会开幕式，并发表了题为《共担时代责任 共促全球发展》的主旨演讲。"
        }
      ],
      name: "瑞士",
      href:
        "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127121213/5bfcc40a5098914c484f021a/index.html",
      href1:
        "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127121213/5bfcc40a5098914c484f021a/index.html"
      //href1:"http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181128053817/5bfe61835098914c4f74cfee/index.html"
    },
    {
      id: "1",
      thumbnail: imgs.thum1,
      createImg: imgs.cYuehan,
      imgsList: [
        {
          img: imgs.yuehan,
          content:
            "2018年7月25日，南非约翰内斯堡，国家主席习近平出席金砖国家工商论坛，并发表题为《顺应时代潮流 实现共同发展》的重要讲话。"
        }
      ],
      name: "南非",
      href:
        "http://h5.zhongguowangshi.com/campaigns/58e8a8ad97278378cf13844a/20181127112803/5bfcb9805098914c593cb8f2/index.html"
    }
  ]
};
 
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