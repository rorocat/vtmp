import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import tmui from '/@/tmui';

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  app.use(tmui)
  return {
    app,
  };
}
