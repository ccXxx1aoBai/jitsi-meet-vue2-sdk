import Vue from 'vue'
import App from './App.vue'
import JitsiMeeting from '/src/index'

Vue.config.productionTip = false
Vue.use(JitsiMeeting)

new Vue({
	render: h => h(App),
}).$mount('#app')
