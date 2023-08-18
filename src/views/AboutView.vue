<template>
    <div>
        <AboutUsTop :project_owners="project_owners" :aboutAll="aboutAll" :aboutStat="aboutStat"/>
    </div>
</template>
<script>
import axios from "axios";
import AboutUsTop from "../components/AboutUsTop/AboutUsTop.vue";
export default {
    components: {
        AboutUsTop
    },
    data() {
        return {
            aboutAll: {},
            project_owners: [],
            aboutStat:{}
        }
    },
    methods: {
        async FetchAboutUsTop() {
            const { data } = await axios.get("https://uzbekclub.xn--h28h.uz/api/v1/about/", {
                headers: {
                    'Accept-Language': this.$route.params.lan
                },
            })
            this.aboutAll = data
            this.aboutStat = data.statistics
            const dataArr = data.project_owners
            const newArr = dataArr.map(item => ({
                full_name: item.full_name,
                profession: item.profession,
                age: item.age,
                image_link: item.image_link,
                instagram: item.instagram,
                instagram_username: item.instagram_username,
            }))
            this.project_owners = newArr
        }
    },
    mounted(){
        this.FetchAboutUsTop()
    }
}
</script>
<style scoped></style>