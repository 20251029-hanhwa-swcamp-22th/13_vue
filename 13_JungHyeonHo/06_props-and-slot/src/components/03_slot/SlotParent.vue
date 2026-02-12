<!--
  * slot
    - 부모 컴포넌트에서 자식 컴포넌트로 내용(content)를 전달하는 방법
    - <자식컴포넌트> 전달할 내용 </자식컴포넌트>  형식으로 작성하면
      자식 컴포넌트의 <slot></slot> 으로 지정한 위치에
      부모가 전달한 내용이 출력된다.
-->

<script setup>
import SlotChild from "@/components/03_slot/SlotChild.vue";
import NameSlotChild from "@/components/03_slot/NameSlotChild.vue";
import {ref, reactive} from 'vue';

const slotData = ref('Hello Slot');

const obj = reactive({
  name : '홍길동',
  age : 20,
  img : 'https://flexible.img.hani.co.kr/flexible/normal/290/206/imgdb/resize/2010/0712/1278390342_8000500986_20100712.JPG'
});


</script>


<template>
  <div class="container">
    <h1>Parent</h1>
    <label>slot data 변경하기</label>
    <input type="text" v-model="slotData">

    <!-- 자식 컴포넌트에 내용(content) 전달 -->
    <SlotChild>
      <span>{{slotData}}</span>
    </SlotChild>

    <!-- Slot의 name 속성 활용하기   -->
    <NameSlotChild>

      <!--  v-slot: 자식 컴포넌트에서 해당 template을 지정할 때 부를 이름
          축약 표현 -> #이름
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

    </NameSlotChild>

  </div>
</template>


<style scoped>
span{
  color: red;
}

img{
  width: 200px;
  height: 200px;
}
</style>