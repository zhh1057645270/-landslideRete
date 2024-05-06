<template>
  <a-button
    @pointerdown.stop=""
    @dblclick.stop=""
    
    @click="click()"
   class="button"
  ></a-button>
  </template>
  
  <script>
  import { Button } from "ant-design-vue";
  
  export default {
    props: ['data'],
    created() {
      console.log(this.data)
    },
    components: {
      AButton: Button
    },
    methods:{

      click(){
        alert("点击陈坤")
      }
    }
  }

  </script>

  <style>

</style>