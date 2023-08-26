<template>
    <ProfileSingle :profileSingle="profileSingle" />
</template>
<script>
import ProfileSingle from '../components/ProfileSingle/ProfileSingle.vue';
import axios from 'axios';

export default {
    components: { ProfileSingle },
    data() {
        return {
            profileSingle: {}
        }
    },
    methods: {
        async fetchProfileSingle() {
            try {
                const { data } = await axios.get(`https://uzbekclub.xn--h28h.uz/api/v1/articles/${this.$route.params.profile}/`, {
                    headers: {
                        'Accept-Language': this.$route.params.lan
                    },
                })
                this.profileSingle = data
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.fetchProfileSingle()
    }
}
</script>
<style  scoped></style>