<template>
  <div class="state-management-page">
    <a-flex gap="middle">
      <a-card title="全局状态管理 简易版">
        <a-button type="primary" @click="handleUpdateUserInfo">更新属性</a-button>
        <a-divider type="vertical"></a-divider>
        <a-button type="primary" @click="handleInitUserInfo">重置属性</a-button>
        <a-divider></a-divider>
        <a-alert :message="messageStr"></a-alert>
      </a-card>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { userInfoStore } from '@/stores/userInfo';

const messageStr = computed(
  () =>
    `获取全局状态: ${userInfoStore.userInfo.name}年龄${userInfoStore.userInfo.age},性别${userInfoStore.userInfo.sex}`
);

const handleInitUserInfo = () => {
  userInfoStore.initUserInfo({
    name: 'zw',
    age: 26,
    sex: '男'
  });
};
const handleUpdateUserInfo = () => {
  userInfoStore.updateUserInfo({
    name: 'lss',
    age: 25,
    sex: '女'
  });
};
</script>

<style scoped lang="less">
.state-management-page {
}
</style>
