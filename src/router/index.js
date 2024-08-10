// router.js
import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FinancialSupermarket from "../pages/FinancialSupermarket.vue";
import FinancialClassroom from "../pages/FinancialClassroom.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: HomePage },
    { path: "/financial-supermarket", component: FinancialSupermarket },
    { path: "/financial-classroom", component: FinancialClassroom },
  ],
});
