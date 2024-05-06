<template>
	<div class="rete" ref="reteRef">
		<span class="title">不确定性分析可视反馈模块</span>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { createEditor } from '@/utils/editor'
import { createEditor1 } from '@/utils/text'
import { createEditor2 } from '@/utils/editor-vue'
const reteRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
	if (reteRef.value) {
		createEditor(reteRef.value);
	}
})

</script>

<style lang="scss" scoped>
.rete {
	position: relative;
	height: 35%;
	width: 100%;
	top: 0%;
	background: #081b29;
	padding: 5px;
	box-sizing: border-box;
	overflow: auto;
	pointer-events: auto;
	.title {
		color: #fff;
		font-size: 32px;
		font-family: HarmonyOS Sans SC;
		font-weight: 700;
		padding-left: 8px;


	}
}
</style>
