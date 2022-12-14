import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import ContactEdit from '../views/ContactEdit.vue'
import ContactDetails from '../views/ContactDetails.vue'
import Charts from '../views/Charts.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/contact/edit/:_id?',
      name: 'contact edit',
      component: ContactEdit
    },
    {
      path: '/contact/:_id',
      name: 'contact details',
      component: ContactDetails
    },
    {
      path: '/stats',
      name: 'statistics',
      component: Charts
    },
  ]
}

const router = createRouter(routerOptions)

export default router
