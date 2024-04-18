<script lang="ts">

import SectionIntro from '../../text/sectionIntro.vue';
import UserReviewCard from '../../card/userReviewCard.vue';

export default defineComponent({
    name: "Comments",
    components: {
        SectionIntro,
        UserReviewCard
    },
    data() {
        return {
            review: "همیشه وقتی وسایل تو یخچالم داره خراب میشه به این فکر میکنم که کاش میتونستم یه چیزی با همین وسایل درست کنم که هم مواد غذایی خراب نشه و هم غذای خونگی بخورم. ولی پیدا کردن ایده همیشه کار سختی بود. برای همین فودی رو درست کردم تا نه تنها مشکل خودمو حل کنم، بلکه به بقیه آدمایی که هر روز سوال چی بپزم رو از خودشون یا اطرافیانشون می‌پرسن هم کمک کنم ❤️",
            name: 'فاطمه',
            imagePath: '/assets/images/user.jpg'
            // 
        }
    }

});
</script>



<template>
    <div class="section-container flex-col bg-[#1D2026]  mt-24 text-[#8E9493] pt-14 pb-6">
        <div class="flex wsm:flex-col items-center justify-between py-10">
            <div>
                LOGO
            </div>
            <div class="flex wsm:flex-col wxl:w-3/4 items-center justify-between">
                <h4 class="text-lg font-medium wsm:my-4 text-white">جدیدترین اخبار ما را از دست ندهید</h4>
                <form class="flex bg-[#414449] p-1 rounded-full w-1/3 text-lg wsm:w-full">
                    <input type="email" placeholder="ایمیل شما"
                        class="p-2 bg-transparent w-full outline-none focus:ltr ">
                    <button type="submit"
                        class="bg-[#6DCD7F] px-5 py-3 text-white font-medium rounded-full">عضویت</button>
                </form>
            </div>
        </div>
        <div class="flex wsm:flex-wrap wsm:gap-3 justify-between w-full">

            <div class="flex flex-col">
                <p>
                    به اپلیکیشن فودی بپیوندید <br>
                    فردا برای ناهار چه غذایی دوست دارید بپزید؟ <br>
                    اگر پاسخ به این سوال برای شما گاهی دشوار می‌شود،<br> حتماً اپلیکیشن فودی را دانلود کنید.
                </p>
            </div>
            <div class="flex wsm:gap-x-5 justify-between w-1/3 wsm:w-3/4">
                <ul class="flex flex-col text-white  gap-y-4 ">
                    <li class="font-bold">اطلاعات</li>
                    <li>درباره ما</li>
                    <li>ارتباط با ما</li>
                    <li> سیاست های حریم خصوصی</li>
                    <li>سوالات متداول</li>
                    <li>دانلود</li>
                </ul>
                <ul class="flex flex-col text-white  gap-y-4 ">
                    <li class="font-bold">پشتیبانی</li>
                    <li>ارسال درخواست</li>
                    <li>بخش کمک رسانی</li>
                    <li>تماس با ما</li>
                </ul>
                <ul class="flex flex-col text-white  gap-y-4 ">
                    <li>توئیتر</li>
                    <li>اینستاگرام</li>
                    <li>تلگرام</li>
                </ul>
            </div>
            <div class="flex flex-col wsm:justify-center wsm:items-center wsm:w-full">
                <p class="text-lg font-medium text-white">دفتر ما</p>
                <p>لاهیجان | ایران</p>
                <p><a href="tel:09390675600">09390675600</a></p>
            </div>
        </div>
        <div class="flex justify-center mt-10">
            <p>All Rights Reserved 2021 - FoodayApp</p>
        </div>
    </div>
</template>
