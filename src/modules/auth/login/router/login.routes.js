export default [
	{
		path: '/login',
		name: 'auth.login',
		meta: {
			title: 'Login',
			guest: true
		},
		component: () => import('../view/Login.vue'),
	}
];