<script setup lang="ts">
import Katex from '../components/Katex.vue';
import { Problem } from '../types';
import { problems } from '../problems';
import { randomInt } from '../utils';
import { ref } from 'vue';
const list = ref<Problem[]>([]);

const getProblems = (index: number) => {
  list.value = [];
  if (index === -1) {
    const length = problems.length;
    for (let i = 0; i < 10; i++) {
      list.value.push(problems[randomInt(length)].get());
    }
  } else {
    for (let i = 0; i < 10; i++) {
      list.value.push(problems[index].get());
    }
  }
}
</script>

<template>
  <div>
    <button @click="getProblems(-1)">全部</button>
    <button v-for="(p, i) in problems" @click="getProblems(i)">{{ p.name }}</button>
  </div>
  <div>
    <Katex v-for="problem in list" :tex="problem.question" />
  </div>
</template>

<style>
</style>
