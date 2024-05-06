<script setup lang="ts">
import { ref } from 'vue';
import Popup from './popup/RasterreclassIndex.vue';
import { Api } from 'D:/plant/landslide-main/src/api/index';
import axios from 'axios';

const selectedValuetype = ref("离散型")
const selectmethods = ref("相等间隔分类")
const recalssnum = ref(1)
const class_num = ref([])
const ndv = ref()
const oldValues = ref([]); // 用于保存旧值列表
const newValues = ref([]); // 用于保存新值列表
async function getrange() {
	oldValues.value = []
	newValues.value = []
	const resdata = await Api.ReclassificationApi.get_range({
		input_raster: Inputgirdfile.value,
	});
	console.log("离散分类接口测试成功")
	class_num.value = resdata.data.class_num;
	ndv.value = resdata.data.ndv;
	class_num.value.push("ndv");
	oldValues.value = [...class_num.value];
	newValues.value = class_num.value.map((item, index) => index === class_num.value.length - 1 ? ndv.value : index);
	console.log(oldValues.value);
	console.log(newValues.value);
}

async function reclassdiscrete() {
	const resdata = await Api.ReclassificationApi.reclass_discrete({
		data_ori: oldValues.value,
		data_new: newValues.value,
		output_raster: OutputGirdFile.value,
	});
	console.log("离散分类接口文件接口测试成功")
}

const breaks_num = ref([])
async function getBreaks() {
	oldValues.value = []
	newValues.value = []
	const resdata = await Api.ReclassificationApi.get_breaks({
		input_raster: Inputgirdfile.value,
		select_method: selectmethods.value,
		reclass_n: recalssnum.value
	});
	console.log("连续分类接口测试成功")
	console.log(resdata.data);
	breaks_num.value = resdata.data.breaks;
	ndv.value = resdata.data.no_data_value;
	// 为每个断点区间创建一个字符串表示
	for (let i = 0; i < breaks_num.value.length - 1; i++) {
		oldValues.value[i] = `${breaks_num.value[i]}-${breaks_num.value[i + 1]}`;
		newValues.value[i] = i + 1;
	}
	// 处理无数据值的情况
	oldValues.value.push("ndv");
	newValues.value.push(ndv.value);
}

async function reclasscontinuous() {
	const resdata = await Api.ReclassificationApi.reclass_continuous({
		value_ori: breaks_num.value.slice(0, breaks_num.value.length - 1),
		value_new: newValues.value.slice(0, newValues.value.length - 1),
		output_raster: OutputGirdFile.value,
	});
	console.log(resdata)

	// 从响应中获取文件名
	const contentDisposition = resdata.headers.get('content-disposition');
	const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
	const fileName = fileNameMatch ? fileNameMatch[1] : 'downloaded_file';

	// 获取文件内容
	const fileBlob = await resdata.arrayBuffer();
	// 创建一个临时链接，并设置下载属性
	const link = document.createElement('a');
	link.href = window.URL.createObjectURL(fileBlob);
	link.download = fileName;
	link.click();
	console.log(fileName)
	console.log("连续类接口文件接口测试成功")
}

