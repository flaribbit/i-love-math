<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div>
    <button @click="router.replace('/')">test</button>
    <button @click="router.replace('/play')">play</button>
  </div>
  <router-view></router-view>
</template>

<style>
</style>
