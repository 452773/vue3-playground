const app = Vue.createApp({
    // template: "<h2>I am the template</h2>"
    data() {
        return {
            showBooks: true,
            title: 'Ender\'s Game',
            author: 'Orson Scott Card',
            age: 47,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')