import s from "../WelcomePage.module.scss";
import { RouterLink } from "vue-router";
export const FourthActions = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to="start">
      跳过
    </RouterLink>
    <RouterLink to="/start">完成</RouterLink>
    <RouterLink class={s.fake} to="start">
      跳过
    </RouterLink>
  </div>
);

FourthActions.displayName = "FourthActions"; // 避免控制台报错
