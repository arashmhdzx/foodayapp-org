<template>
    <div class="flex rounded-full justify-center items-center bg-[#f7f7f9]">
        <i class=""></i>
    </div>
</template>

<script lang="ts">
import type { FeatuesTextContentType } from '~/server/types';

export default defineComponent({
    name:"FeaturesButton",
    props: {
        featureItems: {
            type: Array as () => string[],
            required: true,
        },
    },
    mounted() {
        // Log the featureItems prop to the console
        console.log('Feature Items:', this.featureItems);
    },
});
</script>