import { WelcomPage } from "../welcomePage";
export const First = () => (
  <WelcomPage>
    {{
      icon: () => (
        <>
          <svg>
            <use xlinkHref="#moneyPot"></use>
          </svg>
        </>
      ),
      title: () => (
        <>
          <h2>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </>
      ),
    }}
  </WelcomPage>
);

First.displayName = "First"; // 避免控制台报错
