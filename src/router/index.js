import { createRouter, createWebHistory } from 'vue-router'
// 0)
// src/router/
// ├── index.js
// ├── routes/
// │    └── app.routes.js
// │    └── auth.routes.js
// │    └── guest.routes.js
// 

// 1)
// src/modules/auth/
// ├── auth/
// │    │── login/
// │    │   └── router/
// │    │       └── login.routes.js
// │    │── register/
// │    │   └── router/
// │    │       └── register.routes.js
// │    │── forgot/
// │    │   └── router/
// │    │       └── forgot.routes.js
// │    │── recovery/
// │    │   └── router/
// │    │       └── recovery.routes.js
// │    └── logout/
// │       └── router/
// │           └── logout.routes.js

// 2)
// src/modules/portfolio/
// ├── home/
// │   └── router/
// │       └── home.routes.js
// ├── about/
// │   └── router/
// │       └── about.routes.js
// ├── contact/
// │   └── router/
// │       └── contact.routes.js
// ├── posts/
// │   └── router/
// │       └── posts.routes.js
// ├── comments/
// │   └── router/
// │       └── comments.routes.js

import authRoutes from './routes/auth.routes.js';
import guestRoutes from './routes/guest.routes.js';
// import appRoutes from './routes/app.routes.js';

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
	routes: [
		// Rutas del portafolio (público)
		...guestRoutes,

		// Rutas de autenticación (con prefijo /auth)
		...authRoutes,

		// Rutas protegidas (para después)
		// ...appRoutes,

		{
			path: '/500',
			name: 'error-500',
			meta: {
				title: '500',
				description: 'Internal Server Error'
			},
			component: () => import('@/modules/errors/500/500.vue')
		},

		{
			path: '/:all(.*)*',
			name: 'error-404',
			meta: {
				title: '404',
				description: 'Page Not Found',
				showNavbar: false,
				showFooter: false,
				// showSidebar: false,
				// fullWidth: false
			},
			component: () => import('@/modules/errors/404/404.vue')
		},
	],
});

router.beforeEach((to, from, next) => {
	const isAuthenticated = !!localStorage.getItem('token');

	// roles
	if (to.meta.roles) {
		if (!to.meta.roles.includes(user.role)) {
			return next({ name: 'error-403' });
		}
	}

	// permissions
	if (to.meta.permissions) {
		const hasPermission = to.meta.permissions.every(p =>
			user.permissions?.includes(p)
		);
		if (!hasPermission) {
			return next({ name: 'error-403' });
		}
	}

	// Cambiar el título de la página
	if (to.meta.title) {
		document.title = to.meta.title;
	}

	// Rutas que requieren autenticación
	if (to.meta.requiresAuth && !isAuthenticated) {
		return next({ name: 'auth.login' });
	}

	// Rutas solo para invitados (no logueados)
	if (to.meta.guest && isAuthenticated) {
		return next({ name: 'home' });
	}

	next();
});

export default router;