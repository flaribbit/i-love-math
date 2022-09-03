<template>
  <div class="result">
    <table>
      <tr>
        <th>Question</th>
        <th class="left">Answer</th>
        <th class="left">Input</th>
        <th> </th>
      </tr>
      <tr v-for="row in data">
        <td>
          <Katex :tex="row.question"></Katex>
        </td>
        <td>{{ row.answer }}</td>
        <td>{{ row.user_answer }}</td>
        <td>{{ row.correct }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import Katex from './Katex.vue';
import { IResult } from '../types';
defineProps<{ data: IResult[] }>()
</script>

<style>
.result {
  max-width: 800px;
  width: 100%;
  overflow: auto;
}

.result table {
  width: 100%;
}

.result .left {
  text-align: left;
}
</style>
