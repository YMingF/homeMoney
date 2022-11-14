import { Overlay } from "vant";
import { defineComponent, reactive, ref, watch } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { Time } from "../../shared/time";
import s from "./ItemList.module.scss";
import { ItemSummary } from "./ItemSummary";
export const ItemList = defineComponent({
  setup(props, context) {
    const refSelected = ref("本月");
    const refOverlayVisible = ref(false);
    const time = new Time();
    const customTime = reactive({ start: new Time(), end: new Time() });
    const timeList = [
      { start: time.firstDayOfMonth(), end: time.lastDayOfMonth() },
      {
        start: time.add(-1, "month").firstDayOfMonth(),
        end: time.add(-1, "month").lastDayOfMonth(),
      },
      { start: time.firstDayOfYear(), end: time.lastDayOfYear() },
    ];
    watch(
      () => refSelected.value,
      () => {
        refOverlayVisible.value = refSelected.value === "自定义时间";
      }
    );
    return () => (
      <>
        <MainLayout>
          {{
            title: () => "记账",
            icon: () => <Icon name="menu"></Icon>,
            default: () => (
              <>
                <Tabs v-model:selected={refSelected.value}>
                  <Tab name="本月">
                    <ItemSummary
                      startDate={timeList[0].start.format()}
                      endDate={timeList[0].end.format()}
                    ></ItemSummary>
                  </Tab>
                  <Tab name="上月">
                    <ItemSummary
                      startDate={timeList[1].start.format()}
                      endDate={timeList[1].end.format()}
                    ></ItemSummary>
                  </Tab>
                  <Tab name="今年">
                    <ItemSummary
                      startDate={timeList[2].start.format()}
                      endDate={timeList[2].end.format()}
                    ></ItemSummary>
                  </Tab>
                  <Tab name="自定义时间">
                    <ItemSummary
                      startDate={customTime.start.format()}
                      endDate={customTime.end.format()}
                    ></ItemSummary>
                  </Tab>
                </Tabs>
                <Overlay show={refOverlayVisible.value} class={s.overlay}>
                  <div class={s.overlay_inner}>
                    <header>请选择时间</header>
                    <main>
                      <form>
                        <div></div>
                        <div></div>
                      </form>
                    </main>
                  </div>
                </Overlay>
              </>
            ),
          }}
        </MainLayout>
      </>
    );
  },
});
