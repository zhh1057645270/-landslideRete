<template>

        <div class="text-GNN">潜在特征维度</div>
      <a-input-number v-model:value="value2" :min="1" :max="100000" class="input-GNN" />
        <div class="text-GNN">使用GPU与否</div>
      <a-input-number v-model:value="value3" :min="1" :max="100000" class="input-GNN" />
      <a-button
    @pointerdown.stop=""
    @dblclick.stop=""
    @click="click()"
   class="button"
  ></a-button>
</template>
  <script >
import { ref } from 'vue';
import { InputNumber,Button} from 'ant-design-vue';
export default {
	data() {
		return {
			size: ref('middle'), // 使用ref定义响应式数据
			value2: ref(0),
            value3: ref(0),

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
		AInputNumber: InputNumber,
         AButton: Button
	},

};
</script>

  <style>


.text-GNN{
    left: -5%;
font-size:14px ;
}
.input-GNN{
    position: relative;
	left: -9%;
/* margin-top:5%; */
	height: 10%;
	width: 118%;
	z-index: 1000;
}
</style>