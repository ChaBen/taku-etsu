import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Works from './pages/Works.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import MainNavbar from './layout/MainNavbar.vue'
import MainFooter from './layout/MainFooter.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        footer: { backgroundColor: 'black' },
        header: { colorOnScroll: 65 }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: MainNavbar, footer: MainFooter },
      props: { header: { colorOnScroll: 450 }}
    },
    {
      path: '/works',
      name: 'works',
      components: { default: Works, header: MainNavbar, footer: MainFooter },
      props: { header: { colorOnScroll: 450 }}
    },
    {
      path: '/contact',
      name: 'contact',
      components: { default: Contact, header: MainNavbar, footer: MainFooter },
      props: { header: { colorOnScroll: 450 }}
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
