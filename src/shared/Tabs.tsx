import { defineComponent, ref } from "vue";
import s from "./Tabs.module.scss";
export const Tabs = defineComponent({
  props: {
    selected: String,
  },
  setup(props, context) {
    return () => {
      const tabs = context.slots.default?.();
      if (!tabs) return () => null;
      for (let i = 0; i > tabs.length; i++) {
        if (tabs[i].type !== Tab) {
          throw new Error("<Tabs> only accept <Tab> as children");
        }
      }
      console.log(tabs);
      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {tabs.map((item) => (
              <li
                class={item.props?.name === props.selected ? s.selected : ""}
                onClick={() =>
                  context.emit("update:selected", item.props?.name)
                }
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
          {/* 根据当前选中的tab渲染对应的组件内容 */}
          <div>{tabs.find((item) => item.props?.name === props.selected)}</div>
        </div>
      );
    };
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup(props, context) {
    return () => (
      <>
        <div>{context.slots.default?.()}</div>
      </>
    );
  },
});
