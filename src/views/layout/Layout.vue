<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item v-for="nav in navList" :key="nav.key">{{ nav.name }}</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Vue</a-breadcrumb-item>
        <a-breadcrumb-item>{{ activeNav.name }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ activeMenu.name }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline" style="height: 100%">
            <a-menu-item v-for="menu in menuList" :key="menu.key">{{ menu.name }}</a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import { useRouter, RouterView } from 'vue-router'
import { navList } from './enum';

const router = useRouter();


const selectedKeys1 = ref<string[]>(['1']);
const selectedKeys2 = ref<string[]>(['1-1']);
const openKeys = ref<string[]>(['sub1']);
const activeNav = computed(() => navList.find(item => item.key === selectedKeys1.value[0]) || { name: '--', children: [] })
const menuList = computed(() => activeNav.value?.children)
const activeMenu = computed(() => menuList.value?.find(item => item.key === selectedKeys2.value[0]) || { name: '--', path: '' })

watchEffect(() => {
  router.push(activeMenu.value.path)
})

</script>
<style scoped>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.header {
  display: flex;
  justify-content: center;
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
