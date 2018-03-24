<template>
  <div id="app" >
    <v-app ref="inspire" :dark="isDark">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
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
  data () {
    return {
      value: true
    }
  },
  components: {
    PageHeader,
    PageFooter,
    AlertPage
  },

  computed: {
    isDark () {
      console.log(this.$store.getters.isDark)
      return this.$store.getters.isDark
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
