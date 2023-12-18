import type { log } from 'console';
<template>
  <div class="page">
    <a-flex gap="middle">
      <a-card title="setup钩子的使用">
        <a-alert
          message="用法：export default { setup() {} }, 选项式API钩子访问它返回的数据需要通过this来访问"
        ></a-alert>
        <a-divider></a-divider>
        <a-alert type="error" message="注意2：setup并没有组件实例访问权，即data中的实例访问不到"
          >123424</a-alert
        >
      </a-card>
      <a-card title="setup钩子抛出属性给父组件用">
        <a-alert
          message="用法：子组件的setup(props, context)函数中使用 context.expose({ age })"
        ></a-alert>
        <a-divider></a-divider>
        <a-alert :message="`已获取到子组件的Age: ${childAge}`"></a-alert>
        <a-divider></a-divider>
        <ChildBase1 ref="childBase1"></ChildBase1>
      </a-card>
    </a-flex>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import ChildBase1 from './childBase/ChildBase1.vue';
export default {
  props: {
    name: {
      type: String,
      default: 'zw'
    }
  },
  components: { ChildBase1 },
  computed: {
    childAge() {
      const childBase1Ele: any = this.$refs.childBase1;
      return childBase1Ele.childAge;
    }
  },
  data() {
    return {
      age: 100
    };
  },
  setup(props, context) {
    const count = ref(0);
    console.log(this, props, context); // 访问不到this  可以传弟props

    // 透传 Attributes（非响应式的对象，等价于 $attrs）
    console.log(context.attrs);

    // 插槽（非响应式的对象，等价于 $slots）
    console.log(context.slots);

    // 触发事件（函数，等价于 $emit）
    console.log(context.emit);

    // 暴露公共属性（函数）
    console.log(context.expose);

    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count
    };
  },
  mounted() {
    console.log(this.count); // 0
    console.log(this.$refs.childBase1); // 可以访问子组件的setup中抛出的childAge属性
  }
};
</script>

<style scoped lang="less"></style>
