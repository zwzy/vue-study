<template>
  <div class="event-handling-page">
    <a-flex gap="middle" wrap="wrap">
      <a-card title="1、event normal">
        <div @click="say('wrap')" class="wrapper">
          <div @click="say('inner')" class="inner">内部</div>
        </div>
      </a-card>
      <a-card title="2、event inner stop 防止冒泡触发父级事件">
        <div @click="say('wrap')" class="wrapper">
          <div @click.stop="say('inner')" class="inner">内部</div>
        </div>
      </a-card>
      <a-card title="3、event wrap self 本身事件才会触发，冒泡来的不触发">
        <div @click.self="say('wrap')" class="wrapper">
          <div @click="say('inner')" class="inner">内部</div>
        </div>
      </a-card>
      <a-card title="4、event inner once 只触发一次">
        <div @click="say('wrap')" class="wrapper">
          <div @click.once="say('inner')" class="inner">内部</div>
        </div>
      </a-card>
      <a-card
        title="5、event wrap capture 打乱冒泡顺序，先执行有capture的事件，都有从外到内事件执行"
      >
        <div @click.capture="say('wrap')" class="wrapper">
          <div @click.capture="say('inner')" class="inner">内部</div>
        </div>
      </a-card>
      <a-card title="6、event wrap normal">
        <div @scroll="onNormalScroll" class="wrapper scroll-wrapper">
          <div class="inner scroll-inner">内部</div>
        </div>
      </a-card>
      <a-card title="7、event wrap passive 没看出差别，据说在手机端性能比较好">
        <div @scroll.passive="onPassiveScroll" class="wrapper scroll-wrapper">
          <div class="inner scroll-inner">内部</div>
        </div>
      </a-card>
      <a-card title="8、event inner keyup enter 键盘事件 只有在表单事件中才生效">
        <div class="wrapper" @click="say('wrap')">
          <input @keyup.enter="say('inner enter')" class="inner" />
          <div style="margin-left: 10px" @keyup.enter="say('inner enter')" class="inner">inner</div>
        </div>
      </a-card>
      <a-card title="9、event inner click middle 鼠标事件 left right middle">
        <div class="wrapper" @click="say('wrap')">
          <div @click.middle="say('inner middle')" class="inner">enter</div>
        </div>
      </a-card>
      <a-card title="10、event inner click middle + ctrl 鼠标事件">
        <div class="wrapper" @click="say('wrap')">
          <div @click.ctrl.middle="say('inner middle + ctrl')" class="inner">inner</div>
        </div>
      </a-card>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { App } from 'ant-design-vue';
const { message } = App.useApp();
const say = (info: string) => {
  message.success(info);
};
const onNormalScroll = (e: UIEvent) => {
  console.log('normal', (e.target as HTMLElement).scrollTop);
};
const onPassiveScroll = (e: UIEvent) => {
  console.log('passive', (e.target as HTMLElement).scrollTop);
};
</script>

<style scoped lang="less">
.event-handling-page {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    background: #000;
    padding: 5px 15px;

    &.scroll-wrapper {
      height: 100px;
      overflow-y: auto;
      align-items: flex-start;
    }

    .inner {
      width: 100px;
      height: 50px;
      background: #666;

      &.scroll-inner {
        height: 500px;
      }
    }
  }
}
</style>
