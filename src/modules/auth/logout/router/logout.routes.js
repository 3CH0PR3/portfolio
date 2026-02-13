export default [
	{
		path: '/logout',
		name: 'auth.logout',
		meta: {
			title: 'Logout',
			requiresAuth: true
		},
		component: () => import('../view/Logout.vue'),
	}
];