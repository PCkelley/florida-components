import * as components from './components';

const componentsList = components?.default;
const FloridaComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      Vue.component(name, componentsList[name]);
    })
  },
};
export default FloridaComponents;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FloridaComponents);
}
