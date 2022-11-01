import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  setup(props, context) {
    const content = "sad";
    return () => (
      <>
        <MainLayout>
          {{
            title: () => "记一笔",
            icon: () => <Icon name="leftBack" class={s.navIcon}></Icon>,
            default: () => "默认内容",
          }}
        </MainLayout>
      </>
    );
  },
});
