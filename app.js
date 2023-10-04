const app = Vue.createApp({
    // template: "<h2>I am the template</h2>"
    data() {
        return {
            title: 'Ender\'s Game',
            author: 'Orson Scott Card',
            age: 47,
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Radiance'
            this.title = title
        }
    }
})

app.mount('#app')