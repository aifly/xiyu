<template>
	<div ref='page'  class="lt-full zmiti-index-main-ui " :style="{background:'url('+imgs.bg+') no-repeat 50% center',backgroundSize:'cover'}"   :class="{'show':show}" >

		 <div class='zmiti-card' :class="{'active':start}" @transitionend='end'>
			 <img :src="imgs.card" alt="">
		 </div>
		 <div class='zmiti-index1' :class="{'active':showIndex}">
			 <img :src="imgs.index1" alt="">
			 <div></div>
			 <div></div>
		 </div>


		 <div class='zmiti-btn zmiti-index-entry ' :class="{'active':showIndex}">
			 去看看
		 </div>


		<div class='zmiti-logo'>
			<img :src="imgs.logo" alt="">
		</div>
		 
		
	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import {zmitiUtil} from '../lib/util';
	export default {
		props:['obserable','nickname','pv'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				viewH:window.innerHeight,
				count:0,
				show:true,
				start:false,
				showIndex:false
			}
		},
		components:{
		},
		
		methods:{
			 

			imgStart(e){
				e.preventDefault(); 
			},
			entry(){
				this.show =false;
				var {obserable} = this;
				this.show = false;
				obserable.trigger({
					type:'toggleMain',
					data:{
						show:true
					}
				})
			},
			end(){

				this.showIndex = true;
				
			},
		},
		mounted(){

			setTimeout(() => {
				this.start = true;
			}, 1000);

		}
	}
</script>