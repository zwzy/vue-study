<template>
  <div class="slot-child-page">
    <header>
      <slot name="header" :age="age"></slot>
    </header>
    <div class="red bold">
      <slot></slot>
      子组件 #name === v-slot:name
    </div>
    <footer>
      <slot name="footer" :sex="sex"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  header: (props: { age: number }) => any;
  footer: (props: { sex: string }) => any;
}>();
const age = 19;
const sex = '男';
</script>

<style scoped lang="less"></style>
