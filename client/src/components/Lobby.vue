<template>
     <div>  <!-- v-if="$store.state.isUserLoggedIn" class="loginOk" > -->   <!-- a ajouter a la fin des tests -->
    <!-- NAVIGATION DE GAUCHE -->
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
      color="amber darken-4"
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
          <v-icon large color="red accent-2">power_settings_new</v-icon>Deconnexion
          </v-btn>
          <hr class="hroi">
          <div class="pushDown">
            <div class="profilName">
              <v-avatar size="100px" class="amber darken-4">
                  <v-btn flat dark >
                    <v-icon  class="amber darken-4" x-large dark>account_circle</v-icon>
                  </v-btn>
              </v-avatar>
              <p class="sep1">{{currentUsername}}</p>
                <div class="sep">
              <p><v-icon color="amber darken-1">fiber_smart_record</v-icon> My Crescents : {{currentCoins}} </p>
                </div>
            </div>
          </div>
          <div class="pushDown2">
            <p class="pr-3"><v-icon large left color="amber darken-4">brightness_4</v-icon> Mode Nuit</p>
              <v-switch
              color="amber darken-3"
              v-model="isDarkTheme"
              >
              </v-switch>
          </div>
        </v-container>
      </v-list>
    </v-navigation-drawer>
    <!-- A PARTIR D'ICI CENTRE DE LA PAGE -->
    <div class="error" v-html="error"></div>
<h1>Bienvenue dans le lobby !</h1>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn flat class="mt-5" slot="activator"> <v-icon left large color="amber darken-4" > add_circle</v-icon> Créer une Room</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Paramètres de la room</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="room.title" label="Nom de la room" required color="amber darken-4"></v-text-field>
              </v-flex>
              <v-flex xs12>
              <v-select
                  label="Nombre de joueurs"
                  required
                  v-model="room.players"
                  :items="['2', '3', '4']"
                  color="amber darken-4"
                ></v-select>
                </v-flex>
              <v-flex xs1>
                 <v-checkbox
                  v-model="mdp"
                  color="amber darken-4"
                ></v-checkbox>
                </v-flex>
                <v-flex xs4>
                <v-list-tile-title>Mot de passe</v-list-tile-title>
                <v-list-tile-sub-title>Créer une partie privée</v-list-tile-sub-title>
               </v-flex>
                <v-flex xs12>
                <v-text-field v-model="room.roomPassword" label="Password" type="password" color="amber darken-4"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small class="rouge">*Champ obligatoire</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Annuler</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" @click="createRoom">Creer</v-btn>
          <v-btn @click="test">test</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
    <!-- Room Dans le lobby (Affichage) -->
    <div class="mt-5" v-for="room in rooms" :key="room.id">
        {{room.title}} -
        {{room.players}}/{{room.players}} <v-icon>lock_outline</v-icon>
      </div>
      <!-- NAVIGATION DE DROITE -->
    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    ></v-navigation-drawer>
     </div>
     <!-- <alertPage v-else></alertPage> -->  <!--  a ajouter a la fin des tests-->
</template>

<script>
import AlertPage from '@/components/Alert'
import RoomService from '@/services/RoomService'

export default {
  data () {
    return {
      room: {
        title: '',
        players: 2,
        roomPassword: ''
      },
      dialog: false,
      mdp: false,
      drawer: null,
      drawerRight: null,
      right: null,
      left: null,
      rooms: null,
      currentUsername: this.$store.state.user.username,
      currentCoins: this.$store.state.user.coins,
      error: null
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
      this.$store.commit('setDark', false)
    },
    async createRoom () {
      try {
        const response = await RoomService.post({
          title: this.room.title,
          players: this.room.players,
          roomPassword: this.room.roomPassword
        })
        this.$store.dispatch('setRoom', response.data.room)
      } catch (err) {
        console.log(err)
      }
    },
    test () {
      console.log(this.$store.state.room)
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
  margin-top: 200px;
}
.pushDown2 {
  margin-top: 250px;
  padding-left: 50px;
  display: flex;
}

.hroi {
  margin-top: 20px;
}

.sep {
  margin-top: 20px;
  font-size: 1.5em;
}
.sep1 {
  margin-top: 5px;
  font-size: 1.5em;
}
.rouge {
  color: red;
}
</style>