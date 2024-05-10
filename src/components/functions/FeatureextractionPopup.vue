<script setup lang="ts">
import { ref } from 'vue';
import Popup from './popup/FeatureextractionIndex.vue';
import { Api } from '@/api/index';
import axios from 'axios';

async function featureextraction() {
	const resdata = await Api.FeaExtractionApi.FeaExtraction({
		in_points: InputSlidePiontFile.value,
		in_vector: InputSlideCellFile.value,
		in_rasters: inputRasters.value,
		types: '随机标记',
		out_csv: OutputFeatureFile.value,
	});
	console.log('区域统计接口测试成功');
	console.log(resdata);
	if (resdata.status === 200) {
		getfileurl(OutputFeatureFile.value);
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

const InputSlidePiontFile = ref([]);
const fileInput1 = ref(null);
function triggerFileInput1() {
	fileInput1.value.click();
}
const InputSlidePiontFileChange = async (event: Event) => {
	InputSlidePiontFile.value = [];
	const input = event.target as HTMLInputElement;
	const files = input.files;

	if (files.length) {
		const formData = new FormData();

		// Append each file to the FormData object
		Array.from(files).forEach((file) => {
			formData.append('files', file);
			InputSlidePiontFile.value.push(file.name);
		});

		// Make a POST request to the server
		try {
			const response = await axios.post('http://0.0.0.0:9898/upload-multiple', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('Files uploaded successfully:', response.data);
		} catch (error) {
			console.error('Error uploading files:', error);
		}
	}
};

const InputSlideCellFile = ref([]);
const fileInput2 = ref(null);
function triggerFileInput2() {
	fileInput2.value.click();
}
const InputSlideCellFileChange = async (event: Event) => {
	InputSlideCellFile.value = [];
	const input = event.target as HTMLInputElement;
	const files = input.files;

	if (files.length) {
		const formData = new FormData();

		// Append each file to the FormData object
		Array.from(files).forEach((file) => {
			formData.append('files', file);
			InputSlideCellFile.value.push(file.name);
		});

		// Make a POST request to the server
		try {
			const response = await axios.post('http://0.0.0.0:9898/upload-multiple', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('Files uploaded successfully:', response.data);
		} catch (error) {
			console.error('Error uploading files:', error);
		}
	}
};

const inputRasters = ref([]);
const fileName3 = ref('');
const fileInputRaster = ref(null);
// function triggerRasterInput() {
// 	fileInputRaster.value.click();
// }
const handleRasterChange = async (event: Event) => {
	const input = event.target;
	const files = input.files;

	if (files.length) {
		const formData = new FormData();

		// Append each file to the FormData object
		Array.from(files).forEach((file) => {
			formData.append('files', file);
			inputRasters.value.push(file.name);
		});

		// Make a POST request to the server
		try {
			const response = await axios.post('http://0.0.0.0:9898/upload-multiple', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('Files uploaded successfully:', response.data);
		} catch (error) {
			console.error('Error uploading files:', error);
		}
	}
};

const OutputFeatureFile = ref('');
const fileInput4 = ref(null);
function triggerFileInput4() {
	fileInput4.value.click();
}
const OutputFeatureFileChange = async (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input.files && input.files[0]) {
		OutputFeatureFile.value = input.files[0].name;
		const file = input.files[0];
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await axios.post('http://0.0.0.0:9898/upload', formData, {
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

function Cancelfun() {
	InputSlidePiontFile.value = '';
	fileInput1.value = null;
	InputSlideCellFile.value = '';
	fileInput2.value = null;
	fileName3.value = '';
	fileInputRaster.value = null;
	OutputFeatureFile.value = '';
	fileInput4.value = null;
	inputRasters.value = [];
}

const selectedFileIndex = ref(null);
function removeItem() {
	if (selectedFileIndex.value !== null) {
		inputRasters.value.splice(selectedFileIndex.value, 1);
		selectedFileIndex.value = null; // Reset selection
	}
}
const upItem = () => {
	const index = selectedFileIndex.value;
	if (index > 0) {
		const item = inputRasters.value.splice(index, 1)[0];
		inputRasters.value.splice(index - 1, 0, item);
		selectedFileIndex.value--; // Update the selected index
	}
};

const downItem = () => {
	const index = selectedFileIndex.value;
	if (index < inputRasters.value.length - 1) {
		const item = inputRasters.value.splice(index, 1)[0];
		inputRasters.value.splice(index + 1, 0, item);
		selectedFileIndex.value++; // Update the selected index
	}
};

function addClassification() {
	document.getElementById('fileInputRaster').click();
}

function confirmbnt() {}
</script>

<template>
	<Popup name="特征提取及样本标记" left="0.62rem" top="0.08rem" style="width: 15%">
		<div class="popup-content">
			<div class="parameters-container">
				<label for="parameter1">输入滑坡点</label>
				<input type="file" ref="fileInput1" @change="InputSlidePiontFileChange" multiple style="display: none" />
				<div class="container">
					<div class="row">
						<div class="col">
							<table class="table">
								<tbody>
									<tr v-for="(item, index) in InputSlidePiontFile" :key="index">
										<td>{{ item }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col2">
							<button @click="triggerFileInput1" class="upload-btn"></button>
						</div>
					</div>
				</div>
			</div>
			<div class="parameters-container">
				<label for="parameter4">输入滑坡单元</label>
				<input type="file" ref="fileInput2" @change="InputSlideCellFileChange" multiple style="display: none" />
				<div class="container">
					<div class="row">
						<div class="col">
							<table class="table">
								<tbody>
									<tr v-for="(item, index) in InputSlideCellFile" :key="index">
										<td>{{ item }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col2">
							<button @click="triggerFileInput2" class="upload-btn"></button>
						</div>
					</div>
				</div>
			</div>
			<div class="parameters-container">
				<label for="parameter5">输入因子图层</label>
				<div class="container">
					<input type="file" ref="fileInputRaster" id="fileInputRaster" @change="handleRasterChange" multiple style="display: none" />
				</div>
			</div>
			<div class="parameters-container">
				<div class="container">
					<div class="row">
						<div class="col">
							<table class="table">
								<tbody>
									<tr
										v-for="(item, index) in inputRasters"
										:key="index"
										@click="selectedFileIndex = index"
										:class="{ selected: selectedFileIndex === index }"
									>
										<td>{{ item }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col2">
							<button class="appendbutton" @click="addClassification"></button>
							<button class="removebutton" @click="removeItem"></button>
							<button class="moveupbutton" @click="upItem"></button>
							<button class="movedownbutton" @click="downItem"></button>
						</div>
					</div>
				</div>
			</div>
			<div class="parameters-container">
				<label for="parameter6">输出特征值</label>
				<div class="container">
					<input type="file" ref="fileInput4" @change="OutputFeatureFileChange" style="display: none" />
					<input type="text" v-model="OutputFeatureFile" class="file-name-input" />
					<button @click="triggerFileInput4" class="upload-btn"></button>
				</div>
			</div>
			<button class="donebutton" @click="featureextraction">确定</button>
			<button class="canclebutton" @click="Cancelfun">取消</button>
		</div>
	</Popup>
</template>

<style lang="scss" scoped>
.selected {
	background-color: rgba(0, 0, 0, 0.432);
}

.popup-content {
	padding: 10px;
	// border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	position: relative;
	font-size: 12px;
	// width: 200px;
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

.InputSlideCellFile-btn {
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
	padding: 8px;
	margin-right: 5px;
	border: 1px solid rgb(161, 161, 161);
	border-radius: 4px;
	box-sizing: border-box;
	background-color: #00000000;
	color: #ccc;
	padding: 8px;
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

	.appendbutton {
		background-image: url('@/assets/imgs/append.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 20px;
		height: 20px;
		margin-top: 6%;
		margin-bottom: 6%;
		color: #ccc;
		border: 1px solid rgb(161, 161, 161);
		margin-left: 5px;
		cursor: pointer;
	}

	.removebutton {
		background-image: url('@/assets/imgs/remove.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 20px;
		height: 20px;
		margin-top: 6%;
		margin-bottom: 6%;
		color: #ccc;
		border: 1px solid rgb(161, 161, 161);
		margin-left: 5px;
		cursor: pointer;
	}

	.moveupbutton {
		background-image: url('@/assets/imgs/move_up.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 20px;
		height: 20px;
		margin-top: 6%;
		margin-bottom: 6%;
		color: #ccc;
		border: 1px solid rgb(161, 161, 161);
		margin-left: 5px;
		cursor: pointer;
	}

	.movedownbutton {
		background-image: url('@/assets/imgs/move_down.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 20px;
		height: 20px;
		margin-top: 6%;
		margin-bottom: 6%;
		color: #ccc;
		border: 1px solid rgb(161, 161, 161);
		margin-left: 5px;
		cursor: pointer;
	}
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
