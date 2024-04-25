<script setup lang="ts">
import { ref } from 'vue';
import Popup from '@/components/functions/popup/RangestatisticsIndex.vue';

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
	fileName.value = '';
	fileInput.value = null;
	fileName2.value = '';
	fileInput2.value = null;
	fileName3.value = '';
	fileInput3.value = null;
}
</script>

<template>
	<Popup name="区域统计" left="0.62rem" top="0.08rem" style="width: 15%">
		<div class="popup-content">
			<div class="parameters-container">
				<label for="parameter1">区域要素</label>
				<div class="container">
					<input type="file" ref="fileInput" @change="handleFileChange" style="display: none" />
					<input type="text" v-model="fileName" class="file-name-input" />
					<button @click="triggerFileInput" class="upload-btn"></button>
				</div>
				<div class="parameters-container">
					<label for="parameter2">赋值栅格</label>
					<div class="container">
						<input type="file" ref="fileInput2" @change="handleFileChange2" style="display: none" />
						<input type="text" v-model="fileName2" class="file-name-input" />
						<button @click="triggerFileInput2" class="upload-btn"></button>
					</div>
				</div>
				<div class="parameter">
					<label for="parameter3">统计类型</label>
					<select id="parameter3">
						<option value="option1">平均值</option>
						<option value="option2">众数</option>
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
</style>
