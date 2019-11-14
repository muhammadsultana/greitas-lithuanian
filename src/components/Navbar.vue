<template>
    <div id="navbar">
      <b-navbar spaced>
          <template slot="brand">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img
                      src="../assets/Logo-greitastinklapis.jpg"
                      alt="Logo greitastinklapis.lt"
                  >
              </b-navbar-item>
          </template>

          <template slot="end">
              <b-navbar-item v-scroll-to="'#case'" class="has-text-danger">
                  Atvejo analizė
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#pricing'" class="has-text-danger">
                  Kainos
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#information'" class="has-text-danger">
                  Informacija
              </b-navbar-item>
              <b-navbar-item v-scroll-to="'#order'" class="has-text-danger">
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
