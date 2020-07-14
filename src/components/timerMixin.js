export default {
  methods: {
    yzmTimerFn() {
      if(this.isFlag) {
        let timer = setInterval(() => {
          this.time--
          if(this.time <= 0) {
            this.isFlag = false
            clearInterval(timer)
            this.time = 10
          }
        }, 1000)
      } 
    }
  }
}