<template>
	<div class="layout-out-box">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.layout-out-box {
	height: 100%;
	width: 100%;
	padding: 64px 12px 12px;
	overflow: hidden;
	box-sizing: border-box;
	background-image: url('@/assets/imgs/box-l-t.png'), url('@/assets/imgs/box-r-t.png'), url('@/assets/imgs/box-l-b.png'),
		url('@/assets/imgs/box-r-b.png');
	background-position: left top, right top, left bottom, right bottom;
	background-repeat: no-repeat;
	background-size: 659px 511px, 659px 394px, 912px 394px, 912px 394px;
}
</style>
