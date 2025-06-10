<template>
    <HomeHero />
    <HomeContent />
    <HomeReview />
    <HomeWhy />
    <HomeForm />
</template>

<script>
import HomeHero from '/src/components/homepages/HomeHero.vue'
import HomeContent from '/src/components/homepages/HomeContent.vue'
import HomeReview from '/src/components/homepages/HomeReview.vue'
import HomeWhy from '/src/components/homepages/HomeWhy.vue'
import HomeForm from '/src/components/homepages/HomeForm.vue'

export default {
    name: 'Home',
    components: {
        HomeHero,
        HomeContent,
        HomeReview,
        HomeWhy,
        HomeForm,
    },
}
</script>
