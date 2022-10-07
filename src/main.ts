import { createApp } from 'vue'
import {App} from './App'
import { Bar } from './views/Bar'
import { Foo } from './views/Foo'
import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {path:'/',component:Foo},
    {path:'/about',component:Bar},
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })
  
  // 5. 创建并挂载根实例
  const app = createApp(App)
  //确保 _use_ 路由实例使
  //整个应用支持路由。
  app.use(router)
  
  app.mount('#app')
