<template>
  <div class="slot-child-page">
    <header>
      <slot name="header"></slot>
      子组件 具名插槽 childHeader
    </header>
    <a-divider></a-divider>
    <div class="red bold">
      <slot></slot>
      子组件 #name === v-slot:name
    </div>
    <a-divider></a-divider>
    <footer>
      <slot name="footer"></slot>
      子组件 具名插槽 childFooter
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>
