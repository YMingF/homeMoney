import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = { x: number; y: number };
export const useSwipe = (element: Ref<HTMLElement | undefined>) => {
  const start = ref<Point>(); // 滑动开始坐标
  const end = ref<Point>(); // 滑动完的坐标
  const swiping = ref(false); // 表示当前是否处于滑动状态
  const distance = computed(() => {
    // 滑动开始和结束两种状态的距离间隔
    if (!start.value || !end.value) {
      return "";
    }
    return {
      x: end.value.x - start.value.x,
      y: end.value.y - start.value.y,
    };
  });
  const direction = computed(() => {
    // 根据移动的距离判断方向
    if (!distance.value || !swiping) {
      return "";
    }
    const { x, y } = distance.value;
    if (Math.abs(x) - Math.abs(y) > 0) {
      return x > 0 ? "right" : "left";
    } else {
      return y > 0 ? "down" : "up";
    }
  });

  const onStart = (e: TouchEvent) => {
    e.preventDefault(); // 避免背景一起滑动
    swiping.value = true;
    end.value = undefined;
    start.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };
  const onMove = (e: TouchEvent) => {
    end.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };
  const onEnd = (e: TouchEvent) => {
    swiping.value = false;
    end.value = undefined;
    start.value = undefined;
  };
  onMounted(() => {
    console.log("元素是啥");
    console.log(element);
    element.value?.addEventListener("touchstart", onStart);
    element.value?.addEventListener("touchmove", onMove);
    element.value?.addEventListener("touchend", onEnd);
  });
  onUnmounted(() => {
    element.value?.removeEventListener("touchstart", onStart);
    element.value?.removeEventListener("touchmove", onMove);
    element.value?.removeEventListener("touchend", onEnd);
  });
  return { distance, direction, swiping };
};
