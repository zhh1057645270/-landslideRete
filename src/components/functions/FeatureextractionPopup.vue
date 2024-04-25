<script setup lang="ts">
import { ref } from 'vue';
import Popup from '@/components/functions/popup/FeatureextractionIndex.vue';

const fileName1 = ref('');
const fileInput1 = ref(null);
function triggerFileInput1() {
	fileInput1.value.click();
}
function handleFileChange1(event: any) {
	const file = event.target.files[0];
	if (file) {
		fileName1.value = file.name;
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

const fileName4 = ref('');
const fileInput4 = ref(null);
function triggerFileInput4() {
	fileInput4.value.click();
}
function handleFileChange4(event: any) {
	const file = event.target.files[0];
	if (file) {
		fileName4.value = file.name;
	}
}

function Cancelfun() {
	fileName1.value = '';
	fileInput1.value = null;
	fileName2.value = '';
	fileInput2.value = null;
	fileName3.value = '';
	fileInput3.value = null;
	fileName4.value = '';
	fileInput4.value = null;
}

//以下函数需要修改
const items = ref([
	{ Value: '' },
]);
function addItem() {
	items.value.push({ Value: ''});
}

const removeItem = () => {
	items.value.pop();
};

function addClassification() {
	console.log(items.value);
}
</script>

<template>
	<Popup name="特征提取及样本标记" left="0.62rem" top="0.08rem" style="width:15%">
		<div class="popup-content">
			<div class="parameters-container">
				<label for="parameter1">输入滑坡点</label>
				<div class="container">
					<input type="file" ref="fileInput1" @change="handleFileChange1" style="display: none" />
					<input type="text" v-model="fileName1" class="file-name-input" />
					<button @click="triggerFileInput1" class="upload-btn"></button>
				</div>

				<div class="parameters-container">
					<label for="parameter4">输入滑坡单元</label>
					<div class="container">
						<input type="file" ref="fileInput2" @change="handleFileChange2" style="display: none" />
						<input type="text" v-model="fileName2" class="file-name-input" />
						<button @click="triggerFileInput2" class="upload-btn"></button>
					</div>
				</div>
				<div class="parameters-container">
					<label for="parameter5">输入因子图层</label>
					<div class="container">
						<input type="file" ref="fileInput3" @change="handleFileChange3" style="display: none" />
						<input type="text" v-model="fileName3" class="file-name-input" />
						<button @click="triggerFileInput3" class="upload-btn"></button>
					</div>
				</div>
				<div class="parameters-container">
					<div class="container">
						<div class="row">
							<div class="col">
								<table class="table">
									<tbody>
										<tr v-for="(item, index) in items" :key="index">
											<td>{{ item.Value }}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col2">
								<button class="appendbutton" @click="addClassification"></button>
								<button class="removebutton" @click="addItem"></button>
								<button class="moveupbutton" @click="removeItem"></button>
								<button class="movedownbutton" @click="removeItem"></button>
							</div>
						</div>
					</div>
				</div>
				<div class="parameters-container">
					<label for="parameter6">输出特征值</label>
					<div class="container">
						<input type="file" ref="fileInput4" @change="handleFileChange4" style="display: none" />
						<input type="text" v-model="fileName4" class="file-name-input" />
						<button @click="triggerFileInput4" class="upload-btn"></button>
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
	width: 99%;
	border: 1px solid rgb(161, 161, 161);
}

.col2 {
	width: 20%;
	margin-left: 5%;

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
	padding: 2px;
	border-right: 1px solid rgb(161, 161, 161);
}

.table th:last-child,
.table td:last-child {
	border-right: none;
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
