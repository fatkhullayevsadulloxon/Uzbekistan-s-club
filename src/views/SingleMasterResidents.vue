<template>
    <div>
        <SingleMasterResidents :singleMasterResidentInfo="singleMasterResidentInfo"/>
    </div>
</template>
<script>
import SingleMasterResidents from '../components/SingleMasterResidents/SingleMasterResidents.vue';
import axios from 'axios';

export default {
    components: { SingleMasterResidents },
    data() {
        return {
            singleMasterResidentInfo: {}
        }
    },
    methods: {
        async FetchSingleMasterInfo() {
            const { data } = await axios.get(`https://uzbekclub.xn--h28h.uz/api/v1/residents/${this.$route.params.name}/detail/`, {
                headers: {
                    'Accept-Language': this.$route.params.lan
                },
            })
            this.singleMasterResidentInfo = data
        }
    },
    mounted() {
        this.FetchSingleMasterInfo()
    }
}
</script>
<style scoped></style>