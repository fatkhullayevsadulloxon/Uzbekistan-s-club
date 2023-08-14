<template>
    <section class="top-questions bg-neutral-800">
        <div class="container top-questions__container">
            <div class="flex items-center justify-between pt-8">
                <h3
                    class="z-10 2xl:!text-3xl xl:!text-lg lg:!text-lg md:!text-[44px] text-white !font-[inter-medium] uppercase  2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">
                    Top savollar</h3>
                <router-link class="text-gray-500 text-base 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
                    to="/project">
                    Barchasi
                </router-link>
            </div>
            <div
                class="top-questions__box grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">
                <div class="top-questions__list 2xl:w-[279px] xl:w-[279px] lg:w-[279px] md:w-[279px] sm:w-[360px] w-[360px] h-[170px] mt-5" v-for="topquestionData in topquestion" :key="topquestionData.id">
                    <router-link class="top-questions__link" to="/">
                        <img class="top-questions__image w-full h-full object-cover rounded-md"
                            :src="topquestionData.image" alt="">
                        <div class="gradient absolute mt-[-170px] 2xl:w-[279px] xl:w-[279px] lg:w-[279px] md:w-[279px] sm:w-[360px] w-[360px] !h-[170px] bg-white">
                            .
                        </div>
                        <p class="top-questions__heading text-white font-[inter-medium] absolute mt-[-28px] ms-5">
                            {{ topquestionData.title.substring(0, 28) }}...</p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
    props: {
        topquestion: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style scoped>
.gradient {
    background: linear-gradient(180deg, rgba(19, 19, 19, .32), #131313);
}

.top-questions__list {
    transition: all 0.4s !important;
    border: 1px solid transparent
}

.top-questions__list:hover {
    opacity: 0.7;
    transition: all 0.4s;
    border: 1px solid #FEC775
}
.top-questions__list:hover p{
    transition: all 0.4s;
    color: #FEC775;
}
</style>