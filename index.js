import Vue from "vue";
import './components/css/index.css';
import Index from './components/index/index';
import Music from './components/music/index';
import Main from './components/main/index';
import Upload from './components/upload/index';
import Share from './components/share/index';
import Loading from './components/loading/index';
import Obserable from './components/lib/obserable';
import {
	imgs
} from './components/lib/assets'
import {zmitiUtil} from './components/lib/util'
import $ from 'jquery';
import './components/lib/touch.js'
import vueTap from 'vue-js-tap';
Vue.use(vueTap);

//var VueTouch = im('vue-touch')
/*import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'})*/


var obserable = new Obserable();


//Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
	data: {
		obserable,
		rotate: false,
		imgs,
		showMask: false,
		viewH: document.documentElement.clientHeight,
		isShare: false,
		show: false,
		username: '',
		pv:820121,
		width:0,
		loaded: false,
		nickname: '',
		headimgurl: '',

		playStyle: {

		}
	},
	el: '#app',
	/*<audio ref='audio' src='./assets/music/bg.mp3'  loop></audio>

		<audio src='./assets/music/water.mp3' ref='water'></audio>
		<audio src='./assets/music/photo.mp3' ref='photo'></audio>
		<audio src='./assets/music/bg.mp3' ref='audio'></audio>
		<audio src='./assets/music/tu.mp3' ref='tu' loop></audio>
		<Main :pv='pv' :nickname='nickname' :headimgurl='headimgurl'  v-if='show && !isShare'  :obserable='obserable'></Main>
		<Upload :pv='pv' :nickname='nickname' :headimgurl='headimgurl'   v-if='show && !isShare'  :obserable='obserable'></Upload>
		<Loading v-if='!show' :width='width' :obserable='obserable'></Loading>
		*/
		template: `<div>
		<Music :obserable='obserable'></Music>
		<Index :pv='pv' :nickname='nickname' :headimgurl='headimgurl'   v-if='show && !isShare'  :obserable='obserable'></Index>
		<Main :pv='pv' :nickname='nickname' :headimgurl='headimgurl'   v-if='show && !isShare'  :obserable='obserable'></Main>
		<div  v-if='!loaded' :style='{background:"#158ae4"}' class='zmiti-loading lt-full'>
			<div class='zmiti-loading-ui'>
				 <a href="#">
			  		<section class='zmiti-head' :style="{background:'url(./assets/images/logo.png) no-repeat center / cover'}"></section>
			        <div class="line1"></div>
			        <div class="line2"></div>
			        <div class="line3"></div>
					<div class='zmiti-progress'>{{width}}%</div>
			    </a>
			</div>
		</div>
	</div>`,
	methods: {

		loading: function(arr, fn, fnEnd) {
			var len = arr.length;
			var count = 0;
			var i = 0;

			function loadimg() {
				if (i === len) {
					return;
				}
				var img = new Image();
				img.onload = img.onerror = function() {
					count++;
					if (i < len - 1) {
						i++;
						loadimg();
						fn && fn(i / (len - 1), img.src);
					} else {
						fnEnd && fnEnd(img.src);
					}
				};
				img.src = arr[i];
			}
			loadimg();
		},
	
		updatePv() {
			 $.ajax({
				url: window.location.protocol + '//api.zmiti.com/v2/custom/update_pvnum/',
				type: 'post',
				data: {
					customid: 74
				}
			}).done((data) => {
				if (data.getret === 0) {
					this.pv = data.totalpv;
					this.randomPv = data.randtotalpv;
				}
			});
		}
	},
	components: {
		Index,
		Music,
		Main,
		Upload,
		Share,
		Loading
	},
	mounted() {

		var s = this;
		var src = (zmitiUtil.getQueryString('src'));
		var num = (zmitiUtil.getQueryString('num'));

		this.isShare = src && !isNaN(num);

		this.src = src;

		obserable.on("setUserInfo",(data)=>{

			this.nickname = data.nickname;
			this.headimgurl = data.headimgurl;
		})

		if(this.isShare){
			 
		}

	

		s.loading(arr, (scale) => {
			s.width = scale *100|0;
		}, () => {
			
			s.show = true;
			s.loaded = true;
			
		})
		

		window.$ = $;

		obserable.on('showShare', () => {
			this.showMask = true;
		})

		obserable.on('updatePv', (data) => {
			this.randomPv += data;
			this.pv += data;

		});
		this.updatePv();
		zmitiUtil.getOauthurl(obserable);
		//zmitiUtil.wxConfig(document.title, window.desc);
		
		return;
		 
	}
})