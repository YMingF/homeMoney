import { defineComponent } from "vue";
import { Icon } from "./Icon";
import s from "./FloatButton.module.scss";
export const FloatButton = defineComponent({
  props: {
    IconName: { type: String, required: true },
  },
  setup(props) {
    return () => (
      <div class={s.floatButton}>
        <Icon name={props.IconName} class={s.icon}></Icon>
      </div>
    );
  },
});
