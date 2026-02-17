<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';
import { useScrollDetect } from '@/composables/useScrollDetect';
import router from '@/router';

const { isDark, toggleDark } = useDarkMode();
const { isScrolling } = useScrollDetect();

const activeSection = ref('inicio');

const navItems = [
	{ id: 'inicio', label: 'Inicio' },
	{ id: 'sobre-mi', label: 'Sobre Mí' },
	{ id: 'servicios', label: 'Servicios' },
	{ id: 'habilidades', label: 'Stack' },
	{ id: 'proyectos', label: 'Proyectos' },
	{ id: 'contacto', label: 'Contacto' }
];

const goSection = (section) => {
	activeSection.value = section;
	const element = document.getElementById(section);
	if (!element) return;
	
	const navHeight = 80;
	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20; // 20px extra de padding
	
	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
}

const redirect = () => {
	router.push({
		name: 'home',
	})
}

onMounted(() => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) activeSection.value = entry.target.id;
			});
		},
		{ 
			threshold: 0.5,
			rootMargin: '-100px 0px 0px 0px'
		}
	);

	navItems.forEach(({ id }) => {
		const el = document.getElementById(id);
		if (el) observer.observe(el);
	});

	onUnmounted(() => observer.disconnect());
});
</script>

<template>
	<nav class="nav-glass" :class="{ 'scrolled': isScrolling }">
		<div class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
			<button @click="redirect" class="text-xl font-display font-black tracking-tighter flex items-center gap-2">
				<span class="text-primary">ANDRES</span>
				<span class="text-slate-400 dark:text-slate-600">/</span>
				<span class="dark:text-white">HERNANDEZ</span>
			</button>
			
			<div class="hidden md:flex items-center gap-8 text-[12px] font-bold tracking-[0.2em] uppercase">
				<button 
					v-for="item in navItems" 
					:key="item.id"
					@click="goSection(item.id)"
					:class="[
						'nav-links transition-all duration-50',
						!item.isButton && 'border-b-2',
						!item.isButton && (activeSection === item.id ? 'border-primary' : 'border-transparent'),
						item.isButton && 'btn-premium btn-primary px-5 py-2',
						activeSection === item.id 
							? 'text-primary' 
							: 'hover:text-primary'
					]">
					{{ item.label }}
				</button>
			</div>

			<button 
				@click="toggleDark"
				class="text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-50"
				:class="{ 'rotate-180': isDark }">
				<span class="material-symbols-outlined text-[20px]">brightness_6</span>
			</button>
		</div>
	</nav>
</template>