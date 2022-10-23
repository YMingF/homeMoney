import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import s from "./Start.module.scss";
export const Start = defineComponent({
  setup(props, context) {
    const clickMe = () => {
      console.log("sss");
    };
    return () => (
      <div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={clickMe}>
            测试
          </Button>
        </div>
      </div>
    );
  },
});
