<script setup lang="ts">
import { Problem } from '../types';
defineProps<{ problem: Problem }>();
const render = (latex: string): string => {
  return katex.renderToString(latex, {
    displayMode: true,
    throwOnError: false,
    strict: false,
    output: 'html',
  });
};
</script>

<template>
  <div v-html="render(problem.question)"></div>
</template>
