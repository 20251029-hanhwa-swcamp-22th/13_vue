<script setup>
  import ScopedSlotChild from "@/components/04_scoped-slot/ScopedSlotChild.vue";
</script>

<template>
  <div class="container">
    <ScopedSlotChild>
        <template #default="{user}">
            
        </template>
    </ScopedSlotChild>
  </div>
</template>

<style scoped>

</style>