import clock from "../../../assets/icons/clock.svg";
import { WelcomPage } from "../welcomePage";
export const Second = () => (
  <WelcomPage>
    {{
      icon: () => (
        <>
          <svg>
            <use xlinkHref="#clock"></use>
          </svg>
        </>
      ),
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
Second.displayName = "Second"; // 避免控制台报错
