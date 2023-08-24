<template lang="">
    <MediaResidentPageVue @onFilter="onFilter" @changeHandler="changeHandler" :mediaResidents="mediaResidents" :mediaResidentList="mediaResidentList" :mediaReidentFieldTo="mediaReidentFieldTo"/>
</template>
<script>

import MediaResidentPageVue from '../components/MediaResidentPage/MediaResidentPage.vue'
import axios from 'axios';

export default {
    components: {
        MediaResidentPageVue
    },
    data() {
        return {
            mediaReidentFieldTo: [],
            mediaResidentList: [],
            mediaResidents: {},
            limit: 9,
            term: '',
            field_of_activity: ''
        }
    },
    methods: {
        async fetchMediaResidentsField() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/media_residents/field-of-activity/', {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                })
                const dataArr = data.results
                const newArr = dataArr.map(item => ({
                    id: item.id,
                    title: item.title,
                    title_uz: item.title_uz,
                    title_en: item.title_en,
                    slug: item.slug,
                    order: item.order
                }))
                this.mediaReidentFieldTo = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchMediaResidentsList() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/media_residents/', {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                    params: {
                        limit: this.limit,
                        search: this.term,
                        field_of_activity: this.field_of_activity,
                    }
                })
                const dataArr = data.results
                const newArr = dataArr.map(item => ({
                    id: item.id,
                    full_name: item.full_name,
                    slug: item.slug,
                    picture: item.picture,
                    profession: item.profession,
                    order_number: item.order_number,
                }))
                this.mediaResidentList = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchMediaResidents() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/pages/media-rezidentlar/', {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                })
                this.mediaResidents = data
            } catch (error) {
                console.log(error);
            }
        },
        changeHandler(e) {
            this.term = e.data,
                this.fetchMediaResidentsList()
        },
        onFilter(e) {
            this.field_of_activity = e
            this.fetchMediaResidentsList()
            if (e === 9) {
                this.field_of_activity = ""
            }
            this.fetchMediaResidentsList()
        }
    },

    mounted() {
        this.fetchMediaResidentsField()
        this.fetchMediaResidentsList()
        this.fetchMediaResidents()
    }
}
</script>
<style lang="">
    
</style>