<template>
  <div class="input">
    <div class="fake-input-box">
      <div class="fake-input-content" @click="clickYzmFn">
        <div class="fake-input-placeholder">{{inputVal ? null : '请输入短信验证码'}}</div>
        <div :class="className" role="textbox" :aria-label="inputVal || '请输入验证码'">{{inputVal}}</div>
      </div>
    </div>
    <Customkeyboard
      :class='isFlag ? "show" : "hide"'
      @everyItemKeyFn="handleItemKeyFn"
      @deteleFn="deteleItemFn"
      @successFn="successFn"/>
  </div>
</template>

<script>
import Customkeyboard from "./keyboard";

export default {
  name: "inputBox",
  props: {
    msg: String
  },
  data() {
    return {
      inputVal: "", // input值
      isFlag: false, // 是否点击
      className: "", // 动态class名
      maxLength: 6 // input最大长度
    };
  },
  components: {
    Customkeyboard
  },
  created: function() {
    this.className = "fake-input";
  },
  methods: {
    // 点击自定义input事件
    clickYzmFn: function() {
      this.isFlag = true;
      if (this.isFlag) {
        this.className = "fake-input focus";
      }
      this.$emit("getHteFn", this.isFlag);
    },
    // 每个按键
    handleItemKeyFn: function(item) {
      if (item) {
        this.inputVal += item;

        // 验证码为6位数时，不可输入
        if (this.inputVal.length > this.maxLength) {
          this.inputVal = this.inputVal.substr(0, this.maxLength);
        }
      }
    },
    // 删除x
    deteleItemFn: function() {
      const arr = this.inputVal.split("");
      arr.splice(-1, 1);
      this.inputVal = arr.join("");
    },
    // 输入完成按钮, 失去焦点
    successFn: function() {
      this.isFlag = false;
      this.className = "fake-input";
      this.$emit("getHteFn", this.isFlag);
    }
  }
};
</script>

<style scoped lang='scss'>
.input {
  width: 200px;
  height: auto;
}
.fake-input-box {
  width: 200px;
  height: auto;
  border: 1px solid #ccc;
  padding: 0 10px;
  box-sizing: border-box;
  background: #fff;
}
.fake-input-content {
  width: 100%;
  height: 40px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  text-align: left;
  font-size: 12px;

  .fake-input-placeholder {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #999999;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
  }

  .fake-input {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .focus:after {
    content: "";
    position: relative;
    right: 0;
    top: 0;
    height: 50%;
    border-right: 0.05333rem solid #108ee9;
    -webkit-animation: keyboard-cursor infinite 1s step-start;
    animation: keyboard-cursor infinite 1s step-start;
  }
}

@keyframes keyboard-cursor {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
