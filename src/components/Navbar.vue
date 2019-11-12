<template>
    <div id="navbar">
      <b-navbar spaced>
          <template slot="brand">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img
                      src="../assets/Logo-greitastinklapis.jpg"
                      alt="Lightweight UI components for Vue.js based on Bulma"
                  >
              </b-navbar-item>
          </template>

          <template slot="end">
              <b-navbar-item v-scroll-to="'#case'">
                  Atvejo analizė
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#pricing'">
                  Kainos
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#information'">
                  Informacija
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#contact'">
                  Kontaktai
              </b-navbar-item>
          </template>
      </b-navbar>
    <hr class="navbar-divider">
    </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
