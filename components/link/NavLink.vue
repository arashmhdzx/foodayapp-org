<template>
    <NuxtLink class="navlink" :to="linkTo">{{ title }}</NuxtLink>
</template>

<script  setup lang="ts">
    const {title ,linkTo} = defineProps({
    title: { type: String, required: true },
    linkTo: { type: String, required: true },
    })
</script>
