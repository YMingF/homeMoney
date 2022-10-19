import { defineComponent, ref } from "vue";
import s from "./WelcomePage.module.scss";
import chart from "../../assets/icons/chart.svg";
import { RouterLink } from "vue-router";
import { WelcomPage } from "./welcomePage";
export const Third = () => (
  <WelcomPage>
    {{
      icon: () => <img class={s.moneyPot} src={chart} alt="" />,
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
          <RouterLink to="4">下一页</RouterLink>
          <RouterLink to="start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomPage>
);

Third.displayName = "Third"; // 避免控制台报错
