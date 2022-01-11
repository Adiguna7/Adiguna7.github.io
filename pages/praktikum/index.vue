<template>
  <v-container id="hero" fluid>
    <v-row
      class="d-flex align-center justify-center flex-column"
      style="height: 100%"
    >
      <vue-typed-js
        :strings="['_tender']"
        :typeSpeed="100"
        :startDelay="100"
        :backSpeed="100"
        :loop="true"
      >
        <div class="white--text text-sm-h4 text-h5 text-center">
          <div>
            Find M<a
              class="white--text"
              style="text-decoration: none; cursor: none"
              :href="link"
              >e</a
            >
          </div>
          <span class="typing" style="color: #e31b6d"></span>
        </div>
      </vue-typed-js>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      link: 'praktikum/123980',
    }
  },
  mounted() {
    this.$ga.page(this.$router)
    // eslint-disable-next-line no-console
    console.log('bismillah')
  },
}
</script>

<style lang="scss" scoped>
#hero {
  height: 100vh !important;
  width: 100vw !important;
  background-color: #252934;
}
</style>
