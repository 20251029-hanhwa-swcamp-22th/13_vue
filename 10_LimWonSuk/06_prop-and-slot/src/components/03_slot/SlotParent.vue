<!--
  * slot
    - 부모 컴포넌트에서 자식 컴포넌트로 내용(content)를 전달하는 방법
    - <자식 컴포넌트>전잘할 내용</자식컴포넌트> 형식으로 작성하면
        지식 컴포넌트의 <slot></slot> 으로 지정환 위치에
         부모가 전달한 내용이 출력된다.
-->
<script setup>
import SlotChild from "@/components/03_slot/SlotChild.vue";
import {reactive, ref} from "vue";
import NamedSlotChild from "@/components/03_slot/NamedSlotChild.vue";

const slotData = ref("Hello Slot");

const obj = reactive({
  name : "홍킬동",
  age : 20,
  img :"/public/images/홍킬동.jpeg"
})

</script>

<template>
<div class="container">
  <h1>부모(전달)</h1>
  <label>slot data 변경하기 </label>
  <input type="text" v-model="slotData">

<!-- 자식 컴포넌트에 내용(content) 전달 -->
  <SlotChild>
    <span>{{slotData}}</span> <!-- 부모 인풋을 전달 받음-->
  </SlotChild>

<!-- Slot의 Name 속성 활용하기 -->
 <NamedSlotChild>
<!--
v-slot == 자식 컴포넌트에서 해당 template을 지정할때 부를 이름
  -> #이름
 -->

   <template v-slot:name>
     <h1>name : {{obj.name}}</h1>
   </template>

   <template #age>
     <h2>age : {{obj.age}}</h2>
   </template>

   <template #img>
     <img :src="obj.img" :alt="obj.name">
   </template>
 </NamedSlotChild>

</div>
</template>

<style scoped>
span{
  color: aquamarine;
}
img{
  width: 200px;
  height: 200px;
}

</style>