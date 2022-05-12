import { App } from "vue";
import PopopContainer from "./popup-container/index.vue";
import RenderTemplate from "./render-template/index";

const components = [PopopContainer, RenderTemplate];

export default {
  install(app: App) {
    components.forEach(component => {
      app.component(component.name, component);
    });
    return app;
  }
};
