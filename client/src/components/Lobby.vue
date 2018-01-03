<template>
  <v-app id="inspire"  light>
    <div class="loginOk" v-if="$store.state.isUserLoggedIn">
    <v-navigation-drawer
    class="hidden-sm-and-down"
      fixed
      v-model="drawerRight"
      :stateless="right"
      right
      clipped
      app
    >
      <v-list dense>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>
      <v-toolbar-title>Rooms</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-sm-and-down" @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      :stateless="left"
      app
    >
      <v-list dense>
        <v-container fluid>
          <router-link to="/" tag="button"><v-btn @click="logout"> <!-- TODO  deconnexion-->
          <v-icon large color="red darken-3">power_settings_new</v-icon>Deconnexion
          </v-btn>
          </router-link>
          <hr class="hroi">
          <div class="pushDown">
            <div class="profilName">

            </div>
          <v-btn flat light @click="navigateTo({name:'login'})">
          <v-icon large color="blue darken-3">power_settings_new</v-icon>Profil
          </v-btn>
                    <v-btn flat light @click="navigateTo({name:'login'})">
          <v-icon large left color="blue darken-3">brightness_4</v-icon> Mode Nuit
          </v-btn>
            <!-- Turn ON/OFF BUTTON -->
              <toggle-button :value="false"
               color="#82C7EB"
               :sync="true"
               :labels="true"/>
          <v-btn flat light @click="navigateTo({name:'login'})">
          <v-icon large left color="blue darken-3">power_settings_new</v-icon>nb pieces
          </v-btn>
          </div>
          </v-container>
      </v-list>
    </v-navigation-drawer>
    <v-content>
    </v-content>
    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    ></v-navigation-drawer>
    </div>
    <alertPage v-else></alertPage>
  </v-app>
</template>

<script>

import AlertPage from "@/components/Alert";

  export default {
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: null,
      left: null
    }),
    methods: {
      logout() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
      }
    },
    props: {
      source: String
    },
    components: {
      AlertPage
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pushDown {
  margin-top:160px;
}

.hroi {
  margin-top: 20px;
}
</style>