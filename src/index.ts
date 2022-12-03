import Vue3StatusIndicator from './components/statusIndicator.vue' // 引入封装好的组件

export default {
  install: (app: any, options: any): void => {
    app.component('Vue3StatusIndicator', Vue3StatusIndicator)
  },
}

export { Vue3StatusIndicator }
