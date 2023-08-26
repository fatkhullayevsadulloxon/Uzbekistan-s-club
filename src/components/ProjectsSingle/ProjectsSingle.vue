<template>
    <section class="project-single">
        <div class="container project-single__container">
            <nav class="text-black 2xl:ms-0 xl:ms-0 lg:ms-0 md:ms-5 ms-5 my-8" aria-label="Breadcrumb">
                <ol class="list-none p-0 inline-flex">
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" to="/">{{ langtext[$route.params.lan].about.Home
                        }}</RouterLink>
                        <img src="../../assets/images/arrow.svg" alt="">
                    </li>
                    <li class="flex items-center">
                        <RouterLink class="text-white font-[inter-medium]" :to="`/${$route.params.lan}/projects`">{{
                            langtext[$route.params.lan].homePage.Projects }}
                        </RouterLink>
                    </li>
                </ol>
            </nav>
        </div>
    </section>
</template>
<script>
import { Lang } from '../Lang/Lang';
export default {
    data() {
        return {
            langtext: Lang
        }
    },
}
</script>
<style scoped></style>