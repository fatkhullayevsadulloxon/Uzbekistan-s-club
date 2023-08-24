<template>
    <ResidentsSingle :singleResidentInfo="singleResidentInfo" />
</template>
<script>
import ResidentsSingle from '../components/ResidentsSingle/ResidentsSingle.vue';
import axios from 'axios';

export default {
    components: { ResidentsSingle },
    data() {
        return {
            singleResidentInfo: {}
        }
    },
    methods: {
        async FetchSingleInfo() {
            const { data } = await axios.get(`https://uzbekclub.xn--h28h.uz/api/v1/ordinary_residents/${this.$route.params.name}/detail/`, {
                headers: {
                    'Accept-Language': this.$route.params.lan
                },
            })
            this.singleResidentInfo = data
        }
    },
    mounted() {
        this.FetchSingleInfo()
    }
}
</script>
<style scoped></style>