<script setup>
import {useRoute} from "vue-router";

const currentRoute = useRoute();
console.log(currentRoute);
</script>

<template>
  <h1>PathVariable</h1>
  <h3>:id 값 => {{currentRoute.params.id}}</h3>
</template>

<style scoped>

</style>