<template>
  <div class="notifications-list">
    <notify-message
      v-for="notification in notifications"
      :key="notification.id"
      :type="notification.type"
      :id="notification.id"
      :message="notification.text"
      @removeAlert="removeAlert"
    />
  </div>
</template>

<script>
import NotifyMessage from "./NotifyMessage";
import EventBus from '@/eventBus'
export default {
  template: "#alert-template",
  components: {
    NotifyMessage
  },
  data(){
    return {
      notifications:[]
    }
  },
  created () {
    EventBus.$on('addNotification', (val) => {
      // console.log(val);
      val.id= (Math.random().toString(36) + Date.now().toString(36)).substr(2)
      if (!val.type) {
        val.type = 'info'
      }
      this.notifications.push(val)
    })
  },
  methods:{
    removeAlert(id){
      this.notifications = this.notifications.filter(notification => {
        return notification.id != id;
      })
    }
  }
};
</script>

<style>
.notifications-list {
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: 15px;
  width: 320px;
  background-color: transparent;
}
</style>