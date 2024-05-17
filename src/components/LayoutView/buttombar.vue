<!--
 * @Author: Elysia
 * @Date: 2024-04-11 11:23:34
 * @LastEditors: Elysia
 * @LastEditTime: 2024-04-11 20:38:59
 * @FilePath: /xzstxf/src/components/sidebar/index.vue
-->
<template>
	<div class="buttomBar">
		<div class="function1">
			<span class="title-buttom">斜坡单元划分</span>
			<div class="icon-1" @click="functionPopup1()"></div>
		</div>

		<div class="function2">
			<span class="title-buttom">属性特征提取</span>
			<div class="icon-2" @click="Tooltip()"></div>
		</div>

		<div class="function3">
			<span class="title-buttom">训练模型选择</span>
			<div class="icon-3" @click="functionPopup5()"></div>
		</div>
		<div class="function4">
			<span class="title-buttom">样本选取</span>
			<div class="icon-4"></div>
		</div>
		<div class="function5">
			<span class="title-buttom">可视优化</span>
			<div class="icon-5"></div>
		</div>
		<!-- <newDEM></newDEM> -->

		<div class="QYTJ" v-if="isTooltipVisible" @click="functionPopup2()">区域统计</div>
		<div class="SGCFL" v-if="isTooltipVisible" @click="functionPopup3()">栅格重分类</div>
		<div class="TZTQ" v-if="isTooltipVisible" @click="functionPopup4()">特征提取</div>
	</div>
	<FeatureextractionPopup v-model="view4"></FeatureextractionPopup>
	<RampcellPopup v-model="view1"></RampcellPopup>
	<RangestatisticsPopup v-model="view2"></RangestatisticsPopup>
	<RasterreclassPopup v-model="view3"></RasterreclassPopup>
	<VulnerabilityPopup v-model="view5"></VulnerabilityPopup>
</template>

<script lang="ts" setup>
import { watchEffect, ref, onBeforeUnmount } from 'vue';
import FeatureextractionPopup from '@/components/functions/FeatureextractionPopup.vue';
import RampcellPopup from '@/components/functions/RampcellPopup.vue';
import RangestatisticsPopup from '@/components/functions/RangestatisticsPopup.vue';
import RasterreclassPopup from '@/components/functions/RasterreclassPopup.vue';
import VulnerabilityPopup from '@/components/functions/VulnerabilityPopup.vue';
// import CustomButton from "@/components/Rete-vue/reteButton.vue";
import DYselect from '@/components/Rete-vue/select1.vue';
import reteRadio from '@/components/Rete-vue/reteRadio.vue';
import newDEM from '@/components/Rete-vue/newDEM.vue';

var isTooltipVisible = ref(false);
const view1 = ref(false);
const view2 = ref(false);
const view3 = ref(false);
const view4 = ref(false);
const view5 = ref(false);

function functionPopup1() {
	view1.value = !view1.value;
	view2.value = false;
	view3.value = false;
	view4.value = false;
	view5.value = false;
}

function functionPopup2() {
	view2.value = !view2.value;
	view1.value = false;
	view3.value = false;
	view4.value = false;
	view5.value = false;
}

function functionPopup3() {
	view3.value = !view3.value;
	view2.value = false;
	view1.value = false;
	view4.value = false;
	view5.value = false;
}

function functionPopup4() {
	view4.value = !view4.value;
	view2.value = false;
	view3.value = false;
	view1.value = false;
	view5.value = false;
}

function functionPopup5() {
	view5.value = !view5.value;
	view2.value = false;
	view3.value = false;
	view4.value = false;
	view1.value = false;
}
const Tooltip = () => {
	isTooltipVisible.value = !isTooltipVisible.value;
};
</script>

