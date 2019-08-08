<template>
    <div class="signup container">
        <form  class="card-panel" @submit.prevent="signup">
            <h2 class="center deep-purple-text">Signup</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="pssword">Password:</label>
                <input type="password" name="pssword" v-model="password">
            </div>
            <div class="field">
                <label for="alias">Alias:</label>
                <input type="text" name="alias" v-model="alias">
            </div>
            <p v-if="feedback" class="red-text center">{{ feedback }}</p>
            <p v-if="posFeedback" class="green-text center">{{ posFeedback }}</p>

            <div class="field center">
                <button class="btn deep-purple">Signup</button>
            </div>
        </form>
    </div>
</template>


<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'signup',
    data () {
        return {
            email: null,
            password: null,
            alias: null,
            feedback: null,
            slug: null,
            posFeedback: null
        }
    },
    methods: {
        signup () {
            if (this.alias && this.email && this.password) {
                this.slug = slugify(this.alias, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })

                let ref = db.collection('users').doc(this.slug)
                ref.get().then(doc => {
                    if (doc.exists) {
                        this.feedback = 'This alias already exists'
                    } else {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                            .then(cred => {
                                ref.set({
                                    alias: this.alias,
                                    geolocation: null,
                                    user_id: cred.user.uid

                                })
                            }).then(() => {
                                this.$router.push({ name: 'home'})
                            })
                            .catch(err => {
                                console.log(err)
                                this.feedback = err.message
                            })
                            this.posFeedback = 'Success, You are succesfully signed up'
                    }
                })
            } else {
                this.feedback = 'You must provide all fields'
            }
        }
    }
}
</script>

<style>
.signup {
    width: 400px;
    margin-top: 60px;
}
.signup h2 {
    font-size: 2.4em;
}
.field {
    margin-bottom: 16px;
}
</style>

