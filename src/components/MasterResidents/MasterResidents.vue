<template>
    <section class="master-residents bg-[url('https://uzbekistans.club/_nuxt/img/pattern.6a48bf5.png')] bg-no-repeat bg-[left_top_1rem]">
        <div class="container master-residents__container">
            <div class="flex items-center justify-between">
                <h3 class="z-10 !text-2xl md:!text-[44px] text-white  2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">SO‘NGGI EPIZODLAR</h3>
                <router-link class="text-gray-500 text-base 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
                    to="/project">
                    Barchasi
                </router-link>
            </div>

            <div
                class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4 mt-10  2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">
                <RouterLink :to="`${$route.params.lan}/master-residents/${picturesData.slug}`"
                    v-for="picturesData in pictures" :key="picturesData.id"
                    class="relative overflow-hidden cursor-pointer rounded-lg overflow-hidden border border-solid border-transparent hover:border-mainYellow transition-300 col-span-1 mt-3 master-residents__link 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-[350px] w-[350px]">
                    <div
                        v-if="picturesData.slug != 'shahlo-halilova' && picturesData.slug != 'dilshod-umirov' && picturesData.slug != 'rustam-murzaxanovs'">
                        <img class="max-w-full rounded-lg picture object-cover object-center 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-[500px] w-[350px] h-[400px] aspect-video"
                            :src="picturesData.picture" alt="">
                    </div>
                </RouterLink>
            </div>

        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        pictures: {
            type: Array,
            required: true,
        }
    },
    components: { RouterLink }
}
</script>
<style scoped>
.master-residents__link {
    transition: all 0.4s;
    border: 1px solid transparent;
}

.master-residents__link:hover {
    transition: all 0.4s;
    border: 1px solid #FEC775;
    opacity: 0.6;
}</style>