import s from "../WelcomePage.module.scss";
import cloud from "../../../assets/icons/cloud.svg";
import { WelcomPage } from "../welcomePage";
export const Fourth = () => (
  <WelcomPage>
    {{
      icon: () => <img class={s.moneyPot} src={cloud} alt="" />,
      title: () => (
        <h2>
          每日提醒
          <br />
          不遗漏每一笔账单
        </h2>
      ),
    }}
  </WelcomPage>
);
Fourth.displayName = "Fourth"; // 避免控制台报错
