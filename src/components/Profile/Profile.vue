<template>
    <section class="profile-home bg-neutral-800	">
        <div class="container profile-home__container">
            <div class="flex items-center justify-between pt-20">
                <h3
                    class="z-10 2xl:!text-3xl xl:!text-lg lg:!text-lg md:!text-[44px] text-white !font-[inter-medium] uppercase  2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">
                    {{ langtext[$route.params.lan].homePage.Profile }}
                </h3>
                <router-link class="text-gray-500 text-base 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
                    to="/project">
                    {{ langtext[$route.params.lan].homePage.All }}
                </router-link>
            </div>
            <div
                class="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-[350px] w-[350px]  2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">
                <div v-for="profileData in profile" :key="profileData.id" class="profile-home__box mt-5">
                    <router-link class="w-[176px] h-[320px] profile-link"
                        :to="`/${$route.params.lan}/top/${profileData.slug}`">
                        <img class="!w-[185px] h-[264px] object-cover 2xl:border-transparent xl:border-transparent lg:border-transparent md:border-transparent border-solid border sm:border-[#FEC775] border-[#FEC775]  rounded-md profile-link__img"
                            :src="profileData.image" alt="">
                        <h3
                            class="text-white text-sm font-[inter-medium] text-sm sm:text-base tracking-[0.01rem] line-clamp-2 !leading-[18px] !sm:leading-[20px] mt-5">
                            {{ profileData.title.substring(0, 41) }}...</h3>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { RouterLink } from "vue-router";
import { Lang } from "../Lang/Lang"

export default {
    props: {
        profile: {
            type: Array,
            required: true,
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
.profile-link {
    transition: all 0.4s;
}


.profile-link__img {
    /* border: 1px solid transparent !important; */
    transition: all 0.4s
}

.profile-link:hover .profile-link__img {
    transition: all 0.4s;
    border: 1px solid #FEC775 !important;
    opacity: 0.6;
}
</style>