<template>
  <a-button
    @pointerdown.stop=""
    @dblclick.stop=""
    
    @click="click()"
   class="button1"
  >执行</a-button>
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
.button1{
  position: absolute;
  width: 40%;
  height: 20%;
  left: 60%;
  top:80%
}
</style>