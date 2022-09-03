<script setup lang="ts">
defineProps<{ tex: string }>();
const render = (tex: string): string => {
  return katex.renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    strict: false,
    output: 'html',
  });
};
</script>

<template>
  <div v-html="render(tex)"></div>
</template>
