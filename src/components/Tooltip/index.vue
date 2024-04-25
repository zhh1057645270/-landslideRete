<!--
 * @Author: ce
 * @Date: 2022-05-20 11:16:44
 * @LastEditors: ce
 * @LastEditTime: 2022-09-15 10:22:47
 * @FilePath: /dqszlspt-max/src/components/tooltip/index.vue
-->

<template>
	<el-tooltip :content="text" :disabled="disabled">
		<span class="j-tooltip" :class="[contentClass]" ref="content">{{ text }}</span>
	</el-tooltip>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
defineProps(['text', 'contentClass']);
const disabled = ref(false);
const content = ref<HTMLBaseElement>();
onMounted(() => {
	nextTick(() => {
		const parentNode = content.value!.parentNode;
		parentNode!.addEventListener('mouseenter', handleMouseenter);
	});
});
function handleMouseenter(e) {
	disabled.value = !textOverflow(e.target);
	console.log('disabled.value', disabled.value);
}
// 判断文本是否溢出
function textOverflow(element) {
	const range = document.createRange();
	range.setStart(element, 0);
	range.setEnd(element, element.childNodes.length);
	const rangeWidth = range.getBoundingClientRect().width;
	const computed = window.getComputedStyle(element);
	const padding = (parseInt(computed.paddingLeft, 10) || 0) + (parseInt(computed.paddingRight, 10) || 0);
	return (rangeWidth + padding).toFixed(0) > element.offsetWidth || element.scrollWidth > element.offsetWidth;
}
onBeforeUnmount(() => {
	const parentNode = content.value!.parentNode;
	parentNode && parentNode.removeEventListener('mouseenter', handleMouseenter);
});
</script>

<style lang="scss" scoped>
.j-tooltip {
	display: inline-block;
	width: 100%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	vertical-align: middle;
}
</style>
