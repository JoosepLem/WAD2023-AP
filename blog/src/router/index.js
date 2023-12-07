import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignUpView'
import LoginView from '../views/LoginView'
import AddPost from '../views/AddPostView'
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
    path: "/add-post",
    name: "AddPost",
    component: AddPost,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
