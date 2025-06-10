<template>
    <section class="relative w-full h-[600px] mb-12">
        <div class="absolute w-full h-full">
            <img
                src="/content/wireframe.webp"
                class="object-cover w-full h-full"
                alt=""
                loading="lazy"
                type="image/webp"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-secondary to-black opacity-80 z-10 pointer-events-none"
            ></div>
        </div>
        <div
            class="absolute inset-0 flex items-center text-white justify-center z-20 max-w-7xl px-4 m-auto gap-12"
        >
            <div class="w-2/5 text-white">
                <h2 class="text-4xl font-bold mb-2">
                    {{ $t('home_why.why_title') }}
                </h2>
                <h3 class="text-2xl font-semibold mb-4">
                    One Agency, Infinite Solutions
                </h3>
                <p>
                    {{ $t('home_why.why_detail') }}
                </p>
            </div>
            <div class="w-3/5">
                <swiper
                    :slidesPerView="3"
                    :spaceBetween="20"
                    :pagination="{
                        clickable: true,
                    }"
                    :modules="modules"
                    class="swiper-why w-full h-[380px]"
                >
                    <swiper-slide
                        v-for="(service, index) in service"
                        :key="index"
                        class="w-full h-full overflow-hidden shadow-lg shadow-primary rounded-3xl bg-white text-black flex flex-col text-center p-4"
                    >
                        <div class="flex justify-center mb-4">
                            <img
                                class="w-16 h-16 object-contain"
                                type="image/svg+xml"
                                loading="lazy"
                                :src="service.image"
                                :alt="service.name"
                            />
                        </div>
                        <h4 class="text-base font-semibold mb-4">
                            {{ service.name }}
                        </h4>
                        <p class="text-sm">{{ service.detail }}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import { Keyboard } from 'swiper/modules'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const { t } = useI18n()
        const service = ref([
            {
                name: t('home_why.why_code_title'),
                image: '/icon/code.svg',
                detail: t('home_why.why_code_detail'),
            },
            {
                name: t('home_why.why_seo_title'),
                image: '/icon/seo.svg',
                detail: t('home_why.why_seo_detail'),
            },
            {
                name: t('home_why.why_sem_title'),
                image: '/icon/sem.svg',
                detail: t('home_why.why_sem_detail'),
            },
        ])
        return {
            modules: [Keyboard],
            service,
        }
    },
}
</script>

<style>
.swiper-why {
    padding: 20px 0px;
}
</style>
