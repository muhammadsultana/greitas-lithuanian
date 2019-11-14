<template>
  <div class="home">
    <!-- HERO TOP -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column has-text-left">
              <p class="is-size-2 has-text-danger has-text-weight-semibold">
                Pagerinkite tinklapio našumą!</p>
              <p class="is-size-6 subtitle-hero has-text-weight-medium">
                Padidinę tinklapio užsikrovimo greitį pagerinsite lankytojų patirtį,
                sumažinsite reklamos kaštus bei padidinsite
                pardavimus.</p>
              <div class="field is-grouped">
                  <p class="control">
                    <button class="button is-primary is-medium" v-scroll-to="'#pricing'">
                      PRADĖTI
                    </button>
                  </p>
                  <p class="control">
                    <button class="button is-medium" v-scroll-to="'#case'">
                      SUŽINOTI DAUGIAU
                    </button>
                  </p>
              </div>
            </div>
            <div class="column">
              <figure class="image">
                <img src="../assets/Main-illustration.jpg">
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
          <h1 class="title has-text-left has-text-white">Atvejo analizė</h1>
          <div class="columns ">
            <div class="column has-text-left has-text-white">
              <figure class="image is-48x48" style="top: -3rem;">
                <img src="../assets/quote.png">
              </figure>
              <span class="has-text-grey-light">{{ case_study_1 }}</span>
              <figure class="image is-48x48" style="bottom: 2.5rem; left: 18rem;">
                <img src="../assets/quote.png">
              </figure>
              {{ case_study_2 }}
            </div>
            <div class="column" style="margin-top: 2rem">
              <p class="is-size-5 has-text-danger has-text-weight-semibold"
              style="background-color: white; padding: .5rem">
                Puslapio turinys matomas už<span class="has-text-primary"> 4 s.</span></p>
              <figure class="image is-square" style="max-height: 100%; max-width: 100%;">
                <img src="../assets/before.png">
              </figure>
            </div>
            <div class="column" style="margin-top: 2rem">
              <p class="is-size-5 has-text-danger has-text-weight-semibold"
              style="background-color: white; padding: .5rem">
                Puslapio turinys matomas už<span class="has-text-success"> 1 s.</span></p>
              <figure class="image is-square" style="max-height: 100%; max-width: 100%;">
                <img src="../assets/after.png">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CARD -->
    <section class="section" id="pricing">
      <div class="container">
        <h1 class="title has-text-center has-text-danger">Išsirinkite sau tinkamą planą</h1>
          <div class="columns is-one-third">
            <div class="column ">
              <Card title="BAZINIS" subtitle="Smulkiam verslui ir norintiems išbandyti paslaugą">
                <ul>
                  <li class="has-text-danger">Kraunamų resursų auditas
                    <span class="has-text-grey-light">(Server-side, SSL, CDN, Cache, JS,
                      nuotraukos, šriftai..)</span>
                  </li>
                  <li class="has-text-danger">Probleminių vietų identifikavimas</li>
                  <li class="has-text-weight-semibold has-text-danger">
                    Sprendimo būdų pasiūlymas</li>
                  <li class="has-text-weight-semibold has-text-danger">
                    Bazinių resursų optimizavimas
                    <span class="has-text-grey-light">
                    (nuotraukos, cache)</span><span class="has-text-link"> (iki 2 val)</span>
                  </li>
                </ul>
                <hr>
                <p class="has-text-danger">Tinklapio saugumo rekomendacijos</p>
                <hr>
                <p class="has-text-link has-text-weight-medium">NAUDA: Jūs esate
                  susipažinę su tinklapio
                  našumo problemomis.
                  Tinklapis veikia sparčiau.</p>
                <template slot="price">187€</template>
                <template slot="button">
                  <div class="card-content">
                    <button class="button is-info is-medium is-fullwidth" v-scroll-to="'#order'">
                      Užsakyti
                    </button>
                  </div>
                </template>
              </Card>
            </div>
            <div class="column">
              <!-- Card 2 -->
              <Card title="OPTIMALUS" subtitle="Norintiems geresnių tinklapio rezultatų">
                <ul>
                  <li class="has-text-danger">Kraunamų resursų auditas
                    <span class="has-text-grey-light">(Server-side, SSL, CDN, Cache, JS,
                      nuotraukos, šriftai..)</span>
                  </li>
                  <li class="has-text-danger">Probleminių vietų identifikavimas</li>
                  <li class="has-text-weight-semibold has-text-danger">
                    Sprendimo būdų pasiūlymas</li>
                  <li class="has-text-weight-semibold has-text-danger">
                    Bazinių resursų optimizavimas
                    <span class="has-text-grey-light">(nuotraukos, cache)</span>
                  </li>
                  <li class="has-text-weight-semibold has-text-danger">
                    Probleminių vietų šalinimas
                    <span class="has-text-grey-light">(Server-side, SSL, CDN, Cache, JS,
                      nuotraukos, šriftai..)</span><span class="has-text-link"> (iki 2 val)</span>
                  </li>
                </ul>
                <hr>
                <p class="has-text-danger">Tinklapio saugumo rekomendacijos</p>
                <hr>
                <p class="has-text-link">NAUDA: Jūs esate susipažinę su tinklapio našumo
                  problemomis.
                Tinklapis veikia sparčiau.</p>
                <template slot="price">579€</template>
                <template slot="button">
                  <div class="card-content">
                    <button class="button is-primary is-medium is-fullwidth" v-scroll-to="'#order'">
                      Užsakyti
                    </button>
                  </div>
                </template>
              </Card>
            </div>
            <div class="column">
              <Card title="PREMIUM" subtitle="Esamiems ir būsimiems rinkos lyderiams">
                <ul>
                  <li class="has-text-weight-semibold has-text-danger">
                    Nuodugnus auditas, atliekamas
                    klonuojant puslapį ir identifikuojant kiekvieno atskiro resurso
                    problemas
                  </li>
                  <li class="has-text-weight-semibold has-text-danger">
                    3 technologinių sprendimų scenarijų
                    pristatymas</li>
                  <li class="has-text-weight-semibold has-text-danger">
                    Kiekvieno resurso identifikuotos
                    problemos išsprendžiamos modifikuojant resursus arba visiškai jų atsisakant
                    (pagal pasirinktą technologinį scenarijų)
                    <span class="has-text-link">(nuo 30 val.)</span>
                  </li>
                </ul>
                <hr>
                <p class="has-text-danger">Tinklapio saugumo rekomendacijos</p>
                <hr>
                <p class="has-text-link">NAUDA: Tinklapio našumas viršija rinkos standartus</p>
                <template slot="price">nuo 1797€</template>
                <template slot="button">
                  <div class="card-content">
                    <button class="button is-success is-medium is-fullwidth" v-scroll-to="'#order'">
                      Užsakyti
                    </button>
                  </div>
                </template>
                <!-- <img src="../assets/green.svg" alt=""> -->
              </Card>
            </div>
          </div>
      </div>
    </section>

    <hr class="navbar-divider">

    <!-- ORDER FORM -->
    <section class="section" id="order">
      <div class="container">
        <h1 class="title has-text-center has-text-danger">Užsakymo forma</h1>
        <section class="column is-three-fifths is-offset-one-fifth has-text-center">
            <b-field label="Jūsų vardas">
                <b-input v-model="form.name" placeholder="Vardenis" required></b-input>
            </b-field>

            <b-field label="El. pašto adresas">
                <b-input type="email" v-model="form.mail" placeholder="vardenis@Greitastinklapis.lt"
                required></b-input>
            </b-field>

            <b-field label="Telefono numeris">
                <b-input type="number" placeholder="+3706000000"></b-input>
            </b-field>

            <b-field label="Jūsų tinklapis">
                <b-input v-model="form.homepage" placeholder="http://greitastinklapis.lt"></b-input>
            </b-field>

            <b-field label="Planas, kuris domina">
                <b-select placeholder="Planas" v-model="form.plan" expanded>
                    <option value="Bazinis">Bazinis</option>
                    <option value="Optimalus">Optimalus</option>
                    <option value="Premium">Premium</option>
                </b-select>
            </b-field>
          <button class="button is-primary is-medium" style="float: right;" @click="sendForm()">
            Susisiekti
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
              <h3 class="has-text-danger">Rezultatai, pagrįsti įrodymais</h3>
              <p><a
