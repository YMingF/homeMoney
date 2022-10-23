import s from "../WelcomePage.module.scss";
import { RouterLink } from "vue-router";
export const SecondActions = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to="start">
      跳过
    </RouterLink>
    <RouterLink to="3">下一页</RouterLink>
    <RouterLink to="start">跳过</RouterLink>
  </div>
);

SecondActions.displayName = "SecondActions"; // 避免控制台报错
