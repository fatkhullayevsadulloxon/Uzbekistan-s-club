<template>
    <section class="profile-single mt-[150px]">
        <div class="container profile-single">
            <nav class="text-black 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5 my-8" aria-label="Breadcrumb">
                <ol class="list-none p-0 inline-flex">
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" to="/">{{ langtext[$route.params.lan].about.Home
                        }}</RouterLink>
                        <img src="../../assets/images/arrow.svg" alt="">
                    </li>
                    <li class="flex items-center">
                        <RouterLink class="text-white uppercase font-[inter-medium]" :to="`/${$route.params.lan}/top`">
                            Profile
                        </RouterLink>
                        <img src="../../assets/images/arrow.svg" alt="">
                    </li>
                    <li class="flex items-center">

                        <RouterLink v-if="profileSingle" class="text-white uppercase font-[inter-medium]"
                            :to="`/${$route.params.lan}/top/${profileSingle.slug}`">
                            {{ profileSingle.title.substr(0, 80) }}...
                        </RouterLink>
                    </li>
                </ol>
            </nav>
            <div class="profile-single__info">
                <div class="!m-auto">
                    <img class="w-[988px] !m-auto rounded-xl" :src="profileSingle.image" alt="">
                    <div class="ms-[130px]">
                        <h3 class="text-white font-[inter-bold] max-w-[900px] mt-5">{{ profileSingle.title }}</h3>
                        <p class="text-[#a1a1a1] font-[inter-medium] mt-2">{{ profileSingle.created_at }}</p>
                        <div class="max-w-[977px] text-[#555555cc] about-singleProfile mt-8" v-html="profileSingle.about">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { Lang } from '../Lang/Lang';

export default {
    data() {
        return {
            langtext: Lang
        }
    },
    props: {
        profileSingle: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.about-singleProfile>>>span {
    font-family: "Inter-medium" !important
}
</style>