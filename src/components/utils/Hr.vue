<script lang="ts" setup>
defineProps({
	type: {
		type: String,
		default: 't-1',
	},
	position: {
		type: String,
		default: '',
	},
});
</script>
<template>
	<div class="hr" :class="[type, position]"></div>
</template>

<style lang="scss" scoped>
.hr {
	position: relative;
	width: 100%;
	&.t-1 {
		position: relative;
		height: 2px;
		border: 0.5px solid rgba(0, 0, 0, 0);
		background: #10406a;
		box-sizing: border-box;
		&::before {
			display: block;
			content: '';
			position: absolute;
			left: 0;
			top: -0.5px;
			width: 4px;
			height: 2px;
			background: #96d2ff;
		}
		&::after {
			display: block;
			content: '';
			position: absolute;
			right: 0;
			top: -0.5px;
			width: 4px;
			height: 2px;
			background: #96d2ff;
		}
	}
	&.top {
		position: absolute;
		top: 1px;
		left: 0;
	}
	&.bottom {
		position: absolute;
		bottom: 1px;
		left: 0;
	}
}
</style>
