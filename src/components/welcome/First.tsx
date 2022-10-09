import { defineComponent, ref } from "vue";
import s from "./First.module.scss";
import moneyPot from "../../assets/icons/moneyPot.svg";
import { RouterLink } from "vue-router";
export const First = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.moneyPot} src={moneyPot} alt="" />
          <h2>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </div>
        {/* 操作按钮 */}
        <div class={s.actions}>
          <RouterLink class={s.fake} to="start">
            跳过
          </RouterLink>
          <RouterLink to="welcome/2">下一页</RouterLink>
          <RouterLink to="start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
