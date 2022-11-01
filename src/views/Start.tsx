import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/NavBar";
import { Overlay } from "../shared/Overlay";
import s from "./Start.module.scss";
export const Start = defineComponent({
  setup(props, context) {
    const overlayVisible = ref(false);
    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value;
    };
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => (
            <Icon name="menu" class={s.navIcon} onClick={onClickMenu}></Icon>
          ),
          default: () => (
            <>
              <div class={s.icon_wrapper}>
                <Center>
                  <Icon name="banner" class={s.iconPic} />
                </Center>
              </div>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create">
                  <Button class={s.button}>开始记账</Button>
                </RouterLink>
              </div>
              <RouterLink to="/items/create">
                <FloatButton IconName="add"></FloatButton>
              </RouterLink>
              {overlayVisible.value && (
                <Overlay onClose={() => (overlayVisible.value = false)} />
              )}
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
