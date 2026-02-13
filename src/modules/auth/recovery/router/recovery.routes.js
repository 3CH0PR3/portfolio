export default [
	{
		path: '/reset-password',
		name: 'auth.reset-password',
		meta: {
			title: 'Reset Password',
			guest: true
		},
		component: () => import('../view/ResetPassword.vue'),
	}
];