import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import banner from "../assets/icons/banner.svg";
export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={banner} />
          <h1>记一笔</h1>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  },
});
