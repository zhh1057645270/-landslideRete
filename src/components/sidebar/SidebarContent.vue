<script setup lang="ts">
defineProps(['title']);
</script>

<template>
	<sidebar-title :title="title"></sidebar-title>
	<div class="sidebar-content">
		<slot name="default"></slot>
	</div>
</template>

<style lang="scss" scoped>
.sidebar-content {
	padding: 15px;
}
</style>
