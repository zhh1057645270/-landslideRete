<template>
    <a-button
      @pointerdown.stop=""
      @dblclick.stop=""
      @click="data.onClick"
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
      }
    }

    </script>


    <style>

    </style>