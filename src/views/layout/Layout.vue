<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo"><apartment-outlined /> 前端系统学习平台</div>
      <div class="header-rt">
        <a-menu
          v-model:selectedKeys="selectedKeys1"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <template v-for="menuItem in menuList" :key="menuItem.key">
            <a-menu-item v-if="!menuItem.children.length">{{ menuItem.name }}</a-menu-item>
            <a-sub-menu v-else key="sub1" :title="menuItem.name">
              <a-menu-item v-for="childMenuItem in menuItem.children" :key="childMenuItem.key">{{
                childMenuItem.name
              }}</a-menu-item>
            </a-sub-menu>
          </template>
        </a-menu>
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>{{ activeMenu.name }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ acitveMenuSubItem.name }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ activeSubMenuItem.name }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu v-model:selectedKeys="selectedKeys2" mode="inline" style="height: 100%">
            <a-menu-item v-for="menu in menuSubItemList" :key="menu.key">{{
              menu.name
            }}</a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> web study 2023 created </a-layout-footer>
  </a-layout>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import { useRouter, useRoute, RouterView } from 'vue-router';
import { ApartmentOutlined } from '@ant-design/icons-vue';
// 所有菜单
import { menuList } from './enum';

const router = useRouter();
const route = useRoute();

// 刷新保持当前选中的菜单
const selectedKeys1 = ref<string[]>([route.path.split('/')[1] || 'basic']);
const selectedKeys2 = ref<string[]>([route.path.split('/')[2] || 'bindClassAndStyle']);
// 第一级菜单，用来显示面包屑 vue react 名称
const activeMenu = computed(
  () =>
    menuList.find((item) =>
      item.children.some((menuItem) => menuItem.key === selectedKeys1.value[0])
    ) || { name: '--', children: [] }
);
// 第一级菜单对应的菜单列表  vue.children
const activeMenuList = computed(() => activeMenu.value?.children || []);
// 二级菜单 当前信息
const acitveMenuSubItem = computed(
  () =>
    activeMenuList.value.find((item) => item.key === selectedKeys1.value[0]) || {
      name: '--',
      children: []
    }
);
// 二级菜单对应的菜单列表 vue.chilren.children
const menuSubItemList = computed(() => acitveMenuSubItem.value?.children || []);
// 三级菜单 vue.children.children中的某个元素
const activeSubMenuItem = computed(
  () =>
    menuSubItemList.value.find((item) => item.key === selectedKeys2.value[0]) || {
      name: '--',
      path: ''
    }
);

watchEffect(() => {
  selectedKeys2.value = acitveMenuSubItem.value.children?.length
    ? [acitveMenuSubItem.value.children[0].key]
    : [];
});

watchEffect(() => {
  router.push(activeSubMenuItem.value.path);
});
</script>
<style scoped>
.header-rt {
  display: flex;

  .user-info {
    margin-left: 40px;
  }
}

.logo {
  font-size: 18px;
  font-weight: bold;
}

.header {
  display: flex;
  background: #fff;
  justify-content: space-between;
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
