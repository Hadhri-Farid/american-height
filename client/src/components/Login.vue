<template>
<transition name="fade">
  <v-layout column>
    <v-flex xs6 offset-xs3>
    <img class="mericorn" src="../assets/img/logo8.png" alt="">
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue lighten-1" dark>
          <v-toolbar-title>Se Connecter</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
                     <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
              <v-text-field
              label="Pseudo"
              v-model="username"
            ></v-text-field>
              <v-text-field
              label="Mot de passe"
              type="password"
              v-model="password"
            ></v-text-field>
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn class="blue lighten-1" dark @click="login">Connexion</v-btn>
            <v-spacer></v-spacer>
           <span>Pas de compte ?</span>
            <router-link to="/register" tag="button"><span class="zoeischeat">S'inscrire</span></router-link>
          </div>
      </div>
    </v-flex>
  </v-layout>
  </transition>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      error: null
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password,
          username: this.username,
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name:'lobby'
        })
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
    .mericorn {
      height: 300px;
      width: 300px;
    }
</style>
