<template>
    <Navbar />
    <main>
        <router-view />
    </main>
</template>

<script>
import Navbar from './components/layouts/Navbar.vue'

export default {
    name: 'App',
    components: {
        Navbar,
    },
}
</script>
