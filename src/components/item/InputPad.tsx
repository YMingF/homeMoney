import { defineComponent, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { DatetimePicker, Popup } from "vant";
import { time } from "../../shared/time";
export const InputPad = defineComponent({
  setup(props, context) {
    const buttons = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      { text: "4", onClick: () => {} },
      { text: "5", onClick: () => {} },
      { text: "6", onClick: () => {} },
      { text: "7", onClick: () => {} },
      { text: "8", onClick: () => {} },
      { text: "9", onClick: () => {} },
      { text: "清空", onClick: () => {} },
      { text: "0", onClick: () => {} },
      { text: ".", onClick: () => {} },
      { text: "提交", onClick: () => {} },
    ];
    const refShowPop = ref(false);
    const now = new Date();
    const refDate = ref<Date>(now);
    const refDatePickerVisible = ref(false);
    const showDatePicker = () => (refDatePickerVisible.value = true);
    const hideDatePicker = () => (refDatePickerVisible.value = false);
    const setDate = (date: Date) => {
      refDate.value = date;
      hideDatePicker();
    };
    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon}></Icon>
            <span>
              {" "}
              <span onClick={showDatePicker}>
                {time(refDate.value).format()}
              </span>
              <Popup
                position="bottom"
                v-model:show={refDatePickerVisible.value}
              >
                <DatetimePicker
                  value={refDate.value}
                  type="date"
                  title="选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </Popup>
            </span>
          </span>
          <div class={s.amount}>200</div>
        </div>
        <div class={s.buttons}>
          {buttons.map((m) => (
            <button onClick={m.onClick}>{m.text}</button>
          ))}
        </div>
      </>
    );
  },
});
