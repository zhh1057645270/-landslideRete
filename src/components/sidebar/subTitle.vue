<!--
 * @Author: ce
 * @Date: 2022-04-11 16:08:57
 * @LastEditors: ce
 * @LastEditTime: 2022-06-28 10:29:02
 * @FilePath: /xzstxf/src/components/sidebar/subTitle.vue
-->
<template>
	<div class="sub-title">
		<span class="title">{{ title }}</span>
		<slot name="unit"> </slot>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		default: '标题',
	},
	unit: {
		type: String,
		default: '',
	},
});
</script>

<style lang="scss" scoped>
.sub-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 5px;
	background-image: url('/@/assets/imgs/bg/bg-8.png');
	background-position: bottom center;
	background-repeat: no-repeat;
	background-size: contain;
	&:not(:first-child) {
		margin-top: 16px;
	}
	.title {
		padding: 4px 8px;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		color: #ffffff;
		flex: 1;
		background: linear-gradient(90deg, #11416f 0%, rgba(0, 15, 30, 0) 60%);
	}
}
</style>
