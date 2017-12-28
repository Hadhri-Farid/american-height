<template>
<<<<<<< HEAD
    <v-toolbar fixed dark class="green">
        <v-toolbar-title clas="mr-4">
            <span class="home" @click="navigateTo({name:'root'})">American Height</span>
        </v-toolbar-title>

=======
    <v-toolbar fixed dark class="deep-orange lighten-1">
        <v-toolbar-title clas="mr-4">
            <span class="home" @click="navigateTo({name:'root'})">American Height</span>
        </v-toolbar-title>
<!--    <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>
-->
>>>>>>> 4cc009032108a0e011f5eda95d5b826ddb14a7a1
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo({name:'register'})">
                <v-icon>account_circle</v-icon>Connexion
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
</style>
=======
</style>
>>>>>>> 4cc009032108a0e011f5eda95d5b826ddb14a7a1
