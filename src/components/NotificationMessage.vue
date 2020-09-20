<template>
  <div :class="typeClass" class="alert alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{ notification.message }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["notification"],

  data() {
    return {
      timeout: null
    };
  },

  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    }
  },

  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },

  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  methods: mapActions(["removeNotification"])
};
</script>
<style scoped>
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