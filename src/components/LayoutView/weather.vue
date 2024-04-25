<template>
	<div class="sys-weather">
		<img class="weather-icon" :src="`weather/${weather.icon}.png`" alt="" />
		<span class="temp font-24 lh-29">{{ weather.temp }}℃</span>
	</div>
</template>
<script lang="ts" setup>
import { Api } from '@/api';
import { onMounted, ref } from 'vue';
const weather = ref({
	temp: '--',
	icon: '999',
	text: '--',
});
const loadWeather = async () => {
	const locationData = await Api.Common.Weather.getGeoLocation();
	let cityName = '杭州市';
	if (locationData.status === 200) {
		const {
			data: { city },
		} = locationData;
		cityName = city;
	}
	const geoData = await Api.Common.Weather.getGeoName(cityName);
	let cityId = '101210101';
	if (geoData.status === 200) {
		const {
			data: { location },
		} = geoData;
		if (location && location.length) {
			cityId = location[0].id;
		}
	}
	const weatherData = await Api.Common.Weather.getWeather(cityId);
	if (weatherData.status === 200) {
		const {
			data: { now },
		} = weatherData;
		weather.value.text = now.text;
		weather.value.icon = now.icon;
		weather.value.temp = now.temp;
	}
};
onMounted(() => {
	loadWeather();
});
</script>

<style lang="scss" scoped>
.sys-weather {
	display: flex;
	align-items: center;
	padding: 0 12px;
	.weather-icon {
		width: 32px;
		height: 24px;
	}
	.temp {
		font-family: 'DIN';
		font-weight: 500;
		color: #ffffff;
	}
}
</style>
