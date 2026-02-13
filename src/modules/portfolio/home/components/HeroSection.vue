<script setup>
import { ref, onMounted } from 'vue'
import profileImg from "@/assets/images/me.png";
import cv from "@/assets/pdf/CV-Andres-Hernandez.pdf";

const isVisible = ref(false);
const downloading = ref(false);

onMounted(() => {
	setTimeout(() => {
		isVisible.value = true
	}, 100)
});

const cvDownload = () => {
	downloading.value = true;

	const link = document.createElement('a');
	link.href = cv;
	link.download = 'CV-Andres-Hernandez.pdf';
	link.click();

	setTimeout(() => {
		downloading.value = false;
	}, 1000);
}

const scrollToSection = (id) => {
	const element = document.getElementById(id)
	element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
	<section id="hero" class="hero">
		<!-- Background Glows -->
		<div class="glow glow-1"></div>
		<div class="glow glow-2"></div>

		<div class="hero-content" :class="{ 'is-visible': isVisible }">
			<div class="profile-container">
				<!-- Placeholder for profile picture -->
				<div class="profile-frame">
					<img :src="profileImg" alt="Omar Dávila" class="profile-img" />
				</div>
				<div class="status-badge">
					<span class="status-dot"></span>
					<span>Disponible para trabajar</span>
				</div>
			</div>

			<h1 class="hero-title">
				Hola, soy <span class="gradient-text">Andres Hernandez</span>
			</h1>

			<h2 class="hero-role">Programador de Sistemas</h2>

			<p class="hero-subtitle">
				Desarrollador <strong>Fullstack</strong> con <strong>+3 años de experiencia</strong> transformando ideas en
				experiencias digitales excepcionales. Experto en
				<span>Laravel</span>, <span>Vue</span> y <span>Arquitectura Cloud</span>.
			</p>

			<div class="hero-actions">
				<button 
					class="btn btn-primary" 
					:disabled="downloading"
					@click="scrollToSection('projects')"
				>
					Ver Proyectos
				</button>
				<button 
					class="btn btn-outline"
					:disabled="downloading"
					@click="cvDownload"
				>
					<span v-if="!downloading">Descargar CV</span>
					<span v-else>
						<i class="spinner-border spinner-border-sm"></i>
						Descargando ...
					</span>
				</button>
			</div>

			<div class="tech-stack-preview">
				<span class="tech-icon">Laravel</span>
				<span class="separator">•</span>
				<span class="tech-icon">Vue.js</span>
				<span class="separator">•</span>
				<span class="tech-icon">Inertia.js</span>
				<span class="separator">•</span>
				<span class="tech-icon">Mysql</span>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	padding: 0 2rem 2rem;
	text-align: center;

	@media (max-width: 576px) {
		height: 100%;
		padding-top: 5rem;
		padding-bottom: 3rem;
	}
}

/* Ambient Glows */
.glow {
	position: absolute;
	width: 600px;
	height: 600px;
	border-radius: 50%;
	filter: blur(120px);
	opacity: 0.1;
	z-index: 0;
	pointer-events: none;

	@media (max-width: 576px) {
		display: none;
	}
}

.glow-1 {
	background: var(--primary);
	top: -200px;
	left: -200px;
}

.glow-2 {
	background: var(--secondary);
	bottom: -200px;
	right: -200px;
}

.hero-content {
	position: relative;
	z-index: 10;
	max-width: 992px;
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 1s ease, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hero-content.is-visible {
	opacity: 1;
	transform: translateY(0);
}

.profile-container {
	position: relative;
	display: inline-block;
	margin-bottom: 2rem;
}

.profile-frame {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	padding: 4px;
	background: var(--gradient-primary);
	margin: 0 auto 1.5rem;
	position: relative;
}

.profile-img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
	object-position: center 20%;
	/* Adjusted to show face better */
	border: 4px solid var(--bg-primary);
}

.status-badge {
	position: absolute;
	bottom: 0;
	right: -20px;
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background: rgba(20, 184, 166, 0.1);
	border: 1px solid rgba(20, 184, 166, 0.2);
	padding: 0.5rem 1rem;
	border-radius: 100px;
	font-size: 0.75rem;
	color: var(--primary);
	backdrop-filter: blur(10px);
	white-space: nowrap;
}

.status-dot {
	width: 6px;
	height: 6px;
	background-color: var(--primary);
	border-radius: 50%;
	box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
	animation: pulse 2s infinite;
}

.hero-title {
	margin-bottom: 0.5rem;
}

.hero-role {
	font-size: 1.5rem;
	color: var(--text-secondary);
	font-weight: 500;
	margin-bottom: 1.5rem;
	font-family: var(--font-sans);
}

.hero-subtitle {
	font-size: 1.25rem;
	line-height: 1.3;
	margin-bottom: 3rem;
	color: var(--text-secondary);
}

.hero-subtitle strong,
.hero-subtitle span {
	color: var(--text-primary);
	font-weight: 600;
}

.hero-actions {
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-bottom: 4rem;
}

.tech-stack-preview {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	color: var(--text-muted);
	font-size: 0.875rem;
	font-weight: 500;
	letter-spacing: 0.05em;
	text-transform: uppercase;
}

.separator {
	opacity: 0.3;
}

@media (max-width: 640px) {
	.hero-actions {
		flex-direction: column;
	}
}

@keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4);
	}

	70% {
		box-shadow: 0 0 0 10px rgba(20, 184, 166, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);
	}
}
</style>
