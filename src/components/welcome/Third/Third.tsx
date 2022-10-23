import { WelcomPage } from "../welcomePage";
export const Third = () => (
  <WelcomPage>
    {{
      icon: () => (
        <>
          <svg>
            <use xlinkHref="#chart"></use>
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

Third.displayName = "Third"; // 避免控制台报错
