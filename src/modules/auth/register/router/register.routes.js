export default [
	{
		path: '/register',
		name: 'auth.register',
		meta: {
			title: 'Register',
			guest: true
		},
		component: () => import('../view/Register.vue'),
	},
];