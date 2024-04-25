<!--
 * @Author: ce
 * @Date: 2022-04-11 15:34:19
 * @LastEditors: ce
 * @LastEditTime: 2022-06-30 17:49:35
 * @FilePath: /xzstxf/src/components/sidebar/sidebarTitle.vue
-->
<template>
	<div class="sidebar-title">
		<div class="title-side">
			<span class="title">{{ title }}</span>
		</div>
		<div class="right-part">
			<slot> </slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		default: '标题',
	},
	text: {
		type: String,
		default: 'Community Archives',
	},
});
</script>

<style lang="scss" scoped>
.sidebar-title {
	position: relative;
	width: 100%;
	height: 40px;
	background-image: url('../../assets/imgs/sidebar-title-bg.png');
	background-size: 100% 100%;
	box-sizing: border-box;
	&:not(:first-child) {
		margin-top: 24px;
	}
	.title-side {
		padding-left: 34px;
		padding-top: 3px;
		.title {
			font-family: 'YouSheBiaoTiHei';
			font-size: 24px;
			line-height: 31px;
			letter-spacing: 1px;
			background: linear-gradient(180deg, #ffffff 61.49%, #7ad5fc 88.89%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
			text-shadow: 0px 4px 4px rgba(0, 56, 112, 0.3);
		}
	}
	.right-part {
		position: absolute;
		right: 16px;
		top: 0;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.slot-text {
			font-family: 'YouSheBiaoTiHei';
			font-size: 12px;
			color: rgba(152, 182, 240, 0.6);
			text-transform: uppercase;
		}
	}
}
</style>
