const app = {
    data(){
        return {
            text:'',
            background: '',
            green: 'green',
            red: 'red',
            orange: 'orange',
        }
    }
}

// Hello
Vue.createApp(app).mount('#app')