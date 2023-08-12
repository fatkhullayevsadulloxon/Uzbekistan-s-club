<template>
    <section class="hero mt-[200px]">
        <img class="hero-pattern absolute mt-[150px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden" src="https://uzbekistans.club/_nuxt/img/pattern.6a48bf5.png" alt="">
        <div
            class="container hero__container 2xl:flex xl:flex lg:flex md:block sm:block block items-center justify-between">
            <div v-for="heroData in hero" :key="heroData.id" class="hero__left">
                <img class="2xl:block xl:block lg:block md:hidden sm:hidden hidden 2xl:ms-[-200px] xl:ms-[-200px] lg:ms-[0px]"
                    src="../../assets/images/logo.svg" alt="" width="288" height="120">
                <div class="text-base font-normal 2xl:relative text-white short-bio 2xl:max-w-[576px] xl:max-w-[576px] lg:max-w-[576px] md:max-w-[349px] sm:max-w-[500px] max-w-[349px] md:max-w-[576px] 2xl:block xl:block lg:block 2xl:mt-10 xl:mt-10 lg:mt-10 md:absolute md:mt-[430px] sm:absolute sm:mt-[400px] absolute mt-[250px]"
                    v-html="heroData.short_bio">

                </div>
            </div>
            <router-link to="/projects/ozbekistonlik">
                <h3
                    class="uppercase text-white absolute 2xl:mt-[150px] xl:mt-[150px] lg:mt-[150px] md:mt-[160px] sm:mt-[130px] mt-[120px] 2xl:ms-[450px] xl:ms-[450px] lg:ms-[450px] md:ms-[600px] sm:ms-[650px] ms-[-200px] opacity-75 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-2xl hero__heading font-bold font-[sans-serif]">
                    O'zbekistonlik</h3>
                <i class="fa-solid fa-play fa-4x absolute 2xl:ms-[650px] xl:ms-[650px] lg:ms-[650px] md:ms-[650px] 2xl:block xl:block lg:block md:block hidden 2xl:mt-[160px] xl:mt-[160px] lg:mt-[160px] md:mt-[160px] sm:mt-[140px] mt-[140px]"
                    style="color: #fec775;"></i>
                <video
                    class="rounded 2xl:ms-[300px] xl:ms-[200px] lg:ms-[0px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-[-200px] sm:mt-[-200px] mt-[-200px] 2xl:w-[700px] xl:w-[700px] lg:w-[700px] md:w-[700px] !sm:w-[600px] w-[350px]"
                    loop autoplay muted style="pointer-events: none;">
                    <source src="https://uzbekistans.club/uzbekistans.mp4">
                </video>
            </router-link>
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    props: {
        hero: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.short-bio>>>p {
    font-family: "Inter Medium" !important;
}

.hero__container>>>p {
    margin-left: -200px !important;
    max-width: 576px !important;
}

.hero-pattern {
 
    z-index: -10px !important;
}

@media only screen and (max-width: 1600px) {
    .hero__container>>>img {
        margin-left: 0px !important;

    }

    .hero__container>>>p {
        margin-left: 0px !important;
        max-width: 576px !important;
    }

    .hero__container>>>video {
        margin-left: 0px !important
    }

    .hero__container>>>h3 {
        margin-left: 120px !important
    }

    .hero__container>>>i {
        margin-left: 320px !important
    }
}
</style>