<template>
  <div>
      <Hero :hero="hero"/>
  </div>
</template>

<script>

import Hero from '../components/Hero/Hero.vue'
import axios from "axios"
export default {
  components: {
    Hero
  },
  data() {
    return {
      hero: [],
    }
  },

  methods: {
    async fetchHero(lang) {
      if (lang == null) {
        lang = this.$route.params.lan
      }
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/home/', {
          headers: {
            'Accept-Language': 'uz'
          },
        })

        const dataArr = data.results
        const newArr = dataArr.map(item => ({
          video_url: item.video_url,
          short_bio: item.short_bio,

        }))
        this.hero = newArr
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.fetchHero()
  },
}
</script>
<style lang="">
  
</style>