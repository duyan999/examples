<template>
  <div class='keyboard-content'>
    <div class='success-btn' @click='$emit("successFn")'>完成</div>
    <div class='keyboard-box'>
      <ul class='num-keyboard'>
        <li 
          v-for="(item, i) in numArray1"
          :key='"item" + i'
          :class='count == item && isShowbgColor ? "bgColor" : ""'
          @click="handleClickEveryKey(item)"
        >{{item}}</li>
      </ul>
      <ul class='num-keyboard special'>
        <li
          v-for="(item, i) in numArray4"
          :key="i"
          :class='count == item && isShowbgColor ? "bgColor" : ""'
          @click='handleClickEveryKey(item)'
        >{{item}}</li>
        <li class="close" @click='$emit("deteleFn")'>X</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numArray1: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      numArray4: ['', '0'],
      isShowbgColor: false,
      count: -1,
      itemArr: []
    }
  },
  methods: {
    // 键盘按键的事件
    handleClickEveryKey: function(item) {
      if(item){
        this.count = item
      }else{
        this.count = -1
      }
      this.$emit('everyItemKeyFn', item)
      setTimeout(() => {
        this.isShowbgColor = false
      }, 80)
      this.isShowbgColor = true
    }
  }
}

</script>
<style scoped lang="scss">
  .keyboard-content {
    width: 375px;
    height: auto;
    margin: 0 auto;
    position: fixed;
    z-index: 99;
      
      &.show {
        bottom: 0;
        transition: bottom 0.5s ease;
      }
      &.hide {
        bottom: -300px;
        transition: bottom 1s ease;
      }
  }
  .success-btn {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: right;
    padding-right: 15px;
    box-sizing: border-box;
    color: #2373EB;
    background: #fff;
    border-top: 1px solid #ddd;
  }
  .keyboard-box {
    width: 375px;
    height: auto;
    background: #D2D5DB;
    padding: 8px;
    box-sizing: border-box;

    .num-keyboard {
      list-style: none;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      &.special li:first-of-type{
        background: none;
      }

      li {
        width: 32%;
        height: 45px;
        background: #fff;
        margin-bottom: 5px;
        text-align: center;
        line-height: 45px;
        border-radius: 3px;
        font-size: 25px;

        &.bgColor {
          background: #eee;
        }

        &.keyboard-cols4 {
          background: none;
          border-radius: none;
        }

        &.close {
          background: none;
          border-radius: none;
          color: #3F434A;
          font-size: 18px;
        }

        &:last-of-type {
          margin-right: 0;
        }
      }

      &:last-of-type li {
        margin-bottom: 0;
      }
    } 
  }
</style>