<template>
    <div>
        <SingleMediaResidents :singleMediaResidents="singleMediaResidentInfo"/>
    </div>
</template>
<script>
import SingleMediaResidents from '../components/SingleMediaResidents/SingleMediaResidents.vue';
import axios from 'axios';

export default {
    components: { SingleMediaResidents },
    data() {
        return {
            singleMediaResidentInfo: {}
        }
    },
    methods: {
        async FetchSingleMediaInfo() {
            const { data } = await axios.get(`https://uzbekclub.xn--h28h.uz/api/v1/media_residents/${this.$route.params.name}/detail/`, {
                headers: {  
                    'Accept-Language': this.$route.params.lan
                },
            })
            this.singleMediaResidentInfo = data
        }
    },
    mounted() {
        this.FetchSingleMediaInfo()
    }
}
</script>
<style scoped></style>