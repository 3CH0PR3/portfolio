<script setup>
import profileImg from "@/assets/images/me.png";
import cv from "@/assets/pdf/CV-Andres-Hernandez.pdf";
import { ref, computed } from "vue";

const downloading = ref(false);

const techs = [
  "Laravel",
  "Vue.js",
  "Inertia.js",
  "MySQL",
  "Tailwind CSS",
];

const marqueeItems = computed(() => [...techs, ...techs]);

const cvDownload = () => {
  downloading.value = true;

  const link = document.createElement("a");
  link.href = cv;
  link.download = "CV-Andres-Hernandez.pdf";
  link.click();

  setTimeout(() => {
    downloading.value = false;
  }, 1000);
};

const goToProyects = () => {
  document
    .getElementById("proyectos")
    ?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
	<section class="py-20 md:py32 relative min-h-[90vh] flex items-center justify-center" id="inicio">
		<div class="absolute inset-0 opacity-20 pointer-events-none">
			<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px]"></div>
			<div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px]"></div>
		</div>
		<div class="max-w-5xl mx-auto p-6 text-center relative z-10 overflow-hidden">
			
			<div class="mb-12 flex justify-center">
				<div class="relative p-1 bg-white/10 dark:bg-white/10 bg-slate-200/50 border border-slate-300 dark:border-white/20 rounded-sm">
					<img
						:src="profileImg"
						alt="Andres Hernandez" 
						class="w-[15rem] h-[14rem] object-cover object-[center_20%]"
					/>
					<div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full"></div>
				</div>
			</div>
			
			<h1 class="text-1xl md:text-4xl text-start font-display mb-6 tracking-tight text-primary leading-none">HOLA, SOY</h1>
			<h1 class="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-none">
				ANDRES HERNANDEZ
			</h1>

			<p class="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-light tracking-wide">
				Fullstack Developer especializado en la creación de <span class="text-primary font-medium"> arquitecturas escalables</span>
				y soluciones digitales de alto rendimiento.
			</p>
			
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<button 
					@click="goToProyects"
					:disabled="downloading"
					class="btn-premium w-full md:w-auto cursor-pointer btn-primary min-w-[180px]"
				>Ver Proyectos</button>
				<button
					@click="cvDownload"
					:disabled="downloading"
					class="btn-premium btn-outline w-full md:w-auto min-w-[180px] flex items-center justify-center gap-2 cursor-pointer"
				>
					<template v-if="downloading">
						<svg
							class="size-4 animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>

						<span>Procesando…</span>
					</template>

					<span v-else>Descargar CV</span>
				</button>

			</div>
			<div class="mt-24 max-w-3xl mx-auto overflow-hidden">
				<div class="marquee">
					<div class="marquee-track">
						<span v-for="(tech, i) in marqueeItems" :key="i" class="marquee-item">
							{{ tech }}
							<span class="separator">|</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.marquee {
  overflow: hidden;
  width: 100%;

	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee 30s linear infinite;
	}
}



.marquee:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  margin-right: 2rem;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: rgb(148 163 184);
}

.dark .marquee-item {
  color: rgb(71 85 105);
}

.separator {
  margin-left: 2rem;
  opacity: 0.4;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

</style>