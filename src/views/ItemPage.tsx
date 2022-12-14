import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
export const ItemPage = defineComponent({
  setup(props, context) {
    return () => (
      <>
        <div>
          <RouterView></RouterView>
        </div>
      </>
    );
  },
});
