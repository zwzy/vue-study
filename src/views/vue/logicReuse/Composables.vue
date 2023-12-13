<template>
  <div class="composables-page">
    <a-flex gap="middle">
      <a-card title="具名插槽与默认插槽"> </a-card>
      <a-card title="作用域插槽"> </a-card>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch.ts';
const { data, error } = useFetch('/getUserInfo');
console.log(data, error);
</script>

<style scoped lang="less">
.composables-page {
}
</style>