const Inputgirdfile = ref('');
const fileInput = ref(null);
function triggerFileInput() {
	fileInput.value.click();
}
const InputGirdFileChange = async (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input.files && input.files[0]) {
		Inputgirdfile.value = input.files[0].name;
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
const OutputGirdFile = ref('');
const fileInput2 = ref(null);
function triggerFileInput2() {
	fileInput2.value.click();
}
const OutputGirdFileChange = async (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input.files && input.files[0]) {
		OutputGirdFile.value = input.files[0].name;
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

function increment(id: any) {
	recalssnum.value = recalssnum.value + 1;
}

function decrement(id: any) {
	recalssnum.value = recalssnum.value - 1;
}

function Cancelfun() {
	Inputgirdfile.value = '';
	fileInput.value = null;
	OutputGirdFile.value = '';
	fileInput2.value = null;
}

const items = ref([
	{ oldValue: '', newValue: '' },
]);
function addItem() {
	items.value.push({ oldValue: '', newValue: '' });
}

const removeItem = () => {
	// 删除最后一个条目
	items.value.pop();
};

function addClassification() {
	console.log(selectedValuetype.value)
	if (selectedValuetype.value == "离散型")
		getrange();
	else if (selectedValuetype.value == "连续型")
		getBreaks();
}

function btnconfirm() {
	if (selectedValuetype.value == "离散型")
		reclassdiscrete();
	else if (selectedValuetype.value == "连续型")
		reclasscontinuous();
}
</script>

<template>
	<Popup name="栅格重分类" left="0.62rem" top="0.08rem" style="width:15%">
		<div class="popup-content">
			<div class="parameters-container">
				<label for="parameter1">输入栅格</label>
				<div class="container">
					<input type="text" v-model="Inputgirdfile" class="file-name-input" />
					<input type="file" ref="fileInput" @change="InputGirdFileChange" style="display: none" />
					<button @click="triggerFileInput" class="upload-btn"></button>
				</div>
				<div class="parameter">
					<label for="parameter2">栅格类型</label>
					<select id="parameter2" v-model="selectedValuetype">
						<option value="离散型">离散型</option>
						<option value="连续型">连续型</option>
					</select>
				</div>
				<div class="parameter">
					<label for="parameter3">分类方法</label>
					<select id="parameter3" v-model="selectmethods">
						<option value="相等间隔分类">相等间隔分类</option>
						<option value="自然间断点分类">自然间断点分类</option>
					</select>
				</div>
				<div class="parameter">
					<label for="parameter4">分类数</label>
					<div class="number-adjuster" style="border:1px solid #ccc">
						<input type="text" id="parameter4" v-model="recalssnum" style="border:0px">
						<div class="button-group">
							<button @click="increment('parameter4')" id="upbutton"></button>
							<button @click="decrement('parameter4')" id="downbutton"></button>
						</div>
					</div>
				</div>
				<div class="parameters-container">
					<label for="parameter4">重分类</label>
					<div class="container">

						<div class="row">
							<div class="col">
								<table class="table">
									<thead>
										<tr>
											<th scope="col" style="width:145px">旧值</th>
											<th scope="col" style="width:max-content">新值</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(item, index) in oldValues" :key="index">
											<td>{{ item }}</td>
											<td>{{ index === oldValues.length - 1 ? ndv : index }}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col2">
								<button class="reclassbutton" @click="addClassification">分类</button>
								<button class="reclassbutton" @click="addItem">增加条目</button>
								<button class="reclassbutton" @click="removeItem">删除条目</button>
							</div>
						</div>
					</div>
				</div>

				<div class="parameters-container">
					<label for="parameter5">输出栅格</label>
					<div class="container">
						<input type="file" ref="fileInput2" @change="OutputGirdFileChange" style="display: none" />
						<input type="text" v-model="OutputGirdFile" class="file-name-input" />
						<button @click="triggerFileInput2" class="upload-btn"></button>
					</div>
				</div>
				<button class="donebutton" @click="btnconfirm">确定</button>
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
	padding: 6px;
	border: 1px solid rgb(161, 161, 161);
	border-radius: 4px;
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

.row {
	display: flex;

}

.col {
	max-height: 150px;
	/* 限制表格容器的最大高度 */
	max-width: 100%;
	/* 限制表格容器的最大宽度 */
	overflow: auto;
	/* 启用滚动条 */
	width: 90%;
	border: 1px solid rgb(161, 161, 161);
}

.col2 {
	width: 30%;
}

.buttons-container {
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
}

.reclassbutton {
	width: 55px;
	height: 20px;
	margin-bottom: 6%;
	color: #ccc;
	border: 1px solid rgb(161, 161, 161);
	margin-left: 5px;
	cursor: pointer;
}

.table {
	width: 100%;
}

th,
td {
	padding: 2px;
	border: 0.5px solid rgb(110, 110, 110);
}

.table th:last-child,
.table td:last-child {
	border-right: none;
}
</style>
