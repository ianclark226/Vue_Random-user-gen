const app = Vue.createApp({
    data() {
        return {
            firstName: 'Ian',
            lastName: 'Clark',
            email: 'ian@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }
})

app.mount('#app');