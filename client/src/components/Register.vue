<template>
<div>
  <h1>Register</h1>
  <input type="email" name="email" v-model="email" placeholder="Your email">
  <br>
  <input type="password" name="password" v-model="password" placeholder="Your password">
  <br>
  <button @click="register">Register</button>
</div>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async register(){
     const response = await AuthentificationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
