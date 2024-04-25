<script setup lang="ts">
import { ref } from 'vue';
import Popup from '@/components/functions/popup/RasterreclassIndex.vue';

const fileName = ref('');
const fileInput = ref(null);
function triggerFileInput() {
	fileInput.value.click();
}
function handleFileChange(event: any) {
	const file = event.target.files[0];
	if (file) {
		fileName.value = file.name;
	}
}
const fileName2 = ref('');
const fileInput2 = ref(null);
function triggerFileInput2() {
	fileInput2.value.click();
}
function handleFileChange2(event: any) {
	const file = event.target.files[0];
	if (file) {
		fileName2.value = file.name;
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
	fileName.value = '';
	fileInput.value = null;
	fileName2.value = '';
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
	console.log(items.value);
}
</script>

<template>
	<Popup name="栅格重分类" left="0.62rem" top="0.08rem" style="width:20%">
		<div class="popup-content">
			<div class="parameters-container">
				<label for="parameter1">输入栅格</label>
				<div class="container">
					<input type="file" ref="fileInput" @change="handleFileChange" style="display: none" />
					<input type="text" readonly v-model="fileName" class="file-name-input" />
					<button @click="triggerFileInput" class="upload-btn"></button>
				</div>
				<div class="parameter">
					<label for="parameter2">栅格类型</label>
					<select id="parameter2">
						<option value="option1">离散型</option>
						<option value="option2">连续型</option>
					</select>
				</div>
				<div class="parameter">
					<label for="parameter3">分类方法</label>
					<select id="parameter3">
						<option value="option1">相等间隔分类</option>
						<option value="option2">自然间断点分类</option>
					</select>
				</div>
				<div class="parameter">
					<label for="parameter4">分类数</label>
					<div class="number-adjuster" style="border:1px solid #ccc">
						<input type="text" id="parameter4" value="1" style="border:0px">
						<div class="button-group">
							<button @click="increment('parameter3')" id="upbutton"></button>
							<button @click="decrement('parameter3')" id="downbutton"></button>
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
										<th scope="col">旧值</th>
										<th scope="col">新值</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item, index) in items" :key="index">
										<td>{{ item.oldValue }}</td>
										<td>{{ item.newValue }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col2">
							<button class="reclassbutton" @click="addClassification" >分类</button>
							<button class="reclassbutton" @click="addItem" >增加条目</button>
							<button class="reclassbutton" @click="removeItem" >删除条目</button>
						</div>
					</div>
				</div>
			</div>

				<div class="parameters-container">
					<label for="parameter5">输出栅格</label>
					<div class="container">
						<input type="file" ref="fileInput2" @change="handleFileChange2" style="display: none" />
						<input type="text" v-model="fileName2" class="file-name-input" />
						<button @click="triggerFileInput2" class="upload-btn"></button>
					</div>
				</div>
				<button class="donebutton">确定</button>
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
	height: 20%;
	margin-top: 4%;
	margin-left: 17%;
	color: #ccc;
	border: 1px solid rgb(161, 161, 161);
}

.canclebutton {
	width: 30%;
	height: 20%;
	margin-left: 5%;
	color: #ccc;
	border: 1px solid rgb(161, 161, 161);
}

.row {
    display: flex;

}

.col {
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
    width: 80%;
    height: 30%;
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
	border-right: 1px solid rgb(161, 161, 161);
}
.table th:last-child,
.table td:last-child {
    border-right: none; 
}
</style>
