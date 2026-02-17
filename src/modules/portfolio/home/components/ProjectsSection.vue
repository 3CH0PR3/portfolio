<script setup>
import router from '@/router';

const projects = [
	{
		slug: 'multi-tenant',
		title: 'SaaS multi-tenant',
		icon: 'fas fa-cloud',
		description: 'Sistema SaaS profesional para gestión de recusos aprobechables como ecas, macro rutas, aps, etc',
		url: 'https://gea-wrc.com',
		technologies: ['Laravel', 'vue.js', 'Mysql', 'Api Rest', 'Inertia', 'Tailwindcss', 'Vite', 'Pinia']
	},
	{
		slug: 'softerp',
		title: 'SoftERP',
		icon: 'fas fa-briefcase',
		description: 'Sistema ERP completo para gestión empresarial, inventarios, facturación y recursos humanos.',
		url: 'https://softerp.itsolutionsengly.com/no-auth/sign-in',
		technologies: ['Laravel', 'Blade', 'API REST', 'Mysql', 'Livewire', 'Vite']
	},
	{
		slug: 'telmo-api',
		title: 'Telmo API',
		icon: 'fas fa-server',
		description: 'Backend API robusto para integración de servicios, autenticación y gestión de datos en tiempo real.',
		url: 'https://api.telmo.ar/login',
		technologies: ['Laravel', 'Blade', 'API REST', 'JWT', 'Redis', 'Livewire']
	},
	{
		slug: 'sysedu',
		title: 'SysEdu',
		icon: '',
		description: 'Plataforma educativa para gestión de instituciones, estudiantes, docentes y evaluaciones.',
		url: 'https://sysedu.cremapr88venezuela.com/school/login',
		technologies: ['Laravel', 'Filament', 'MySQL']
	},
	{
		slug: 'sysadmin',
		title: 'SysAdmin',
		icon: '',
		description: 'Panel de administración central para gestión multi-tenant y configuración del sistema.',
		url: 'https://sysadmin.cremapr88venezuela.com/admin/login',
		technologies: ['Laravel', 'Filament', 'Livewire', 'MySQL']
	}
]

const getProjectUrl = (project) => {
  router.push({ 
    name: 'project',
    params: { slug: project.slug }
  })
}

</script>

<template>
	<section class="py-20 md:py32 dark:bg-white/[0.02]" id="proyectos">
		<div class="max-w-7xl mx-auto p-8">
			<div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
				<div class="max-w-2xl">
					<span class="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Portfolio</span>
					<h2 class="text-4xl font-display font-bold dark:text-white">Proyectos Destacados</h2>
				</div>
			</div>
			<div class="grid md:grid-cols-3 gap-6">
				<div v-for="project in projects.slice(0, 3)" :key="project.slug" class="double-border">
					<div class="group rounded-2xl overflow-hidden transition-all duration-50 bg-white border border-slate-300 shadow-sm dark:bg-white/0 dark:border-white/10 dark:shadow-none dark:hover:border-white/20">
						<div class="aspect-video bg-slate-200 dark:bg-white/5 flex items-center justify-center border-b border-slate-200 dark:border-white/5 overflow-hidden">
							<span 
								v-if="project.icon" 
								:class="[
									'font-bold text-6xl transition-transform duration-50 ease-out group-hover:scale-110',
									project.icon
								]"
							></span>
						</div>
						<div class="p-8">
							<h3 class="text-lg font-bold mb-3 dark:text-white">{{ project.title }}</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{{ project.description }}</p>
							<div class="flex flex-wrap gap-2 mb-8">
								<span
									v-for="(technology, index) in project.technologies"
									:key="technology + index"
									class="flex items-center gap-3"
								>
									<span class="text-[9px] font-bold text-primary tracking-widest uppercase">
										{{ technology }}
									</span>

									<span
										v-if="index < project.technologies.length - 1"
										class="text-[9px] font-bold text-slate-500 tracking-widest uppercase"
									>/</span>
								</span>
							</div>
							<button @click="getProjectUrl(project)" class="text-[10px] font-black uppercase text-primary flex items-center gap-1 hover:gap-2 transition-all">
								Ver Detalles <i class="fa-solid fa-arrow-up-right-from-square"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>