<template>
    <ResidentPage @onFilter="onFilter" @changeHandler="changeHandler" @onChangeButton="onChangeButton" @onFilterCountry="onFilterCountry"
        :residentList="residentList" :residentToBe="residentToBe" :residentFieldTo="residentFieldTo" :residentFilterCity="residentFilterCity"
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
            residentFieldTo: [],
            residentToBe: {},
            limit: 12,
            total: 0,
            field_of_activity: ''
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
                        search: this.term,
                        field_of_activity: this.field_of_activity,
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
        async fetchFieldOfActivity() {
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
                  slug: item.slug, 
                  order: item.order, 
                }))
                this.residentFieldTo = newArr
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
        },
        onFilter(e){
            this.field_of_activity = e
            this.fetchResidentList()
            if(e === 9){
                this.field_of_activity = ""
            }
            this.fetchResidentList()
        }
    },
    mounted() {
        this.fetchResidentFilterCountry()
        this.fetchResidentToBe()
        this.fetchResidentList()
        this.fetchFieldOfActivity()
    }
}
</script>
<style ></style>