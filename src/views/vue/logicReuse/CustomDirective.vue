<template>
  <div class="custom-directive-page">
    <a-flex gap="middle">
      <a-card title="局部指令对象方式的定义">
        <a-alert message="定义：需要用的组件的setup ts文件里定义"></a-alert>
        <a-divider></a-divider>
        <a-alert message="eg：const vFocus = { mounted(el) { el.focus(); } };"></a-alert>
        <a-divider></a-divider>
        <a-alert message="使用：<input v-focus />"></a-alert>
        <a-divider></a-divider>
        <input v-focus />
      </a-card>

      <a-card title="全局指令对象方式的定义">
        <a-alert message="定义：main.ts入口文件中定义"></a-alert>
        <a-divider></a-divider>
        <a-alert
          message="eg: app.directive('focus', {
          mounted(el) { el.focus(); } 
});"
        ></a-alert>
        <a-divider></a-divider>
        <a-alert message="使用：<input v-focus />"></a-alert>
        <a-divider></a-divider>
        <input v-focus />
      </a-card>

      <a-card title="简化函数方式带参数的指令定义">
        <a-alert message="v-color:bg ===> (e,binding)=>{binding.arg === 'bg'}"></a-alert>
        <a-divider></a-divider>
        <a-alert
          message="v-color='orange' ===> (e,binding)=>{binding.value === 'orange'}"
        ></a-alert>
        <a-divider></a-divider>
        <a-alert message="定义：const vColor=(e, binding)=>{}"></a-alert>
        <a-divider></a-divider>
        <div class="directive-item" v-color:bg="'red'">测试背景</div>
        <div class="directive-item" v-color="'orange'">测试字体色</div>
      </a-card>
    </a-flex>
  </div>
</template>
<script setup lang="ts">
const vFocus = {
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el: any) {
    el.focus();
  }
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  // created(el, binding, vnode, prevVnode) {
  //   // 下面会介绍各个参数的细节
  // },
  // // 在元素被插入到 DOM 前调用
  // beforeMount(el, binding, vnode, prevVnode) {},
  // // 绑定元素的父组件更新前调用
  // beforeUpdate(el, binding, vnode, prevVnode) {},
  // // 在绑定元素的父组件
  // // 及他自己的所有子节点都更新后调用
  // updated(el, binding, vnode, prevVnode) {},
  // // 绑定元素的父组件卸载前调用
  // beforeUnmount(el, binding, vnode, prevVnode) {},
  // // 绑定元素的父组件卸载后调用
  // unmounted(el, binding, vnode, prevVnode) {}
};

// 简化模式 函数方式 updated 与 mounted 都会调用
const vColor = (el: any, binding: any) => {
  if (binding.arg === 'bg') {
    el.style.background = binding.value;
  } else {
    el.style.color = binding.value;
  }
};
</script>

<style scoped lang="less">
.custom-directive-page {
  .directive-item {
    height: 36px;
  }
}
</style>
