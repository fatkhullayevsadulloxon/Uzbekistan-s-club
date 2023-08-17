<template>
    <section class="partners bg-[#181818]">
        <div class="container partners__container">
            <div class="pt-8">
                <h3
                    class="z-10 2xl:!text-3xl xl:!text-lg lg:!text-lg md:!text-[44px] text-white !font-[Stroma] uppercase 2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6">
                    {{ langtext[$route.params.lan].homePage.partners }}
                </h3>
            </div>
            <div
                class="partners__box grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 2xl:m-0 xl:m-0 lg:m-0 md:m-0 sm:m-5 ms-6 !pb-[40px]">
                <a :href="partnersData.link" v-for="partnersData in partners" :key="partnersData.id"
                    class="partners__list rounded-lg bg-[#131313] 2xl:w-[276px] xl:w-[276px] lg:w-[276px] md:w-[276px] sm:w-[360px] w-[360px] h-[103px] mt-5">
                    <img class="w-[full] h-[40px] object-cover m-auto mt-8 partners__img" :src="partnersData.logo" alt="">
                </a>
            </div>
        </div>
    </section>
</template>
<script>

import { Lang } from "../Lang/Lang"


export default {
    props: {
        partners: {
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
.partners__img {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.4s;
}

.partners__list {
    border: 1px solid transparent;
    transition: all 0.4s
}

.partners__list:hover {
    border: 1px solid #FEC775;
    transition: all 0.4s
}

.partners__list:hover .partners__img {
    filter: none;
    -webkit-filter: grayscale(0);
    transition: all 0.4s
}
</style>