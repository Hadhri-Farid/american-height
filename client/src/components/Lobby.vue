<template>
  <v-app id="inspire"  light>
    <div  v-if="$store.state.isUserLoggedIn" class="loginOk" > <!--      a ajouter a la fin des tests -->
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
          <router-link to="/" tag="button"><v-btn flat @click="logout"> <!-- TODO  deconnexion-->
          <v-icon large color="red darken-3">power_settings_new</v-icon>Deconnexion
          </v-btn>
          </router-link>
          <hr class="hroi">
          <div class="pushDown">
            <div class="profilName">
              <v-avatar size="100px" class="indigo">
                 <v-btn flat dark >
                  <v-icon  class="indigoo" x-large dark>account_circle</v-icon>
                  </v-btn>
                   </v-avatar>
            </div>
         
                    <v-btn flat light >
          <v-icon large left color="blue darken-3">brightness_4</v-icon> Mode Nuit
          </v-btn>
            <!-- Turn ON/OFF BUTTON -->
              <toggle-button :value="false"
               color="#82C7EB"
               :sync="true"
               :labels="true"/>
          <v-btn flat light>
          <v-icon large left color="blue darken-3">power_settings_new</v-icon>nb pieces
          </v-btn>
          </div>
          </v-container>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-layout>
        <v-spacer></v-spacer>
        <v-layout>
          <router-link to="/room/create" tag="button">
          <v-btn flat> <v-icon left large color="blue"> add_circle</v-icon> Créer une Room</v-btn>
          </router-link >
          </v-layout>
      </v-layout>
      <div class="mt-5" v-for="room in rooms" :key="room.id">
        {{room.title}} - 
        {{room.players}}/4
        

      </div>
    </v-content>
    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    ></v-navigation-drawer>
    </div>
    <alertPage v-else></alertPage> <!--     a ajouter a la fin des tests-->
  </v-app>
</template>

<script>
import AlertPage from "@/components/Alert";
import RoomService from "@/services/RoomService";

export default {
  data() {
    return {
      drawer: null,
      drawerRight: null,
      right: null,
      left: null,
      rooms: null
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
    }
  },
  async mounted() {
    // Requete au backend ici pour récup les sons
    this.rooms = (await RoomService.index()).data;
  },
  props: {
    source: String
  },
  components: {
    AlertPage
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pushDown {
  margin-top: 50px; 
}

.hroi {
  margin-top: 20px;
}

</style>