<script setup lang="ts">
const highlights = [
	{
		icon: '🚀',
		title: 'Desarrollo Fullstack',
		description: 'Backend robusto con Laravel y APIs RESTful, Frontend moderno con Vue'
	},
	{
		icon: '⚡',
		title: 'Automatización',
		description: 'Flujos de trabajo automatizados con n8n para optimizar procesos empresariales'
	},
	{
		icon: '📱',
		title: 'Apps Móviles',
		description: 'Desarrollo de aplicaciones híbridas con Flutter para iOS y Android'
	},
	{
		icon: '🎨',
		title: 'Filament Admin',
		description: 'Paneles de administración elegantes y funcionales con Filament PHP'
	}
]
</script>

<template>
	<section id="about" class="section about">
		<div class="section-title">
			<span>Sobre Mí</span>
			<h2>Construyendo Soluciones <span class="gradient-text">Digitales</span></h2>
		</div>

		<div class="about-content">
			<div class="about-text">
				<p class="about-intro">
					Soy un desarrollador web fullstack apasionado por crear aplicaciones web
					modernas, escalables y con excelente experiencia de usuario. Mi enfoque
					combina código limpio con diseño intuitivo.
				</p>
				<br>
				<p>
					A lo largo de mi carrera, he trabajado en diversos proyectos que van desde
					sistemas CRM empresariales hasta plataformas educativas, siempre buscando
					la excelencia técnica y la satisfacción del cliente.
				</p>
				<p>
					Me especializo en el ecosistema <strong>Laravel</strong> para backend,
					complementado con frameworks modernos de frontend como <strong>Vue.js</strong>,
					tengo experiencia con <strong>NestJS</strong> para arquitecturas Node.js robustas.
				</p>
			</div>

			<div class="about-highlights">
				<div v-for="(item, index) in highlights" :key="index" class="highlight-card glass-card"
					:style="{ animationDelay: `${index * 0.1}s` }">
					<span class="highlight-icon">{{ item.icon }}</span>
					<h3>{{ item.title }}</h3>
					<p>{{ item.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.about {
	background: var(--color-bg-secondary);
	padding: 5rem 3rem;
}

.about-content {
	display: grid;
	align-items: start;
	gap: 50px;
	grid-template-columns: 1fr 1fr;
}

.about-text {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-md);

	@media (max-width: 576px) {
		text-align: center;
	}
}

.about-intro {
	font-size: 1.3rem;
	line-height: 1.3;
}

.about-text p strong {
	color: var(--primary);
}

.about-highlights {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	/* Increased gap */
}

.highlight-card {
	text-align: center;
	animation: fadeInUp 0.6s ease forwards;
	opacity: 0;
}

.highlight-icon {
	font-size: 2.5rem;
	display: block;
	margin-bottom: 10px;
}

.highlight-card h3 {
	font-size: 1rem;
	margin-bottom: 10px;
}

.highlight-card p {
	font-size: 0.875rem;
	line-height: 1.6;
}

@media (max-width: 900px) {
	.about-content {
		grid-template-columns: 1fr;
	}

	.about-highlights {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 500px) {
	.about-highlights {
		grid-template-columns: 1fr;
	}
}
</style>
