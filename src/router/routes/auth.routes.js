const authModuleRoutes = import.meta.glob('@/modules/auth/**/router/*.routes.js', { eager: true });

const routes = Object.values(authModuleRoutes)
	.flatMap(module => module.default || [])
	.map(route => ({ ...route, path: `/auth${route.path}` }));

export default routes;