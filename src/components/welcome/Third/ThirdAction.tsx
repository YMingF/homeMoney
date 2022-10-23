import s from "../WelcomePage.module.scss";
import { RouterLink } from "vue-router";
export const ThirdAction = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to="start">
      跳过
    </RouterLink>
    <RouterLink to="4">下一页</RouterLink>
    <RouterLink to="start">跳过</RouterLink>
  </div>
);

ThirdAction.displayName = "ThirdAction"; // 避免控制台报错