<style lang="scss">
.buttomBar {
	position: absolute;
	width: 100%;
	height: 15%;
	bottom: 0%;

	// background-color: #fff;
	.title-buttom {
		position: absolute;
		width: 100%;
		height: 70px;
		bottom: -22%;
		font-size: 26px;
		margin-left: 0px;
		font-family: ShiShangZhongHeiJianTi;
		font-weight: 400;
		color: #ffffff;
		line-height: 30px;
		overflow: hidden;
	}

	.function1 {
		position: absolute;
		width: 10%;
		height: 100%;
		left: 20%;

		// background-color: #fff;
		.icon-1 {
			width: 25%;
			height: 35%;
			position: absolute;
			top: 38%;
			left: 23%;
			background-image: url('@/assets/imgs/形状 616@2x.png');
			background-repeat: no-repeat;
			background-size: contain;
			display: inline-block;
			cursor: pointer;
		}

		.icon-1:hover {
			border-bottom: 5px solid rgba(164, 217, 254, 0.8);
		}
	}

	.function2 {
		position: absolute;
		width: 10%;
		height: 100%;
		left: 34%;

		// background-color: #fff;
		.icon-2 {
			width: 25%;
			height: 35%;
			position: absolute;
			top: 38%;
			left: 23%;
			background-image: url('@/assets/imgs/形状 617@2x.png');
			background-repeat: no-repeat;
			background-size: contain;
			display: inline-block;
			cursor: pointer;
		}

		.icon-2:hover {
			border-bottom: 5px solid rgba(164, 217, 254, 0.8);
		}
	}

	.function3 {
		position: absolute;
		width: 10%;
		height: 100%;
		left: 47%;

		// background-color: #fff;
		.icon-3 {
			width: 25%;
			height: 35%;
			position: absolute;
			top: 38%;
			left: 22%;
			background-image: url('@/assets/imgs/形状 618@2x.png');
			background-repeat: no-repeat;
			background-size: contain;
			display: inline-block;
			cursor: pointer;
		}

		.icon-3:hover {
			border-bottom: 5px solid rgba(164, 217, 254, 0.8);
		}
	}

	.function4 {
		position: absolute;
		width: 10%;
		height: 100%;
		left: 60%;

		// background-color: #fff;
		.icon-4 {
			width: 25%;
			height: 35%;
			position: absolute;
			top: 38%;
			left: 10%;
			background-image: url('@/assets/imgs/形状 1014@2x.png');
			background-repeat: no-repeat;
			background-size: contain;
			display: inline-block;
			cursor: pointer;
		}

		.icon-4:hover {
			border-bottom: 5px solid rgba(164, 217, 254, 0.8);
		}
	}

	.function5 {
		position: absolute;
		width: 10%;
		height: 100%;
		left: 71%;

		// background-color: #fff;
		.icon-5 {
			width: 25%;
			height: 35%;
			position: absolute;
			top: 38%;
			left: 10%;
			background-image: url('@/assets/imgs/形状 1244@2x.png');
			background-repeat: no-repeat;
			background-size: contain;
			display: inline-block;
			cursor: pointer;
		}

		.icon-5:hover {
			border-bottom: 5px solid rgba(164, 217, 254, 0.8);
		}
	}
}

.QYTJ {
	position: absolute;
	left: 27%;
	top: 0%;
	width: 6%;
	height: 24%;
	font-size: 24px;
	margin-left: 0px;
	font-family: ShiShangZhongHeiJianTi;
	text-align: center;
	color: #ffffff;
	background: linear-gradient(180deg, rgba(10, 121, 205, 0.5) 0%, rgba(10, 121, 205, 0.15) 100%);
}

.QYTJ:hover {
	border: 1px solid #0a79cd;
}

.SGCFL {
	position: absolute;
	left: 34%;
	top: 0%;
	width: 6%;
	height: 24%;
	font-size: 24px;
	margin-left: 0px;
	font-family: ShiShangZhongHeiJianTi;
	text-align: center;
	color: #ffffff;
	background: linear-gradient(180deg, rgba(10, 121, 205, 0.5) 0%, rgba(10, 121, 205, 0.15) 100%);
}

.SGCFL:hover {
	border: 1px solid #0a79cd;
}

.TZTQ {
	position: absolute;
	left: 41%;
	top: 0%;
	width: 6%;
	height: 24%;
	font-size: 24px;
	margin-left: 0px;
	font-family: ShiShangZhongHeiJianTi;
	text-align: center;
	color: #ffffff;
	background: linear-gradient(180deg, rgba(10, 121, 205, 0.5) 0%, rgba(10, 121, 205, 0.15) 100%);
}

.TZTQ:hover {
	border: 1px solid #0a79cd;
}

.Popup1 {
	position: absolute;
	width: 30%;
	height: 50%;
	left: 0%;
	background-color: #fff;
}

.functionRectangle1 {
	//     position: absolute;
	//     width: 50%;
	//     height:50%;
	//     background-color: #fff;
	// z-index: 999;
}
.a21 {
	position: absolute;
	left: 10%;
	color: #fff;
}
</style>
