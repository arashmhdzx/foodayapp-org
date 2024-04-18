<template>
    <div class="flex flex-col section-container mb-10">
        <div class="flex justify-center mb-4">
            <h3 class="text-[#031837] font-bold wsm:text-3xl text-[55px] py-8 leading-[65px]">تصاویر برنامه</h3>
        </div>
        <Carousel :items-to-show="4" :breakpoints="breakpoints">
            <Slide v-for="slide in 7" :key="slide">
                <img src="/public/assets/images/hero-mobiles.png" />
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script>

// import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel-nuxt'

export default defineComponent({
    name: "AppShots",
    // components: {
    //     Carousel,
    //     Slide,
    //     Pagination,
    //     Navigation,
    // },
    data() {
        return {
            breakpoints: {
                250:{
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
                // 700px and up
                700: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
            },
        }
    }
});
</script>

<style>
.carousel__next,
.carousel__prev {
    background-color: #fff;
    box-shadow: 0 0 15px #000;
    border-radius: 1000px;
    padding: 24px;
}
.carousel__slide {
    padding: 15px;
  }  
</style>