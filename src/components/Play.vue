<template>
  <div class="play">
    <Progress :value="current / list.length"></Progress>
    <Katex class="question" :tex="list[current].question"></Katex>
    <Answer @submit="onSubmit"></Answer>
  </div>
</template>

<script setup lang="ts">
import Katex from './Katex.vue';
import Progress from './Progress.vue';
import Answer from './Answer.vue';
import { Problem } from '../types';
import { problems } from '../problems';
import { randomInt } from '../utils';
import { ref } from 'vue';
const list = ref<Problem[]>([]);
const current = ref(0);

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

const onSubmit = (text: string) => {
  current.value++;
  if (current.value >= list.value.length) {
    alert('done');
  }
}

getProblems(-1);
</script>

<style>
.play {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.question {
  font-size: 36px;
  flex-grow: 1;
}

.answer {
  font-size: 24px;
}
</style>
