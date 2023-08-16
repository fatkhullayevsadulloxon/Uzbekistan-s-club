<template>
  <div>
    <Header />
    <router-view />
    <Footer :footer="footer"/>
  </div>
</template>
<script>
import axios from 'axios';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import { RouterView } from 'vue-router';

export default {
  components: { Header, Footer },
  data() {
    return {
      footer: {},
    }
  },
  methods: {
    async fetchFooter() {
      const { data } = await axios.get("https://uzbekclub.xn--h28h.uz/api/v1/footer/v2/")

      this.footer = data
    }
  },
  mounted(){
    this.fetchFooter()
  }
}
</script>
<style></style>