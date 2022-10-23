import s from "../WelcomePage.module.scss";
import chart from "../../../assets/icons/chart.svg";
import { WelcomPage } from "../welcomePage";
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
    }}
  </WelcomPage>
);

Third.displayName = "Third"; // 避免控制台报错
