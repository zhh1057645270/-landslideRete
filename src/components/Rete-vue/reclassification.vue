<template>
	<a-select v-model:value="value1" :size="size" style="width: 200px" :options="options" class="select1"></a-select>
	<a-select v-model:value="value2" :size="size" style="width: 200px" :options="options" class="select2"></a-select>
    <div class="text-Re">分类数</div>
      <a-input-number v-model:value="value3" :min="1" :max="100000" class="input3" />
      <a-button
    @pointerdown.stop=""
    @dblclick.stop=""
    @click="click()"
   class="button"
  ></a-button>

</template>
  <script >
import { ref } from 'vue';
import { Select ,InputNumber,Button} from 'ant-design-vue';
export default {
	data() {
		return {
			size: ref('middle'), // 使用ref定义响应式数据
			value1: ref('栅格类型'),
			value2: ref('分类方法'),
            value3: ref(0),
			options: [
				{
					value: 'a1',
					label: '离散型',
				},
				{
					value: 'a2',
					label: '连续型',
				},
			],
			options2: [
				{
					value: 'b1',
					label: '相等间隔分类',
				},
				{
					value: 'b2',
					label: '自然间断点分类',
				},
			],
		};
	},
	methods: {
		popupScroll() {
			// alert(2); // 方法定义
		},
        click(){
        alert("点击陈坤")
      }
	},
	components: {
		ASelect: Select,
		AInputNumber: InputNumber,
         AButton: Button
	},

};
</script>

  <style>
.select1 {
	/* position: absolute; */
	position: relative;
	left: -9%;
	height: 10%;
	width: 50%;
	z-index: 1000;
}
.select2 {
	/* position: absolute; */
	position: relative;
	left: -9%;
	height: 10%;
    top:0%;
	width: 50%;
        margin-top:5%;
	z-index: 1000;
}
.input3{
    position: relative;
	left: -9%;
/* margin-top:5%; */
	height: 10%;
	width: 118%;
	z-index: 1000;
}
.button{
  position: absolute;
  width: 30%;
  height: 12%;
  right:0%;
  bottom:0%;
    background-image: url('@/assets/imgs/right.png');
  background-size: 100%;
  border-image-repeat: no-repeat;
}
.text-Re{
    left: -5%;
font-size:14px ;
}
</style>