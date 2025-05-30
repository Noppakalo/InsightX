<template>
    <HomeHero />
    <HomeContent />
    <HomeSwiper />
</template>

<script>
import HomeHero from '/src/components/homepages/HomeHero.vue'
import HomeContent from '/src/components/homepages/HomeContent.vue'
import HomeSwiper from '/src/components/homepages/HomeSwiper.vue'

export default {
    name: 'Home',
    components: {
        HomeHero,
        HomeContent,
        HomeSwiper,
    },
}
</script>
