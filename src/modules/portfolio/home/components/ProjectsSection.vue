<script setup>
const projects = [
  {
    title: 'SaaS multi-tenant',
    description: 'Sistema SaaS profesional para gestión de clientes, ventas y seguimiento comercial con dashboard analítico.',
    url: 'https://gea-wrc.com',
    technologies: ['Laravel', 'vue.js', 'Mysql', 'Api Rest', 'Inertia', 'Tailwindcss', 'Vite', 'Pinia']
  },
  {
    title: 'SoftERP',
    description: 'Sistema ERP completo para gestión empresarial, inventarios, facturación y recursos humanos.',
    url: 'https://softerp.itsolutionsengly.com/no-auth/sign-in',
    technologies: ['Laravel', 'Angular', 'API REST', 'PostgreSQL']
  },
  {
    title: 'Telmo API',
    description: 'Backend API robusto para integración de servicios, autenticación y gestión de datos en tiempo real.',
    url: 'https://api.telmo.ar/login',
    technologies: ['Laravel', 'API REST', 'JWT', 'Redis']
  },
  {
    title: 'SysEdu',
    description: 'Plataforma educativa para gestión de instituciones, estudiantes, docentes y evaluaciones.',
    url: 'https://sysedu.cremapr88venezuela.com/school/login',
    technologies: ['Laravel', 'Filament', 'MySQL']
  },
  {
    title: 'SysAdmin',
    description: 'Panel de administración central para gestión multi-tenant y configuración del sistema.',
    url: 'https://sysadmin.cremapr88venezuela.com/admin/login',
    technologies: ['Laravel', 'Filament', 'Livewire', 'MySQL']
  }
]
</script>

<template>
  <section id="projects" class="section projects">
    <div class="section-title">
      <span>Portafolio</span>
      <h2>Proyectos <span class="gradient-text">Destacados</span></h2>
    </div>
    
    <div class="projects-grid">
      <a 
        v-for="(project, index) in projects" 
        :key="project.title"
        :href="project.url"
        target="_blank"
        rel="noopener"
        class="project-card glass-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="project-header">
          <div class="project-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div class="project-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
        </div>
        
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        
        <div class="project-technologies">
          <span 
            v-for="tech in project.technologies" 
            :key="tech"
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--color-bg-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem; /* Increased gap for better spacing */
}

.project-card {
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  cursor: pointer;
}

.project-card:hover .project-link-icon {
  opacity: 1;
  transform: translate(0, 0);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.project-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: var(--radius-md);
  color: white;
}

.project-link-icon {
  opacity: 0;
  transform: translate(-5px, 5px);
  transition: all var(--transition-base);
  color: var(--color-text-muted);
}

.project-title {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.3;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-accent-1);
  border-radius: var(--radius-full);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

@media (max-width: 500px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
