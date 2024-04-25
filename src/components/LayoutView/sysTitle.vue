<script setup lang="ts">
const config = projectConfig;
</script>

<template>
	<div class="sys-title h-41 flex flex-v-c pl-11">
		<div class="logo">
			<img src="@/assets/imgs/logo.png" alt="" />
		</div>
		<span>{{ config.title }}</span>
	</div>
</template>

<style lang="scss" scoped>
.sys-title {
	position: relative;
	left: 12px;
	top: 11px;
	.logo {
		height: 24px;
		width: 24px;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.icon {
		font-size: 24px;
	}
	span {
		color: #fff;
		font-size: 20px;
		font-family: HarmonyOS Sans SC;
		font-weight: 700;
		padding-left: 8px;
	}
}
</style>
