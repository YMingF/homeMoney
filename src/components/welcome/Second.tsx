import { defineComponent, ref } from "vue";
import s from "./WelcomePage.module.scss";
import clock from "../../assets/icons/clock.svg";
import { RouterLink } from "vue-router";
import { WelcomPage } from "./welcomePage";
export const Second = () => (
  <WelcomPage>
    {{
      icon: () => <img class={s.moneyPot} src={clock} alt="" />,
      title: () => (
        <h2>
          每日提醒
          <br />
          不遗漏每一笔账单
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="start">
            跳过
          </RouterLink>
          <RouterLink to="3">下一页</RouterLink>
          <RouterLink to="start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomPage>
);
Second.displayName = "Second"; // 避免控制台报错
