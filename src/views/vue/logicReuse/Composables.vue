<template>
  <div class="composables-page">
    <a-flex gap="middle">
      <a-card title="组合式函数的用法">
        <div></div>
        <a-alert message="功能：逻辑复用"></a-alert>
        <a-divider></a-divider>
        <a-alert message="优点：支持生命周期"></a-alert>
        <a-divider></a-divider>
        <a-alert message="用法：通过另起js文件定义方法返回状态或函数供需要的组件使用"></a-alert>
      </a-card>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch';
const { data, error } = useFetch('/getUserInfo');
console.log(data, error);
</script>

<style scoped lang="less">
.composables-page {
}
</style>
