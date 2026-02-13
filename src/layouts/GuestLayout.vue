<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

// import Navbar from "@/components/shared/Navbar.vue";
// import Footer from "@/components/shared/Footer.vue";

const route = useRoute();

// const showNavbar = computed(() => route.meta.showNavbar !== false);
// const showFooter = computed(() => route.meta.showFooter !== false);
const fullWidth = computed(() => route.meta.fullWidth === true);

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
</script>

<template>
  <div>
    <!-- <Navbar v-if="showNavbar" /> -->

    <main :class="{ 'container-fluid p-0': !fullWidth, 'w-100': fullWidth }">
      <router-view />
    </main>

    <!-- <Footer v-if="showFooter" /> -->
  </div>
</template>
