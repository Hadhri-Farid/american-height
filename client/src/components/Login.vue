<template>
<<<<<<< HEAD
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="green" dark>
          <v-toolbar-title>S'inscrire</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
                     <v-text-field
              label="Pseudo"
              v-model="pseudo"
            ></v-text-field>
              <v-text-field
=======
<transition name="fade">
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue lighten-1" dark>
          <v-toolbar-title>Se Connecter</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
                     <v-text-field
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
              label="Email"
              v-model="email"
            ></v-text-field>
              <v-text-field
              label="Mot de passe"
<<<<<<< HEAD
=======
              type="password"
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
              v-model="password"
            ></v-text-field>
            <br>
            <div class="error" v-html="error"></div>
            <br>
<<<<<<< HEAD
            <v-btn class="blue" dark @click="register">S'inscrire</v-btn>
=======
            <v-btn class="blue lighten-1" dark @click="login">Connexion</v-btn>
            <v-spacer></v-spacer>
           <span>Pas de compte ?</span>
            <router-link to="/register" tag="button"><span class="zoeischeat">S'inscrire</span></router-link>
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
          </div>
      </div>
    </v-flex>
  </v-layout>
<<<<<<< HEAD
=======
  </transition>
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  data() {
    return {
      email: "",
      password: "",
<<<<<<< HEAD
      pseudo: "",
=======
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
      error: null
    }
  },
  methods: {
<<<<<<< HEAD
    async register() {
      try {
        await AuthentificationService.register({
          email: this.email,
          password: this.password,
          pseudo: this.pseudo,
        })
=======
    async login() {
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password,
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
<<<<<<< HEAD
=======
.zoeischeat{
  color: green;
}
  .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: 0.7s;
    }

    .fade-enter-active {
        transition-delay: 0.50s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
</style>
