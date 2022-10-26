import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/NavBar";
import s from "./Start.module.scss";
export const Start = defineComponent({
  setup(props, context) {
    const clickMe = () => {
      console.log("sss");
    };
    return () => (
      <div>
        <nav>
          <Navbar>
            {{
              default: "山竹记账",
              icon: () => <Icon name="menu" class={s.navIcon}></Icon>,
            }}
          </Navbar>
        </nav>
        <div class={s.icon_wrapper}>
          <Center>
            <Icon name="banner" class={s.iconPic} />
          </Center>
        </div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={clickMe}>
            开始记账
          </Button>
        </div>
        <FloatButton IconName="add"></FloatButton>
      </div>
    );
  },
});
