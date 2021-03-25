<template>
  <transition name="slide-fade">
    <div class="notification shadow" v-if="notificationText">
      <div style="width: 32px; height: 32px; margin-right: 10px">
        <svg
          style="width: 32px; height: 32px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div>{{ notificationText }}</div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { notificationText } from "../notification";

export default defineComponent({
  setup() {
    return { notificationText };
  },
});
</script>

<style>
.notification {
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  background: #88ffaa;
  min-width: 250px;
  padding: 12px;
  border-radius: 5px;
  font-family: monospace;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.shadow {
  box-shadow: 0 6.1px 4.6px rgba(0, 0, 0, 0.13),
    0 20.3px 15.4px rgba(0, 0, 0, 0.077), 0 91px 69px rgba(0, 0, 0, 0.053);
}

.slide-fade-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  bottom: -10px;
  opacity: 0;
}
</style>
