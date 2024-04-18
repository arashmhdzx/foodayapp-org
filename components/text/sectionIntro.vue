<template>
    <div class="flex items-center text-[#ff9123] wsm:text-xs">
        <p>{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
}
const { title }:Props = defineProps({
    title: { type: String, required: true },
})
</script>