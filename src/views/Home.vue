<template>
  <div class="home">
    <!-- HERO TOP -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column has-text-left">
              <p class="is-size-1">Improve website performance!</p>
              <p class="is-size-6">Increasing your site’s loading speed will improve your visitor
                experience, reduce your advertising costs, and increase sales.</p>
              <div class="field is-grouped">
                  <p class="control">
                    <button class="button is-primary">
                      Save changes
                    </button>
                  </p>
                  <p class="control">
                    <button class="button">
                      Cancel
                    </button>
                  </p>
              </div>
            </div>
            <div class="column">
              <figure class="image" style="margin-top: -4rem">
                <img src="../assets/all.png">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CASE STUDY -->
    <section class="hero">
      <div class="hero-body bg-img">
        <div class="container">
          <h1 class="title has-text-left has-text-white">Case Study</h1>
          <div class="columns is-desktop">
            <div class="column has-text-left" style="color: #9F9CB5">
              {{ msg }}
            </div>
            <div class="column">
              <figure class="image" style="margin-top: -3rem">
                <img src="../assets/after.png">
              </figure>
            </div>
            <div class="column">
              <figure class="image" style="margin-top: -3rem">
                <img src="../assets/before.png">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CARD -->
    <section class="section">
      <div class="container">
        <h1 class="title has-text-center">Išsirinkite sau tinkamą planą</h1>
        <div class="columns is-desktop">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>

    <hr class="navbar-divider">

    <!-- ORDER FORM -->
    <section class="section">
      <div class="container">
        <h1 class="title has-text-center">Make your order</h1>
        <section class="column is-three-fifths is-offset-one-fifth has-text-center">
            <b-field label="Your name">
                <b-input></b-input>
            </b-field>

            <b-field label="El. mail adress">
                <b-input type="email">
                </b-input>
            </b-field>

            <b-field label="Telephone number">
                <b-input maxlength="30"></b-input>
            </b-field>

            <b-field label="Your homepage">
                <b-input></b-input>
            </b-field>

            <b-field label="Choose your plan">
                <b-select placeholder="Plan" expanded>
                    <option>Optimal</option>
                </b-select>
            </b-field>
          <button class="button is-primary" style="float: right;">
            Contact
          </button>
        </section>
      </div>
    </section>

    <hr class="navbar-divider">

    <section class="section has-text-left">
      <div class="container">
        <div class="columns">
          <div class="column">
            Hello
          </div>
          <div class="column ">
            <div class="content accordion">
              <h3>Results based on evidence </h3>
              <p>Google’s research found that the longer website loads 1s. to 7s.,
                the user bounce rate increase 113%! That is, if your site loads for 7 seconds
                and is currently being rejected by 1000 people, optimizing it would result
                in twice as less people (500).</p>
              <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                    {{ !props.open ? 'All options' : 'Fewer options' }}
                </a>
                <p>Content delivery network (CDN) leader Akamai found that a 100 ms slower server
                  response could hurt and reduce conversions by up to 6%. The study also found that
                  53% of phone visitors leave a website that loads for more than 3 seconds, and 79%
                  of visitors who are dissatisfied with current website performance are more likely
                  to return to the site.

                  Thousands of web site performance studies have been done and in conclusion it’s
                  very important to focus on three key benefits of web site performance:
                  1. Website speed directly influences user engagement, experience and sales.
                  Potentially a few to a few dozen percent.
                  </p>
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Card,
    Footer,
  },
  data() {
    return {
      msg: 'The client asked to work on their small website (29 resources are loading). Immediately after the audit, it was clear that it would be necessary to optimize the photos, find out why it takes so long to negotiate with the SSL certificate and why the server is not responding as fast as it should. As a result of the work done, many of the major problems were eliminated and it was enough for the user to load the content within 1 second, whereas the loading speed was 4 seconds before.',
    };
  },
};
</script>
