<template>
    <section class="about-us mt-[150px]">
        <div class="container about-us__container">
            <nav class="text-black my-8 ms-10" aria-label="Breadcrumb">
                <ol class="list-none p-0 inline-flex">
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" to="/">Bosh sahifa</RouterLink>
                        <img src="../../assets/images/arrow.svg" alt="">
                    </li>
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" :to="`/${$route.params.lan}/about-us`">Biz
                            haqimizda</RouterLink>
                    </li>
                </ol>
            </nav>
            <div class="about-us__box bg-[#181818] 2xl:h-[2349px] xl:h-[2349px] lg:h-[2349px] md:h-[2650px] 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-[600px] w-[500px] m-auto rounded-2xl">
                <h3 class="text-white uppercase text-center text-5xl pt-7 2xl:me-0 xl:me-0 lg:me-0 md:me-0 sm:me-0 me-20">About us</h3>
                <hr class="2xl:w-[847px] xl:w-[847px] lg:w-[847px] md:w-[600px] sm:w-[400px] w-[300px] m-auto mt-5 opacity-25 mb-7 2xl:me-0 xl:me-0 lg:me-0 md:me-0 sm:me-0 me-[150px]">
                <div class="about-us__img-box flex justify-center w-full 2xl:max-w-[988px] xl:max-w-[988px] lg:max-w-[988px] !md:max-w-[900px] 2xl:md:w-full xl:w-[700px] lg:w-[700px] md:w-[700px] sm:w-[500px] w-[400px] m-auto rounded-[20px] 2xl:me-0 xl:me-0 lg:me-0 md:me-0 sm:me-0 me-[150px]">
                    <img class="about-us__img-box w-full h-full" :src="aboutAll.poster_image" alt="">
                </div>
                <div v-html="aboutAll.short_bio"
                    class="about-us__short-bio m-auto 2xl:max-w-[980px] xl:max-w-[980px] lg:max-w-[980px] md:max-w-[700px] sm:max-w-[500px] max-w-[380px] text-white text-sm leading-6 mb-6 mt-8 2xl:me-0 xl:me-0 lg:me-0 md:me-0 sm:me-0 me-[100px]">
                </div>
                <div class="about-us__stat flex justify-center ">
                    <img class="absolute object-cover about-us__stat-img rounded-xl 2xl:w-[986px] xl:w-[986px] lg:w-[986px] md:w-[700px] sm:w-[500px] w-[400px] h-[120px] object-cover"
                        src="https://uzbekistans.club/_nuxt/img/frame.cb7d8fc.png" alt="">
                </div>
                <div class="flex items-center justify-around mt-8 2xl:block xl:block lg:block md:block sm:block hidden">
                    <div class="about-us__stat-box ms-[100px]">
                        <vue3-autocounter class="text-white font-[inter-bold]" ref='counter' :startAmount='0'
                            :endAmount='aboutStat.views' :duration='3' separator='.' :decimals='0' />
                        <p class="text-white font-[inter-medium] opacity-50 mt-4">Ko'rishlar soni</p>
                    </div>
                    <div class="about-us__stat-box">
                        <vue3-autocounter class="text-white font-[inter-bold]" ref='counter' :startAmount='0'
                            :endAmount='aboutStat.residents' :duration='1' separator='.' :decimals='0' />
                        <p class="text-white font-[inter-medium] opacity-50 mt-4">Rezidentlar</p>
                    </div>
                    <div class="about-us__stat-box me-[100px]">
                        <vue3-autocounter class="text-white font-[inter-bold]" ref='counter' :startAmount='0'
                            :endAmount='aboutStat.episodes' :duration='1' separator='.' :decimals='0' />
                        <p class="text-white font-[inter-medium] opacity-50 mt-4">Epizodlar</p>
                    </div>
                </div>
                <div class="mt-20 ">
                    <p class="text-left ms-[130px] text-white font-[Stroma] text-lg">Bizning jamoa</p>
                    <div
                        class="about-us__team grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  2xl:me-0 xl:me-0 lg:me-0 md:me-0 sm:me-0 me-[150px]">
                        <div v-for="project_ownersData in project_owners" :key="project_ownersData.id"
                            class="about-us__team-box w-[225px] rounded-xl m-auto cursor-pointer">
                            <div class="aboutus-top__list h-[320px] rounded-xl">
                                <div class="about-us__full-name z-10 ms-3">
                                    <h3 class="text-white p-1 absolute font-[inter-bold] mt-[220px] z-[10] ">
                                        {{
                                            project_ownersData.full_name }}</h3>
                                    <a class="absolute mt-[250px] z-10 ms-1" :href="project_ownersData.instagram">
                                        <i class="fa-brands fa-instagram aboutus-top__instagram"
                                            style="color: #ffffff;"></i>
                                        <span class="text-white font-[inter-medium] ms-2 aboutus-top__instagram">{{
                                            project_ownersData.instagram_username.substring(0, 21) }}</span>
                                    </a>
                                </div>
                                <div class="gradient mt-[-5px] absolute w-[208px] z-[2] rounded-xl h-[280px] ms-[6px]">.
                                </div>
                                <img class="w-full h-[280px] object-cover rounded-xl p-2"
                                    :src="project_ownersData.image_link" alt="">
                                <p class="mt-2 ms-4 absolute font-[inter-medium] text-sm text-[#FEC775] about-profession">{{
                                    project_ownersData.profession }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-us__all-desc mt-14">
                    <p class="text-left ms-[130px] text-white font-[Stroma] text-lg">Loyiha haqida</p>
                    <div class="text-white text-center m-auto max-w-[988px] mt-10 about-us__all-desc-p text-sm md:text-lg 2xl:max-w-[988px] xl:max-w-[988px] lg:max-w-[988px] md:max-w-[700px] max-w-[350px] mx-auto mt-6 mb-10 text-[#FFFFFFCC] !leading-[22px] !font-[inter-medium] 2xl:me-0 xl:me-0 lg:me-0 md:me-0 sm:me-0 me-[130px]" v-html="aboutAll.about">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink },
    props: {
        aboutAll: {
            type: Object,
            required: true
        },
        aboutStat: {
            type: Object,
            required: true
        },
        project_owners: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.about-us__short-bio>>>span {
    font-family: "inter-medium" !important;
}

.about-us__stat-img {
    border: 1px solid #FEC775
}

.gradient {
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 46%);
}

.about-us__team-box {
    border: 1px solid transparent !important;
    transition: all 0.4s
}

.about-us__team-box:hover .aboutus-top__instagram {
    color: #FEC775 !important
}

.aboutus-top__list {
    border: 1px solid transparent !important;
}

.aboutus-top__list:hover {
    background-color: rgb(37, 37, 37) !important;
    border: 1px solid #FEC775 !important;
    transition: all 0.4s
}

.about-us__all-desc-p >>> p{
    margin-top: 40px !important;
    font-family: 'inter-medium' !important
}
.about-us__all-desc-p{
    font-family: 'inter-medium' !important
}

@media only screen and (max-width: 500px) {
    .about-us__stat-img{
        display: none
    }
}
</style>