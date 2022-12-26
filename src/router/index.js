import { createRouter, createWebHistory } from "vue-router";
import Contacts from "../views/Contacts.vue";
import ContactDetails from "../views/ContactDetails.vue";
import ContactForm from "../views/ContactForm.vue";

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/contact-details/:id",
    name: "ContactDetails",
    component: ContactDetails,
  },
  {
    path: "/contact-form/:id",
    name: "ContactForm",
    component: ContactForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
