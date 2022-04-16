//导入vue包 得到vue构造函数
import Vue from 'vue'
//导入app.vue根组件 把app.vue中的模板结构渲染到html页面中
import App from './App.vue'
// 引入element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入裁剪工具
import VueCropper from 'vue-cropper'
//导入需要被全局注册的组件
import count from '@/components/count.vue'
Vue.component('mycount',count)

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCropper)

new Vue({
  //把render函数指定的组件渲染到html页面中 即根组件
  render: h => h(App),
}).$mount('#app')
