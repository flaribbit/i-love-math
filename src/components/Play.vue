<template>
  <div>play</div>
  <Progress :value="0.5"></Progress>
  <Katex class="question" tex="x^2+2x+1=0"></Katex>
  <Answer></Answer>
</template>

<script setup lang="ts">
import Katex from './Katex.vue';
import Progress from './Progress.vue';
import Answer from './Answer.vue';
</script>

<style>
.app {
  position: relative;
  height: 100%;
}

.progress {
  margin: 32px auto;
}

.question {
  font-size: 36px;
  margin: 64px auto;
}

.answer {
  font-size: 24px;
  margin: 32px auto;
}
</style>
