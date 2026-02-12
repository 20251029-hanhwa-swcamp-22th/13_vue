<script setup>
import ScopedSlotChild from "@/components/04_scoped-slot/ScopedSlotChild.vue";
</script>

<template>
  <div class="container">
    <ScopedSlotChild>
      <!--
         #default == v-slot:default
         자식 컴포넌트에서 <slot>에 name을 지정하지 않은 경우
         지정되는 기본 이름 -> <slot name="default">

         { user } : slot의 프로퍼티(slot.props)로 자식이 전달한 값을
                    객체 구조 분해 할당으로 접근
     -->
      <template #default="{ user }">
        <strong> {{user.name}} ({{user.age}}세) </strong>
      </template>
    </ScopedSlotChild>
  </div>
</template>

<style scoped>

</style>