<template>
      <a-select
        v-model:value="value1"
        :size="size"
        style="width: 200px"
        :options="options"
        class="select-ain"
      ></a-select>
      <a-button
    @pointerdown.stop=""
    @dblclick.stop=""
    @click="click()"
   class="button"
  ></a-button>
  </template>
  <script >
  import { ref } from 'vue';
  import { Select,Button } from "ant-design-vue";
  export default {
  data() {
    return {
      size: ref('middle'), // 使用ref定义响应式数据
      value1: ref('统计类型'),
      options: [
  {
    value: 'a1',
    label: '平均值',
  },
  {
    value: 'a2',
    label: '众数',
  },
]// 构造选项数组
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
       AButton: Button
    }
};

  </script>

  <style>
.select-ain{
    /* position: absolute; */
    position: relative;
    left: -9%;
    height: 10%;
    width: 50%;
    z-index: 1000;
    
    
}
</style>