<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="blue elevation-2">
        <v-toolbar flat dense white dark>
          <v-toolbar-title>S'inscrire</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <input type="email" name="email" v-model="email" placeholder="Your email">
            <br>
            <input type="password" name="password" v-model="password" placeholder="Your password">
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn class="white" @click="register">S'inscrire</v-btn>
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
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthentificationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
