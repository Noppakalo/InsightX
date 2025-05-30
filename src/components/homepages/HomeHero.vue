<template>
    <section
        class="relative h-screen max-h-screen w-full md:max-h-svh md:h-svh"
    >
        <div class="hero-media absolute inset-0">
            <video
                class="object-cover w-full h-full"
                src="/video/insightX-background.mp4"
                type="video/mp4"
                autoplay
                loop
                muted
                playsinline
                disablePictureInPicture
                preload="metadata"
                aria-hidden="true"
                loading="lazy"
            ></video>
            <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-secondary to-black opacity-80 z-10 pointer-events-none"
            ></div>
        </div>
        <div
            class="relative z-20 flex items-center max-w-5xl h-screen max-h-screen m-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
            :aria-label="$t('home_hero.digital_aria')"
        >
            <div class="text-center text-white w-full">
                <p class="text-5xl font-bold mb-4">
                    {{ $t('home_hero.digital_title') }}
                </p>
                <div
                    class="text-5xl flex flex-nowrap justify-center gap-2 mb-8"
                >
                    <p class="font-light pt-4">
                        {{ $t('home_hero.digital_titlesub') }}
                    </p>

                    <h1
                        class="font-bold bg-gradient-to-tl from-secondary via-primary to-blue text-transparent bg-clip-text pt-4 ml-0"
                        ref="typewriter"
                    >
                        <span class="cursor">|</span>
                    </h1>
                    <p class="font-light pt-4">
                        {{ $t('home_hero.digital_full') }}
                    </p>
                </div>
                <p class="text-base/8 mb-8">
                    {{ $t('home_hero.hero_contact_detail') }}
                </p>
                <div class="flex items-center justify-center gap-8">
                    <Router-link
                        to="/"
                        :aria-label="$t('home_hero.hero_contact_us_aria')"
                    >
                        <button
                            type="button"
                            class="text-white font-semibold rounded-lg text-sm px-10 py-2.5 bg-primary hover:bg-secondary transition-colors duration-300 cursor-pointer"
                        >
                            {{ $t('home_hero.hero_contact_us') }}
                        </button>
                    </Router-link>
                    <div class="flex items-center gap-2">
                        <div class="flex -space-x-2">
                            <img
                                class="inline-block size-9.5 rounded-full ring-2 ring-secondary/80"
                                src="/src/assets/employee/00035-4188717672.png"
                                type="image/png"
                                loading="lazy"
                                alt="Avatar"
                            />
                            <img
                                class="inline-block size-9.5 rounded-full ring-2 ring-secondary/80"
                                src="/src/assets/employee/00029-19014729112.png"
                                type="image/png"
                                loading="lazy"
                                alt="Avatar"
                            />
                            <img
                                class="inline-block size-9.5 rounded-full ring-2 ring-secondary/80"
                                src="/src/assets/employee/00007-3381275771.png"
                                type="image/png"
                                loading="lazy"
                                alt="Avatar"
                            />
                        </div>
                        <p>{{ $t('home_hero.hero_contact_customer') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            currentIndex: 0,
            typingInterval: null,
        }
    },
    mounted() {
        this.text = this.$t('home_hero.digital_agency')
        this.startTyping()
    },
    methods: {
        startTyping() {
            const typewriterElement = this.$refs.typewriter
            const cursorElement = typewriterElement.querySelector('.cursor')

            this.typingInterval = setInterval(() => {
                if (this.currentIndex < this.text.length) {
                    typewriterElement.insertBefore(
                        document.createTextNode(this.text[this.currentIndex]),
                        cursorElement
                    )
                    this.currentIndex++
                } else {
                    clearInterval(this.typingInterval)
                }
            }, 200)
        },
    },
}
</script>

<style>
.cursor {
    display: inline-block;
    margin-left: 2px;
    color: white;
    font-weight: 100;
    position: relative;
    top: -0.25rem;
    animation: blink 0.8s step-end infinite;
}

@keyframes blink {
    from,
    to {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>
