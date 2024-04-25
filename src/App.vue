<script setup lang="ts">
import { RouterView } from 'vue-router';
import { provide, ref } from 'vue';
import { provideKeys } from './utils/keys';

import WaterMark from '@/components/waterMark/index.vue';
const test = ref('');
provide(provideKeys.MITT_EVENT, test);
</script>

<template>
	<WaterMark />
	<RouterView />
</template>

<style scoped lang="scss"></style>
