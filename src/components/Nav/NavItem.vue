<script setup lang="ts">
import { PropType } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

defineProps({
	nav: {
		required: true,
		type: Object as PropType<{
			title: string;
			name: string;
			path: string;
			icon: string;
		}>,
	},
});
</script>

<template>
	<a :href="'/#' + nav.path" class="nav-item flex flex-v-c" :class="{ active: route.path === nav.path }">
		<div class="icon flex flex-v-c flex-r-c">
			<svg-icon :name="nav.icon"></svg-icon>
		</div>
		<span>{{ nav.title }}</span>
	</a>
</template>

<style lang="scss" scoped>
.nav-item {
	height: 32px;
	background-image: url('@/assets/imgs/nav-default.png');
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 118px;
	color: #86cbff;
	&:not(:first-child) {
		margin-left: 19px;
	}
	.icon {
		height: 32px;
		width: 32px;
		font-size: 18px;
	}
	span {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 32px;
		font-size: 16px;
		font-weight: 500;
	}
	&.active {
		color: #fff;
		background-image: url('@/assets/imgs/nav-active.png');
	}
	&:hover {
		color: #fff;
		background-image: url('@/assets/imgs/nav-active.png');
	}
}
</style>
