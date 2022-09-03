<template>
  <input class="answer" type="text" v-model="text" @keydown.enter="emit('submit', text)">
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const text = ref('');
const emit = defineEmits<{
  (event: 'submit', text: string): void
}>()
</script>

<style>
.answer {
  padding: 4px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  display: block;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
}
</style>
