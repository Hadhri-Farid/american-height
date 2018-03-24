<template>
<transition name="fade">
  <v-layout fluid justify-center>
    <v-flex xs3 >
      <div class="white elevation-2">
        <v-toolbar flat dense class="amber darken-1" dark>
          <v-toolbar-title>Inscription</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <form name="american-height-form"
              autocomplete="off">
              <v-text-field
              label="Votre pseudo"
              type="username"
              v-model="username"
            ></v-text-field>
              <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
              <v-text-field
              label="Mot de passe"
              type="password"
              v-model="password"
            ></v-text-field>
            </form>
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-spacer></v-spacer>
            <v-btn class="amber darken-2" dark @click="register">S'inscrire</v-btn>
          </div>
      </div>
    </v-flex>
  </v-layout>
  </transition>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      username: '',
      coins: 0,
      profileimage: 'https://www.nautiljon.com/images/recettes/00/29/takoyaki_192.jpg?1284548632',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthentificationService.register({
          email: this.email,
          password: this.password,
          username: this.username,
          profileimage: this.profileimage,
          coins: this.coins
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'login'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.7s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.mericorn {
  height: 300px;
  width: 250px;
}
</style>
