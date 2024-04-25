<!--
 * @Author: ce
 * @Date: 2022-08-11 10:34:35
 * @LastEditors: ce
 * @LastEditTime: 2022-09-21 12:26:14
 * @FilePath: /dqszlspt-max/src/components/dynamicDigital/index.vue
-->
<template>
	<span class="dynamic-digital">
		<template v-for="(item, index) in values" :key="index">
			<DigitalItem :value="item" />
		</template>
	</span>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import DigitalItem from './digitalItem.vue';
const props = defineProps({
	data: {
		type: Number,
		default: 0,
	},
});
const values = ref<string[]>([]);
watch(
	() => props.data,
	() => {
		const valueStr = props.data.toString();
		const strArray = valueStr.split('');
		values.value = strArray;
	},
	{
		immediate: true,
		deep: true,
	}
);
</script>

<style lang="scss" scoped></style>
