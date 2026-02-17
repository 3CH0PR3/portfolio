<script setup>
const highlights = [
	{
		id: 1,
		icon: '🚀',
		border: 'border-primary/20',
		title: 'Desarrollo Fullstack',
		description: 'Backend robusto con Laravel y APIs RESTful, Frontend moderno con Vue'
	},
	{
		id: 2,
		icon: '⚡',
		border: 'border-secondary/20',
		title: 'Automatización',
		description: 'Flujos de trabajo automatizados con n8n para optimizar procesos empresariales'
	},
	{
		id: 3,
		icon: '📱',
		border: 'border-primary/20',
		title: 'Apps Móviles',
		description: 'Desarrollo de aplicaciones híbridas con Flutter para iOS y Android'
	},
	{
		id: 4,
		icon: '🎨',
		border: 'border-secondary/20',
		title: 'Filament Admin',
		description: 'Paneles de administración elegantes y funcionales con Filament PHP'
	}
]
</script>

<template>
	<section class="py-20 md:py32" id="sobre-mi">
		<div class="max-w-7xl mx-auto p-8">
			<div class="grid lg:grid-cols-2 gap-24 items-start">
				<div class="space-y-10">
					<div>
						<span class="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Estrategia &amp; Desarrollo</span>
						<h2 class="text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">Soluciones Digitales<br />con Visión <span class="text-primary">Técnica</span></h2>
					</div>
					<div class="space-y-6 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
						<p>
							Enfocado en transformar requerimientos complejos en interfaces fluidas y sistemas robustos. Mi
							metodología se basa en la eficiencia del código y la escalabilidad del producto final.
						</p>
						<p>
							Con experiencia sólida en el stack TALL y despliegue cloud, garantizo productos digitales optimizados
							para el mercado actual.
						</p>
					</div>
					<div class="flex gap-12 pt-4">
						<div>
							<div class="text-3xl font-bold dark:text-white">+3</div>
							<div class="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Años Exp</div>
						</div>
						<div>
							<div class="text-3xl font-bold dark:text-white">20+</div>
							<div class="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Proyectos</div>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div class="double-border" v-for="item, in highlights" :key="item.id">
						<div class="p-8 glass-card h-full overflow-hidden transition-all duration-50 shadow-sm dark:bg-white/0 dark:border-white/10 dark:shadow-none dark:hover:border-white/20">
							<span :class="['material-symbols-outlined mb-6 text-3xl']">{{ item.icon }}</span>
							<h3 class="text-sm font-bold uppercase tracking-wider mb-3 dark:text-white">{{ item.title }}</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">{{ item.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>