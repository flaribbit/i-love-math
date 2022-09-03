<template>
  <input class="answer" type="text" :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" @keydown.enter="emit('submit')">
</template>

<script lang="ts" setup>
defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (event: 'submit'): void
  (event: 'update:modelValue', text: string): void
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
