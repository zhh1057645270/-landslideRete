<script setup lang="ts">
import User from './user.vue';
import SysTitle from './sysTitle.vue';
import Nav from '@/components/Nav/index.vue';
</script>
<template>
	<div class="layout-header">
		<div class="left">
			<SysTitle />
		</div>
		<div class="center">
			<!-- <Nav /> -->
		</div>
		<div class="right">
			<!-- <User /> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout-header {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 62px;
	background-image: url('@/assets/imgs/head-1.png'), url('@/assets/imgs/head-2.png'), url('@/assets/imgs/head-3.png');
	background-size: 700px 62px, 200px 62px, 500px 62px;
	background-repeat: no-repeat, repeat, no-repeat;
	background-position: left top, center center, right top;
	display: flex;
	.left {
		width: 700px;
		background-image: url('@/assets/imgs/head-1.png');
		background-size: 700px 62px;
		background-position: left top;
		background-repeat: no-repeat;
	}
	.center {
		flex: auto;
		background-image: url('@/assets/imgs/head-2.png');
		background-size: 200px 62px;
		background-repeat: repeat;
		background-position: center center;
	}
	.right {
		width: 500px;
		background-image: url('@/assets/imgs/head-3.png');
		background-size: 500px 62px;
		background-repeat: no-repeat;
		background-position: right top;
	}
}
</style>
