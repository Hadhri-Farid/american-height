<template>
  <v-layout id="inspire" >
    <div  v-if="$store.state.isUserLoggedIn" class="loginOk" >   <!-- a ajouter a la fin des tests -->
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
          <v-btn flat @click="logout"> <!-- TODO  deconnexion-->
          <v-icon large color="red darken-3">power_settings_new</v-icon>Deconnexion
          </v-btn>
       
          <hr class="hroi">
          <div class="pushDown">
            <div class="profilName">
              <v-avatar size="100px" class="indigo">
                 <v-btn flat dark >
                  <v-icon  class="indigo" x-large dark>account_circle</v-icon>
                  </v-btn>
                   </v-avatar>
                  <p class="sep1">{{currentUsername}}</p>
                   <div class="sep">
                  <p><v-icon color="amber darken-1">fiber_smart_record</v-icon> My Crescents : {{currentCoins}} </p>
                    </div>
            </div>
            <!-- Turn ON/OFF BUTTON -->
               <div class="pushDown2">          
         <p> <v-icon large left color="blue darken-3">brightness_4</v-icon> Mode Nuit </p>
          </div> 
          <v-switch
        v-model="isDarkTheme"
        ></v-switch>
          </div>
          </v-container>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-layout>
        <v-spacer></v-spacer>
        <v-layout>
          <router-link to="/room/create" tag="button">
          <v-btn flat class="mt-5"> <v-icon left large color="blue"> add_circle</v-icon> Créer une Room</v-btn>
          </router-link >
          </v-layout>
      </v-layout>
    </v-content>
    <div class="mt-5" v-for="room in rooms" :key="room.id">
        {{room.title}} -
        {{room.players}}/{{room.players}}
      </div>
    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    ></v-navigation-drawer>
     </div>
      <alertPage v-else></alertPage>  <!--  a ajouter a la fin des tests-->
  </v-layout >
</template>

<script>
import AlertPage from '@/components/Alert'
import RoomService from '@/services/RoomService'

export default {
  data () {
    return {
      drawer: null,
      drawerRight: null,
      right: null,
      left: null,
      rooms: null,
      currentUsername: this.$store.state.user.username,
      currentCoins: this.$store.state.user.coins

    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  },
  computed: {
    isDarkTheme: {
      get () {
        return this.$store.getters.isDark
      },
      set (newValue) {
        this.$store.commit('setDark', newValue)
      }
    }
  },

  async mounted () {
    // Requete au backend ici pour récup les sons
    this.rooms = (await RoomService.index()).data
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
  margin-top: 250px; 
}
.pushDown2 {
  margin-top: 350px; 
  display: inline-block;
}

.hroi {
  margin-top: 20px;
}

.sep{
  margin-top: 20px;
  font-size: 1.5em;
}
.sep1{
  margin-top: 5px;
  font-size: 1.5em;
}

</style>