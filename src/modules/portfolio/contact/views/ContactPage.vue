<template>
  <section class="contact-section">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="contact-content">
            <div class="section-header mb-5 text-center">
              <h2 class="section-title">Contacto</h2>
              <div class="title-underline"></div>
              <p class="section-description">
                ¿Tienes un proyecto en mente? Hablemos.
              </p>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-5">
                <div class="contact-info">
                  <h3 class="info-title">Información de Contacto</h3>
                  <p class="info-description">
                    Estoy siempre abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.
                  </p>
                  
                  <div class="contact-methods">
                    <div class="contact-method">
                      <div class="method-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div class="method-content">
                        <h4 class="method-title">Email</h4>
                        <a href="mailto:tu@email.com" class="method-value">tu@email.com</a>
                      </div>
                    </div>
                    
                    <div class="contact-method">
                      <div class="method-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div class="method-content">
                        <h4 class="method-title">Teléfono</h4>
                        <a href="tel:+1234567890" class="method-value">+1 (234) 567-890</a>
                      </div>
                    </div>
                    
                    <div class="contact-method">
                      <div class="method-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div class="method-content">
                        <h4 class="method-title">Ubicación</h4>
                        <p class="method-value">Ciudad, País</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="social-links">
                    <h4 class="social-title">Sígueme</h4>
                    <div class="social-icons">
                      <a href="#" class="social-icon" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="#" class="social-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" class="social-icon" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-7">
                <form class="contact-form" @submit.prevent="handleSubmit">
                  <div class="mb-4">
                    <label for="name" class="form-label">Nombre</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name" 
                      v-model="formData.name"
                      placeholder="Tu nombre completo"
                      required
                    >
                  </div>
                  
                  <div class="mb-4">
                    <label for="email" class="form-label">Email</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email" 
                      v-model="formData.email"
                      placeholder="tu@email.com"
                      required
                    >
                  </div>
                  
                  <div class="mb-4">
                    <label for="subject" class="form-label">Asunto</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="subject" 
                      v-model="formData.subject"
                      placeholder="¿En qué puedo ayudarte?"
                      required
                    >
                  </div>
                  
                  <div class="mb-4">
                    <label for="message" class="form-label">Mensaje</label>
                    <textarea 
                      class="form-control" 
                      id="message" 
                      rows="5"
                      v-model="formData.message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" class="btn btn-primary btn-lg w-100">
                    Enviar Mensaje
                  </button>
                  
                  <div v-if="submitMessage" class="alert alert-success mt-3" role="alert">
                    {{ submitMessage }}
                  </div>
                </form>
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
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitMessage: ''
    }
  },
  methods: {
    handleSubmit() {
      // Simulación de envío de formulario
      this.submitMessage = '¡Mensaje enviado con éxito! Te responderé pronto.'
      
      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        this.submitMessage = ''
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-section {
  background: #fff;
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
  margin: 0 auto 1rem;
}

.section-description {
  color: #6b7280;
  font-size: 1.1rem;
}

.contact-info {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 1rem;
  height: 100%;
}

.info-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1f35;
  margin-bottom: 1rem;
}

.info-description {
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.method-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.method-content {
  flex: 1;
}

.method-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #9ca3af;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.method-value {
  color: #1a1f35;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    color: #667eea;
  }
}

.social-links {
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
}

.social-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1f35;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374151;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a1f35;
    color: #fff;
    transform: translateY(-4px);
  }
}

.contact-form {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  .form-label {
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }
  
  .form-control {
    border: 1px solid #d1d5db;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    
    &:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  }
  
  .btn-primary {
    background: #1a1f35;
    border-color: #1a1f35;
    padding: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background: #0f1419;
      border-color: #0f1419;
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  }
}

@media (max-width: 991px) {
  .contact-info {
    margin-bottom: 2rem;
  }
}
</style>