href="https://www.akamai.com/uk/en/about/news/press/2017-press/akamai-releases-spring-2017-state-of-online-retail-performance-report.jsp">
      Turinio pateikimo tinklų (CDN) lyderis Akamai</a> nustatė, kad 100 ms lėtesnis serverio
                atsakas gali iki 6% pakenkti ir sumažinti konversijas.Taip pat tyrime nustatyta, kad
                53% lankytojų telefonu išvis išeina iš tinklapio, kuris kraunasi ilgiau nei 3 s, na,
                o 79% lankytojų, kurių netenkino esamas tinklapio našumas, labiau tikėtina, kad į
                tinklapį negrįš.</p>
              <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <div v-if="!props.open"><chevron-down class="icon-2x"/></div>
                    <div v-else><chevron-up class="icon-2x"/></div>
                </a>
                <p>Apibendrinus tūkstančius tyrimų, susijusių su tinklapio našumu,
                  galima daryti išvadą, kad reikia koncentruotis į tris pagrindines
                  tinklapio našumo naudas:
                </p>
                <p>1. Tinklapio greitis teigiamai įtakoja vartotojų įsitraukimą - patirtį
                  ir pardavimus.<a href="https://www.gigaspaces.com/blog/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/">
                  Potencialiai nuo kelių iki keliasdešimt procentų</a></p>
                <p>2. Tinklapio užsikrovimo greitis yra tiesioginis <a href="https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html">
                Google reitingų faktorius.</a></p>
                <p>3. Tinklapio užsikrovimo <a href="https://support.google.com/google-ads/answer/9069088">
                greitis tiesiogiai įtakoja reklamos įkainius.</a></p>
              </b-collapse>
            </div>
            <div class="content accordion">
              <h3 class="has-text-danger">Geriausios praktikos rekomendacijos:</h3>
              <p>Tinklapio turinys vartotojams  parodomas greičiau nei per 3 sekundes</p>
              <p>1. Serverio atsako laikas yra greitesnis nei 1,3 sekundės</p>

              <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <div v-if="!props.open"><chevron-down class="icon-2x"/></div>
                    <div v-else><chevron-up class="icon-2x"/></div>
                </a>
                <p>2. Tinklapis užima mažiau nei 500 kb vietos</p>
                <p>3. Tinklapis turėtų užkrauti mažiau nei 50 elementų</p>
                <p>Pasiekti rekomenduojamus geriausios praktikos rodiklius kartais
                  tiesiog neįmanoma dėl tinklapio sudedamųjų elementų kiekio, ryšio
                  kokybės. Todėl kiekvienu atskiru atveju reikia vertinti galimus
                  sprendimus - pokyčius, atsižvelgiant tiek į esamą verslo situaciją,
                  tiek į konkurentų tinklapių optimizavimo kokybę
                  </p>
              </b-collapse>
            </div>
            <div class="content accordion">
              <h3 class="has-text-danger">Duomenų saugumas ir rizikų valdymas</h3>
              <p>Garantuojamas jautrių duomenų, prisijungimų saugojimas projekto metu
                ir šalinimas įgyvendinus projektą</p>
            <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
              <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <div v-if="!props.open"><chevron-down class="icon-2x"/></div>
                    <div v-else><chevron-up class="icon-2x"/></div>
              </a>
              <p>Atsarginių kopijų paruošimas prieš pradedant darbus</p>
              <p>OPTIMALAUS ir PREMIUM plano darbai vykdomi atskirame serveryje</p>
              <p>Galutiniai testavimai, perkėlimas vyksta ne darbo metu</p>
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
      case_study_1: 'Klientas kreipėsi dėl nedidelės svetainės (kraunami 29 resursai). Iškart po audito buvo aišku, kad reikia optimizuoti nuotraukas; suprasti, kodėl taip ilgai vyksta derybos su SSL sertifikatu; sužinoti, kodėl serveris neatsako tokiu greičiu, kokiu turėtų. Kokybiškas darbų atlikimas užtikrino daugybės esminių problemų pašalinimą ir to pakako, kad būtų pagerintas turinio užkrovimo greitis (anksčiau siekė 4 s, dabar - vos 1 s). Tinklapio greitis turi apskaičiuojamą įtaką konversijų rodikliui, o tai galima išversti galima vienu žodžiu - pinigai. Reguliariai atliekami tyrimai įrodė, kad tinklapio užsikrovimo greitis tiesiogiai įtakoja pardavimų rezultatus, konversijas. Kuo tinklapis greitesnis, tuo didesnė tikimybė, kad lankytojas atliks veiksmą, kurio Jūs ir laukiate - nusipirks kažką, susisieks su Jumis ir pan.',
      case_study_2: 'Tinklapio greitis turi apskaičiuojamą įtaką konversijų rodikliui, o tai galima išversti galima vienu žodžiu - pinigai. Reguliariai atliekami tyrimai įrodė, kad tinklapio užsikrovimo greitis tiesiogiai įtakoja pardavimų rezultatus, konversijas. Kuo tinklapis greitesnis, tuo didesnė tikimybė, kad lankytojas atliks veiksmą, kurio Jūs ir laukiate - nusipirks kažką, susisieks su Jumis ir pan.',
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
