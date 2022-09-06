import Vue  from 'vue'
import './style.css'
import App from './App.vue'
import "uno.css"
import "luss/dist/lite.css"
const root = new Vue({
    // @ts-ignore
    render: h => h(App),
})
root.$mount('#app')
