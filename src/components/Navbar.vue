<template>
    <div id="navbar">
      <b-navbar spaced>
          <template slot="brand">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img
                      src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                      alt="Lightweight UI components for Vue.js based on Bulma"
                  >
              </b-navbar-item>
          </template>

          <template slot="end">
              <b-navbar-item href="#">
                  Case Study
              </b-navbar-item>
              <b-navbar-item href="#">
                  Pricing
              </b-navbar-item>
              <b-navbar-item href="#">
                  Information
              </b-navbar-item>
              <b-navbar-item href="#">
                  Contact
              </b-navbar-item>
          </template>
      </b-navbar>
    <hr class="navbar-divider">
    </div>
</template>
