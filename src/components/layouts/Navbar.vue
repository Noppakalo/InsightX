<template>
    <header class="fixed top-0 left-0 w-full z-50 bg-transparent">
        <nav class="flex items-center justify-between p-4 max-w-7xl m-auto">
            <div>
                <Router-link to="/" :aria-label="$t('navbar.home_aria')"
                    ><img
                        src="/logo/insightX-logo-white.svg"
                        class="w-35 h-auto"
                        type="image/svg+xml"
                        loading="lazy"
                        :alt="$t('navbar.logo_alt')"
                /></Router-link>
            </div>
            <ul class="flex items-center justify-center gap-8 text-white">
                <li
                    class="relative"
                    v-on:mouseover="isOpen = true"
                    v-on:mouseleave="isOpen = false"
                >
                    <button
                        class="text-base font-medium inline-flex items-center gap-1 py-2 hover:text-primary transition-colors duration-300 cursor-pointer"
                        type="button"
                        :aria-label="$t('navbar.services_aria')"
                    >
                        {{ $t('navbar.services') }}
                        <span
                            ><svg
                                class="w-3 h-3"
                                :class="{
                                    'rotate-180 transition-transform duration-300':
                                        isOpen,
                                    'rotate-0': !isOpen,
                                }"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 9-7 7-7-7"
                                />
                            </svg>
                        </span>
                    </button>
                    <ul
                        v-if="isOpen"
                        class="absolute text-sm font-medium rounded-lg bg-transparent backdrop-blur-xl border border-white/30 w-30 py-2"
                    >
                        <li>
                            <Router-link
                                to="/"
                                class="block px-4 py-2 hover:bg-white/10 hover:text-primary transition-colors duration-300"
                                :aria-label="$t('navbar.seo_services_aria')"
                                >{{ $t('navbar.seo_services') }}</Router-link
                            >
                        </li>
                        <li>
                            <Router-link
                                to="/"
                                class="block px-4 py-2 hover:bg-white/10 hover:text-primary transition-colors duration-300"
                                :aria-label="$t('navbar.sem_services_aria')"
                                >{{ $t('navbar.sem_services') }}</Router-link
                            >
                        </li>
                        <li>
                            <Router-link
                                to="/"
                                class="block px-4 py-2 hover:bg-white/10 hover:text-primary transition-colors duration-300"
                                :aria-label="$t('navbar.website_services_aria')"
                                >{{
                                    $t('navbar.website_services')
                                }}</Router-link
                            >
                        </li>
                    </ul>
                </li>
                <li>
                    <Router-link
                        to="/"
                        class="text-base font-medium flex items-center gap-1 py-2 hover:text-primary transition-colors duration-300 cursor-pointer"
                        :aria-label="$t('navbar.contact_us_aria')"
                        >{{ $t('navbar.contact_us') }}</Router-link
                    >
                </li>
            </ul>
            <div class="flex">
                <Router-link
                    to="/"
                    :aria-label="$t('navbar.consultation_aria')"
                >
                    <button
                        type="button"
                        class="text-white font-semibold rounded-lg text-sm px-5 py-2.5 border border-white/30 hover:bg-primary hover:border-primary transition-colors duration-300 cursor-pointer"
                    >
                        {{ $t('navbar.consultation') }}
                    </button>
                </Router-link>
            </div>
        </nav>
    </header>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Navbar',
    setup() {
        const isOpen = ref(false)

        return {
            isOpen,
        }
    },
})
</script>
