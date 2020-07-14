<template>
  <YzmInputKeyboard/>
</template>

<script>
import YzmInputKeyboard from './components/yzmInputKeyboard'

export default {
  name: 'App',
  components: {
    YzmInputKeyboard
  }
}
</script>

<style lang='scss'>
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  * {
    padding: 0;
    margin: 0
  }
</style>
