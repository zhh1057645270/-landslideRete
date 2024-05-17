<template>
	<div class="container">
		<input type="file" ref="fileInput1" @change="InputGirdFileChange" style="display: none" />
		<input type="text" v-model="girdfile" class="file-name-input" />
		<button @click="triggerFileInput1" class="upload-btn"></button>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Api } from '@/api/index';
import axios from 'axios';
export default defineComponent({
	name: 'FilePicker',
	setup() {
		const girdfile = ref('');
		const fileInput1 = ref('');
		const triggerFileInput1 = () => {
			fileInput1.value.click();
		};
		const InputGirdFileChange = async (event) => {
			const input = event.target;
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

		return {
			girdfile,
			fileInput1,
			triggerFileInput1,
			InputGirdFileChange,
		};
	},
});
</script>
<style scoped>
.file-name-input {
	width: 90%;
	padding: 8px;
	margin-right: 5px;
	border: 1px solid rgb(161, 161, 161);
	border-radius: 4px;
	box-sizing: border-box;
	background-color: #fff;
	color: rgb(12, 12, 12);
	padding: 8px;
}

.upload-btn {
	position: absolute;
	right: 5%;
	top: 36%;
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
</style>
