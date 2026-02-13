export default [
	{
		path: 'about',
		name: 'about',
		meta: {
			title: 'About - Mi Portafolio',
			description: 'Learn more about me and my work',
			guest: true,
			breadcrumb: 'About'
		},
		component: () => import('../views/AboutPage.vue'),
	},
]