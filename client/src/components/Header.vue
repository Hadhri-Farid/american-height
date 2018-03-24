<template>
    <v-toolbar fixed dark class="deep-purple darken-4">
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name:'root'})">American Height</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo({name:'login'})">
                <v-icon large color="cyan lighten-4">account_circle</v-icon>Connexion
                </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    cursor: pointer;
}
v-icon:hover{
  color: orange;
}
</style>
