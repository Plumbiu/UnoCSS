<script setup lang="ts">
import {
  alllData
} from './router/router';
</script>

<template>
  <div class="flex">
    <ul>
      <li v-for="item in alllData" :key="item.path">
        <RouterLink :to="`/${item.path}`">{{ item.path }}</RouterLink>
      </li>
    </ul>
    <div class="flex-1">
      <RouterView />
    </div>
  </div>
</template>
