import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contribue0 from '../views/Contribue0.vue'
import Contribue3 from '../views/Contribue3.vue'
import Test1 from '../views/Test1.vue'
import Test3_1 from '../views/Test3_1.vue'
import Test3_2 from '../views/Test3_2.vue'
import Play from '../views/Play.vue'
import Replay from '../views/Replay.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contribue0',
    name: 'Contribue0',
    component: Contribue0
  },
  {
    path: '/Contribue3',
    name: 'Contribue3',
    component: Contribue3
  },
  {
    path: '/Test1',
    name: 'Test1',
    component: Test1

  },
  {
    path: '/Test3_1',
    name: 'Test3_1',
    component: Test3_1

  },
  {
    path: '/Test3_2',
    name: 'Test3_2',
    component: Test3_2
  },
  {
    path: '/Play',
    name: 'Play',
    component: Play
  },
  {
    path: '/Replay',
    name: 'Replay',
    component: Replay
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
