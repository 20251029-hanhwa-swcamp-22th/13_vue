<script setup>
import {ref} from "vue"; /* ref 쓰고 탭 하면 자동완성 */

 const users = ref([
   {id : 1, name : '유관순', age : 16},
   {id : 2, name : '홍킬동', age : 19},
   {id : 3, name : '김김김', age : 6}
 ]);
</script>

<template>
 <ul>
   <li v-for="user in users" :key = "user.id"> <!-- 각배열에 입력한값이 하나씩 입력되는 향상된 for문-->
<!--
   user 데이터를 slot으로 바인딩
   -> user라는 이름의 slot property
    -->
     <slot :user="user">
     {{user.name}} / {{user.age}}
     </slot>
   </li>
 </ul>
</template>

<style scoped>

</style>