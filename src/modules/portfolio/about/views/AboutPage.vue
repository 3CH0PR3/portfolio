<template>
  <section class="about-section">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="about-content">
            <div class="section-header mb-5">
              <h2 class="section-title">Sobre Mí</h2>
              <div class="title-underline"></div>
            </div>
            
            <div class="row g-5">
              <div class="col-lg-4">
                <div class="about-sidebar">
                  <div class="profile-image mb-4">
                    <div class="image-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 class="profile-name">{{ name }}</h3>
                  <p class="profile-role">{{ role }}</p>
                  
                  <div class="skills-list mt-4">
                    <h4 class="skills-title">Habilidades</h4>
                    <div class="skill-tags">
                      <span 
                        v-for="skill in skills" 
                        :key="skill" 
                        class="skill-tag"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-8">
                <div class="about-text">
                  <p class="lead">{{ intro }}</p>
                  
                  <div class="mt-4">
                    <h4 class="subsection-title">Experiencia</h4>
                    <p>{{ experience }}</p>
                  </div>
                  
                  <div class="mt-4">
                    <h4 class="subsection-title">Educación</h4>
                    <p>{{ education }}</p>
                  </div>
                  
                  <div class="mt-4">
                    <h4 class="subsection-title">Intereses</h4>
                    <p>{{ interests }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      name: 'Tu Nombre',
      role: 'Desarrollador Full Stack',
      intro: 'Soy un desarrollador apasionado por crear interfaces de usuario accesibles y pixel-perfect. Mi trabajo favorito está en la intersección del diseño y el desarrollo, creando experiencias que no solo se ven geniales, sino que también están meticulosamente construidas para el rendimiento y la usabilidad.',
      experience: 'Desde hace varios años, he tenido la oportunidad de desarrollar software en una variedad de entornos, desde agencias de publicidad y grandes corporaciones hasta startups y pequeños estudios de productos digitales.',
      education: 'Licenciado en Ciencias de la Computación con especialización en Ingeniería de Software. Constantemente aprendiendo nuevas tecnologías y mejores prácticas.',
      interests: 'En mi tiempo libre, disfruto contribuir a proyectos de código abierto, escribir artículos técnicos y experimentar con nuevas tecnologías web.',
      skills: ['Vue.js', 'React', 'TypeScript', 'Node.js', 'SCSS', 'Bootstrap', 'Git', 'REST APIs']
    }
  }
}
</script>

<style lang="scss" scoped>
.about-section {
  background: #f8f9fa;
  min-height: calc(100vh - 80px);
}

.section-header {
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1f35;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.title-underline {
  width: 60px;
  height: 4px;
  background: #1a1f35;
  margin: 0 auto;
}

.about-sidebar {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.image-placeholder {
  width: 160px;
  height: 160px;
  margin: 0 auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1f35;
  margin-bottom: 0.5rem;
}

.profile-role {
  color: #6b7280;
  font-size: 1rem;
}

.skills-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1f35;
  margin-bottom: 1rem;
  text-align: left;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
}

.skill-tag {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: #f3f4f6;
  color: #374151;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e5e7eb;
    transform: translateY(-2px);
  }
}

.about-text {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  .lead {
    font-size: 1.15rem;
    line-height: 1.7;
    color: #374151;
  }
  
  p {
    color: #6b7280;
    line-height: 1.7;
  }
}

.subsection-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1f35;
  margin-bottom: 0.75rem;
}

@media (max-width: 991px) {
  .about-sidebar {
    margin-bottom: 2rem;
  }
}
</style>
