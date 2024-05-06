<template>
  <a-space>
     <div class="text1">划分面积阈值</div>

    <div class="text2">合并面积阈值</div>

    

    <a-button
    @pointerdown.stop=""
    @dblclick.stop=""
    @click="click()"
   class="button"
  ></a-button>
  </a-space>
</template>
<script >
import { ref } from 'vue';
import { InputNumber ,Button} from "ant-design-vue";
export default {
    props: ['data'],
    data(){
      return{
        value1 : ref(),
        value2 : ref(3),
      }
    },
    created() {
      console.log(this.data)
    },
    components: {
      AInputNumber: InputNumber,
      AButton: Button
    },
    methods:{

      click(){
        alert("点击陈坤")
      }
    }

  }
// const value1 = ref(3);
// const value2 = ref(3);
</script>

<style>
.text1{
  position: absolute;
  width: 50%;
  height: 10%;
  top:30%;
  font-size: 18px;
}
.text2{

  font-size: 18px;
}
.input1{
width:80% ;
}
.input2{
  width:80% ;
}


</style>