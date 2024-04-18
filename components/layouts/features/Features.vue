<template>
    <div class="flex flex-col w-full section-container wsm:my-10">
        <div class="flex flex-col items-center">
            <SectionIntro title="فودی چیست ؟" />
            <h2 class="text-[#031837] font-bold wsm:text-3xl text-[55px]  py-8 leading-[65px]">
                برخی از ویژگی های فودی
            </h2>
        </div>
        <div class="wxl:grid grid-cols-3 gap-x-8 flex flex-col">
            <div class="flex flex-col items-start gap-y-8 justify-evenly ">
                <FeaturesCard v-for="(items, index) in rightData" :key="index" :featureItems="items" isRTL />
            </div>
            <div class=" hidden wxl:flex">
                <img src="/public/assets/images/phone-preview-1.png" alt="">
            </div>
            <div class="flex flex-col justify-evenly items-start gap-y-8  wsm:mt-4 wmd:mt-8 wlg:mt-8">
                <FeaturesCard v-for="(items, index) in leftData" :key="index" :featureItems="items" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import SectionIntro from '~/components/text/sectionIntro.vue'
import FeaturesCard from '../../card/featuresCard.vue'
import { featuesTextContent } from '~/utils/constants';

export default defineComponent({
    name: "Features",
    components: {
        SectionIntro,
        FeaturesCard
    },
    data() {
        return {
            rightData: [],
            leftData: [],
        };
    },
    created() {
        // Set data for the right and left sections
        this.rightData = this.rightSectionData();
        this.leftData = this.leftSectionData();
    },
    methods: {
        rightSectionData() {
            return featuesTextContent.slice(0, 3);
        },
        leftSectionData() {
            return featuesTextContent.slice(3)
        }
    },
})
</script>