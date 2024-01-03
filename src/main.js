import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "../node_modules/destyle.css/destyle.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
