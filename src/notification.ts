import { ref } from "vue";

export const notificationText = ref("");
let notificationTimeout: number | null = null;

export function startNotification(text: string, duration = 2500) {
  notificationText.value = text;

  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
  }

  notificationTimeout = setTimeout(() => {
    notificationText.value = "";
  }, duration);
}
