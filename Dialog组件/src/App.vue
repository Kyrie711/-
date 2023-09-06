<template>
  <button @click="open">打开弹窗</button>
  <template v-if="openValue">
    <Dialog @off-message="off" :title="title" :content="content">这里是子组件</Dialog>
  </template>
</template>
<script setup>
  import Dialog from './Dialog.vue';
  import { ref } from 'vue'

  let openValue = ref(false)
  let title = ref('我是标题')
  let content = ref('我是内容')

  function open() {
    openValue.value = true
  }

  function off(content) {
    alert(content)
    openValue.value = false
  }
</script>
<style lang="less" scoped>
</style>