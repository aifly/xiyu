<template>
	<transition name='main'>
		<div class='zmiti-main-ui lt-full' :class="{'show':show}" >
			<div>正在进入，请稍后...</div>
			<iframe :style="{opacity:loaded?1:0}" @load='load' :src="sceneList[index].href" frameborder="0"></iframe>

			<div class='zmiti-scene-list' :class='{"show":showScene}'>
				<ul>
					<li v-for='(scene,i) in sceneList' :key="i">
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

			<div class='zmiti-btn zmiti-continue' v-if='showScene'>
				继续
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
				showTeam: false,
				showQrcode: false,
				show: true,
				showScene:true,
				sceneList:window.config.sceneList,
				viewW:Math.min( window.innerWidth,750),
				viewH: window.innerHeight,
				index:0,
			}
		},
	
		components: {Toast},
		methods: {
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
