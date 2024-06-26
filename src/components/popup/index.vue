<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance, nextTick, onBeforeMount, onMounted, ref, watch } from 'vue';
import Hr from '../utils/Hr.vue';
import { DragUtils } from '@/utils/drag';
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const emits = defineEmits(['update:modelValue']);
const props = defineProps({
	name: {
		type: String,
		default: '',
	},
	modelValue: {
		type: Boolean,
		default: false,
	},
	appendToBody: {
		type: Boolean,
		default: false,
	},
	left: {
		type: String,
		default: 'auto',
	},
	right: {
		type: String,
		default: 'auto',
	},
	bottom: {
		type: String,
		default: 'auto',
	},
	top: {
		type: String,
		default: 'auto',
	},
});
const moveTarget = ref<HTMLBaseElement>();
const handleTarget = ref<HTMLBaseElement>();
const rendered = ref(false);
let drag: DragUtils;
watch(
	() => props.modelValue,
	(visible) => {
		if (visible) {
			rendered.value = true;
			nextTick(() => {
				moveTarget.value!.style.left = props.left;
				moveTarget.value!.style.right = props.right;
				moveTarget.value!.style.top = props.top;
				moveTarget.value!.style.bottom = props.bottom;
			});
		}
	},
	{
		immediate: true,
	}
);
onMounted(() => {
	nextTick(() => {
		drag = new DragUtils(handleTarget.value!, moveTarget.value!);
		drag.init();
	});
});
onBeforeMount(() => {
	drag && drag.destory();
});
</script>

<template>
	<Transition name="el-zoom-in-top" appear>
		<div class="popup-wrap" v-if="modelValue" ref="moveTarget">
			<div class="popup-inner">
				<header class="popup-header" ref="handleTarget">
					<Hr position="top" />
					<slot name="header">
						<span class="popup-name">{{ name }}</span>
					</slot>
					<Hr position="bottom" />
				</header>
				<div class="close-btn" @click.stop="emits('update:modelValue', false)">
					<svg-icon name="popup-close"></svg-icon>
				</div>
				<main class="popup-content" v-if="rendered">
					<slot></slot>
				</main>
				<footer class="popup-footer" v-if="proxy?.$slots.footer">
					<slot name="footer" />
				</footer>
				<Hr position="bottom" />
			</div>
		</div>
	</Transition>
</template>

<style lang="scss" scoped>
.popup-wrap {
	position: absolute;
	z-index: 999;
	.popup-inner {
		border: 1px solid rgba(134, 203, 255, 0.3);
		background: rgba(17, 37, 54, 0.92);
		box-shadow: 0px 2px 10px 0px rgba(6, 24, 37, 0.6);
		.close-btn {
			position: absolute;
			top: 12px;
			right: 12px;
			height: 16px;
			width: 16px;
			font-size: 16px;
			line-height: 0;
			cursor: pointer;
			color: #3773a0;
		}
		.popup-header {
			position: relative;
			height: 40px;
			padding: 0 12px;
			line-height: 40px;
			box-sizing: border-box;
			.popup-name {
				color: #d3ecff;
				font-size: 16px;
				font-family: HarmonyOS Sans SC;
				font-weight: 500;
			}
		}
	}
}
</style>
