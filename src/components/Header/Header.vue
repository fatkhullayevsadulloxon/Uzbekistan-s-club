<template >
    <header class="header p-5 ">
        <div class="container header__container 2xl:flex xl:flex lg:flex md:block items-center justify-between">
            <div class="header__left  2xl:flex xl:flex lg:flex md:block sm:block block items-center">
                <!-- RESPONSIEV NAVBAR -->
                <div class="">
                    <div class="flex items-center">
                        <button @click="() => { menuOpen = !menuOpen }" class="hidden nav-hamburger">
                            <i class="fa-solid fa-bars fa-2x" v-if="menuOpen === false" style="color: #ffffff;"></i>
                            <i class="fa-solid fa-close fa-2x" v-if="menuOpen
                                === true" style="color: #ffffff;"></i>
                        </button>
                        <router-link to="/">
                            <img class="img-logo 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-[500px] sm:ms-[450px] ms-[195px]"
                                src="../../assets/images/logo.svg" alt="">
                        </router-link>
                    </div>
                    <nav :class="menuOpen ? 'block' : 'hidden'" class="sitenav-hamburger bg-white">
                        <ul v-if="langtext[$route.params.lan] != undefined" class="sitenav-list md:block ms-3">
                            <li class="sitenav-item ms-10">
                                <router-link class="sitenav-link text-white uppercase text-lg"
                                    :to="`/${$route.params.lan}/about-us`">
                                    {{ langtext[$route.params.lan].homePage.HeaderNavAbout }}
                                </router-link>
                                <hr class="opacity-50 mt-3 mb-3">
                            </li>
                            <li class="sitenav-item ms-10">
                                <router-link class="sitenav-link text-white uppercase text-lg"
                                    :to="`/${$route.params.lan}/projects`">
                                    {{ langtext[$route.params.lan].homePage.HeaderNavProject }}
                                </router-link>
                                <hr class="opacity-50 mt-3 mb-3">

                            </li>
                            <li class="sitenav-item ms-10">
                                <router-link class="sitenav-link text-white uppercase text-lg"
                                    :to="`/${$route.params.lan}/master-residents`">
                                    {{ langtext[$route.params.lan].homePage.HeaderNavMasterResident }}
                                </router-link>
                                <hr class="opacity-50 mt-3 mb-3">

                            </li>
                            <li class="sitenav-item ms-10">
                                <router-link class="sitenav-link text-white uppercase text-lg"
                                    :to="`/${$route.params.lan}/residents`">
                                    {{ langtext[$route.params.lan].homePage.HeaderNavResident }}
                                </router-link>
                                <hr class="opacity-50 mt-3 mb-3">

                            </li>
                            <li class="sitenav-item ms-10">
                                <router-link class="sitenav-link text-white uppercase text-lg"
                                    :to="`/${$route.params.lan}/media-residents`">
                                    {{ langtext[$route.params.lan].homePage.HeaderNavMediaResident }}
                                </router-link>
                                <hr class="opacity-50 mt-3 mb-3">

                            </li>
                        </ul>
                        <div class="navbar-right relative 2xl:hidden xl:hidden lg:hidden md:block sm:block block">
                            <button
                                class="header__btn-language relative z-10 block m-2 overflow-hidden focus:outline-none text-sm leading-loose align-middle px-6 py-2 rounded-full cursor-pointer text-sm bg-zinc-800 uppercase text-white"
                                @click="isOpen = !isOpen">
                                <i class="fa-solid fa-globe" style="color: #ffffff;"></i>
                                <span class="ms-2 transition ease-in-out delay-50">O'zbekcha </span>
                            </button>
                            <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
                                class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
                            <div v-if="isOpen"
                                class="absolute top-auto right-0 w-48 py-2 mt-2 rounded-xl border-gray-900 bg-white shadow-xl text-sm bg-zinc-800 uppercase text-white">
                                <a href="/uz"
                                    class="text-sm text-white hover:bg-blue-600 hover:bg-zinc-700 block px-4 py-2 cursor-pointer">
                                    O'zbekcha</a>
                                <a href="/en"
                                    class="text-sm text-white hover:bg-blue-600 hover:bg-zinc-700 block px-4 py-2 cursor-pointer">English</a>
                            </div>
                        </div>
                    </nav>

                </div>

                <!-- RESPONSIVE END -->

                <nav class="sitenav">
                    <ul v-if="langtext[$route.params.lan] != undefined"
                        class="sitenav-list 2xl:flex xl:flex lg:flex md:hidden ms-3">
                        <li class="sitenav-item ms-10">
                            <router-link class="sitenav-link text-white uppercase text-sm"
                                :to="`/${$route.params.lan}/about-us`">
                                {{ langtext[$route.params.lan].homePage.HeaderNavAbout }}
                            </router-link>
                        </li>
                        <li class="sitenav-item ms-10">
                            <router-link class="sitenav-link text-white uppercase text-sm"
                                :to="`/${$route.params.lan}/projects`">
                                {{ langtext[$route.params.lan].homePage.HeaderNavProject }}
                            </router-link>
                        </li>
                        <li class="sitenav-item ms-10">
                            <router-link class="sitenav-link text-white uppercase text-sm"
                                :to="`/${$route.params.lan}/master-residents`">
                                {{ langtext[$route.params.lan].homePage.HeaderNavMasterResident }}
                            </router-link>
                        </li>
                        <li class="sitenav-item ms-10">
                            <router-link class="sitenav-link text-white uppercase text-sm"
                                :to="`/${$route.params.lan}/residents`">
                                {{ langtext[$route.params.lan].homePage.HeaderNavResident }}
                            </router-link>
                        </li>
                        <li class="sitenav-item ms-10">
                            <router-link class="sitenav-link text-white uppercase text-sm"
                                :to="`/${$route.params.lan}/media-residents`">
                                {{ langtext[$route.params.lan].homePage.HeaderNavMediaResident }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="navbar-right relative 2xl:block xl:block lg:block md:hidden sm:hidden hidden">
                <button
                    class="header__btn-language relative z-10 block m-2 overflow-hidden focus:outline-none text-sm leading-loose align-middle px-6 py-2 rounded-full cursor-pointer text-sm bg-zinc-800 uppercase text-white"
                    @click="isOpen = !isOpen">
                    <i class="fa-solid fa-globe" style="color: #ffffff;"></i>
                    <span class="ms-2 transition ease-in-out delay-50">O'zbekcha </span>
                </button>
                <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
                    class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
                <div v-if="isOpen"
                    class="absolute top-auto right-0 w-48 py-2 mt-2 rounded-xl border-gray-900 bg-white shadow-xl text-sm bg-zinc-800 uppercase text-white">
                    <a href="/uz"
                        class="text-sm text-white hover:bg-blue-600 hover:bg-zinc-700 block px-4 py-2 cursor-pointer">
                        O'zbekcha</a>
                    <a href="/en"
                        class="text-sm text-white hover:bg-blue-600 hover:bg-zinc-700 block px-4 py-2 cursor-pointer">English</a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { Lang } from '../Lang/Lang';

import { RouterLink } from "vue-router"
export default {
    data() {
        setTimeout(() => {
            console.log(this.$route.params);
        }, 1000)
        return {
            isOpen: false,
            menuOpen: false,
            langtext: Lang,
        }
    },

}
</script>
<style scoped>
.header {
    background-color: #171717;
    z-index: 15;
    position: fixed;
    top: 0;
    width: 100vw !important;
}

.sitenav-link {
    font-family: "inter-medium";
    transition: all 0.4s
}


.sitenav-link:hover {
    color: #fec775 !important;
    transition: all 0.4s
}

.sitenav-list {
    transition: all 0.4s !important
}

.sitenav-list:hover>>>a {
    color: gray;
    transition: all 0.4s
}

.header__btn-language:hover>>>span {
    color: #fec775 !important;
    transition: all 0.4s
}

.router-link-active {
    color: #fec775 !important
}

@media only screen and (max-width: 1020px) {

    .nav-hamburger {
        display: block
    }

    .sitenav {
        display: none !important;
    }

    .sitenav-hamburger {
        background-color: #131313 !important;
        margin-left: -50px;
    }

    .sitenav-link {
        color: gray;
    }

    .sitenav-list {
        margin-top: 30px;
    }
}
</style>