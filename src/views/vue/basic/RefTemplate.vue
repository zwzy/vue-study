<template>
  <div class="ref-template-page">
    <a-flex gap="middle">
      <a-card title="1、dom绑定">
        <div ref="getDivRef" class="dom1">
        </div>
      </a-card>
      <a-card title="2、dom更新会实时调绑定函数">
        <div :ref="(el: any) => getDivRefCallback(el)" class="dom2" :style="{ height: height + 'px' }">
          <a-button type="primary" @click="() => changeHeight()">change height</a-button>
        </div>
      </a-card>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const getDivRef = ref<HTMLDivElement | null>(null);
onMounted(() => {
  console.log(getDivRef.value?.offsetHeight)
})

const height = ref(90);

const getDivRefCallback = (el: HTMLDivElement | null) => {
  console.log('dom更新触发', el?.offsetHeight)
}
const changeHeight = () => {
  height.value = height.value === 90 ? 180 : 90;
}
</script>

<style scoped lang="less">
.ref-template-page {
  height: 100%;

  .dom1 {
    height: 90px;
    background: orange;
  }

  .dom2 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: orange;
  }
}
</style>