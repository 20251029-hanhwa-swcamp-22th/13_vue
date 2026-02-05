<script setup>
const props = defineProps({
  readValue : {
    type : String,
    required : true
  }
})
</script>

<template>
<h1>{{ props.readValue }}</h1>

  자식 컴포넌트에서 readValue 수정 시도 :
  <input type="text" v-model="props.readValue"->  <!--인풋에서 쓴걸 상태변수로 넘어가게 하는것-->
</template>

<style scoped>

</style>