import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  setup(props, context) {
    const refKind = ref("支出");
    return () => (
      <>
        <MainLayout>
          {{
            title: () => "记一笔",
            icon: () => <Icon name="leftBack" class={s.navIcon}></Icon>,
            default: () => (
              <>
                <Tabs v-model:selected={refKind.value}>
                  <Tab name="支出">
                    <p>啥子玩意11</p>
                  </Tab>
                  <Tab name="收入">
                    <p>啥子玩意22</p>
                  </Tab>
                </Tabs>
                <div class={s.inputPad_wrapper}>
                  <InputPad></InputPad>
                </div>
              </>
            ),
          }}
        </MainLayout>
      </>
    );
  },
});
