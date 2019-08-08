<template>
    <div class="login container">
        <form @submit.prevent="login" class="card-panel">
            <h2 class="deep-purple-text">Login</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="pssword">Password:</label>
                <input type="password" name="pssword" v-model="password">
            </div>
            <p v-if="feedback" class="red-text center">{{ feedback }}</p>
            <div class="field center">
                <button class="btn deep-purple">Login</button>
            </div>
        </form>
    </div>
</template>


<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data() {
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        login () {
           if (this.email && this.password) {
               firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    this.$router.push({ name: 'home'})
                }).catch(err => {
                    this.feedback = err.message 
                })
               this.feedback = null               
           } else {
               this.feedback = 'You must provide correct email and password'
           }
            
        }
    }
}
</script>


<style>
    .login {
        width: 400px;
        margin-top: 60px;
    }
    .login h2 {
        font-size: 2.4em;
        text-align: center;
    }
    .field {
        margin-bottom: 16px;
    }
</style>

