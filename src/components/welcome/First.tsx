import { defineComponent, ref } from "vue";
import s from "./WelcomePage.module.scss";
import moneyPot from "../../assets/icons/moneyPot.svg";
import { RouterLink } from "vue-router";
import { WelcomPage } from "./welcomePage";
export const First = () => (
  <WelcomPage>
    {{
      icon: () => <img src={moneyPot} alt="" />,
      title: () => (
        <>
          <h2>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="start">
            跳过
          </RouterLink>
          <RouterLink to="2">下一页</RouterLink>
          <RouterLink to="start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomPage>
);

First.displayName = "First"; // 避免控制台报错
