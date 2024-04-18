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
    <div class="section-container wsm:flex-col gap-x-10 relative items-center">

        <div class="grid grid-cols-3 gap-x-8 gap-y-10 items-stretch  w-full wsm:flex flex-col">
            <UserReviewCard
                :review="review"
                :name="name" :imagePath="imagePath" />
            <UserReviewCard
                :review="review"
                :name="name" :imagePath="imagePath" />
            <UserReviewCard
                :review="review"
                :name="name" :imagePath="imagePath" />
        </div>
        
    </div>
</template>
