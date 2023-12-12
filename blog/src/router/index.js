import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignUpView'
import LoginView from '../views/LoginView'
import AddPost from '../views/AddPostView'
import ContactsPage from '../views/ContactsPage.vue'
import IndividualPost from '../views/IndividualPost.vue'
import auth from "../auth";

const routes = [{
  path: "/",
  name: "home",
  component: HomeView,
  beforeEnter: async(to, from, next) => {
    let authResult = await auth.authenticated();
    if (!authResult) {
      next('/login')
    } else {
      next();
    }
  }
},
  {
    path: "/signup",
    name: "SignUp",
    component: SignupView,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LoginView,
  },
  {
    path: '/post/:id',
    name: 'individual-post',
    component: IndividualPost,
  },
  {
    path: "/add-post",
    name: "AddPost",
    component: AddPost,
  },
  {
    path: "/contacts",
    name: "ContactsPage",
    component: ContactsPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
