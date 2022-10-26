import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import s from "./Start.module.scss";
export const Start = defineComponent({
  setup(props, context) {
    const clickMe = () => {
      console.log("sss");
    };
    return () => (
      <div>
        <nav>menu</nav>
        <Center class={s.icon_wrapper}>
          <Icon name="banner" class={s.iconPic} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={clickMe}>
            测试
          </Button>
        </div>
        <FloatButton IconName="add"></FloatButton>
      </div>
    );
  },
});
