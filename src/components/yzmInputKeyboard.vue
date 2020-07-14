<template>
  <div class='mark'>
    <div class='code-box' :style="{'bottom': bot}">
      <InputBox @getHteFn="setHteFn"/>
      <div class='recapture-content'>
        <span class='recapture-time' v-if="isFlag">{{`${time}秒后重发`}}</span>
        <span class='recapture-text' v-else @click='recaptureFn'>{{'重新获取'}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import InputBox from './inputBox'
import timerMixin from './timerMixin.js'

export default {
  name: 'yzmInputKeyboard',
  mixins: [timerMixin],
  data() {
    return {
      isFlag: true,
      time: 10,
      bot: 0
    }
  },
  components: {
    InputBox
  },
  created() {
    this.yzmTimerFn()
    this.bot = 0
  },
  methods: {
    // 重新发送验证码事件
    recaptureFn: function() {
      this.isFlag = true
      this.yzmTimerFn()
    },
    // 根据键盘的显示，来动态设置高度
    setHteFn: function(isFlag) {
      if(isFlag) {
          this.bot = 256 + 'px'
      } else {
        this.bot = 0
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .mark {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5)
  }
  .code-box {
    width: 375px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    transition: bottom 0.5s ease-in-out;
  }
  .recapture-time {
    font-size: 16px;
    color: #666;
  }
  .recapture-text {
    font-size: 16px;
    color: #2373EB;
  }
</style>