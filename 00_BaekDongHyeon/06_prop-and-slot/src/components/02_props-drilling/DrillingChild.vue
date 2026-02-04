<script setup>
  import DrillingGrandChild from "@/components/02_props-drilling/DrillingGrandChild.vue";

  /* props로 전달 받은 값 얻어오기 */
  const props = defineProps({
    count : Number  // 부모로 부터 전달 받은 count 속성(+ Number 타입인지 검사)
  });

  /* emit을 이용해 부모로 부터 plusCount 이벤트 전달 받기 */
  const emit = defineEmits(['plusCount']);

</script>

<template>
  <h2>Child</h2>

  <!-- 자식의 자식 컴포넌트 -->
  <DrillingGrandChild :count="props.count" @plusCount="emit('plusCount')" />
</template>

<style scoped>

</style>