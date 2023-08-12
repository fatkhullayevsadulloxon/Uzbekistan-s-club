<template>
  <div>
    <Hero :hero="hero" />
    <Episodes :episodes="episodes" />
    <Projects />
  </div>
</template>

<script>

import Episodes from '../components/Episodes/Episodes.vue'
import Hero from '../components/Hero/Hero.vue'
import axios from "axios"
import Projects from '../components/Projects/Projects.vue'
export default {
  components: {
    Hero,
    Episodes,
    Projects
  },
  data() {
    return {
      hero: [],
      episodes: []
    }
  },

  methods: {
    async fetchHero() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/home/', {
          headers: {
            'Accept-Language': this.$route.params.lan
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
    async fetchEpisodes() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/projects/latest_episodes/', {
          headers: {
            'Accept-Language': 'uz'
          },
        })

        const dataArr = data.results
        const newArr = dataArr.map(item => ({
          id: item.id,
          title: item.title,
          thumbnail: item.thumbnail,
          project_name: item.project_name,
          project_slug: item.project_slug,
          publish_date: item.publish_date,
          episode_count: item.episode_count,
        }))
        this.episodes = newArr
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.fetchHero()
    this.fetchEpisodes()
  },
}
</script>
<style lang="">
  
</style>