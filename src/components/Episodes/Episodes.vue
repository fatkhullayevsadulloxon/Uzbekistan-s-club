<template>
    <section class="episodes 2xl:mt-[200px] xl:mt-[100px] lg:mt-[100px] md:mt-[350px] sm:mt-[500px] mt-[350px]">
        <div class="container episodes__container">
            <div class="flex items-center justify-between">
                <h3 class="z-10 !text-2xl md:!text-[44px] text-white 2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">{{
                    langtext[$route.params.lan].homePage.LastEpisodes }}</h3>
                <router-link class="text-gray-500 text-base 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
                    :to="`${$route.params.lan}/`">
                    {{ langtext[$route.params.lan].homePage.All }}
                </router-link>
            </div>
            <div class="2xl:flex xl:flex lg:flex md:block sm:block block">
                <div v-for="episodesData in episodes" :key="episodesData.id" class="episodes__box">
                    <div class="mt-5 2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:ms-6 ms-6" v-if="episodesData.id === 42">
                        <router-link :to="`/${$route.params.lan}/projects/ozbekistonlik/${episodesData.id}`">
                            <img class="z-10 mb-5 episodes__img 2xl:w-[5906px] xl:w-[596px] lg:w-[596px] md:sm:w-[596px] w-[350px] rounded-lg"
                                :src="episodesData.thumbnail" alt="">
                        </router-link>
                        <router-link
                            class="text-white font-[inter-medium] text-base hover:text-[#FEC775] lg:text-[20px] cursor-pointer transition-300"
                            :to="`/${$route.params.lan}/projects/ozbekistonlik/${episodesData.id}`">
                            {{ episodesData.title }}
                        </router-link>
                        <hr
                            class="opacity-25 2xl:w-[383px] xl:w-[383px] lg:w-[383px] md:w-[383px] sm:w-[360px] w-[360px] mt-4 mb-4">
                    </div>
                </div>
                <div>
                    <div v-for="episodesData in episodes" :key="episodesData.id" class="episodes__box mt-10">
                        <ul v-if="episodesData.id !== 41 && episodesData.id !== 42"
                            class="episode__list 2xl:ms-10 xl:ms-10 lg:ms-10 md:ms-6 sm:ms-6 ms-6">
                            <li class="episode__list !max-w-[360px]">
                                <router-link
                                    class="text-white font-[inter-medium] text-base hover:text-[#FEC775] lg:text-[20px] cursor-pointer transition-300"
                                    :to="`/${$route.params.lan}/projects/ozbekistonlik/${episodesData.id}`">
                                    {{ episodesData.title }}
                                </router-link>
                            </li>
                            <hr
                                class="opacity-25 2xl:w-[383px] xl:w-[383px] lg:w-[383px] md:w-[383px] sm:w-[360px] w-[360px] mt-4 mb-4">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';
import { Lang } from "../Lang/Lang"
export default {
    props: {
        episodes: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            langtext: Lang
        }
    },
}
</script>
<style scoped>
.episodes__img {
    border: 1px solid transparent;
    transition: all 0.6s
}

.episodes__img:hover {
    border: 1px solid #FEC775;
    transition: all 0.6s
}
</style>