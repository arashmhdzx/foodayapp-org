<template>
    <div class="flex flex-col">
        <img :src="imagePath" class=" rounded-xl h-[250px]" alt="">
        <p class="text-lg font-semibold pt-3 pb-1">{{ title }}</p>
        <p class="text text-sm">{{ category }}</p>
    </div>
</template>

<script setup lang="ts">
interface AboutUsCardProps {
    title: string;
    category: string;
    imagePath: string;
}

const { title, category, imagePath }: AboutUsCardProps = defineProps({
    title: { type: String, required: true },
    category: { type: String, required: true },
    imagePath: { type: String, required: true },
});
</script>