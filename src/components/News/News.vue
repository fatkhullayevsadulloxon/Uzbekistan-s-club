<template>
    <section class="news bg-neutral-800">
        <div class="container news__container">
            <div class="flex items-center justify-between pt-8">
                <h3
                    class="z-10 2xl:!text-3xl xl:!text-lg lg:!text-lg md:!text-[44px] text-white !font-[inter-medium] uppercase  2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">
                    Yangiliklar</h3>
                <router-link class="text-gray-500 text-base 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
                    to="/project">
                    Barchasi
                </router-link>
            </div>
            <div
                class="top-questions__box grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">
                <div v-for="newsData in news" :key="newsData.id"
                    class="top-questions__list mb-[50px] rounded-lg bg-[#131313] 2xl:w-[390px] xl:w-[349px] lg:w-[349px] md:w-[349px] sm:w-[360px] w-[360px] h-[170px] mt-5">
                    <RouterLink class="" to="">
                        <div class="flex items-center">
                            <img class="w-[112px] h-[140px] object-cover mt-5 ms-5 rounded-md" :src="newsData.image" alt="">
                            <p class="text-white font-[inter-medium] max-w-[225px] line-clamp-3 leading-6 ms-4">{{
                                newsData.title.substring(0, 85) }}...</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    props: {
        news: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.top-questions__list {
    transition: all 0.4s !important;
    border: 1px solid transparent
}

.top-questions__list:hover {
    opacity: 0.7;
    transition: all 0.4s;
    border: 1px solid #FEC775
}

.top-questions__list:hover p {
    transition: all 0.4s;
    color: #FEC775;
}</style>