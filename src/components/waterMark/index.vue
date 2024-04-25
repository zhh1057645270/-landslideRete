<script lang="ts" setup></script>

<template>
	<div class="water-mark"></div>
</template>

<style lang="scss" scoped>
.water-mark {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-image: url('@/assets/imgs/mark-cell.png');
	background-position: left top;
	background-size: 52.5px 52.5px;
	background-repeat: repeat;
	pointer-events: none;
	z-index: 9999;
}
</style>
