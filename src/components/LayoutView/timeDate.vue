<template>
	<div class="sys-time-date flex flex-v-c">
		<span class="day">{{ date.day }}</span>
		<div class="h-s-l"></div>
		<span class="time">{{ date.time }}</span>
	</div>
</template>

<script lang="ts" setup>
import { formatDate } from '@/utils';
import { ref } from 'vue';
const date = ref({
	day: '',
	time: '',
});

const day = formatDate(new Date(), 'YYYY-mm-dd WWW');
const time = formatDate(new Date(), 'HH:MM:SS');
date.value = { day, time };
setInterval(() => {
	var time = formatDate(new Date(), 'HH:MM:SS');
	if (time == '23:59:59' || time == '00:00:00') {
		const day = formatDate(new Date(), 'YYYY-mm-dd WWW');
		date.value = { day, time: '' };
	}
	date.value.time = time;
}, 1000);
</script>

<style lang="scss" scoped>
.sys-time-date {
	position: relative;
	font-family: 'DIN';
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	color: #ffffff;
	padding: 0 8px;
	&::before {
		position: absolute;
		left: 0;
		top: 50%;
		display: block;
		content: ' ';
		transform: translateY(-50%);
		height: 20px;
		width: 4px;
		box-sizing: border-box;
		border: 2px solid rgba(255, 255, 255, 0.4);
		border-right: 0;
	}
	&::after {
		position: absolute;
		right: 0;
		top: 50%;
		display: block;
		content: ' ';
		transform: translateY(-50%);
		height: 20px;
		width: 4px;
		box-sizing: border-box;
		border: 2px solid rgba(255, 255, 255, 0.4);
		border-left: 0;
	}
	span {
		display: inline;
		vertical-align: middle;
	}
	.day {
		position: relative;
		padding: 0 8px;
	}
	.time {
		padding-left: 8px;
		font-size: 20px;
		line-height: 24px;
	}
}
</style>
