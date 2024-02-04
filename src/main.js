import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "../node_modules/destyle.css/destyle.css";
import "./assets/scss/configs/_index.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
