<script setup lang="ts">
const contactLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: 'linkedin',
    description: 'Contactarme en LinkedIn'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/3CH0PR3',
    icon: 'github',
    description: 'Mira mi código y proyectos'
  },
  {
    name: 'Email',
    url: 'mailto:andreshmndz@gmail.com',
    icon: 'email',
    description: 'andreshmndz@gmail.com'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/584146548313',
    icon: 'whatsapp',
    description: '+58 414 654 8313'
  }
]
</script>

<template>
  <section id="contact" class="section contact">
    <div class="contact-content">
      <div class="section-title">
        <span>Contacto</span>
        <h2>¿Tienes un proyecto <span class="gradient-text">en mente?</span></h2>
      </div>
      
      <p class="contact-intro">
        Estoy siempre abierto a nuevas oportunidades, colaboraciones y proyectos interesantes.
        No dudes en contactarme para discutir cómo puedo ayudarte a hacer realidad tu próximo proyecto.
      </p>
      
      <div class="contact-links">
        <a 
          v-for="link in contactLinks" 
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="contact-card glass-card"
        >
          <div class="contact-icon">
            <!-- LinkedIn -->
            <svg v-if="link.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <!-- GitHub -->
            <svg v-if="link.icon === 'github'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <!-- Email -->
            <svg v-if="link.icon === 'email'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <!-- WhatsApp -->
            <svg v-if="link.icon === 'whatsapp'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <div class="contact-info">
            <h3>{{ link.name }}</h3>
            <p>{{ link.description }}</p>
          </div>
          <div class="contact-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      </div>
    </div>
    
    <footer class="footer">
      <p>Diseñado y desarrollado con 💜 por <span class="gradient-text">Andres Hernandez</span></p>
      <p class="copyright">© {{ new Date().getFullYear() }} Todos los derechos reservados</p>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  background: var(--color-bg-primary);
  text-align: center;
}

.contact-content {
  margin: 0 auto;
}

.contact-intro {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 4rem; /* Increased bottom margin */
  line-height: 1.8;
}

.contact-links {
  display: grid;
  grid-template-columns: repeat(2, 250px); /* 2x2 grid looks better for 4 items */
  gap: 2rem;
  margin-bottom: 4rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .contact-links {
    grid-template-columns: repeat(4, 1fr);
  }
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center vertically */
  gap: 1rem;
  text-align: center;
  padding: 2rem;
  height: 100%;
  min-height: 250px;
}

.contact-card:hover .contact-arrow {
  transform: translateY(5px);
  color: var(--primary);
}

.contact-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: var(--radius-full); /* Make icons circular */
  color: white;
  flex-shrink: 0;
  margin-bottom: 0.5rem;
}

.contact-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.contact-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0;
  color: var(--text-primary);
}

.contact-info p {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.contact-arrow {
  position: absolute;
  bottom: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  color: var(--primary);
  transition: all var(--transition-base);
}

.contact-card:hover .contact-arrow {
  opacity: 1;
  transform: translateY(0);
}

.contact-arrow {
  color: var(--color-text-muted);
  transition: all var(--transition-base);
}

.footer {
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--glass-border);
}

.footer p {
  margin-bottom: var(--spacing-xs);
}

.copyright {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .contact-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
