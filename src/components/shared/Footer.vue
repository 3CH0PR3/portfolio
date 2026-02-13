<script setup>
defineProps({
  currentYear: new Date().getFullYear(),
});
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="footer-text">
            © {{ currentYear }} Portafolio. Diseñado y desarrollado con
            <span class="heart">♥</span>
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <div class="footer-links">
            <a href="#" class="footer-link">GitHub</a>
            <a href="#" class="footer-link">LinkedIn</a>
            <a href="#" class="footer-link">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.7);
  padding: 2rem 0;
  margin-top: auto;
}

.footer-text {
  margin: 0;
  font-size: 0.95rem;
}

.heart {
  color: #e63946;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
}

@media (max-width: 767px) {
  .footer-links {
    justify-content: flex-start;
    margin-top: 1rem;
  }
}
</style>
