<script setup>
import Navbar from "@/components/shared/Navbar.vue";
import Footer from "@/components/shared/Footer.vue";
import { onMounted, onUnmounted, ref } from "vue";

const isScrolling = ref(false);
const navbar = document.querySelector(".nav-glass");

const handleScroll = () => {
  const scrolled = window.scrollY > 0;
  isScrolling.value = scrolled;
  navbar?.classList.toggle("active", scrolled);
};

const scrollTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
	window._landingScrollHandler = handleScroll;
});

onUnmounted(() => {
	window.removeEventListener("scroll", window._landingScrollHandler);
});
</script>

<template>
	<Navbar />

	<main>
		<router-view />

		<div v-if="isScrolling" class="fixed bottom-4 right-4">
			<button class="btn-primary btn-premium p-[3px] flex items-center justify-center" @click="scrollTop">
				<span class="material-symbols-outlined">arrow_upward</span>
			</button>
		</div>
	</main>

	<footer class="py-12 border-t border-slate-200 dark:border-white/5">
		<Footer />
	</footer>
</template>