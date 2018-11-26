<template>
	<div ref='page'  class="lt-full zmiti-index-main-ui " :style="{background:'url('+imgs.bg+') no-repeat 50% center',backgroundSize:'cover'}"   :class="{'show':show}" >

		 <div class='zmiti-card'>
			 <img :src="imgs.card" alt="">
		 </div>
		 <div class='zmiti-index1'>
			 <img :src="imgs.index1" alt="">
			 <div></div>
			 <div></div>
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
			}
		},
		mounted(){

		  

		}
	}
</script>