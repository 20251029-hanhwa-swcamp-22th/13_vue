<script setup>
import {inject} from 'vue';

const props = defineProps({
  count : Number  // 부모로 부터 전달 받은 count 속성(+ Number 타입인지 검사)
});

/* emit을 이용해 부모로 부터 plusCount 이벤트 전달 받기 */
const emit = defineEmits(['plusCount']);

const provideCount = inject('provideCount');
</script>

<template>
  <!-- props.count : Parent -> Child -> GrandChild 넘어온 값-->
  <h3>GrandChild : {{props.count}}</h3>
  <button @click="emit('plusCount')">count++</button>

  <h3>provideCount : {{provideCount}}</h3>
  <button @click="provideCount++">provideCount++</button>
</template>

<style scoped>

</style>