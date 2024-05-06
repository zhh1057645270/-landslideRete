<script setup lang="ts">
import { ref } from 'vue';
import Popup from './popup/RangestatisticsIndex.vue';
import { Api } from '@/api/index';
import { concat } from 'lodash';
import axios from 'axios';

const selectedValue = ref('平均值')
async function zonalstat() {
	const resdata = await Api.ZonalStatApi.ZonalStat({
		stat_method: selectedValue.value,
		input_shp: RegionFile.value,
		input_tif: AssignmentGirdFile.value,
		output_tif: fileName3.value,
	});
	console.log("区域统计接口测试成功")
	console.log(resdata)
}

const RegionFile = ref('');
const fileInput = ref(null);
function triggerFileInput() {
	fileInput.value.click();
}
const RegionFilechange = async (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input.files && input.files[0]) {
		RegionFile.value = input.files[0].name;
		const file = input.files[0];
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await axios.post('http://127.0.0.1:9898/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('File uploaded successfully:', response.data);
		} catch (error) {
			console.error('Error uploading file:', error);
		}
	}
}

const AssignmentGirdFile = ref('');
const fileInput2 = ref(null);
function triggerFileInput2() {
	fileInput2.value.click();
}
const AssignmentGirdFileChange = async (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input.files && input.files[0]) {
		AssignmentGirdFile.value = input.files[0].name;
		const file = input.files[0];
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await axios.post('http://127.0.0.1:9898/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('File uploaded successfully:', response.data);
		} catch (error) {
			console.error('Error uploading file:', error);
		}
	}
}

const fileName3 = ref('');
const fileInput3 = ref(null);
function triggerFileInput3() {
	fileInput3.value.click();
}
function handleFileChange3(event: any) {
	const file = event.target.files[0];
	if (file) {
		fileName3.value = file.name;

	}
}

function Cancelfun() {
	RegionFile.value = '';
	fileInput.value = null;
	AssignmentGirdFile.value = '';
	fileInput2.value = null;
	fileName3.value = '';
	fileInput3.value = null;
	console.log(RegionFile.value)
	console.log(selectedValue.value)
}
</script>

<template>
	<Popup name="区域统计" left="0.62rem" top="0.08rem" style="width:15%">
		<div class="popup-content">
			<div class="parameters-container">
				<label for="parameter1">区域要素</label>
				<div class="container">
					<input type="text" v-model="RegionFile" class="file-name-input" />
					<input type="file" ref="fileInput" @change="RegionFilechange" style="display: none" />
					<button @click="triggerFileInput" class="upload-btn"></button>
				</div>
				<div class="parameters-container">
					<label for="parameter2">赋值栅格</label>
					<div class="container">
						<input type="file" ref="fileInput2" @change="AssignmentGirdFileChange" style="display: none" />
						<input type="text" v-model="AssignmentGirdFile" class="file-name-input" />
						<button @click="triggerFileInput2" class="upload-btn"></button>
					</div>
				</div>
				<div class="parameter">
					<label for="parameter3">统计类型</label>
					<select id="parameter3" v-model="selectedValue">
						<option value="平均值">平均值</option>
						<option value="众数">众数</option>
					</select>
				</div>
				<div class="parameters-container">
					<label for="parameter4">输出栅格</label>
					<div class="container">
						<input type="file" ref="fileInput3" @change="handleFileChange3" style="display: none" />
						<input type="text" v-model="fileName3" class="file-name-input" />
						<button @click="triggerFileInput3" class="upload-btn"></button>
					</div>
				</div>
				<button class="donebutton" @click="zonalstat">确定</button>
				<button class="canclebutton" @click="Cancelfun">取消</button>
			</div>
		</div>
	</Popup>
</template>

<style lang="scss" scoped>
.popup-content {
	padding: 10px;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	position: relative;
	font-size: 12px;
	// width: 200px;
}

.parameter {
	margin-bottom: 5px;
	display: flex;
	flex-direction: column;
}

.parameter select,
.parameter input {
	width: 100%;
	padding: 5px;
	border: 1px solid rgb(161, 161, 161);
	border-radius: 4px;
	// box-sizing: border-box;
	background-color: #00000000;
	color: #ccc;

}

.parameter select {
	cursor: pointer;
}

.container {
	margin-bottom: 5px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.upload-btn {
	background-image: url('@/assets/imgs/file_icon.png');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	height: 25px;
	width: 25px;
	border: none;
	cursor: pointer;
	margin-left: auto;
}

.file-name-input {
	width: 100%;
	margin-right: 5px;
	border: 1px solid rgb(161, 161, 161);
	border-radius: 4px;
	box-sizing: border-box;
	background-color: #00000000;
	color: #ccc;
	padding: 6px;
}

.donebutton {
	width: 30%;
	height: 20px;
	margin-top: 4%;
	margin-left: 17%;
	color: #ccc;
	border: 1px solid rgb(161, 161, 161);
}

.canclebutton {
	width: 30%;
	height: 20px;
	margin-left: 5%;
	color: #ccc;
	border: 1px solid rgb(161, 161, 161);
}
</style>
