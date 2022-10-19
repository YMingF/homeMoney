import { defineComponent, ref } from "vue";
import s from "./WelcomePage.module.scss";
export const WelcomPage = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {slots.icon?.()}
          {slots.title?.()}
        </div>
        {/* 操作按钮 */}
        <div class={s.actions}>{slots.buttons?.()}</div>
      </div>
    );
  },
});
