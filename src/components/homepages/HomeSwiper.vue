<template>
    <section>
        <swiper
            :slidesPerView="4"
            :spaceBetween="20"
            :grabCursor="true"
            :navigation="true"
            :keyboard="{
                enabled: true,
            }"
            :pagination="{
                clickable: true,
            }"
            :breakpoints="{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }"
            :modules="modules"
            class="mySwiper max-w-7xl"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide
            ><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide
            ><swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Keyboard, Navigation, Pagination } from 'swiper/modules'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Keyboard, Pagination, Navigation],
        }
    },
}
</script>
<style>
.swiper {
    width: 100%;
    height: auto;
    padding: 0 16px;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
