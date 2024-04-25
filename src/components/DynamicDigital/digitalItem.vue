<!--
 * @Author: ce
 * @Date: 2022-08-11 10:49:27
 * @LastEditors: ce
 * @LastEditTime: 2022-08-11 11:24:33
 * @FilePath: /dqszlspt-max/src/components/dynamicDigital/digitalItem.vue
-->
<template>
	<span>
		{{ number }}
	</span>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
const props = defineProps({
	value: {
		type: String,
		default: '0',
	},
	delay: {
		type: Number,
		default: 0,
	},
});
let timer: number;
const number = ref(0);
watch(
	() => props.value,
	(val) => {
		const noNum = /\D/.test(val);
		const d = Number(val);
		if (d && !noNum) {
			let step = 0;
			timer = setInterval(() => {
				if (step === d) {
					clearInterval(timer);
				} else {
					step += 1;
					number.value = step;
				}
			}, 1000 / d);
		} else {
			number.value = val as any;
		}
	},
	{
		immediate: true,
	}
);
</script>

<style lang="scss" scoped></style>
