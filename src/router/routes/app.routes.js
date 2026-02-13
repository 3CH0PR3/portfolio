const appModuleRoutes = import.meta.glob('@/modules/app/**/routes/*.routes.js', { eager: true });

const routes = Object.values(appModuleRoutes).flatMap(module => module.default || []);

export default routes;