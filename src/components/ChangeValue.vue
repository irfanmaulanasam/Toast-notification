<template>
  <div>
    {{ datvalue }}
  </div>
</template>

<script>
import EventBus from '../eventBus.js'
export default {
  data() {
    return {
      datvalue: 0
    }
  },
  created () {
    EventBus.$on('changeValue', (val) => {
      this.datvalue = val
      console.log('triggered')
    })
  }
}
</script>