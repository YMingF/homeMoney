import { defineComponent, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { DatetimePicker, Popup } from "vant";
import { Time } from "../../shared/time";
export const InputPad = defineComponent({
  setup(props, context) {
    const appendText = (n: number | string) => {
      if (refAmount.value.length >= 10) return;
      if (
        refAmount.value.includes(".") &&
        refAmount.value.split(".")[1].length >= 2
      ) {
        return;
      }
      const nString = n.toString();
      switch (nString) {
        case ".":
          if (refAmount.value.indexOf(".") !== -1) {
            return;
          }
          break;
        case "0":
          if (refAmount.value === "0") {
            return;
          }
          break;
        default:
          break;
      }
      refAmount.value = (refAmount.value + nString).replace(
        /^0+(\d+)/,
        () => RegExp.$1
      );
    };
    const buttons = [
      {
        text: "1",
        onClick: () => {
          appendText(1);
        },
      },
      {
        text: "2",
        onClick: () => {
          appendText(2);
        },
      },
      {
        text: "3",
        onClick: () => {
          appendText(3);
        },
      },
      {
        text: "4",
        onClick: () => {
          appendText(4);
        },
      },
      {
        text: "5",
        onClick: () => {
          appendText(5);
        },
      },
      {
        text: "6",
        onClick: () => {
          appendText(6);
        },
      },
      {
        text: "7",
        onClick: () => {
          appendText(7);
        },
      },
      {
        text: "8",
        onClick: () => {
          appendText(8);
        },
      },
      {
        text: "9",
        onClick: () => {
          appendText(9);
        },
      },
      {
        text: "清空",
        onClick: () => {
          refAmount.value = "0";
        },
      },
      {
        text: "0",
        onClick: () => {
          appendText(0);
        },
      },
      {
        text: ".",
        onClick: () => {
          appendText(".");
        },
      },
      { text: "提交", onClick: () => {} },
    ];
    const refAmount = ref("0");
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
                {new Time(refDate.value).format()}
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
          <div class={s.amount}>{refAmount.value}</div>
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
