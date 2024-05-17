<script setup lang="ts">
import { ref } from 'vue';
import Popup from './popup/RampcellIndex.vue';
import { Api } from '@/api/index';
import axios from 'axios';

var divide_size = ref(1000000);
var merge_size = ref(10000);
var Grasstoolresdata = 500;
async function Grasstool() {
	const resdata = await Api.GrassToolApi.GrassTool({
		input_raster: girdfile.value,
		divide_size: divide_size.value,
		merge_size: merge_size.value,
		output_slopeunit: Outputcell.value,
		output_cvar: Outputcvar.value,
		output_area: Outputarea.value,
	});
	console.log('斜坡单元格划分接口测试成功');
	console.log(resdata);

	Grasstoolresdata = resdata.status;
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
	console.log('接收文件接口测试成功');
}

// 输入栅格
const girdfile = ref('');
const InputrasterFile = ref(null);
function triggerFileInput1() {
	InputrasterFile.value.click();
}
const InputGirdFileChange = async (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input.files && input.files[0]) {
		girdfile.value = input.files[0].name;
		const file = input.files[0];
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await axios.post('http://192.168.1.61:9898/upload', formData, {
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

const fileName2 = ref('');
const fileInput2 = ref(null);
// 输出斜坡单元矢量结果
const Outputcell = ref('');
const Outputcellfile = ref(null);
function triggerFileInput2() {
	Outputcellfile.value.click();
}
function OutputcellFileChange(event: any) {
	const file = event.target.files[0];
	if (file) {
		Outputcell.value = file.name;
	}
}

//输出坡向圆方差
const Outputcvar = ref('');
const OutputcvarFile = ref(null);
function triggerFileInput3() {
	OutputcvarFile.value.click();
}
function OutputcvarFileChange(event: any) {
	const file = event.target.files[0];
	if (file) {
		Outputcvar.value = file.name;
	}
}

// 输出单元面积
const Outputarea = ref('');
const OutputareaFile = ref(null);
function triggerFileInput4() {
	OutputareaFile.value.click();
}
function OutputareaFileChange(event: any) {
	const file = event.target.files[0];
	if (file) {
		Outputarea.value = file.name;
	}
}

function increment(id: any) {
	var input = document.getElementById(id);
	var currentValue = parseInt(input.value, 10);
	input.value = currentValue + 1;
}
function decrement(id: any) {
	var input = document.getElementById(id);
	var currentValue = parseInt(input.value, 10);
	input.value = currentValue - 1;
}

function Cancelfun() {
	girdfile.value = '';
	InputrasterFile.value = null;
	Outputcell.value = '';
	Outputcellfile.value = null;
	Outputcvar.value = '';
	OutputcvarFile.value = null;
	Outputarea.value = '';
	OutputareaFile.value = null;
}

function confirmbnt() {
	Grasstool();
	if (Grasstoolresdata === 200) {
		getfileurl(Outputcell.value);
		getfileurl(Outputcell.value);
		getfileurl(Outputarea.value);
	}
}
</script>

<template>
	<Popup name="斜坡单元格划分" left="0.7rem" top="0.08rem" style="width: 15%">
		<div class="popup-content">
			<div class="parameters-container">
				<label for="parameter1">输入栅格</label>
				<div class="container">
					<input type="file" ref="InputrasterFile" @change="InputGirdFileChange" style="display: none" />
					<input type="text" v-model="girdfile" class="file-name-input" />
					<button @click="triggerFileInput1" class="upload-btn"></button>
				</div>
				<div class="parameter">
					<label for="parameter2">划分面积阈值</label>
					<div class="number-adjuster" style="border: 1px solid #ccc">
						<input type="text" id="parameter2" v-model="divide_size" style="border: 0px" />
						<div class="button-group">
							<button @click="increment('parameter2')" id="upbutton"></button>
							<button @click="decrement('parameter2')" id="downbutton"></button>
						</div>
					</div>
				</div>
				<div class="parameter">
					<label for="parameter3">合并面积阈值</label>
					<div class="number-adjuster" style="border: 1px solid #ccc">
						<input type="text" id="parameter3" v-model="merge_size" style="border: 0px" />
						<div class="button-group">
							<button @click="increment('parameter3')" id="upbutton"></button>
							<button @click="decrement('parameter3')" id="downbutton"></button>
						</div>
					</div>
				</div>
				<div class="parameters-container">
					<label for="parameter4">输出斜坡单元矢量结果</label>
					<div class="container">
						<input type="file" ref="Outputcellfile" @change="OutputcellFileChange" style="display: none" />
						<input type="text" v-model="Outputcell" class="file-name-input" />
						<button @click="triggerFileInput2" class="upload-btn"></button>
					</div>
				</div>
				<div class="parameters-container">
					<label for="parameter5">输出坡向圆方差</label>
					<div class="container">
						<input type="file" ref="OutputcvarFile" @change="OutputcvarFileChange" style="display: none" />
						<input type="text" v-model="Outputcvar" class="file-name-input" />
						<button @click="triggerFileInput3" class="upload-btn"></button>
					</div>
				</div>
				<div class="parameters-container">
					<label for="parameter6">输出单元面积</label>
					<div class="container">
						<input type="file" ref="OutputareaFile" @change="OutputareaFileChange" style="display: none" />
						<input type="text" v-model="Outputarea" class="file-name-input" />
						<button @click="triggerFileInput4" class="upload-btn"></button>
					</div>
				</div>
				<button class="donebutton" @click="confirmbnt">确定</button>
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
	padding: 8px;
	margin-right: 5px;
	border: 1px solid rgb(161, 161, 161);
	box-sizing: border-box;
	background-color: #00000000;
	color: #ccc;
	padding: 8px;
}

.number-adjuster {
	display: inline-flex;
	align-items: center;
}

.number-adjuster input {
	width: 93%;
	text-align: center;
	color: #ccc;
	margin-right: 4px;
}

.button-group {
	display: flex;
	flex-direction: column;
}

#upbutton {
	width: 10px;
	height: 10px;
	cursor: pointer;
	color: #ccc;
	background-image: url('@/assets/imgs/up.png');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
}

#downbutton {
	width: 10px;
	height: 10px;
	cursor: pointer;
	color: #ccc;
	background-image: url('@/assets/imgs/down.png');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
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
