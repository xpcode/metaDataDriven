<template>
  <el-button :loading="loading" :disabled="disabled" :autofocus="autofocus" :native-type="nativeType">{{title}}</el-button>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        disabled: false,
        autofocus: false,
        nativeType: 'button',
        title: '按钮'
      }
    }
  }

</script>
