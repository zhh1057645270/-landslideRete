<script lang="ts" setup>
import Popup from '@/components/popup/index.vue';
</script>

<template>
	<Popup name="弹框测试" left="0.62rem" top="0.08rem">
		<div class="content"></div>
	</Popup>
</template>

<style lang="scss" scoped>
.content {
	width: 256px;
	height: 100px;
}
</style>
