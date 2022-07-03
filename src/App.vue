<script setup lang="ts">
import ProblemVue from './components/Problem.vue';
import { Problem } from './types';
import problem from './problems';
const problems: Problem[] = [];
for (let i = 0; i < 10; i++) {
  problems.push(problem());
}
</script>

<template>
  <div>
    <ProblemVue v-for="problem in problems" :problem="problem" />
  </div>
</template>

<style>
</style>
