<script setup>
  import {ref} from "vue";

  const users = ref([
    {id : 1, name : '유관순', age : 16},
    {id : 2, name : '홍길동', age : 20},
    {id : 3, name : '이순신', age : 24}
  ]);

</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      
      <!-- user 데이터를 slot으로 바인딩
          -> user라는 이름의 slot property가 부모에게 공개
        -->
      <slot v-bind:user="user">
        {{user.name}} / {{user.age}}
      </slot>
      
    </li>
  </ul>

</template>

<style scoped>

</style>