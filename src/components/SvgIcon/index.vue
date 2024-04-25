<!--
 * @Author: ce
 * @Date: 2022-04-11 10:43:30
 * @LastEditors: ce
 * @LastEditTime: 2022-08-17 10:02:10
 * @FilePath: /dqszlspt-max/src/components/svgIcon/index.vue
-->
<template>
	<svg aria-hidden="true" class="svg-icon" :fill="color">
		<use :xlink:href="symbolId" />
	</svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '#ccc',
	},
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="scss" scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
	stroke: currentColor;
}
</style>
