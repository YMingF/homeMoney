import { defineComponent, Prop, PropType } from "vue";
import s from "./Icon.module.scss";

export const Icon = defineComponent({
  props: {
    name: { tyep: String, required: true },
    onClick: { type: Function as PropType<(e: MouseEvent) => void> },
  },
  setup(props) {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    );
  },
});
