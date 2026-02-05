<script setup>

const props = defineProps({
  readValue : {
    type : String,
    required : true
  }
})
</script>

<template>
<h1>{{props.readValue}}</h1>

  자식 컴포넌트에서 부모 readValue 수정 시도 :
  <input type="text" v-model="props.readValue">
</template>

<style scoped>

</style>