import GuestLayout from '@/layouts/GuestLayout.vue';

const portfolioModuleRoutes = import.meta.glob('@/modules/portfolio/**/router/*.routes.js', { eager: true });

const routes = Object.values(portfolioModuleRoutes).flatMap(module => module.default || []);

export default [
	{
		path: '/',
		component: GuestLayout,
		children: routes
	}
];