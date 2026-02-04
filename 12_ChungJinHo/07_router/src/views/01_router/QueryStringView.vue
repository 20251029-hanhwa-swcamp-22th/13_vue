<script setup>
  import {useRoute} from "vue-router";

  const currentRoute = useRoute();
  console.log(currentRoute);
</script>

<template>
  <h1>QueryString</h1>
  <h3>name : {{currentRoute.query.name}}</h3>
  <h3>age : {{currentRoute.query.age}}</h3>

  <!-- gender 있을 경우 -->
  <h3 v-if="currentRoute.query.gender">
    gender : {{currentRoute.query.gender}}
  </h3>
</template>

<style scoped>

</style>