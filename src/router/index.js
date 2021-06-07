import Vue from "vue";
import Router from "vue-router";
import ListUser from "@/components/ListUser";
import CreateUser from "../components/CreateUser";
import EditUser from "../components/EditUser";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/users",
      name: "ListUser",
      component: ListUser
    },
    {
      path: "/users/create",
      name: "CreateUser",
      component: CreateUser
    },
    {
      path: "/users/edit/:id",
      name: "EditUser",
      component: EditUser
    }
  ]
});
