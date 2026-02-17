<script setup>

</script>

<template>
	<section class="relative h-[50vh] min-h-[500px] overflow-hidden">
		<div class="absolute inset-0 pointer-events-none dark:bg-slate-800 bg-slate-800">
			<img
				alt="Project Banner"
				src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhuFfzFX5Nv8P3ZsO_SXlLaw8DpbcPQ7fkmzurhEfv57tuLvI5pBLQLDuefkNjOZvjb2WorWSOFLeSD06ZSq6X83qdFEc75Yduu19xDVLn_rAcRjMDVLU9l0GULs7rsuEZt4MdcGKqRhlz8v0Pen5fN2dxp-ZcV2ovtA7fbxHpw175jo7o2nt9SHAy1dtJdqi0C437nhA2tXm4wQwRC2UtJnimP84lQCcMwkihXa6YRdRN_gspw_KqgTlBV1T_BTs8P_3fgmmIp00"
				class="w-full h-full object-cover mix-blend-multiply"
			/>
		</div>
		<div class="absolute inset-0 hero-gradient"></div>
		<div class="absolute inset-0 flex items-end">
			<div class="max-w-7xl mx-auto p-8 w-full pb-16">
				<div class="max-w-3xl">
					<span class="text-primary font-display font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Case Study: Enterprise Solutions</span>
					<h1 class="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter  text-slate-50 dark:text-white">SaaS Multi-tenant</h1>
					<p class="text-xl text-slate-50 text-white font-light leading-relaxed">
						Arquitectura de software escalable diseñada
						para la gestión masiva de datos corporativos bajo un modelo de suscripción.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="py-24 border-b border-white/5">
		<div class="max-w-7xl mx-auto p-8">
			<div class="grid lg:grid-cols-12 gap-16">
				<div class="lg:col-span-8 space-y-16">
					<div>
						<h2 class="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8">The Challenge</h2>
						<div class="prose prose-invert prose-lg max-w-none font-light text-slate-400">
							<p>
								El principal desafío consistía en crear una arquitectura que permitiera a cientos de empresas
								operar de forma independiente en un mismo entorno de servidor, garantizando el aislamiento total de
								la base de datos y la seguridad de la información. 
							</p>
							<p>
								Se requería una solución capaz de gestionar volúmenes de datos masivos sin comprometer la velocidad
								de respuesta de la interfaz, implementando un sistema de permisos granular y flujos de trabajo
								personalizados para cada cliente.
							</p>
						</div>
					</div>
					<div class="border-l-2 border-primary bg-white/5 sharp-border p-8">
						<h2 class="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8">The Solution</h2>
						<div class="prose prose-invert prose-lg max-w-none font-light text-slate-400">
							<p>
								Implementamos una arquitectura <strong>Multi-database</strong> utilizando Laravel, donde cada nuevo
								tenant recibe su propia base de datos aislada dinámicamente. El frontend fue construido con
								<strong>Vue 3 e Inertia.js</strong> para proporcionar una experiencia de aplicación de página única
								(SPA) robusta y rápida.
							</p>
							<ul class="mt-8">
								<li class="flex items-center gap-3">
									<span class="material-symbols-outlined text-primary text-lg mt-1">check_circle</span>
									<span>Aislamiento dinámico de bases de datos mediante middleware personalizado.</span>
								</li>
								<li class="flex items-center gap-3">
									<span class="material-symbols-outlined text-primary text-lg mt-1">check_circle</span>
									<span>Sistemas de caché inteligentes con Redis para reducir latencias en un 40%.</span>
								</li>
								<li class="flex items-center gap-3">
									<span class="material-symbols-outlined text-primary text-lg mt-1">check_circle</span>
									<span>Interfaz de administración centralizada construida con Filament PHP.</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="lg:col-span-4">
					<div class="sticky top-32 space-y-10">
						<div class="grid grid-cols-2 gap-px bg-white/5 border border-white/10 sharp-border">
							<div class="p-6 bg-background-dark">
								<span class="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Duration</span>
								<span class="text-lg font-display font-bold text-white">6 Meses</span>
							</div>
							<div class="p-6 bg-background-dark">
								<span class="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Role</span>
								<span class="text-lg font-display font-bold text-white">Lead Dev</span>
							</div>
						</div>
						<div class="space-y-8">
							<div>
								<h3 class="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4 flex items-center gap-2">
									<span class="w-8 h-[1px] bg-primary"></span> Frameworks
								</h3>
								<div class="flex flex-wrap gap-2">
									<span class="badge-system">Laravel 10</span>
									<span class="badge-system">Vue.js 3</span>
									<span class="badge-system">Tailwind CSS</span>
									<span class="badge-system">Inertia.js</span>
								</div>
							</div>
							<div>
								<h3 class="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4 flex items-center gap-2">
									<span class="w-8 h-[1px] bg-primary"></span> Languages
								</h3>
								<div class="flex flex-wrap gap-2">
									<span class="badge-system">PHP 8.2</span>
									<span class="badge-system">TypeScript</span>
									<span class="badge-system">SQL</span>
								</div>
							</div>
							<div>
								<h3 class="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4 flex items-center gap-2">
									<span class="w-8 h-[1px] bg-primary"></span> Dependencies
								</h3>
								<div class="flex flex-wrap gap-2">
									<span class="badge-system">Vite</span>
									<span class="badge-system">Redis</span>
									<span class="badge-system">S3 Storage</span>
									<span class="badge-system">Stripe API</span>
									<span class="badge-system">Filament</span>
								</div>
							</div>
						</div>
						<div class="pt-8 space-y-4">
							<a class="w-full flex items-center justify-center gap-3 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] sharp-border hover:bg-primary hover:text-white transition-all group" href="#">
								Ver Live Demo <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
							</a>
							<a class="w-full flex items-center justify-center gap-3 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] sharp-border hover:bg-white/5 transition-all" href="#">
								GitHub Repository <span class="material-symbols-outlined text-sm">code</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>