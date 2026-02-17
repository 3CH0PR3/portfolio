<script setup>

const skills = [
	{ name: 'PHP 8.2', category: 'backend' },
  { name: 'API REST', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
	{ name: 'codeigniter', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Express.js', category: 'backend' },

  // Frontend
	{ name: 'livewire', category: 'frontend' },
	{ name: 'Vue.js 3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Inertia.Js', category: 'frontend' },
	{ name: 'Tailwind.css', category: 'frontend' },

  // Tools
  { name: 'n8n', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Filament', category: 'tools' },
]

const categories = [
  { id: 'backend', label: 'Backend & DB' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'tools', label: 'DevOps & Tools' },
]

const getSkillsByCategory = (category) => {
  return skills.filter(s => s.category === category)
}

</script>

<template>
	<section class="py-20 md:py32" id="habilidades">
		<div class="max-w-7xl mx-auto p-8">
			<div class="text-center mb-20 md:mb-24">
				<span class="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Habilidades</span>
				<h2 class="text-4xl font-display font-bold dark:text-white">Stack Tecnológico</h2>
			</div>
			<div class="grid md:grid-cols-3 gap-6">
				<div v-for="category in categories" :key="category.id" class="double-border">
					<div class="p-8 glass-card h-full overflow-hidden transition-all duration-50 shadow-sm dark:bg-white/0 dark:border-white/10 dark:shadow-none dark:hover:border-white/20">
						<h3 class="text-xs font-black uppercase tracking-[0.3em] text-slate-900 dark:text-slate-500 mb-8 border-b border-slate-200 dark:border-white/5 pb-4">
							{{ category.label }}
						</h3>
						<div class="flex flex-wrap gap-2">
							<span 
								v-for="skill in getSkillsByCategory(category.id)" 
								:key="skill.name" 
								class="badge-sharp flex items-center gap-2"
							>
								<span>{{ skill.icon }}</span>
								<span>{{ skill.name }}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>