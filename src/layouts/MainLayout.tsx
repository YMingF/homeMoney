import { defineComponent, ref } from "vue";
import { Center } from "../shared/Center";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/NavBar";
export const MainLayout = defineComponent({
  setup(props, { slots }) {
    return () => (
      <>
        <div>
          <Navbar>
            {{
              default: () => slots.title?.(),
              icon: () => slots.icon?.(),
            }}
          </Navbar>
          <div>{slots.default?.()}</div>
        </div>
      </>
    );
  },
});
