import s from "../WelcomePage.module.scss";
import { RouterLink } from "vue-router";
export const FirstActions = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to="start">
      跳过
    </RouterLink>
    <RouterLink to="2">下一页</RouterLink>
    <RouterLink to="start">跳过</RouterLink>
  </div>
);

FirstActions.displayName = "FirstActions"; // 避免控制台报错
