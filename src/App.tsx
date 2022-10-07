import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App=defineComponent({
    setup(){
        return ()=><>
        <router-link to='/about'>about</router-link>
        <RouterView/>
        </>
    }
})