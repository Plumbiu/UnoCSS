import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const allFiles = import.meta.glob('../components/*/*.vue')
const alllData = []
for(let i in allFiles) {
  const newName = i.slice(i.lastIndexOf('/') + 1, i.indexOf('.vue'))
  alllData.push({
    path: newName.toLocaleLowerCase(),
    component: allFiles[i],
  })
}
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/aspectratio', children: alllData },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export {
  alllData
}
export default router
