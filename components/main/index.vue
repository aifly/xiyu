<template>
	<transition name='main'>
		<div class='zmiti-main-ui lt-full' :class="{'show':show}" >
			<div v-if='showDetail' class='zmiti-main-detail'>
				<div class='lt-full' :style="{background:'url('+sceneList[index].imgsList[0].img+') no-repeat center center',backgroundSize:'cover'}"></div>
				<div v-if='createImg' class='zmiti-createimg'>
					<div class='zmiti-createimg-img'>
						<img :src="createImg" alt="">
						<div>长按保存至手机</div>
					</div>
					<div class='zmiti-btns'>
						<div v-tap='[reChangeScene]'>看看其它场景</div>
						<div v-tap='[share]'>分享</div>
					</div>

					<div class='zmiti-mask' @touchstart='showMask=false' v-if='showMask'>
						<img :src="imgs.arrow" alt="">
					</div>
				</div>
				<div v-else>
					<div class='zmiti-main-detail-content'>
						<div class='zmiti-detail-img'>
							<img :src="sceneList[index].imgsList[0].img" alt="">
						</div>
						<div class='zmiti-detail-content'>
							<div v-for='(img,k) in sceneList[index].imgsList' :key="k">
								{{img.content}}
							</div>
						</div>
						<div class='zmiti-detail-close' v-tap='[toggleDetail,false]'>

						</div>
					</div>

					<div class='zmiti-btn zmiti-create-card' v-tap='[createCard]'>
						生成名信片
					</div>
				</div>
			</div>
			<div v-show='!showDetail'>
				<div>正在进入，请稍后...</div>
				<iframe :style="{opacity:loaded?1:0}" @load='load' :src="sceneList[index].href" frameborder="0"></iframe>

				<div class='zmiti-scene-list' :class='{"show":showScene}'>
					<ul>
						<li :class="{'active':i === index}" v-for='(scene,i) in sceneList' :key="i">
							<div v-tap='[changeScene,scene,i]'>
								<img @touchstart='imgStart' :src='scene.thumbnail' alt="">
							</div>
							<div>
								{{scene.name}}
							</div>
						</li>
					</ul>
					<div class='zmiti-change-scene' v-tap='[change]'>
						切换场景
					</div>
				</div>
				<div class='zmiti-btn zmiti-continue'  v-tap='[toggleDetail,true]'>
					继续
				</div>
			</div>
			
		</div>
	</transition>
</template>

<script>
	import './index.css';
	
	import {
	
		imgs,
	
		mainImgList
	
	} from '../lib/assets.js';
	
	import zmitiUtil from '../lib/util';
	import Toast from '../toast/toast.vue'
	
	export default {
	
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
	
			return {
				errMsg:'',
				imgs,
				loaded:false,
				createImg:'',
				showTeam: false,
				showMask: false,
				show: true,
				showScene:true,
				showDetail:false,
				sceneList:window.config.sceneList,
				viewW:Math.min( window.innerWidth,750),
				viewH: window.innerHeight,
				index:0,
			}
		},
	
		components: {Toast},
		methods: {
			share(){
				this.showMask = true;
			},
			toggleDetail(flag){
				this.showDetail = flag;
			},
			imgStart(e){
				e.preventDefault();
			},
			load(){
				this.loaded = true;
				setTimeout(() => {
					this.showScene = false;
				}, 3000);
			},
			change(){
				if(this.loaded){
					this.showScene = !this.showScene;
				}
			},
			changeScene(scene,index){
				this.index = index;
				this.loaded = false;
				document.title = scene.name;

			},
			reChangeScene(){
				this.createImg = '';
				this.showDetail = false;
			},
			createCard(){
				this.createImg = this.sceneList[this.index].createImg;
			}
			
		},
	
		mounted() {
			var {obserable } = this;
			obserable.on('toggleMain',(data)=>{
				this.show = data.show;
				
			});

			
		}
	
	}
</script>
