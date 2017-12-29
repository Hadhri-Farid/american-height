<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawerRight"
      :stateless="right"
      right
      clipped
      app
    >
      <v-list dense>
<<<<<<< HEAD
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>icon</v-icon>
          </v-list-tile-action>
        </v-list-tile>
=======
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Rooms</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      :stateless="left"
      app
    >
      <v-list dense>
<<<<<<< HEAD
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>icon</v-icon>
          </v-list-tile-action>
        </v-list-tile>
=======
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
      </v-list>
    </v-navigation-drawer>
    <v-content>
<<<<<<< HEAD
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-tooltip right>
          </v-tooltip>
        </v-layout>
      </v-container>
=======
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
    </v-content>
    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    ></v-navigation-drawer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: null,
      left: null
    }),
    props: {
      source: String
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background:red;
}
</style>