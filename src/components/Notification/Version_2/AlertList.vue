<template>
  <div class="alert-list">
    <Alert-message
      v-for="message in messages"
      :key="message.id"
      :type="message.type"
      :id="message.id"
      :message="message.text"
      @removeAlert="removeAlert"
    />
  </div>
</template>

<script>
import AlertMessage from "./AlertMessage";

export default {
  template: "#alert-template",
  components: {
    AlertMessage
  },
  props:{
    messages:{
      type:Array
    }
  },
  methods:{
    removeAlert(params){
      this.$emit('removeAlert',params)
    }
  }
};
</script>

<style>
.alert-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
  background-color: rgba(0, 0, 0, 0.172);
}
</style>