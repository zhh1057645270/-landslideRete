<template>
    <!-- 使用 a-radio 组件 -->
    <a-radio v-model="selected" :options="radioOptions"></a-radio>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Radio } from 'ant-design-vue'; // 确保导入组件
  
  export default defineComponent({
    components: {
      'a-radio': Radio, // 确保在组件中注册
    },
    setup() {
      const selected = ref('option1');
      const radioOptions = ref([
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]);
  
      return { selected, radioOptions };
    },
  });
  </script>