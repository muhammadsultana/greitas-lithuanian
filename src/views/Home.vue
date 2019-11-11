<template>
  <div class="home">
    <!-- HERO TOP -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column has-text-left">
              <p class="is-size-1">Improve website performance!</p>
              <p class="is-size-6 subtitle-hero">Increasing your site’s loading speed will
                improve your visitor experience, reduce your advertising costs, and increase
                sales.</p>
              <div class="field is-grouped">
                  <p class="control">
                    <button class="button is-primary is-medium">
                      Get started
                    </button>
                  </p>
                  <p class="control">
                    <button class="button is-medium">
                      Learn more
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
    <section class="hero" id="case">
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
    <section class="section" id="pricing">
      <div class="container">
        <h1 class="title has-text-center">Išsirinkite sau tinkamą planą</h1>
        <div class="columns">
          <!-- Card 1 -->
          <Card title="Basic" subtitle="For small businesses and those who want
          to try the service">
                      <ul>
            <li>Loading resources audit
              <span class="has-text-grey-light">(Server-side, SSL,
                CDN, Cache, JS, Photos, Fonts ..)</span>
            </li>
            <li>Identification of problem areas</li>
            <li>Solution presentation</li>
            <li>Optimization of basic resources<span class="has-text-grey-light">
              (photos, cache)</span><span class="has-text-link">(up to 2 hours)</span>
            </li>
          </ul>
          <hr>
          <p>Website Security Recommendations</p>
          <p class="has-text-link">BENEFITS: You are familiar with website
            performance issues. Web pages run faster.</p>
          <template slot="price">187€</template>
          <template slot="button">
            <div class="card-content">
              <button class="button is-info is-medium is-fullwidth">
                Order
              </button>
            </div>
          </template>
          </Card>

          <!-- Card 2 -->
          <Card title="Optimal" subtitle="For those who care about improving
          the results of the site">
            <ul>
              <li>Loading resources audit
                <span class="has-text-grey-light">(Server-side, SSL,
                  CDN, Cache, JS, Photos, Fonts ..)</span>
              </li>
              <li>Identification of problem areas</li>
              <li>Solution presentation</li>
              <li>Optimization of basic resources</li>
              <li>Troubleshooting (Server-side, SSL, CDN,
                Cache, JS, Photos, Fonts ..) <span class="has-text-link">(up to 8 hours)</span></li>
            </ul>
            <hr>
            <p>Website Security Recommendations</p>
            <p class="has-text-link">BENEFITS: You are familiar with website
            performance issues. Web pages run faster.</p>
            <template slot="price">579€</template>
            <template slot="button">
              <div class="card-content">
                <button class="button is-primary is-medium is-fullwidth">
                  Order
                </button>
              </div>
            </template>
          </Card>

          <!-- Card 3 -->
          <Card title="Premium" subtitle="For current or future
          market leaders">
            <ul>
              <li>In-depth audit in cloned development
                  environment.
              </li>
              <li>Presentation of 3 technological solution scenarios.</li>
              <li>The problems identified for each resource
                <!-- are solved by modifying the resources or
                completely abandoning them according to
                the chosen technological scenario -->
                <span class="has-text-link">(from 30 hours)</span>
              </li>
            </ul>
            <hr>
            <p>Website Security Recommendations</p>
            <p class="has-text-link">BENEFITS: You are familiar with website
            performance issues. Web pages run faster.</p>
            <template slot="price">from 1797€</template>
            <template slot="button">
              <div class="card-content">
                <button class="button is-success is-medium is-fullwidth">
                  Order
                </button>
              </div>
            </template>
            <!-- <img src="../assets/green.svg" alt=""> -->
          </Card>
        </div>
      </div>
    </section>

    <hr class="navbar-divider">

    <!-- ORDER FORM -->
    <section class="section" id="contact">
      <div class="container">
        <h1 class="title has-text-center">Make your order</h1>
        <section class="column is-three-fifths is-offset-one-fifth has-text-center">
            <b-field label="Your name">
                <b-input v-model="form.name" required></b-input>
            </b-field>

            <b-field label="El. mail adress">
                <b-input type="email" v-model="form.mail" required></b-input>
            </b-field>

            <b-field label="Telephone number">
                <b-input type="number"></b-input>
            </b-field>

            <b-field label="Your homepage">
                <b-input v-model="form.homepage"></b-input>
            </b-field>

            <b-field label="Choose your plan">
                <b-select placeholder="Plan" v-model="form.plan" expanded>
                    <option value="Basic">Basic</option>
                    <option value="Optimal">Optimal</option>
                    <option value="Premium">Premium</option>
                </b-select>
            </b-field>
          <button class="button is-primary is-medium" style="float: right;" @click="sendForm()">
            Contact
          </button>
        </section>
      </div>
    </section>

    <hr class="navbar-divider">

    <section class="section has-text-left" id="information">
      <div class="container">
        <div class="columns">
          <div class="column">
            <img src="../assets/Speed-optimization-growth.jpg" alt="Speed Optimization Growth">
          </div>
          <div class="column">
            <div class="content accordion">
              <h3>Results based on evidence </h3>
              <p>Google’s research found that the longer website loads 1s. to 7s.,
                the user bounce rate increase 113%! That is, if your site loads for 7 seconds
                and is currently being rejected by 1000 people, optimizing it would result
                in twice as less people (500).</p>
              <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                    {{ !props.open ? 'Expand' : 'Collapse' }}
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
            <div class="content accordion">
              <h3>Best Practice Recommendations</h3>
              <p>1. The content of the website is displayed to users in less than 3 seconds</p>
              <p>2. Server response time is faster than 1.3 seconds</p>
              <p>3. Website takes up less than 500kb of space</p>
            </div>
            <div class="content accordion">
              <h3>Data security and risk management</h3>
              <p>Guaranteed storage of sensitive data, logins during the project and permanent
                removal after project is complete.
                Backup creation before proceeding with project implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    <script type="text/x-template" id="backtotop">
  <button class="goTop" v-if="isVisible" @click="backToTop">
        <i class="fa fa-angle-up" aria-hidden="true"></i>
    </button>
</script>
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
      form: [{
        name: '',
        mail: '',
        number: '',
        homepage: '',
        plan: '',
      }],
    };
  },
  methods: {
    sendForm() {
      // send form here
    },
  },
};
</script>
