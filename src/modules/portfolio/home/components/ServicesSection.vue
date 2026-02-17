<script setup>

const services = [
	{
		id: 1,
		title: 'Web Development',
		color: 'text-primary',
		border: 'border-primary/20',
		background: 'bg-primary/5',
		description: 'Creación de aplicaciones web con tecnologías modernas y escalables.',
		icon: 'code'
	},
	{
		id: 2,
		title: 'Mobile Development',
		color: 'text-secondary',
		border: 'border-secondary/20',
		background: 'bg-secondary/5',
		description: 'Desarrollo de aplicaciones móviles con tecnologías modernas y escalables.',
		icon: 'mobile'
	},
	{
		id: 3,
		title: 'Automation',
		color: 'text-primary',
		border: 'border-primary/20',
		background: 'bg-primary/5',
		description: 'Automatización de procesos empresariales con tecnologías modernas y escalables.',
		icon: 'automation'
	},
	{
		id: 4,
		title: 'UI/UX Design',
		color: 'text-secondary',
		border: 'border-secondary/20',
		background: 'bg-secondary/5',
		description: 'Diseño de interfaces de usuario y experiencia de usuario con tecnologías modernas y escalables.',
		icon: 'database'
	}
]

</script>

<template>
	<section class="py-20 md:py32 bg-slate-50/30 dark:bg-white/[0.01]" id="servicios">
		<div class="max-w-7xl mx-auto p-8">
			<div class="text-center mb-20 md:mb-24">
				<span class="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Especialidades</span>
				<h2 class="text-4xl font-display font-bold dark:text-white">Servicios Profesionales</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div v-for="service in services" :key="service.id" class="double-border">
					<div class="p-8 glass-card flex flex-col items-start h-full overflow-hidden transition-all duration-50 shadow-sm dark:bg-white/0 dark:border-white/10 dark:shadow-none dark:hover:border-white/20">
						<div :class="[
							'w-12 h-12 flex items-center justify-center mb-8 border rounded-3xl',
							service.border,
							service.background
						]">
							<span :class="['material-symbols-outlined', service.color, 'text-3xl']">{{ service.icon }}</span>
						</div>
						<h3 class="text-sm font-bold uppercase tracking-widest mb-4 dark:text-white">{{ service.title }}</h3>
						<p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">{{ service.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>