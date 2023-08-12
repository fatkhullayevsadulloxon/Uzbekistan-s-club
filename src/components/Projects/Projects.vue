<template>
    <section class="projects mt-10 mb-20">
        <div class="container projects__container">
            <div class="flex items-center justify-between">
                <h3 class="z-10 !text-2xl md:!text-[44px] text-white">Loyihalar</h3>
                <router-link class="text-gray-500 text-base 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
                    to="/project">
                    Barchasi
                </router-link>
            </div>
            <div class="mt-5 2xl:flex xl:flex lg:flex md:block sm:block block items-center justify-between m-auto">
                <div class="projects__box 2xl:w-[405px] xl:w-[405px] lg:w-[405px] md:w-[5020px] sm:ms-0 ms-0">
                    <router-link :to="`${$route.params.lan}/projects/ozbekistonlik`" class="projects__link">
                        <img class="rounded-lg projects__img 2xl:ms-5 xl:ms-5 lg:ms-5 md:ms-0 sm:ms-0 ms-0"
                            src="https://uzbekistans.club/media/thumbnails/3_%D0%9F%D0%9E%D0%A1%D0%A2%D0%95%D0%A0%D0%90.jpg"
                            alt="" width="333" height="170">
                        <h3 class="uppercase 2xl:ms-5 xl:ms-5 lg:ms-5 md:ms-0 sm:ms-0 ms-0 mt-5 absolute text-white font-[inter-bold]">O'zbekistonlik</h3>
                        <p class="absolute mt-10 2xl:ms-5 xl:ms-5 lg:ms-5 md:ms-0 sm:ms-0 ms-0 text-gray-700 font-[inter-medium] project__desc">Badiiy-hujjatli
                            film
                        </p>
                    </router-link>
                </div>
                <span class="border-default 2xl:block xl:block lg:block md:hidden sm:hidden hidden"></span>
                <div class="projects__box">
                    <router-link :to="`${$route.params.lan}/projects/ozbekistonlik`" class="projects__link">
                        <img class="rounded-lg projects__img 2xl:ms-12 xl:ms-12 lg:ms-12 md:ms-0 sm:ms-0 ms-0"
                            src="https://uzbekistans.club/media/thumbnails/FOOD_poster.jpg"
                            alt="" width="333" height="170">
                        <h3 class="uppercase 2xl:ms-12 xl:ms-12 lg:ms-12 md:ms-0 sm:ms-0 ms-0 absolute text-white font-[inter-bold]">O'zbekistonlik food</h3>
                        <p class="absolute mt-5 2xl:ms-12 xl:ms-12 lg:ms-12 md:ms-0 sm:ms-0 ms-0 text-gray-700 font-[inter-medium] project__desc">Gastronomik shou
                        </p>
                    </router-link>
                </div>
                <span class="border-default ms-5 2xl:block xl:block lg:block md:hidden sm:hidden hidden"></span>
                <div class="projects__box">
                    <router-link :to="`${$route.params.lan}/projects/ozbekistonlik`" class="projects__link">
                        <img class="rounded-lg projects__img 2xl:ms-12 xl:ms-12 lg:ms-12 md:ms-0 sm:ms-0 ms-0"
                            src="https://uzbekistans.club/media/thumbnails/LIVE_poster.jpg"
                            alt="" width="333" height="170">
                        <h3 class="uppercase 2xl:ms-12 xl:ms-12 lg:ms-12 md:ms-0 sm:ms-0 ms-0 absolute text-white font-[inter-bold]">O'zbekistonlik.live</h3>
                        <p class="absolute mt-5 2xl:ms-12 xl:ms-12 lg:ms-12 md:ms-0 sm:ms-0 ms-0 text-gray-700 font-[inter-medium] project__desc">Turistik shou
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {

}
</script>
<style scoped>
.projects__box {
    width: 403px;
    height: 305px;
    overflow: hidden;
}

.projects__img {
    transition: all 0.4s;
    z-index: -2 !important;
    padding: 0px !important;
    margin-right: 0 !important;
}

.projects__link {
    padding: 28px !important
}

.projects__link:hover .projects__img {
    transform: scale(1.6);
    transition: all 0.4s;

}

.border-default {
    border: 1px solid rgb(60, 59, 59);
    height: 230px !important;
    margin-top: -50px;
}

.projects__link:hover .project__desc {
    color: #FEC775 !important;
}
.projects__link:hover .border-default {
    display: none !important
}
</style>