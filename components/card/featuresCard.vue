<template>
    <div class="flex wsm:!flex-row-reverse wmd:!flex-row-reverse wlg:!flex-row-reverse" :class="{ 'flex-row-reverse': !isRTL }">
        <div class="flex flex-col wsm:!text-start wmd:!text-start wlg:!text-start" :class="{ 'text-end': isRTL }">
            <h5 class=" text-2xl mb-4 font-semibold"> {{ featureItems.title }}</h5>
            <p class="text-[#757575]"> {{ featureItems.description }}</p>
        </div>
        <div class="flex mx-2 p-6 text-main !w-20 justify-center bg-[#f7f7f9] h-fit rounded-full hover:text-white hover:bg-main">
            <font-awesome-icon class="wxl:text-4xl text-2xl"  :icon="featureItems.icons" />
        </div>
    </div>
</template>

<script lang="ts">

import type { FeatuesTextContentType } from '~/server/types';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default defineComponent({
    name: "FeaturesCard",
    props: {
        featureItems: {
            type: Object as () => FeatuesTextContentType,
            required: true,
        },
        isRTL: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {

        }
    },
    components: {
        FontAwesomeIcon
    }
});
</script>