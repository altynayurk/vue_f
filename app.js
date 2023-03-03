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

Vue.createApp(app).mount('#app')