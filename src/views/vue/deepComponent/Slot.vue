<template>
  <div class="slot-page">
    <a-flex gap="middle">
      <a-card title="具名插槽与默认插槽">
        <SlotChild>
          <template #header>父组件具名插槽header ==> </template>
          <!-- defalut -->
          <div>父组件内的内容被移到子组件slot标签这个位置了</div>
          父组件默认插槽default ==>
          <template #footer>父组件具名插槽footer ==></template>
        </SlotChild>
      </a-card>
      <a-card title="作用域插槽">
        <SlotScope>
          <template #header="{ age }: any">
            >父组件作用域插槽Header需要用到子组件的age: {{ age }}
          </template>
          <!-- defalut -->
          注意Ts类型 #header="slotProps: any"
          <template v-slot:footer="{ sex }: any">
            >父组件具名插槽footer 访问子组件的性别为：{{ sex }}</template
          >
        </SlotScope>
      </a-card>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import SlotChild from './slotComponents/SlotChild.vue';
import SlotScope from './slotComponents/SlotScope.vue';
</script>

<style scoped lang="less">
.slot-page {
}
</style>
