import { defineComponent, ref } from "vue";
import moneyPot from "../../../assets/icons/moneyPot.svg";
import { WelcomPage } from "../welcomePage";
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
    }}
  </WelcomPage>
);

First.displayName = "First"; // 避免控制台报错
