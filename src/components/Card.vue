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
          <div class="content">
            <slot></slot>
          </div>
        </div>
        <hr>
        <p class="is-size-2 has-text-danger"><slot name="price"></slot></p>
        <p class="has-text-grey-light">(PVM įskaičiuotas)</p>
          <slot name="button"></slot>
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
