<template>
    <div>
        <MasterResidentsPage :whoMaster="whoMaster" :MasterResidentsPage="MasterResidentsPage"/>
    </div>
</template>
<script>
import MasterResidentsPage from '../components/MasterResidentsPage/MasterResidentsPage.vue';
import axios from 'axios';

export default {
    components: { MasterResidentsPage },
    data() {
        return {
            MasterResidentsPage: [],
            whoMaster: {}
        }
    },
    methods: {
        async fetchMasterResidents() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/residents/field-of-activity/', {
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
                this.MasterResidentsPage = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchMasterResidentsWho() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/pages/master-rezident-kim/', {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                })
                this.whoMaster = data
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.fetchMasterResidents()  
        this.fetchMasterResidentsWho()  
    },
}
</script>
<style scoped></style>