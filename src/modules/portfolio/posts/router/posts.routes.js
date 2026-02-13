export default [
	{
		path: 'posts',
		name: 'posts.index',
		meta: {
			title: 'Blog - Posts',
			description: 'List of posts',
			// permissions: ['view_posts'],
			breadcrumb: 'Blog'
		},
		component: () => import('../views/PostsList.vue'),
	},
	{
		path: 'posts/create',
		name: 'posts.create',
		meta: {
			title: 'Create - Post',
			description: 'Create a new post',
			requiresAuth: true,
			// permissions: ['create_post'],
			parent: 'posts'
		},
		component: () => import('../views/PostsCreate.vue'),
	},
	{
		path: 'posts/:id',
		name: 'posts.show',
		props: true,
		meta: {
			title: 'Detail - Post',
			description: 'Detail of a post',
			requiresAuth: true,
			permissions: ['view_post'],
			parent: 'posts'
		},
		component: () => import('../views/PostShow.vue'),
	},
];