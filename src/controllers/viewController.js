class viewController {
  static load(path) {
    return () => import(/* webpackChunkName: "[request]" */ `@/resources/views/${path}/index.vue`)
  }

  static component(path) {
    return () => import(/* webpackChunkName: "[request]" */ `@/resources/components/${path}/index.vue`)
  }
}

export default viewController
