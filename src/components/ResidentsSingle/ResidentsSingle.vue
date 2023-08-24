<template>
    <section class="resident-single-page mt-[150px]">
        <div class="container resident-single-page">
            <nav class="text-black 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5 my-8" aria-label="Breadcrumb">
                <ol class="list-none p-0 inline-flex">
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" to="/">{{ langtext[$route.params.lan].about.Home
                        }}
                        </RouterLink>
                        <img src="../../assets/images/arrow.svg" alt="">
                    </li>
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" :to="`/${$route.params.lan}/residents`">
                            {{ langtext[$route.params.lan].homePage.HeaderNavResident }}
                        </RouterLink>
                        <img src="../../assets/images/arrow.svg" alt="">
                    </li>
                    <li class="flex items-center">
                        <RouterLink class="text-white uppercase font-[inter-medium]"
                            :to="`/${$route.params.lan}/residents/${$route.params.name}`">
                            {{ singleResidentInfo.full_name }}
                        </RouterLink>
                    </li>
                </ol>
            </nav>
            <div class="2xl:flex xl:flex lg:flex md:flex block">
                <img class="2xl:w-[577px] xl:w-[577px] lg:w-[577px] md:w-[577px] w-[340px] h-[600px] rounded-xl object-cover 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 ms-5"
                    :src="singleResidentInfo.picture" alt="">
                <div class="resident-single-page__right 2xl:ms-14 xl:ms-14 lg:ms-14 md:ms-14 ms-5 2xl:mt-0 xl:mt-0 lg:ms-0 md:ms-0 mt-5">
                    <h3 class="text-white font-[inter-bold]"> {{ singleResidentInfo.full_name }}</h3>
                    <p class="text-[#A1A1A1] mt-2 font-[inter-bold]">{{ singleResidentInfo.short_bio }}</p>
                    <div class="text-white mt-10 resident-single-page__info-text 2xl:max-w-[579px] xl:max-w-[579px] lg:max-w-[579px] md:max-w-[579px] max-w-[340px] text-sm md:text-lg font-medium"
                        v-html="singleResidentInfo.about">

                    </div>
                </div>
            </div>
        </div>
        <img src="https://uzbekistans.club/_nuxt/img/pattern.6a48bf5.png" alt=""
            class="absolute bottom-[450px] right-[-20px] gradientPattern z-[-20]">
        <img src="https://uzbekistans.club/_nuxt/img/pattern.6a48bf5.png" alt=""
            class="absolute top-[600px] gradientPattern2 z-[-20]">
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';
import { Lang } from '../Lang/Lang'

export default {
    components: { RouterLink },
    data() {
        return {
            langtext: Lang
        }
    },
    props: {
        singleResidentInfo: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.resident-single-page__info-text>>>p {
    font-family: 'inter-medium'
}

.gradientPattern {
    background: radial-gradient(64.65% 43.34% at 94.74% 50.26%, rgba(19, 19, 19, 0) 0, #131313 100%), #131313;
    transform: rotate(180deg)
}
.gradientPattern2 {
    background: radial-gradient(64.65% 43.34% at 94.74% 50.26%, rgba(19, 19, 19, 0) 0, #131313 100%), #131313;
}
</style>