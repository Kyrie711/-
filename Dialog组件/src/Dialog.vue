<template>
  <div class="clock">
    <div class="contain">
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
      <slot>我是默认展示的slot</slot>
      <button @click="off">关闭</button>
    </div>
  </div>
</template>

<script setup>
  import { defineEmits, defineProps } from 'vue'
  defineProps(['title', 'content'])
  const emits = defineEmits(['offMessage'])

  function off() {
    emits('offMessage', '我关闭啦')
  }
</script>

<style scoped>
  .clock {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
  }

  .contain {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 500px;
    background-color: #fff;
  }
</style>