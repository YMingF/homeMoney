import { defineComponent } from "vue";
import s from "./Icon.module.scss";
export const Icon = defineComponent({
  props: {
    name: { tyep: String, required: true },
  },
  setup(props) {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    );
  },
});
