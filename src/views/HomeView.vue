<template>
  <div>
    <Hero :hero="hero" />
    <Episodes :episodes="episodes" />
    <Projects :projects="projects" />
    <MasterResidents :pictures="pictures" />
    <Profile :profile="profile" />
    <TopQuestions :topquestion="topquestion" />
    <News :news="news" />
    <Partners :partners="partners"/>
    <BecomeResident/>
  </div>
</template>

<script>

import Episodes from '../components/Episodes/Episodes.vue'
import Hero from '../components/Hero/Hero.vue'
import axios from "axios"
import Projects from '../components/Projects/Projects.vue'
import MasterResidents from '../components/MasterResidents/MasterResidents.vue'
import Profile from '../components/Profile/Profile.vue'
import TopQuestions from '../components/TopQuestions/TopQuestions.vue'
import News from '../components/News/News.vue'
import Partners from '../components/Partners/Partners.vue'
import BecomeResident from '../components/BecomeResident/BecomeResident.vue'
export default {
  components: {
    Hero,
    Episodes,
    Projects,
    MasterResidents,
    Profile,
    TopQuestions,
    News,
    Partners,
    BecomeResident
},
  data() {
    return {
      hero: [],
      episodes: [],
      pictures: [],
      projects: [],
      profile: [],
      topquestion: [],
      news: [],
      partners: [],
    }
  },

  methods: {
    async fetchHero() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/pages/home-description/', {
          headers: {
            'Accept-Language': this.$route.params.lan
          },
        })
        this.hero = data
      } catch (error) {
        console.log(error);
      }
    },
    async fetchEpisodes() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/projects/latest_episodes/', {
          headers: {
            'Accept-Language': this.$route.params.lan
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
    async fetchResidents() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/residents/home/', {
          headers: {
            'Accept-Language': this.$route.params.lan
          },
        })
        const newArr = data.map(item => ({
          full_name: item.full_name,
          slug: item.slug,
          picture: item.picture,
          picture_square: item.picture_square,
          picture_vertical: item.picture_vertical,
        }))
        this.pictures = newArr
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProjects() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/projects/home/', {
          headers: {
            'Accept-Language': this.$route.params.lan
          },
        })
        const newArr = data.map(item => ({
          id: item.id,
          title: item.title,
          sub_title: item.sub_title,
          slug: item.slug,
          thumbnail: item.thumbnail,
          episode_count: item.episode_count,
        }))
        this.projects = newArr
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProfile() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/articles/home/TOP/', {
          headers: {
            'Accept-Language': this.$route.params.lan
          },
          params: {
            limit: 6
          }
        })
        const result = data.results
        const newArr = result.map(item => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          image: item.image,
          created_at: item.created_at,
        }))
        this.profile = newArr
      } catch (error) {
        console.log(error);
      }
    },
    async fetchTopQuestions() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/articles/home/ANALYTICS/', {
          headers: {
            'Accept-Language': this.$route.params.lan
          },
          params: {
            limit: 4
          }
        })
        const result = data.results
        const newArr = result.map(item => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          image: item.image,
          created_at: item.created_at,
        }))
        this.topquestion = newArr
      } catch (error) {
        console.log(error);
      }
    },
    async fetchNews() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/articles/home/NEWS/', {
          headers: {
            'Accept-Language': this.$route.params.lan
          },
          params: {
            limit: 3
          }
        })
        const result = data.results
        const newArr = result.map(item => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          image: item.image,
          created_at: item.created_at,
        }))
        this.news = newArr
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPartners() {
      try {
        const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/partners/', {
          headers: {
            'Accept-Language': this.$route.params.lan
          },
        })
        const result = data.results
        const newArr = result.map(item => ({
          name: item.name,
          logo: item.logo,
          link: item.link,
        }))
        this.partners = newArr
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.fetchHero()
    this.fetchEpisodes()
    this.fetchResidents()
    this.fetchProjects()
    this.fetchProfile()
    this.fetchTopQuestions()
    this.fetchNews()
    this.fetchPartners()
  },
}
</script>
<style lang="">
  
</style>