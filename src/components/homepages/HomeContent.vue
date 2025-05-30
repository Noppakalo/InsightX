<template>
    <section>
        <div
            class="flex items-center justify-between px-4 py-12 max-w-7xl m-auto gap-12"
        >
            <div class="w-1/2">
                <img
                    src="/src/assets/content/insightX-mood.webp"
                    :alt="$t('home_content.content_alt')"
                    type="image/webp"
                    loading="lazy"
                    class="size-full object-cover rounded-3xl"
                />
            </div>
            <div class="w-1/2">
                <h2 class="text-4xl font-bold mb-2 text-primary">
                    {{ $t('home_content.content_title') }}
                </h2>
                <p class="text-2xl font-semibold mb-4">
                    {{ $t('home_content.content_subtitle') }}
                </p>
                <p class="text-base/8 mb-8">
                    {{ $t('home_content.content_description') }}
                </p>
                <Router-link
                    to="/"
                    :aria-label="$t('home_content_viewmore_aria')"
                >
                    <button
                        type="button"
                        class="text-white font-semibold rounded-lg text-sm px-5 py-2.5 bg-primary hover:bg-secondary transition-colors duration-300 cursor-pointer"
                    >
                        {{ $t('home_content.content_viewmore') }}
                    </button>
                </Router-link>
            </div>
        </div>
    </section>
</template>
