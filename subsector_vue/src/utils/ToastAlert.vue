<template>
  <div
    v-if="props.message?.success || props.message?.failure"
    class="toastAlert"
    :class="top ? 'addTop' : 'addBottom'"
  >
    <div
      class="alertType alert"
      :class="message.success ? 'alert-success' : 'alert-danger'"
    >
      <div class="textW" style="width: 89%">
        {{
          messageTextSuccess && message.success
            ? messageTextSuccess
            : messageTextError && message.failure
            ? messageTextError
            : ""
        }}
      </div>
      <div>
        <button
          @click="emits('hideElement')"
          type="button"
          class="close btn"
          :class="
            message.success ? 'btn-outline-success' : 'btn-outline-danger'
          "
          data-dismiss="alert"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  message: Object,
  messageTextSuccess: String,
  messageTextError: String,
  top: Boolean,
});
const emits = defineEmits(["hideElement"]);
</script>
<style lang="scss" scoped>
.toastAlert {
  width: 350px;
  // background-color: gray;
  // border: 1px solid;
  position: absolute;
  right: 30px;
  z-index: 9999;
  .alertType {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    button {
      top: 15px;
      right: 15px;
      position: absolute;
      width: 24px;
      height: 24px;
      display: flex;
      font-size: 21px;
      align-items: center;
      justify-content: center;
      border-radius: 4px !important;
    }
  }
}

.alert-danger {
  div {
    button {
      border: 2px solid #842029;
      color: #842029;
      &:hover {
        background-color: #842029 !important;
        color: #fff !important;
      }
    }
  }
}

.addBottom {
  top: 250px;
}
.addTop {
  top: 150px;
}
</style>
