const app = Vue.createApp({
    data() {
        return {
            firstName: 'Revathi',
            lastName: 'R',
            email: 'rev1234@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/women/13.jpg'
        }
    }
})

app.mount('#App')