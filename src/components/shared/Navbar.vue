<script setup></script>

<template>
  <header class="sticky-top">
		<nav class="navbar navbar-expand-lg navbar-dark">
			<div class="container">
				<router-link to="/" class="navbar-brand">
					<span class="brand-name">Portafolio</span>
				</router-link>

				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<router-link to="/" :class="['nav-link']" exact-active-class="active">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/about" class="nav-link">Sobre Mí</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/posts" class="nav-link">Posts</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/contact" class="nav-link">Contacto</router-link>
						</li>
					</ul>
				</div>
			</div>
  	</nav>
	</header>
</template>

<style lang="scss" scoped>
.navbar {
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.nav-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: #fff;
  }

  &.active {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 1rem;
      right: 1rem;
      height: 2px;
      background: #fff;
    }
  }
}

@media (max-width: 991px) {
  .navbar-nav {
    padding: 1rem 0;
  }

  .nav-link.active::after {
    display: none;
  }
}
</style>
