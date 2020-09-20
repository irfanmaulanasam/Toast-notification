<template>
 <div>
    <button @click="addValue"> Add Value </button>
 </div>
</template>

<script>
import EventBus  from '@/eventBus.js'
export default {   
  data() {     
    return {       
      value: 0     
    }   
  },    
  methods: {     
    addValue() {       
      this.value++
      EventBus.$emit('changeValue', this.value)    
    }   
  } 
}
</script>