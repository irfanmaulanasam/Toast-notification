<template>
  <div class="alert" :class="classObject" v-show="open">
    <div class="alert__heading">{{ heading }}</div>
    <div class="alert__body">
    {{id}}
      <slot>No Message</slot>
    </div>
  </div>
</template>

<script>
export default {
  template: "#alert-template",
  props: {
    type:String,
    message:String,
    id:String
  },
  data: function () {
    return {
      timeout:null,
      classObject: {
        "alert--success": this.type == "success",
        "alert--error": this.type == "error",
        "alert--warning": this.type == "warning",
      },
    };
  },
  created() {
    this.timeout = setTimeout(() => {
      console.log('message akan dihapus')
      this.$emit('removeAlert',this.id);
    }, 1500);
  },

  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    open: function () {
      return !this.closed;
    },
    heading: function () {
      return this.type || "info";
    },
    classes: function () {
      return "1";
    },
  },
};
</script>

<style>
.alert {
  font-family: Arial, Helvetica, sans-serif;
  padding: 1em;
  padding-right: 2em;
  margin-bottom: 1em;
  background: #ddd;
  border: 2px solid #9b9b9b;
  position: relative;
  border-radius: 5px;
}
.alert.alert--success {
  background: #d9ffd9;
  border: 3px solid #c6ffc6;
}
.alert.alert--warning {
  background: #ffc;
  border: 3px solid #ffffc2;
}
.alert.alert--error {
  background: #fcc;
  border: 3px solid #ffc2c2;
}
.alert .alert__heading {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}
.alert .alert__close {
  position: absolute;
  right: 1em;
  top: 1em;
}
.alert .alert__close:hover {
  cursor: pointer;
}
</style>