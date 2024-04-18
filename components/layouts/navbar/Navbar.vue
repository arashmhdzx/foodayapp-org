<script lang="ts">
import { defineComponent } from 'vue';
import NavLink from '../../link/NavLink.vue';
import RegisterButton from '../../button/register.vue';

export default defineComponent({
    name: "NavBar",
    components: {
        NavLink,
        RegisterButton,
    },
    data() {
        return {
            isScrolled: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        }
    }
});
</script>

<template>
    <nav class="navbar" :class="{ 'active-navbar': isScrolled }">
        <div class="navbar-container relative" :class="{'!pt-0':isScrolled}">
            <div class="flex rounded-full absolute top-0 right-0" :class="{ 'shadow-lg shadow-white -top-4': isScrolled }">
                <img src="/public/assets/images/logo.png" class="w-[100px]" alt="">
            </div>
            <div class="flex items-center">
                <NavLink title="خانه" linkTo="#hero" />
                <NavLink title="درباره ما" linkTo="#about-us" />
                <NavLink title="نظرات" linkTo="#comments" />
                <NavLink title="اپلیکیشن" linkTo="#download" />
            </div>
        </div>
    </nav>
</template>