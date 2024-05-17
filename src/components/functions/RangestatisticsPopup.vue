<script setup lang="ts">
import { ref } from 'vue';
import Popup from './popup/RangestatisticsIndex.vue';
import { Api } from '@/api/index';
import axios from 'axios';

const selectedValue = ref('平均值');
async function zonalstat() {
	const resdata = await Api.ZonalStatApi.ZonalStat({
		stat_method: selectedValue.value,
		input_shp: RegionFile.value,
		input_tif: AssignmentGirdFile.value,
		output_tif: OutputfileName.value,
	});
	console.log('区域统计成功');
	console.log(resdata);
	if (resdata.status === 200) {
		getfileurl(OutputfileName.value);
	}
}

//接收文件
async function getfileurl(filename: string) {
	console.log('请求文件名为' + filename);
	const response = await Api.GrassToolApi.getfileapi({
		filename: filename,
	});
	if (response.status === 200) {
		// 创建一个URL指向这个blob对象，并用于创建下载链接
		const url = window.URL.createObjectURL(new Blob([response.data]));
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', filename); // 设置下载文件名
		document.body.appendChild(link);
		link.click(); // 触发下载
		link.parentNode.removeChild(link); // 下载后移除元素
		window.URL.revokeObjectURL(url); // 释放blob对象的URL

		console.log('文件下载成功');
	} else {
		console.log('下载失败，状态码：' + response.status);
	}

	console.log(response.data);
	console.log('接收文件成功');
}

// 输入栅格
const RegionFile = ref([]);
const fileInput = ref(null);
function triggerFileInput() {
	fileInput.value.click();
}
const RegionFilechange = async (event: Event) => {
	const input = event.target as HTMLInputElement;
	const files = input.files;

	if (files.length) {
		const formData = new FormData();

		// Append each file to the FormData object
		Array.from(files).forEach((file) => {
			formData.append('files', file);
			RegionFile.value.push(file.name);
		});

		try {
			const response = await axios.post('http://127.0.0.1:9898/upload-multiple', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('File uploaded successfully:', response.data);
		} catch (error) {
			console.error('Error uploading file:', error);
		}
	}
};

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
};

const OutputfileName = ref('');
const fileInput3 = ref(null);
function triggerFileInput3() {
	fileInput3.value.click();
}
function handleFileChange3(event: any) {
	const file = event.target.files[0];
	if (file) {
		OutputfileName.value = file.name;
	}
}

function Cancelfun() {
	RegionFile.value = [];
	fileInput.value = null;
	AssignmentGirdFile.value = '';
	fileInput2.value = null;
	OutputfileName.value = '';
	fileInput3.value = null;
	console.log(RegionFile.value);
	console.log(selectedValue.value);
}
</script>

<template>
	<Popup name="区域统计" left="0.62rem" top="0.08rem" style="width: 15%">
		<div class="popup-content">
			<div class="parameters-container">
				<label for="parameter1">区域要素</label>
				<input type="file" ref="fileInput" @change="RegionFilechange" style="display: none" multiple />
				<div class="container">
					<!-- <input type="text" v-model="RegionFile" class="file-name-input"  /> -->
					<div class="row">
						<div class="col">
							<table class="table">
								<tbody>
									<tr v-for="(item, index) in RegionFile" :key="index">
										<td>{{ item }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col2">
							<button @click="triggerFileInput" class="upload-btn"></button>
						</div>
					</div>
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
						<option value="平均值">S</option>
						<option value="众数">众数</option>
					</select>
				</div>
				<div class="parameters-container">
					<label for="parameter4">输出栅格</label>
					<div class="container">
						<input type="file" ref="fileInput3" @change="handleFileChange3" style="display: none" />
						<input type="text" v-model="OutputfileName" class="file-name-input" />
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

.row {
	display: flex;
}

.col {
	max-height: 150px;
	max-width: 100%;
	overflow: auto;
	border: 1px solid rgb(161, 161, 161);
}

.col2 {
	width: 20%;
	margin-left: 1.5%;
}

.table {
	width: 100%;
}

th,
td {
	padding: 5px;
	border: 0.5px solid rgb(110, 110, 110);
}

.table th:last-child,
.table td:last-child {
	border-right: none;
}
</style>
