<template>
  <div id="card">
    <div class="card">
      <div class="card-content">
        <p class="title">
          {{ title }}
        </p>
        <p class="subtitle is-size-6 has-text-grey-light has-text-weight-light">
          {{ subtitle }}
        </p>
        <hr>
        <div class="card-content has-text-left">
          <ul>
            <li>Loading resources audit
              <span class="has-text-grey-light">(Server-side, SSL,
                CDN, Cache, JS, Photos, Fonts ..)</span>
            </li>
            <li>Identification of problem areas</li>
            <li>Solution presentation</li>
            <li>Optimization of basic resources</li>
          </ul>
          <hr>
          <p>Website Security Recommendations</p>
        </div>
        <hr>
        <p class="is-size-2">187€</p>
        <p class="has-text-grey-light">(VAT included)</p>
        <div class="card-content">
          <button class="button is-primary">
            Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      Type: String,
    },
    subtitle: {
      Type: String,
    },
  },
};
</script>
