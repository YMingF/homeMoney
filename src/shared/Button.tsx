import { defineComponent, Prop, PropType } from "vue";
import s from "./Button.module.scss";
interface Props {}
export const Button = defineComponent({
  props: {
    onClick: { type: Function as PropType<(e: MouseEvent) => void> },
    level: {
      type: String as PropType<"primary" | "danger" | "normal">,
      default: "primary",
    },
    type: { type: String as PropType<"submit" | "button">, default: "button" },
  },
  setup(props, context) {
    return () => (
      <button type={props.type} class={[s.button, s[props.level]]}>
        {context.slots.default?.()}
      </button>
    );
  },
});
