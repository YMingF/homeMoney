import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/game.svg";
export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>记一笔</h1>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  },
});
