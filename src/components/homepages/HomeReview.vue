<template>
    <section>
        <div class="px-4 py-12 max-w-7xl m-auto gap-12 text-center">
            <h2
                class="inline-block h-12 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
                {{ $t('home_review.review_title') }}
            </h2>
            <swiper
                :slidesPerView="4"
                :spaceBetween="30"
                :grabCursor="true"
                :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    navigationDisabledClass: 'swiper-button-disabled',
                }"
                :keyboard="{
                    enabled: true,
                }"
                :pagination="{
                    clickable: true,
                    el: '.swiper-pagination',
                }"
                :breakpoints="{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }"
                :modules="modules"
                class="swiper-review size-full"
            >
                <swiper-slide
                    v-for="(employee, index) in employees"
                    :key="index"
                    class="flex-col shadow-md rounded-3xl group hover:shadow-xl"
                >
                    <div
                        class="w-full h-48 overflow-hidden rounded-t-3xl relative"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 z-10 transition-opacity duration-300 group-hover:opacity-0"
                        ></div>
                        <div
                            class="absolute inset-0 z-20 flex items-center justify-center p-5 transition-opacity duration-300 group-hover:opacity-0"
                        >
                            <img
                                src="/logo/insightX-logo-white.svg"
                                class="w-35 h-auto"
                                type="image/svg+xml"
                                loading="lazy"
                                alt="logo-insightX"
                            />
                        </div>
                        <img
                            class="w-full h-full object-top object-cover transition-transform duration-500 group-hover:scale-110"
                            type="image/png"
                            loading="lazy"
                            :src="employee.image"
                            :alt="employee.name"
                        />
                    </div>
                    <div
                        class="w-full h-60 bg-white rounded-b-3xl p-4 text-left"
                    >
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="font-semibold text-xl mb-1">
                                    {{ employee.name }}
                                </p>
                                <p class="font-normal text-xs">
                                    ({{ employee.position }})
                                </p>
                            </div>
                            <div class="flex">
                                <svg
                                    v-for="i in employee.rating"
                                    :key="'filled-' + i"
                                    class="w-3.5 h-3.5 text-yellow-400 mx-0.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                    />
                                </svg>
                                <svg
                                    v-for="i in 5 - employee.rating"
                                    :key="'empty-' + i"
                                    class="w-3.5 h-3.5 text-gray/20 mx-0.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p
                            class="text-black/80 text-xs font-medium text-center rounded-lg my-4 px-5 py-2.5 bg-gray-200/20"
                        >
                            {{ employee.service }}
                        </p>
                        <p class="text-xs/6 text-center">
                            {{ employee.detail }}
                        </p>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const { t } = useI18n()
        const employees = ref([
            {
                name: t('home_review.review_name_ae'),
                image: '/employee/00035-4188717672.png',
                rating: 5,
                position: t('home_review.review_position_ae'),
                service: t('home_review.review_service_ae'),
                detail: t('home_review.review_detail_ae'),
            },
            {
                name: t('home_review.review_name_be'),
                image: '/employee/00029-19014729112.png',
                rating: 5,
                position: t('home_review.review_position_be'),
                service: t('home_review.review_service_be'),
                detail: t('home_review.review_detail_be'),
            },
            {
                name: t('home_review.review_name_sea'),
                image: '/employee/00023-3473531014.png',
                rating: 5,
                position: t('home_review.review_position_sea'),
                service: t('home_review.review_service_sea'),
                detail: t('home_review.review_detail_sea'),
            },
            {
                name: t('home_review.review_name_dee'),
                image: '/employee/00020-65307375.png',
                rating: 5,
                position: t('home_review.review_position_dee'),
                service: t('home_review.review_service_dee'),
                detail: t('home_review.review_detail_dee'),
            },
            {
                name: t('home_review.review_name_e'),
                image: '/employee/00011-4015492656.png',
                rating: 5,
                position: t('home_review.review_position_e'),
                service: t('home_review.review_service_e'),
                detail: t('home_review.review_detail_e'),
            },
            {
                name: t('home_review.review_name_f'),
                image: '/employee/00007-3381275771.png',
                rating: 5,
                position: t('home_review.review_position_f'),
                service: t('home_review.review_service_f'),
                detail: t('home_review.review_detail_f'),
            },
        ])
        return {
            modules: [Keyboard, Pagination, Navigation],
            employees,
        }
    },
}
</script>

<style>
.swiper-review {
    padding: 40px 10px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    content: none;
}

.swiper-button-next {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23FFFFFF' d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'/%3E%3C/svg%3E");
}

.swiper-button-prev {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23FFFFFF' d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/%3E%3C/svg%3E");
}

.swiper-button-prev,
.swiper-button-next {
    width: 2.75rem;
    height: 2.75rem;
    background-color: var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 0.875rem;
    background-repeat: no-repeat;
    background-position: center;
}

.swiper-button-next:active,
.swiper-button-prev:active {
    transform: scale(0.9);
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    background-color: var(--color-secondary);
}

.swiper-pagination-bullet {
    background-color: var(--color-primary);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.5);
}

.swiper-pagination-bullet-active {
    width: 0.625rem;
    height: 0.625rem;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
}

.swiper-button-disabled {
    cursor: not-allowed !important;
    pointer-events: auto !important;
}
</style>
