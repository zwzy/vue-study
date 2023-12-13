<template>
  <div class="header">
    {{ props.title }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<style scoped lang="less">
.header {
  height: 42px;
  line-height: 42px;
}
</style>
