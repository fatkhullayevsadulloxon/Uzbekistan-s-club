<template>
    <footer class="footer mt-[350px] bg-[#1b1b1b]">
        <div class="container footer__container">
            <div class="footer__box" v-if="langtext[$route.params.lan] != undefined">
                <RouterLink to="/">
                    <img class="m-auto pt-10 pb-10 w-[135px] " src="../../assets/images/logo.svg" alt="">
                </RouterLink>
                <nav class="">
                    <ul class="footer__list 2xl:flex xl:flex lg:flex md:block sm:block block justify-center">
                        <li class="footer__item text-center">
                            <RouterLink
                                class="footer__link text-neutral-600 transition ease-in-out delay-50 hover:text-[#FEC775] font-[inter-medium] uppercase"
                                :to="`${$route.params.lan}/become-a-resident`">
                                {{ langtext[$route.params.lan].homePage.becomeAResident }}
                            </RouterLink>
                        </li>
                        <li class="footer__item text-center 2xl:ms-8 xl:ms-8 lg:ms-8 ms-0">
                            <RouterLink
                                class="footer__link text-neutral-600 transition ease-in-out delay-50 hover:text-[#FEC775] font-[inter-medium] uppercase"
                                :to="`${$route.params.lan}/privacy-policy`">
                                {{ langtext[$route.params.lan].homePage.privacy }}
                            </RouterLink>
                        </li>
                        <li class="footer__item text-center 2xl:ms-8 xl:ms-8 lg:ms-8 ms-0">
                            <RouterLink
                                class="footer__link text-neutral-600 transition ease-in-out delay-50 hover:text-[#FEC775] font-[inter-medium] uppercase"
                                :to="`${$route.params.lan}/faq`">
                                {{ langtext[$route.params.lan].homePage.FAQ }}
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
                <div
                    class="footer-desc__block md:max-w-[700px] lg:max-w-[987px] mx-auto mt-8 2xl:block xl:block lg:block hidden">
                    <p class="font-[inter-bold] text-neutral-600 text-center " v-if="$route.params.lan === 'uz'">{{
                        footer.content_uz }}</p>
                    <p class="font-[inter-bold] text-neutral-600 text-center " v-if="$route.params.lan === 'en'">{{
                        footer.content_en }}</p>
                </div>
                <div class="footer__network flex items-center justify-center mt-10">
                    <a target="_blank" class="ms-5" :href="footer.facebook">
                        <img class="footer__network-img" src="../../assets/images/facebook.svg" alt="">
                    </a>
                    <a target="_blank" class="ms-5" :href="footer.youtube">
                        <img class="footer__network-img" src="../../assets/images/youtube.svg" alt="">
                    </a>
                    <a target="_blank" class="ms-5" :href="footer.instagram">
                        <img class="footer__network-img" src="../../assets/images/insta.svg" alt="">
                    </a>
                    <a target="_blank" class="ms-5" :href="footer.telegram">
                        <img class="footer__network-img" src="../../assets/images/telegram.svg" alt="">
                    </a>
                </div>
                <hr class="opacity-25 pb-10 mt-7">
                <div
                    class="footer__bottom 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden items-center justify-between pb-3">
                    <p class="text-neutral-600 font-[inter-medium]"> {{
                        langtext[$route.params.lan].homePage.footerBottomDesc }}
                    </p>
                    <div class="uic-logo ">
                        <span class="text-neutral-600 font-[inter-bold] flex items-center cursor-pointer">
                            {{ langtext[$route.params.lan].homePage.Developed }}
                            <a href="https://uic.group/" class="flex">
                                <img class="uic-logo" src="../../assets/images/uicSymbol.svg" alt="">
                                <img class="uic-logo__hidden" src="../../assets/images/uicText.svg" alt="">
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import { RouterLink } from 'vue-router';
import { Lang } from '../Lang/Lang';

export default {
    components: { RouterLink },
    props: {
        footer: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            langtext: Lang
        }
    },
}
</script>
<style scoped>
.footer__link {
    transition: all 0.4s !important
}

.footer__link:hover {
    transition: all 0.4s !important
}

.footer__network-img {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.4s;
}

.footer__network-img:hover {
    filter: none;
    -webkit-filter: grayscale(0);
    transition: all 0.4s;
}

.uic-logo__hidden {
    z-index: -1;
    margin-left: 50px;
    position: absolute;
}

.uic-logo:hover .uic-logo__hidden {
    margin-left: 50px;
    transition: all 0.4s;
    z-index: 1 !important;
}
</style>