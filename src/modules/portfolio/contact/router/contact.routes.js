export default [
	{
		path: 'contact',
		name: 'contact',
		meta: {
			title: 'Contact me - Mi Portafolio',
			description: 'Contact me',
			guest: true,
		},
		component: () => import('../views/ContactPage.vue')
	}
]