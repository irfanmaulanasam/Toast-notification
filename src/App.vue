<template>
  <div id="app">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <button @click="showAlert">Alert</button>
    <button @click="addNotification">show notifikasi</button>
    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
    </Modal>
    <Value/>
    <Change-value/>
    <NotifyList/>
    <AlertList :messages="messages" @removeAlert="removeAlert"/>
  </div>
</template>

<script>
import NotifyList from './components/NotifyList'
import AlertList from './components/AlertList'
import Modal from './components/Modal'
import Value from '@/components/Value'
import ChangeValue from '@/components/ChangeValue'
import eventBus from '@/eventBus'
export default {
  components:{
    Modal,
    AlertList,
    Value,
    ChangeValue,
    NotifyList
  },
  data() {
    return{
      showModal: false,
      messages:[]
    }
  },
  methods:{
    addNotification(){
      eventBus.$emit('addNotification',{
        text: 'ini notifikasi dari app',
        type:'warning'
      })
    },
    showAlert(){
      this.messages.push({
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
        type: 'success',
        text: 'Product added to cart.'
      })
    },
    removeAlert(id){
      this.messages = this.messages.filter(message => {
        return message.id != id;
      })
    }
  }
}
</script>

<style>
#app{
  background-color: rgb(224, 136, 64);
  height: 100vh;
  width: 100%;
}
</style>