import { WelcomPage } from "../welcomePage";
export const Fourth = () => (
  <WelcomPage>
    {{
      icon: () => (
        <>
          <svg>
            <use xlinkHref="#cloud"></use>
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
Fourth.displayName = "Fourth"; // 避免控制台报错
