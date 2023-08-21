<template>
    <ResidentPage @changeHandler="changeHandler" @onChangeButton="onChangeButton" @onFilterCountry="onFilterCountry"
        :residentList="residentList" :residentToBe="residentToBe" :residentFilterCity="residentFilterCity"
        :residentFilterCountry="residentFilterCountry" />
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
            residentList: [],
            residentToBe: {},
            limit: 12,
            total: 0
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
        async fetchResidentList() {
            try {
                const { data } = await axios.get('https://uzbekclub.xn--h28h.uz/api/v1/ordinary_residents/', {
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
                    profession: item.profession,
                }))
                this.residentList = newArr
                this.total = data.total
            } catch (error) {
                console.log(error);
            }
        },
        onFilterCountry() {
            this.fetchResidentFilterCity()
        },
        onChangeButton() {
            this.limit = this.total,
                this.fetchResidentList()
        },
        changeHandler(e) {
            this.term = e.data,
            this.fetchResidentList()
        }
    },
    mounted() {
        this.fetchResidentFilterCountry()
        this.fetchResidentToBe()
        this.fetchResidentList()
    }
}
</script>
<style ></style>