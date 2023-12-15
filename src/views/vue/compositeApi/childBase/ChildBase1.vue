<script lang="ts">
import { h, ref } from 'vue';
export default {
  data() {
    return {
      childAge1: 88
    };
  },
  setup(props, context) {
    const count = ref(0);
    const age = ref(19);
    console.log(this, props, context); // 访问不到this  可以传弟props

    // 透传 Attributes（非响应式的对象，等价于 $attrs）
    console.log(context.attrs);

    // 插槽（非响应式的对象，等价于 $slots）
    console.log(context.slots);

    // 触发事件（函数，等价于 $emit）
    console.log(context.emit);

    // 暴露公共属性（函数）
    console.log(context.expose);
    context.expose({ childAge: age }); // 设置了会只抛出这一个，不设置会抛出当前组件所有实例
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return () => h('div', '我是子组件' + count.value);
  }
};
</script>

<style scoped lang="less"></style>
