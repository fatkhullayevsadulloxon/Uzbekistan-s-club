<template>
    <section class="become-resident">
        <div class="container become-resident__container">
            <div class="text-center absolute z-10 mt-[120px] 2xl:ms-[500px] xl:ms-[500px] lg:ms-[500px] md:ms-[500px] sm:ms-[200px] ms-[100px]">
                <p class="!font-[Stroma] text-white font-medium text-xl uppercase text-center mb-5">Rezident bo'lish</p>
                <router-link class="resident__btn text-black rounded-md !font-[inter-medium]" :to="`/${$route.params.lan}/become-a-resident`">
                    Topshirish
                </router-link>
            </div>
            <img class="2xl:w-[1208px] xl:w-[1208px] lg:w-[1208px] md:w-[800px] sm:w-[500px] w-[416px] h-[238px] rounded-2xl absolute mt-10 become-resident__img object-cover"
                src="https://uzbekistans.club/_nuxt/img/residents.83d95c9.png" alt="">
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink }
}
</script>
<style scoped>
.resident__btn {
    transition: .5s;
    background: linear-gradient(90deg, #f6d365, #fda085 51%, #f6d365) 0/200%;
    background: linear-gradient(90deg, var(--c1, #f6d365), var(--c2, #fda085) 51%, var(--c1, #f6d365)) var(--x, 0)/200%;
    padding: 14px 40px !important;
}

.resident__btn:hover {
    transition: all 0.4s;
    box-shadow: 0px 0px 11px 0px rgba(246, 211, 101, 0.75);
    -webkit-box-shadow: 0px 0px 11px 0px rgba(246, 211, 101, 0.75);
    -moz-box-shadow: 0px 0px 11px 0px rgba(246, 211, 101, 0.75);
    color: white !important
}

.become-resident__img{
    border: 1px solid #FEC775;
}
</style>