<template>
  <a-space>
     <div>划分面积阈值</div>
    <a-input-number v-model:value="value1" :min="1" :max="100000" class="input1" />
    <div>合并面积阈值</div>
    <a-input-number v-model:value="value2" :min="1" :max="100000" class="input2" />
  </a-space>
</template>
<script >
import { ref } from 'vue';
import { InputNumber } from "ant-design-vue";
export default {
    props: ['data'],
    data(){
      return{
        value1 : ref(3),
        value2 : ref(3),
      }
    },
    created() {
      console.log(this.data)
    },
    components: {
      AInputNumber: InputNumber
    },

  }
// const value1 = ref(3);
// const value2 = ref(3);
</script>

<style>
.input1{

}

</style>