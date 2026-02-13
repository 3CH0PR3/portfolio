export default [
	{
		path: '/forgot-password',
		name: 'auth.forgot-password',
		meta: {
			title: 'Forgot Password',
			guest: true
		},
		component: () => import('../view/ForgotPassword.vue'),
	},
];