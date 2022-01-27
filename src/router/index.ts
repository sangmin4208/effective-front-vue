import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import PostList from '@/modules/post/components/PostList.vue'
import PostCreate from '@/modules/post/components/PostCreate.vue'
import PostDetail from '@/modules/post/components/PostDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostList,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreate,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
