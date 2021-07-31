const app = Vue.createApp({
    data() {
        return {
            firstName: "Click the button to generate random users",
            lastName: null,
            email: null,
            gender: null,
            picture: null
        }
    },
    methods: {
        async getData() {
            const res = await fetch('https://randomuser.me/api');
            const {results} = await res.json();
            console.log("fetching......");
            this.firstName =  results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        }
    }
})

app.mount('#App')