<template>
    <section class="projects-page mt-[150px]">
        <div class="container projects-page__container">
            <nav class="text-black 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5 my-8" aria-label="Breadcrumb">
                <ol class="list-none p-0 inline-flex">
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" to="/">{{ langtext[$route.params.lan].about.Home
                        }}</RouterLink>
                        <img src="../../assets/images/arrow.svg" alt="">
                    </li>
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" :to="`/${$route.params.lan}/projects`">{{
                            langtext[$route.params.lan].homePage.Projects }}
                        </RouterLink>
                    </li>
                </ol>
            </nav>
            <h3 class="text-white uppercase text-5xl pt-8 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5">{{
                langtext[$route.params.lan].homePage.Projects }}</h3>
            <div class="mt-10">
                <router-link :to="`projects/${projectsData.slug}`" v-for="projectsData in projects" :key="projectsData.id"
                    class="projects-page__box overflow-hidden rounded-lg bg-[#181818] cursor-pointer 2xl:h-[236px] xl:h-[236px] lg:h-[236px] md:h-[455px] h-[450px] 2xl:flex xl:flex 2
                lg:flex md:block sm:block block items-center 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-[350px] 2xl:m-0 xl:m-0 lg:m-0 md:m-0 ms-[20px]">
                    <div class="ms-5 pt-3 pb-3 flex-direction">
                        <h2 class="flex items-end text-white text-base font-[inter-bold] mb-5">
                            <img class="me-3" :src="projectsData.icon" alt="" width="28" height="28">
                            {{ projectsData.title }}
                        </h2>
                        <p
                            class="text-[#B8B8B8] text-sm md:text-base font-normal mb-4 md:mb-10 font-[inter-medium] 2xl:max-w-[480px] xl:max-w-[480px] lg:max-w-[480px] md:max-w-[480px] sm:max-w-[480px] max-w-[350px]">
                            {{ projectsData.short_bio }}</p>
                        <RouterLink
                            class="!py-3 !px-8 bg-[#322D24] relative z-10 text-sm font-normal text-[#F4D291] lg:hover:text-[#322D24] lg:hover:bg-[#F4D291] transition-200 rounded-lg 2xl:block xl:block lg:block md:block  sm:hidden hidden bg-[#4E4940] text-[#F4D291] w-[163px]"
                            :to="`projects/${projectsData.slug}`">{{ langtext[$route.params.lan].projects.projectsView }}
                        </RouterLink>
                    </div>
                    <div class="flex ms-[-300px]">
                        <div class="projectdata-pictures linearwhite"
                            v-for="(projectsPictures, index) in projectsData.pictures" :key="projectsPictures.id"
                            :style="`z-index: ${projectsData.pictures.length - index};transform: translateX(${(projectsData.pictures.length - index) * 60}px);`">
                            <img class="object-cover hover:translate-x-[50px] rounded-xl w-[195px] h-[201px] projectdata-pictures__picture"
                                :src="projectsPictures" alt="">
                        </div>
                    </div>
                    <RouterLink
                        class="!py-3 !px-8 bg-[#322D24] relative z-10 text-sm font-normal text-[#F4D291] lg:hover:text-[#322D24] lg:hover:bg-[#F4D291] transition-200 rounded-lg 2xl:hidden xl:hidden lg:hidden md:hidden  sm:block block bg-[#4E4940] text-[#F4D291] w-[280px] m-auto mt-5"
                        :to="`projects/${projectsData.slug}`">{{ langtext[$route.params.lan].projects.projectsView }}
                    </RouterLink>
                </router-link>
            </div>
        </div>
        <img src="https://uzbekistans.club/_nuxt/img/pattern.6a48bf5.png" alt=""
            class="absolute bottom-[250px] right-[-20px] gradientPattern z-[-20]">
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';
import { Lang } from '../Lang/Lang'

export default {
    props: {
        projects: {
            type: Array,
            required: true,
        }
    },
    components: { RouterLink },
    data() {
        return {
            langtext: Lang
        }
    },
}
</script>
<style scoped>
.gradientPattern {
    background: radial-gradient(64.65% 43.34% at 94.74% 50.26%, rgba(19, 19, 19, 0) 0, #131313 100%), #131313;
    transform: rotate(180deg)
}

.flex-direction {
    -webkit-flex-direction: column !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
}

.projects-page__box:nth-child(2) {
    background-color: #333;
}

.projects-page__box {
    margin-top: 50px
}

/* .projectdata-pictures:nth-child(2){
    margin-left: 200px;
    z-index: 1;
}
.projectdata-pictures:nth-child(3){
    margin-left: 320px;
    z-index: 1;
} */

.projectdata-pictures__picture {
    transition: all 0.4s
}

.projectdata-pictures__picture:hover {
    transition: all 0.4s
}

.projectdata-pictures__picture {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.4s;
}

.projectdata-pictures__picture:hover {
    filter: none;
    -webkit-filter: grayscale(0);
    transition: all 0.4s;
}

.linearwhite {
    box-shadow: 31px 0px 26px 0px rgba(0, 0, 0, 0.65);
    -webkit-box-shadow: 31px 0px 26px 0px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 31px 0px 26px 0px rgba(0, 0, 0, 0.65);
}</style>