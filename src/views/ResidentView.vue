<template>
    <ResidentPage @onFilterCountry="onFilterCountry" :residentToBe="residentToBe" :residentFilterCity="residentFilterCity" :residentFilterCountry="residentFilterCountry" />
</template>
<script>
import ResidentPage from '../components/ResidentPage/ResidentPage.vue';
import axios from 'axios';

export default {
    components: { ResidentPage },
    data() {
        return {
            residentFilterCountry: [],
            residentFilterCity: [],
            residentToBe: {},
        }
    },
    methods: {
        async fetchResidentFilterCountry() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/country/', {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                    params: {
                        limit: 100
                    }
                })

                const dataArr = data.results
                const newArr = dataArr.map(item => ({
                    id: item.id,
                    name: item.name
                }))
                this.residentFilterCountry = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchResidentFilterCity() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/country-cities/', {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                    params: {
                        limit: 100
                    }
                })

                const dataArr = data.results
                const newArr = dataArr.map(item => ({
                    id: item.id,
                    name: item.name,
                    country: item.country,
                }))
                this.residentFilterCity = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchResidentToBe() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/pages/uzbekistans-club-rezidenti-bolish/', {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                })
                this.residentToBe = data
            } catch (error) {
                console.log(error);
            }
        },
        onFilterCountry(){
            this.fetchResidentFilterCity()
        }
    },
    mounted() {
        this.fetchResidentFilterCountry()
        this.fetchResidentToBe()
    }
}
</script>
<style ></style>