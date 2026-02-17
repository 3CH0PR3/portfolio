<script setup lang="ts">

const skills = [
  // Backend
  { name: 'Laravel', icon: '🔴', category: 'backend' },
  { name: 'PHP', icon: '🐘', category: 'backend' },
  { name: 'Express.js', icon: '🐈', category: 'backend' },
  { name: 'API REST', icon: '🔗', category: 'backend' },
  { name: 'MySQL', icon: '🗄️', category: 'backend' },
  
  // Frontend
  { name: 'JavaScript', icon: '💛', category: 'frontend' },
  { name: 'Vue.js', icon: '💚', category: 'frontend' },
  { name: 'Inertia.Js', icon: '❤️', category: 'frontend' },
  { name: 'Ionic', icon: '📱', category: 'frontend' },

  // Tools
  { name: 'Filament', icon: '🎨', category: 'tools' },
  { name: 'n8n', icon: '⚙️', category: 'tools' },
  { name: 'Git', icon: '📦', category: 'tools' },
  { name: 'Docker', icon: '🐳', category: 'tools' },
]

const categories = [
  { id: 'backend', label: 'Backend & Cloud', color: 'var(--primary)' },
  { id: 'frontend', label: 'Frontend & UI', color: 'var(--secondary)' },
  { id: 'tools', label: 'Herramientas & DevOps', color: '#8b5cf6' },
]

const getSkillsByCategory = (category) => {
  return skills.filter(s => s.category === category)
}
</script>

<template>
  <section id="skills" class="section skills">
    <div class="section-title">
      <span>Habilidades</span>
      <h2>Mi Stack <span class="gradient-text">Tecnológico</span></h2>
    </div>
    
    <div class="skills-container">
      <div 
        v-for="category in categories" 
        :key="category.id"
        class="skill-category"
      >
        <h3 class="category-title" :style="{ borderColor: category.color, color: category.color }">
          {{ category.label }}
        </h3>
        
        <div class="skills-grid">
          <div 
            v-for="(skill, index) in getSkillsByCategory(category.id)" 
            :key="skill.name"
            class="skill-card glass-card"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <div class="skill-icon-wrapper">
              <span class="skill-icon">{{ skill.icon }}</span>
            </div>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>