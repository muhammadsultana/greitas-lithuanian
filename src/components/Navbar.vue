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
                  Case Study
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#pricing'">
                  Pricing
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#information'">
                  Information
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#contact'">
                  Contact
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
