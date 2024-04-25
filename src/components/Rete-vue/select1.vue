<template>
    
      <a-select
        v-model:value="value1"
        :size="size"
        style="width: 200px"
        :options="options"
        class="select"
        
      ></a-select>
  </template>
  <script >
  import { ref } from 'vue';
  import { Select } from "ant-design-vue";
  export default {
  data() {
    return {
      size: ref('middle'), // 使用ref定义响应式数据
      value1: ref('划分类型选择'),
      options: [
  {
    value: 'a1',
    label: '离散型',
  },
  {
    value: 'a2',
    label: '连续型',
  },
]// 构造选项数组
    };
  },
  methods: {
    popupScroll() {
      // alert(2); // 方法定义
    },
  },
  components: {
      ASelect: Select
    }
};

  </script>

  <style>
.select{
    /* position: absolute; */
    position: relative;
    left: -9%;
    height: 10%;
    width: 50%;
    z-index: 1000;
    
    
}
</style>