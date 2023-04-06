import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
   
    {
        path: "/contact/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
     {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },

    {
        path: "/contact/",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
       
    },
    {
        path: "/register/",
        name: "register",
        component: () => import("@/views/Register.vue"),
    },{
        path: "/login/",
        name: "login",
        component: () => import("@/views/Login.vue"),
    }

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


//Global guards
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("token");
    if (to.name !== "login" && to.name !== "register" && !isAuthenticated) {
      next({ name: "login" });
    } else {
      next();
    }
  });



export default router;
