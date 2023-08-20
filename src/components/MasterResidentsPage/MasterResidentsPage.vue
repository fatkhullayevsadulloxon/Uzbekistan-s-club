<template>
    <section class="master-residents-page mt-[150px]">
        <div class="container master-residents-page__container">
            <nav class="text-black 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5 my-8" aria-label="Breadcrumb">
                <ol class="list-none p-0 inline-flex">
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" to="/">{{ langtext[$route.params.lan].about.Home
                        }}
                        </RouterLink>
                        <img src="../../assets/images/arrow.svg" alt="">
                    </li>
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" :to="`/${$route.params.lan}/master-residents`">
                            Resident
                        </RouterLink>
                    </li>
                </ol>
            </nav>
            <div class="master-residents-page__box">
                <div class="2xl:flex xl:flex lg:flex md:block block items-center justify-between mt-12">
                    <h3
                        class="text-white uppercase 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-xl 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5">
                        MASTER REZIDENTLAR
                    </h3>
                    <div class="flex items-center opacity-75">
                        <div
                            class="border border-neutral-600 flex-center-between bg-[#252423] rounded-lg 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 sm:ms-5 ms-5">
                            <div class="flex-center-between py-3.5 px-[16px]">
                                <i class="fas fa-search" style="color: #ffffff; opacity: 0.5;"></i>
                                <input v-model="term" @input="$emit('changeHandler', $event)"
                                    class="bg-transparent master-residents-page__input outline-none ms-2 text-white font-[inter-bold] 2xl:w-[290px] xl:w-[290px] lg:w-[290px] md:w-[290px] sm:w-[150px] w-[200px]"
                                    type="text" placeholder="Qidirish">
                            </div>
                        </div>
                        <div class="navbar-right relative 2xl:block xl:block lg:block md:block sm:hidden hidden">
                            <button
                                class="header__btn-language rounded-lg relative z-10 block m-2 overflow-hidden focus:outline-none text-sm leading-loose align-middle px-6 py-2.5 cursor-pointer text-sm bg-[#252423] uppercase text-white"
                                @click="isOpen = !isOpen">
                                <span class="ms-2 transition ease-in-out delay-50 font-[inter-bold]">Vaqt bo'yicha</span>
                                <i v-if="isOpen === false" class="fa-solid fa-arrow-down ms-2" style="color: #ffffff;"></i>
                                <i v-if="isOpen === true" class="fa-solid fa-arrow-up ms-2" style="color: #ffffff;"></i>
                            </button>
                            <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
                                class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
                            <div v-if="isOpen"
                                class="absolute top-auto right-0 w-48 py-2 mt-2 rounded-xl border-gray-900 bg-white shadow-xl text-sm bg-[#252423] uppercase text-white">
                                <a href="/uz"
                                    class="text-sm text-white hover:bg-blue-600 hover:bg-zinc-700 block px-4 py-2 cursor-pointer font-[inter-bold]">
                                    Boshida chiqarilganlari</a>
                                <hr class="opacity-25">
                                <a href="/en"
                                    class="text-sm text-white hover:bg-blue-600 hover:bg-zinc-700 block px-4 py-2 cursor-pointer font-[inter-bold]">So'nggi
                                    qo'shilgan</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="">

                </div>
            </div>
            <div class="who-rezident mt-5">
                <img class="2xl:w-full xl:w-full lg:w-full md:w-full w-[350px] 2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-[400px] 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 ms-5 rounded-xl object-cover who-rezident__img"
                    src="https://uzbekistans.club/_nuxt/img/collage.22c3f91.webp" alt="">
                <div class="ms-5">
                    <h4
                        class="absolute 2xl:mt-[-200px] xl:mt-[-200px] lg:mt-[-200px] md:mt-[-200px] mt-[-330px] 2xl:text-2xl xl:text-2xl lg:text-2xl ms-5 md:text-xl text-xl text-white font-[inter-bold]">
                        {{ whoMaster.title }}</h4>
                    <div class="absolute 2xl:mt-[-150px] xl:mt-[-150px] lg:mt-[-150px] md:mt-[-150px] mt-[-270px] 2xl:max-w-[863px] xl:max-w-[863px] lg:max-w-[863px] md:max-w-[863px] max-w-[300px] who-rezident__short_bio ms-5"
                        v-html="whoMaster.about">

                    </div>
                </div>
            </div>
            <div
                class="master-residents grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mt-14">
                <RouterLink :to="`master-residents/${residentlistData.slug}`" v-for="residentlistData in residentlist"
                    :key="residentlistData.id"
                    class="master-residents__list bg-[#181818] 2xl:w-full xl:w-full lg:w-full md:w-full !w-[300px] 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 sm:ms-9 ms-9 h-[380px] rounded-lg">
                    <img class="!w-[300px] !h-[288px] object-cover rounded-lg" :src="residentlistData.picture" alt="">
                    <h3 class="text-white font-[inter-bold] text-center mt-5 master-residents__list-heading">{{
                        residentlistData.full_name }}</h3>
                    <p class="text-white font-[inter-medium] text-center mt-2 text-dark-64 text-sm">{{
                        residentlistData.profession }}</p>
                </RouterLink>
            </div>
            <div class="text-center 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-0 sm:ms-[-50px] ms-[-50px]">
                <button @click="$emit('onChangeButton')"
                    class="bg-[#1b1b1b] text-white px-8 py-5 rounded-md mt-8 font-[inter-bold]">Load more</button>
            </div>
        </div>
    </section>
</template>
<script>
import { Lang } from "../Lang/Lang"
export default {
    data() {
        return {
            langtext: Lang,
            isOpen: false,
            term: ''
        }
    },
    methods: {
        changeHandler(e) {
            this.term = e.target.value
        }
    },
    props: {
        MasterResidentsPage: {
            type: Array,
            required: true,
        },
        whoMaster: {
            type: Object,
            required: true
        },
        residentlist: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style scoped>
.flex-center-between {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
}

.master-residents-page__input::placeholder {
    color: gray
}

.who-rezident__img {
    border: 1px solid #fec775;
}

.who-rezident__short_bio>>>span {
    font-family: 'inter-medium' !important;
    font-size: 16px;
    opacity: 0.9;
    line-height: 132%
}

.text-dark-64 {
    color: rgba(100, 100, 100, var(--tw-text-opacity));
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
</style>