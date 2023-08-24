<template>
    <section class="resident-page mt-[150px]">
        <div class="container residents-page">
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
                    </li>
                </ol>
            </nav>
            <div class="2xl:flex xl:flex lg:flex md:block block items-center justify-between mt-12">
                <h3
                    class="text-white uppercase 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-xl 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5">
                    {{ langtext[$route.params.lan].homePage.HeaderNavResident }}
                </h3>
                <div class="flex items-center">
                    <div
                        class="border border-neutral-600 flex-center-between bg-[#252423] rounded-lg 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 sm:ms-5 ms-5">
                        <div class="flex-center-between py-3.5 px-[16px]">
                            <i class="fas fa-search" style="color: #ffffff; opacity: 0.5;"></i>
                            <input v-model="term" @input="$emit('changeHandler', $event)"
                                class="bg-transparent master-residents-page__input outline-none ms-2 text-white font-[inter-bold] 2xl:w-[290px] xl:w-[290px] lg:w-[290px] md:w-[290px] sm:w-[150px] w-[200px]"
                                type="text" :placeholder="`${langtext[$route.params.lan].masterResidents.search}`">
                        </div>
                    </div>
                    <div class="navbar-right relative 2xl:block xl:block lg:block md:block sm:hidden hidden">
                        <button
                            class="header__btn-language rounded-lg relative z-10 block m-2 overflow-hidden focus:outline-none text-sm leading-loose align-middle px-6 py-2.5 cursor-pointer text-sm bg-[#252423] uppercase text-white"
                            @click="isOpen = !isOpen">
                            <span class="ms-2 transition ease-in-out delay-50 font-[inter-bold]"> {{
                                langtext[$route.params.lan].masterResidents.latestAdded }}
                            </span>
                            <i v-if="isOpen === false" class="fa-solid fa-arrow-down ms-2" style="color: #ffffff;"></i>
                            <i v-if="isOpen === true" class="fa-solid fa-arrow-up ms-2" style="color: #ffffff;"></i>
                        </button>
                        <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
                            class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
                        <transition enter-active-class="transform transition duration-500 ease-custom"
                            enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                            enter-to-class="translate-y-0 scale-y-100 opacity-100"
                            leave-active-class="transform transition duration-300 ease-custom"
                            leave-class="translate-y-0 scale-y-100 opacity-100"
                            leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                            <div v-if="isOpen"
                                class="absolute top-auto right-0 w-48 py-2 mt-2 rounded-xl border-gray-900 bg-white shadow-xl text-sm !bg-[#252423] uppercase text-white">
                                <a href="/uz"
                                    class="text-sm text-white hover:bg-blue-600 hover:bg-zinc-700 block px-4 py-2 cursor-pointer font-[inter-bold]">
                                    {{ langtext[$route.params.lan].masterResidents.releasedAdded }}
                                </a>
                                <hr class="opacity-25">
                                <a href="/en"
                                    class="text-sm text-white hover:bg-blue-600 hover:bg-zinc-700 block px-4 py-2 cursor-pointer font-[inter-bold]">
                                    {{ langtext[$route.params.lan].masterResidents.latestAdded }}
                                </a>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="2xl:flex xl:flex lg:flex md:block block justify-between items-start mt-7">
                <div>
                    <div
                        class="resident-page__filter-box bg-[#171717] !h-[249px] !w-[276px] rounded-xl 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5 mb-5 ">
                        <h3 class="text-white font-[inter-bold] ms-5 mb-5 pt-5">{{
                            langtext[$route.params.lan].residents.filtr }}</h3>
                        <hr class="opacity-25 mb-4">
                        <div>
                            <p class="text-white font-[inter-medium] ms-5 mb-2">{{
                                langtext[$route.params.lan].residents.countrySelect }}</p>
                            <div
                                class="select border border-neutral-600 border-opacity-25 !bg-[#252423] ms-5 rounded-lg 2xl:w-[236px] xl:w-[236px] lg:w-[236px] md:w-[236px] sm:w-96 outline-none h-10 border border-gray-500">
                                <div class="relative text-lg">
                                    <button class="flex items-center justify-between px-3 py-2 w-full rounded-lg"
                                        @click="isOptionsExpanded = !isOptionsExpanded" @blur="isOptionsExpanded = false">
                                        <span class="text-sm text-white font-[inter-bold]">
                                            <span class="font-[inter-bold]" v-if="international === 'all'">
                                                {{
                                                    langtext[$route.params.lan].residents.select }}
                                            </span>
                                            <span class="font-[inter-bold]" v-else>
                                                {{ international }}
                                            </span>
                                        </span>
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
                                            :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <transition enter-active-class="transform transition duration-500 ease-custom"
                                        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                                        enter-to-class="translate-y-0 scale-y-100 opacity-100"
                                        leave-active-class="transform transition duration-300 ease-custom"
                                        leave-class="translate-y-0 scale-y-100 opacity-100"
                                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                                        <ul v-show="isOptionsExpanded"
                                            class="absolute h-[300px] list_box overflow-scroll !z-[10] left-0 right-0 mb-4 mt-2 shadow-lg overflow-hidden border border-neutral-600 border-opacity-25 !bg-[#252423] mt-[-1px]">
                                            <li @click="$emit('onFilterCountry')"
                                                v-for="residentFilterCountryData in residentFilterCountry"
                                                :key="residentFilterCountryData.id"
                                                class="px-3 text-white mt-2 font-[inter-medium] text-[16px] duration-300 hover:bg-zinc-700">
                                                {{ residentFilterCountryData.name }}
                                            </li>
                                        </ul>
                                    </transition>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-white font-[inter-medium] ms-5 mb-2 mt-4">{{
                                langtext[$route.params.lan].residents.citySelect }}</p>
                            <div
                                class="select border border-neutral-600 border-opacity-25 !bg-[#252423] ms-5 rounded-lg 2xl:w-[236px] xl:w-[236px] lg:w-[236px] md:w-[236px] sm:w-96 outline-none h-10 border border-gray-500">
                                <div class="relative text-lg">
                                    <button class="flex items-center justify-between px-3 py-2 w-full rounded-lg"
                                        @click="isOptionsExpanded2 = !isOptionsExpanded2"
                                        @blur="isOptionsExpanded2 = false">
                                        <span class="text-sm text-white font-[inter-bold]">
                                            <span class="font-[inter-bold]" v-if="international === 'all'">
                                                {{
                                                    langtext[$route.params.lan].residents.select }}
                                            </span>
                                            <span class="font-[inter-bold]" v-else>
                                                {{ international }}
                                            </span>
                                        </span>
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
                                            :class="isOptionsExpanded2 ? 'rotate-180' : 'rotate-0'">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <transition enter-active-class="transform transition duration-500 ease-custom"
                                        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                                        enter-to-class="translate-y-0 scale-y-100 opacity-100"
                                        leave-active-class="transform transition duration-300 ease-custom"
                                        leave-class="translate-y-0 scale-y-100 opacity-100"
                                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                                        <ul v-show="isOptionsExpanded2"
                                            class="absolute h-[300px] list_box overflow-scroll z-[10] left-0 right-0 mb-4 mt-2 shadow-lg overflow-hidden border border-neutral-600 border-opacity-25 !bg-[#252423] mt-[-1px]">
                                            <li v-for="residentFilterCityData in residentFilterCity"
                                                :key="residentFilterCityData.id"
                                                class="px-3 text-white mt-2 font-[inter-medium] text-[16px] duration-300 hover:bg-zinc-700">
                                                {{ residentFilterCityData.name }}
                                            </li>
                                        </ul>
                                    </transition>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="resident-page__filter-box bg-[#171717] !h-[535px] !w-[276px] rounded-xl 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5 mb-5 ">
                        <h3 class="text-white font-[inter-bold] ms-5 pt-6 mb-5"> {{
                            langtext[$route.params.lan].residents.fieldTo }}</h3>
                        <hr class="opacity-25">
                        <div class="master-residents__list-radio">
                            <div @click="() => {
                                masterid = residentFieldToData.id, $emit('onFilter', residentFieldToData.id)
                            }" v-for="residentFieldToData in residentFieldTo" :key="residentFieldToData.id"
                                style="align-items: center !important;"
                                class="flex items-center cursor-pointer justify-between py-4 hover:bg-[#252423]">
                                <label :class="{ 'text-[#fec775]': residentFieldToData.id === masterid }"
                                    class="text-white label-resident cursor-pointer font-[inter-medium] text-[#FFFFFFA3] w-full ms-5"
                                    :for="residentFieldToData.title">{{ residentFieldToData.title }}</label>
                                <input :id="residentFieldToData.title" type="radio" name="checbox"
                                    class="!me-5 filter-input">
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="who-rezident rounded-xl">
                        <img class="2xl:w-[925px] xl:w-[925px] lg:w-[925px] md:w-[925] w-[350px] 2xl:h-[248px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-[400px] 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 ms-5 rounded-xl object-cover who-rezident__img"
                            src="https://uzbekistans.club/_nuxt/img/collage.22c3f91.webp" alt="">
                        <div class="ms-5">
                            <h4
                                class="absolute 2xl:mt-[-200px] xl:mt-[-200px] lg:mt-[-200px] md:mt-[-200px] mt-[-330px] 2xl:text-xl xl:text-xl lg:text-xl ms-5 md:text-xl text-[18px] text-white font-[inter-bold]">
                                {{ residentToBe.title }}
                            </h4>
                            <div class="absolute 2xl:mt-[-150px] xl:mt-[-150px] lg:mt-[-150px] md:mt-[-150px] mt-[-270px] 2xl:max-w-[802px] xl:max-w-[802px] lg:max-w-[802px] md:max-w-[802px] max-w-[300px] who-rezident__short_bio ms-5 text-white"
                                v-html="residentToBe.about
                                    ">
                            </div>
                        </div>
                    </div>
                    <div
                        class="master-residents grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mt-14">
                        <RouterLink :to="`residents/${residentlistData.slug}`"
                            v-for=" residentlistData  in  residentList " :key="residentlistData.id"
                            class="master-residents__list bg-[#181818] !2xl:w-[206px] xl:w-[206px] lg:w-[206px] md:w-[206px] w-[300px] 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 sm:ms-9 ms-9 h-[328px] rounded-lg">
                            <img class="2xl:w-[206px] xl:w-[206px] lg:w-[206px] md:w-[300px] w-[300px] !h-[210px] object-cover rounded-lg"
                                :src="residentlistData.picture" alt="">
                            <h3 class="text-white font-[inter-bold] text-center mt-5 master-residents__list-heading">{{
                                residentlistData.full_name }}</h3>
                            <p class="text-white font-[inter-medium] text-center mt-2 text-dark-64 text-sm">{{
                                residentlistData.profession }}</p>
                        </RouterLink>
                    </div>
                    <div class="text-center 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 sm:ms-[-50px] ms-[-50px]">
                        <button @click="$emit('onChangeButton')"
                            class="bg-[#1b1b1b] text-white px-8 py-5 rounded-md mt-8 font-[inter-bold]"> {{
                                langtext[$route.params.lan].masterResidents.loadmore }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <img src="https://uzbekistans.club/_nuxt/img/pattern.6a48bf5.png" alt=""
            class="absolute top-[900px]  gradientPattern z-[-20]">
    </section>
</template>
<script>

import { RouterLink } from 'vue-router';
import { Lang } from '../Lang/Lang';

export default {
    props: {
        residentFilterCountry: {
            type: Array,
            required: true
        },
        residentFilterCity: {
            type: Array,
            required: true,
        },
        residentToBe: {
            type: Object,
            required: true,
        },
        residentList: {
            type: Array,
            required: true,
        },
        residentFieldTo: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isOptionsExpanded: false,
            isOptionsExpanded2: false,
            international: "all",
            filterSelect: "Barcha yo'nalishlar",
            langtext: Lang,
            isOpen: false,
            masterid: 9
        };
    },
    components: { RouterLink }
}
</script>
<style scoped>
.who-rezident__short_bio>>>span {
    font-family: 'inter-medium' !important;
    font-size: 16px;
}
.who-rezident__short_bio>>>p {
    font-family: 'inter-medium' !important;
    font-size: 16px;
}

.who-rezident__img {
    border: 1px solid #fec775;
}

.master-residents__list {
    transition: all 0.4s !important;
    border: 1px solid transparent !important
}

.master-residents__list:hover {
    /* transition: all 0.4s; */
    border: 1px solid #fec775 !important;
    opacity: 0.7;
}

.master-residents__list:hover .master-residents__list-heading {
    transition: all 0.4s;
    color: #fec775;
}

.gradientPattern {
    background: radial-gradient(64.65% 43.34% at 94.74% 50.26%, rgba(19, 19, 19, 0) 0, #131313 100%), #131313;
}

input {
    appearance: none;
}

.filter-input {
    border-radius: 50% !important;
    width: 23px !important;
    height: 20px !important;
    border: 2px solid #999 !important;
    transition: 0.2s all linear !important;
    position: relative !important;
}

.filter-input:checked {
    background-color: #fec775 !important;
    border: 2px solid #fec775 !important
}

.filter-input:checked .label-resident {
    color: #fec775 !important
}
</style>