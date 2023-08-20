<template>
    <div>
        <MasterResidentsPage @onChangeButton="onChangeButton" @changeHandler="changeHandler" :residentlist="residentlist" :whoMaster="whoMaster"
            :MasterResidentsPage="MasterResidentsPage" />
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
            whoMaster: {},
            limit: 9,
            total: 0,
            residentlist: [],
            term: '',
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
        async fetchMasterResidentsList() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/residents/', {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                    params: {
                        limit: this.limit,
                        search: this.term
                    }
                })
                const dataArr = data.results
                const newArr = dataArr.map(item => ({
                    full_name: item.full_name,
                    slug: item.slug,
                    picture: item.picture,
                    picture_square: item.picture_square,
                    picture_vertical: item.picture_vertical,
                    profession: item.profession
                }))
                this.residentlist = newArr,
                    this.total = data.total
            } catch (error) {
                console.log(error);
            }
        },
        onChangeButton() {
            this.limit = this.total,
                this.fetchMasterResidentsList()
        },
        changeHandler(e){
            this.term = e.data,
            this.fetchMasterResidentsList()
        }
    },
    mounted() {
        this.fetchMasterResidents()
        this.fetchMasterResidentsWho()
        this.fetchMasterResidentsList()
    },
}
</script>
<style scoped></style>