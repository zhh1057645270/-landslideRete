<!--
 * @Author: ce
 * @Date: 2022-04-11 15:33:34
 * @LastEditors: ce
 * @LastEditTime: 2022-06-24 10:38:59
 * @FilePath: /xzstxf/src/components/sidebar/index.vue
-->
<template>
	<!-- <transition :name="side === 'right' ? 'sidebar-right' : 'sidebar-left'" appear>
		<div
			class="layout-sidebar"
			:class="{
				'left-bar': side === 'left',
				'right-bar': side === 'right',
				'hidden-left': side === 'left' && !layoutStore.sidebarVisible,
				'hidden-right': side === 'right' && !layoutStore.sidebarVisible,
			}"
		>
			<el-scrollbar height="100%">
				<div class="sidebar-inner">
					<slot />
				</div>
			</el-scrollbar>
			<div class="sb-side">
				<slot name="side"></slot>
			</div>
			<div
				v-if="closeAble"
				:class="side === 'right' ? 'side-right-arrow' : 'side-left-arrow'"
				class="arrow"
				@click="layoutStore.setSidebarVisible(!layoutStore.sidebarVisible)"
			>
				<div class="control-icon close" v-if="layoutStore.sidebarVisible" />
				<div class="control-icon open" v-else />
			</div>
		</div>
	</transition> -->
	<div></div>
</template>

<script lang="ts" setup>
import { watchEffect, ref, onBeforeUnmount } from 'vue';
import { useLayoutStoreWithOut } from '@/stores/modules/LayoutStore';
defineProps({
	side: {
		type: String,
		default: 'left',
	},
	closeAble: {
		type: Boolean,
		default: true,
	},
});
const layoutStore = useLayoutStoreWithOut();
</script>

<style lang="scss">
.layout-sidebar {
	position: absolute;
	width: 356px;
	top: 12px;
	bottom: 10px;
	transition: 1s ease-in-out;
	border: 1px solid rgba(134, 203, 255, 0.3);
	background: linear-gradient(180deg, rgba(7, 31, 51, 0.85) 0%, rgba(12, 24, 34, 0.85) 98.86%, rgba(5, 56, 97, 0.85) 100%);
	backdrop-filter: blur(4px);
	&.hidden-left {
		transform: translateX(calc(-100% - 10px));
	}
	&.hidden-right {
		transform: translateX(calc(100% + 10px));
	}
	.sidebar-inner {
		height: 100%;
		box-sizing: border-box;
	}
	&.left-bar {
		left: 16px;
	}
	&.right-bar {
		right: 10px;
	}
	.sb-side {
		position: absolute;
		top: 0;
		left: 418px;
	}
	.arrow {
		position: absolute;
		height: 52px;
		width: 28px;
		.control-icon {
			background-size: 100% 100%;
			background-repeat: no-repeat;
			background-position: center center;
		}
		.close {
			background-image: url('@/assets/imgs/sidebar-close.svg');
		}
		.open {
			background-image: url('@/assets/imgs/sidebar-open.svg');
		}
	}
	.side-left-arrow {
		right: -24px;
		top: 25%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 999;
		.control-icon {
			height: 100%;
			width: 100%;
		}
	}
	.side-right-arrow {
		left: -24px;
		top: 25%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 999;
		.control-icon {
			height: 100%;
			width: 100%;
		}
	}
}
</style>
