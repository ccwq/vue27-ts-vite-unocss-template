import Vue  from 'vue'
import App from './App.vue'
import "uno.css"
import "luss/dist/lite.css"
import "./styles/common.less"
const root = new Vue({
    // @ts-ignore
    render: h => h(App),
})
root.$mount('#app')
