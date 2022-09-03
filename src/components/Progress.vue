<template>
  <div class="progress">
    <div class="front" :style="`width: ${value * 100}%`">
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: number }>()
</script>

<style>
.progress {
  width: 100%;
  max-width: 800px;
  height: 16px;
  border-radius: 8px;
  background-color: #e5e5e5;
}

.progress .front {
  min-width: 16px;
  height: inherit;
  background-color: #58cc02;
  border-radius: inherit;
}
</style>
