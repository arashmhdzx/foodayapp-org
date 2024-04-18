<script lang="ts">
import SectionIntro from '../../text/sectionIntro.vue';
import DownloadButton from '../../button/download.vue';

export default defineComponent({
    name: "Hero",
    components: {
        SectionIntro,
        DownloadButton
    },
});
</script>


<template>
    <div class="hero section-container">
        <div class="flex flex-col z-10 relative wsm:mt-5 w-full wsm:items-center">
            <h1 class="hero-title">
                دانلود اپلیکیشن فودی
            </h1>
            <p class="text-[26px] text-secondary wsm:text-sm wsm:text-center">
                فردا ناهار چی میخوای بپزی؟ <br>
                اگر جواب دادن به این سوال گاهی اوقات برات خیلی سخت میشه حتما فودی رو دانلود کن
            </p>
            <div class="flex">
                <DownloadButton />
            </div>
        </div>
        <div class="hero-image w-full wsm:hidden">
            <img src="/public/assets/images/hero-mobiles.png" class="w-[400px] wsm:w-[350px]" alt="">
        </div>
    </div>

</template>
