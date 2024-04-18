<template>
    <div class="flex flex-col relative bg-white  text-[#021739] rounded-2xl px-5 pb-3">
        <div class=" rounded-full flex justify-center items-center bg-white h-[50px] w-[50px] absolute top-[-25px]">
            <font-awesome-icon class="text-main" :icon="['fas', 'quote-left']" />
        </div>
        <p class=" font pt-10 pb-1 wsm:text-sm">{{ review }}</p>
        <div class="flex justify-between items-center">
            <div class="flex flex-col">
                <p class="text-lg  font-semibold pt-4">{{ name }}</p>
                <p class="text-secondary">{{ name }}</p>
            </div>
            <img :src="imagePath" class=" rounded-full h-[50px] w-[50px]" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">

interface UserReviewCardProps {
    review: string;
    name: string;
    imagePath: string;
}

const { review, name, imagePath }: UserReviewCardProps = defineProps({
    review: { type: String, required: true },
    name: { type: String, required: true },
    imagePath: { type: String, required: true },
});
</script>