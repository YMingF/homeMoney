import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import {
  RouteLocationNormalizedLoaded,
  RouterView,
  useRoute,
  useRouter,
} from "vue-router";
import s from "./Welcome.module.scss";
import { useSwipe } from "../hooks/useSwipe";
import { throttle } from "../shared/throttle";
const routeObj: Record<string, string> = {
  Welcome1: "Welcome2",
  Welcome2: "Welcome3",
  Welcome3: "Welcome4",
  Welcome4: "start",
};
export const Welcome = defineComponent({
  setup() {
    const main = ref<HTMLElement>();
    const { swiping, direction } = useSwipe(main);
    const route = useRoute();
    const router = useRouter();
    const replace = throttle(() => {
      const routeName = route.name?.toString() || "Welcome1";
      route.name &&
        router.replace({
          name: routeObj[routeName],
        });
    }, 500);
    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        replace();
      }
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
