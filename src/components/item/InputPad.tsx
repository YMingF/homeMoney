import { defineComponent, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
export const InputPad = defineComponent({
  setup(props, context) {
    const buttons = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      { text: "清空", onClick: () => {} },
      { text: "4", onClick: () => {} },
      { text: "5", onClick: () => {} },
      { text: "6", onClick: () => {} },
      { text: "+", onClick: () => {} },
      { text: "7", onClick: () => {} },
      { text: "8", onClick: () => {} },
      { text: "9", onClick: () => {} },
      { text: "-", onClick: () => {} },
      { text: ".", onClick: () => {} },
      { text: "0", onClick: () => {} },
      { text: "删", onClick: () => {} },
      { text: "提交", onClick: () => {} },
    ];
    return () => (
      <>
        <div>
          <span class={s.notes}>
            <Icon name="date"></Icon>
            <span>2022-10-10</span>
          </span>
          <div class={s.amount}>数字</div>
        </div>
        <div class={s.buttons}>
          {buttons.map((m) => (
            <button onClick={m.onClick}>{m.text}</button>
          ))}
        </div>
      </>
    );
  },
});
