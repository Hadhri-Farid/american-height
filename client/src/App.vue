<template>
  <div id="app">
    <v-app>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons' rel="stylesheet">
       <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
      <page-header></page-header>
        <main>
          <v-container>
            <router-view/>
          </v-container>
       </main>
       <page-footer></page-footer>
      </v-app>
   </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
import AlertPage from '@/components/Alert.vue'

export default {
    name: 'app',
    components: {
        PageHeader,
        PageFooter,
        AlertPage,
    }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
