<template>
  <v-layout>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=true>
      <v-card>
        <v-toolbar dark color="blue-grey darken-1">
          <v-btn icon @click.native=" dialog = false" dark  @click="navigateTo({name:'lobby'})">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Nouvelle Room</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false"><v-icon left>add_circle</v-icon>Créer</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Paramètres de la room</v-subheader>
          <v-list-tile avatar>
           <v-text-field
              label="Nom de la room"
              v-model="title"
              required
            ></v-text-field>
          </v-list-tile>
            <v-list-tile>
               <v-select
            autocomplete
            label="Nombre de Joueurs"
            placeholder="Selectioner"
            v-bind:items="items"
            v-model="joueur"
            required
          >
          </v-select>
            </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="mdp"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Mot de passe</v-list-tile-title>
              <v-list-tile-sub-title>Définir un mot de passe pour créer une partie privée</v-list-tile-sub-title>
            </v-list-tile-content>
              <v-text-field
              right
              v-if="mdp"
              label="Mot de passe de la room"
              v-model="password"
              required
            ></v-text-field>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>

import Lobby from '@/components/Lobby'
export default {
  data () {
    return {
      dialog: true,
      notifications: false,
      mdp: false,
      widgets: false,
      title: '',
      players: '',
      password: null,
      items: [
        {text: '2'},
        {text: '3'},
        {text: '4'}
      ]
  }
 },
 methods: {
   navigateTo (route) {
     this.$router.push(route)
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
