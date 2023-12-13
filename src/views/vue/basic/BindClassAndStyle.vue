<template>
  <!-- class -->

  <a-card title="class">
    <a-flex gap="middle" class="bind-classAndStyle-page">
      <a-flex gap="middle" vertical>
        <a-radio-group v-model:value="radioValue">
          <a-radio value="red">red</a-radio>
          <a-radio value="orange">orange</a-radio>
          <a-radio value="black">black</a-radio>
        </a-radio-group>
        <div :class="activeClass">
          动态class切换
        </div>
      </a-flex>
      <a-divider type="vertical" style="height: 60px;" />
      <a-flex gap="middle" vertical>
        <div :class="{ 'black': true, 'text-bold': true }">
          带-的class名
        </div>
      </a-flex>
      <a-divider type="vertical" style="height: 60px;" />
      <a-flex gap="middle" vertical>
        <div :class="[class1, class2]">
          多个class名用数组
        </div>
      </a-flex>
      <a-divider type="vertical" style="height: 60px;" />
      <a-flex gap="middle" vertical>
        <div :class="[{ black: true }, class2]">
          数组中可以用对象class
        </div>
      </a-flex>
    </a-flex>
  </a-card>

  <a-divider  />

  <a-card title="style">
    <a-flex gap="middle" class="bind-classAndStyle-page">
      <a-flex gap="middle" vertical>
        <div v-bind:style="{ color: 'red', fontSize: 14 + 'px' }">style样式</div>
      </a-flex>
      <a-divider type="vertical" style="height: 60px;" />
      <a-flex gap="middle" vertical>
        <div :style="styleObj">
          style绑定class样式
        </div>
      </a-flex>
      <a-divider type="vertical" style="height: 60px;" />
      <a-flex gap="middle" vertical>
        <div v-bind:style="[styleObj, styleObj1]"> style绑定多个对象样式</div>
      </a-flex>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const radioValue = ref('red');
const activeClass = computed(() => ({ [radioValue.value]: true }))

const class1 = 'red'
const class2 = 'orange'



const styleObj = {
  color: 'orange',
  fontSize: '16px'
}
const styleObj1 = {
  fontWeight: 'bold',
}

</script>

<style scoped lang='less'>
.bind-classAndStyle-page {
  min-height: 60px;

  .red {
    color: red;
  }

  .orange {
    color: orange;
  }

  .black {
    color: black;
  }

  .text-bold {
    font-weight: bold;
  }

}
</style>