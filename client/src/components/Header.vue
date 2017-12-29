<template>
<<<<<<< HEAD
    <v-toolbar fixed dark class="green">
=======
    <v-toolbar fixed dark class="teal darken-1">
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
        <v-toolbar-title clas="mr-4">
            <span class="home" @click="navigateTo({name:'root'})">American Height</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo({name:'login'})">
                <v-icon large color="blue darken-3">account_circle</v-icon>Connexion
                </v-btn>
        </v-toolbar-items>
                        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo({name:'register'})">
                <v-icon></v-icon>S'inscrire
                </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo (route){
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
<<<<<<< HEAD
=======
v-icon:hover{
  color: orange;
}
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
</style>
