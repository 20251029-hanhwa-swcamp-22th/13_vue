<template>
  <button @click="emit('toggle')">다크모드 토글</button>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(['toggle']);
</script>

<style>

</style>