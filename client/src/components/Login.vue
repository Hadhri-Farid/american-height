<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="orange" dark>
          <v-toolbar-title>Se Connecter</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
                     <v-text-field
              label="Email ou Pseudo"
              v-model="pseudo"
            ></v-text-field>
              <v-text-field
              label="Mot de passe"
              v-model="password"
            ></v-text-field>
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn class="orange" dark @click="login">Connexion</v-btn>
            <v-spacer></v-spacer>
           <span>Pas de compte ?</span>
            <router-link to="/register" tag="button"><span class="zoeischeat">S'inscrire</span></router-link>
            <!-- <v-btn class="green" dark @click="navigateTo({name:'register'})">S'inscrire</v-btn> -->
          </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      pseudo: "",
      error: null
    }
  },
  methods: {
    async register() {
      try {
        await AuthentificationService.register({
          email: this.email,
          password: this.password,
          pseudo: this.pseudo,
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
  color: orange;
}
</style>
