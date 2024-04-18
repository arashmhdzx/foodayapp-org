<script setup lang="ts">

import Hero from './components/layouts/hero/hero.vue';
import Features from './components/layouts/features/Features.vue';
import NavBar from './components/layouts/navbar/Navbar.vue'
import Comments from './components/layouts/comments/comments.vue'
import Footer from './components/layouts/footer/footer.vue'
import AppShots from './components/layouts/appShots/appShots.vue'

useHead({   
    title: 'فودی | اپلیکیشن سفارش غذا'
});
</script>

<template>
    <NavBar />
    <Hero />
    <Features />
    <section class="py-32 my-10 bg-[#f7f7f9]">
        <Comments />
    </section>
    <AppShots />
    <Footer />
</template>
