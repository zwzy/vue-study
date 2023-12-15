<script setup lang="ts">
import { RouterView } from 'vue-router';
import { userInfoStore } from '@/stores/userInfo';
userInfoStore.initUserInfo({
  name: 'zw',
  age: 26,
  sex: '男'
});
</script>

<template>
  <a-app>
    <RouterView />
  </a-app>
</template>

<style scoped></style>
