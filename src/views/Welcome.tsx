import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import banner from "../assets/icons/banner.svg";
import { useSwipe } from "../hooks/useSwipe";
export const Welcome = defineComponent({
  setup() {
    const main = ref<HTMLElement | null>(null);
    const { direction } = useSwipe(main);
    watchEffect(() => {
      console.log(direction.value);
    });
    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref="#banner"></use>
          </svg>
          <h1>记一笔</h1>
        </header>
        <main ref={main} style="position:relative">
          <RouterView name="main">
            {({
              Component: Content,
              route: R,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {Content}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});
