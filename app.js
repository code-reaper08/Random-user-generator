const app = Vue.createApp({
    data() {
        return {
            firstName: 'Revathi',
            lastName: 'R',
            email: 'rev1234@gmail.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/women/11.jpg'
        }
    }
})

app.mount('#App')