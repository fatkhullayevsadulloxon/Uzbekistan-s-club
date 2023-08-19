<template lang="">
    <div>
        <ProjectsPage :projects="projects"/>
    </div>
</template>
<script>
import ProjectsPage from '../components/ProjectsPage/ProjectsPage.vue';
import axios from 'axios';
export default {
    components: {
        ProjectsPage
    },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        async FetchProjectsView() {
            const { data } = await axios.get("https://uzbekclub.xn--h28h.uz/api/v1/projects/", {
                headers: {
                    'Accept-Language': this.$route.params.lan
                },
            })
            const dataArr = data.results
            const newArr = dataArr.map(item => ({
                id: item.id,
                title: item.title,
                slug: item.slug,
                icon: item.icon,
                icon_class: item.icon_class,
                short_bio: item.short_bio,
                pictures: item.pictures
            }))
            this.projects = newArr
            console.log(this.projects);
        }
    },
    mounted(){
        this.FetchProjectsView()
    }
}
</script>
<style lang="">
    
</style>