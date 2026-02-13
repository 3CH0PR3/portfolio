export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Portafolio',
      description: 'Welcome to our site',
			guest: true,
			// permissions: ['edit_posts'],
			breadcrumb: 'Home'
    },
    component: () => import('../views/HomePage.vue'),
  },
];