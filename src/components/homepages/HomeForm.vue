<template>
    <section>
        <div class="flex px-4 max-w-7xl m-auto gap-12 text-center mb-12">
            <div class="w-1/3">
                <img
                    src="/content/insightX-contact.webp"
                    alt=""
                    type="image/webp"
                    class="rounded-3xl"
                />
            </div>
            <form class="w-2/3 text-left">
                <h2
                    class="inline-block text-4xl font-bold mb-2 py-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
                >
                    ให้เราติดต่อคุณ
                </h2>
                <p class="mb-6">
                    เพียงกรอกแบบฟอร์มด้านล่าง
                    แล้วทีมงานของเราจะติดต่อคุณกลับโดยเร็วที่สุด!
                </p>
                <div class="mb-4 relative">
                    <input
                        type="text"
                        id="fullname"
                        class="w-full px-4 py-3 border border-gray bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="fullname"
                        class="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary left-4"
                    >
                        ชื่อ-สกุล<span class="text-primary">*</span>
                    </label>
                </div>
                <div class="flex gap-4 mb-4">
                    <div class="mb-4 w-1/2 relative">
                        <input
                            type="text"
                            id="fullname"
                            class="w-full px-4 py-3 border border-gray bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="fullname"
                            class="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary left-4"
                        >
                            อีเมล์<span class="text-primary">*</span>
                        </label>
                    </div>
                    <div class="mb-4 w-1/2 relative">
                        <input
                            type="text"
                            id="fullname"
                            class="w-full px-4 py-3 border border-gray bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="fullname"
                            class="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary left-4"
                        >
                            เบอร์โทรติดต่อ<span class="text-primary">*</span>
                        </label>
                    </div>
                </div>
                <h3 class="text-2xl font-semibold mb-4">
                    บริการที่คุณสนใจ
                    <span class="text-xs font-normal"
                        >(เลือกได้มากกว่า 1 ข้อ)</span
                    >
                </h3>
                <div class="flex">
                    <div class="inline-flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="seo service"
                            value="seo"
                            id="checkboxSeo"
                            class="w-5 h-5 border border-gray bg-white rounded-sm appearance-none forced-colors:appearance-auto checked:bg-primary checked:border-0 relative"
                        />
                        <label for="checkboxSeo">บริการ SEO</label>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script></script>

<style></style>
