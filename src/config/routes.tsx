import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First/First";
import { FirstActions } from "../components/welcome/First/FirstActions";
import { Fourth } from "../components/welcome/Fourth/Fourth";
import { FourthActions } from "../components/welcome/Fourth/FourthActions";
import { Second } from "../components/welcome/Second/Second";
import { SecondActions } from "../components/welcome/Second/SecondActions";
import { Third } from "../components/welcome/Third/Third";
import { ThirdAction } from "../components/welcome/Third/ThirdAction";
import { Welcome } from "../views/Welcome";
import { Start } from "../views/Start";
import { ItemPage } from "../views/ItemPage";
import { ItemList } from "../components/item/ItemList";
import { ItemCreate } from "../components/item/ItemCreate";
import { TagPage } from "../views/TagPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      {
        path: "1",
        name: "Welcome1",
        components: { main: First, footer: FirstActions },
      },
      {
        path: "2",
        name: "Welcome2",
        components: { main: Second, footer: SecondActions },
      },
      {
        path: "3",
        name: "Welcome3",
        components: { main: Third, footer: ThirdAction },
      },
      {
        path: "4",
        name: "Welcome4",
        components: { main: Fourth, footer: FourthActions },
      },
    ],
  },
  { path: "/start", component: Start },
  {
    path: "/items",
    component: ItemPage,
    children: [
      { path: "", component: ItemList },
      { path: "create", component: ItemCreate },
    ],
  },
  {
    path: "/tags",
    component: TagPage,
    children: [
      { path: "create", component: TagCreate },
      { path: ":id/edit", component: TagEdit },
    ],
  },
];
