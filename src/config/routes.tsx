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
];
