import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from "../views/ServicesView.vue";
import AboutView from "../views/AboutView.vue";
import GalleryView from "../views/GalleryView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import GetQuoteView from "../views/GetQuoteView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about-ranchero",
		name: "about-ranchero",
		component: AboutView,
	},
	{
		path: "/services",
		name: "services",
		component: ServicesView,
	},
	{
		path: "/gallery",
		name: "gallery",
		component: GalleryView,
	},
	{
		path: "/contact-us",
		name: "contact-us",
		component: ContactUsView,
	},
	{
		path: "/get-a-quote",
		name: "get-a-quote",
		component: GetQuoteView,
	},
	{
		path: "/:catchAll(.*)",
		name: "NotFound",
		component: NotFound,
	},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
