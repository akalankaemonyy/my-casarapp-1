const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'index', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('src/pages/About-page.vue') },
      { path: 'Contact', component: () => import('src/pages/contact-page.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
