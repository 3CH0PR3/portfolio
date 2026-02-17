export default [
	{
		path: '/',
		name: 'home',

		meta: {
			title: 'Mi Portafolio',
			guest: true,
			breadcrumb: 'Home'
		},

		component: () => import('../views/HomePage.vue'),
	},

	{
		path: '/project/:slug',
		name: 'project',

		meta: {
			title: 'Projects - Mi Portafolio',
			guest: true,
			breadcrumb: 'Project'
		},

		component: () => import('../views/projectView.vue'),
	}
];