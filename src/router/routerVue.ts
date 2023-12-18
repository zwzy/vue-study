// 基础
const basicRoute = [
  {
    path: 'basic/bindClassAndStyle',
    name: 'BindClassAndStyle',
    component: () => import('../views/vue/basic/BindClassAndStyle.vue')
  },
  {
    path: 'basic/eventHandling',
    name: 'EventHandling',
    component: () => import('../views/vue/basic/EventHandling.vue')
  },
  {
    path: 'basic/ref',
    name: 'Ref',
    component: () => import('../views/vue/basic/RefTemplate.vue')
  }
];
// 深入组件
const deepComponentRoute = [
  {
    path: 'deepComponent/slot',
    name: 'Slot',
    component: () => import('../views/vue/deepComponent/Slot.vue')
  }
];
// 逻辑复用
const logicReuse = [
  {
    path: 'logicReuse/composables',
    name: 'Composables',
    component: () => import('../views/vue/logicReuse/Composables.vue')
  },
  {
    path: 'logicReuse/customDirective',
    name: 'CustomDirective',
    component: () => import('../views/vue/logicReuse/CustomDirective.vue')
  }
];
// 应用模块化
const applicatonModularization = [
  {
    path: 'applicatonModularization/stateManagement',
    name: 'StateManagement',
    component: () => import('../views/vue/applicatonModularization/StateManagement.vue')
  }
];
// 组合式API
const compositeApi = [
  {
    path: 'compositeApi/basic',
    name: 'Basic',
    component: () => import('../views/vue/compositeApi/Basic.vue')
  },
  {
    path: 'compositeApi/core',
    name: 'Core',
    component: () => import('../views/vue/compositeApi/Core.vue')
  },
  {
    path: 'compositeApi/tool',
    name: 'Tool',
    component: () => import('../views/vue/compositeApi/Tool.vue')
  },
  {
    path: 'compositeApi/upgrade',
    name: 'Upgrade',
    component: () => import('../views/vue/compositeApi/Upgrade.vue')
  },
  {
    path: 'compositeApi/lifecycleHook',
    name: 'LifecycleHook',
    component: () => import('../views/vue/compositeApi/LifecycleHook.vue')
  },
  {
    path: 'compositeApi/dependencyInjection',
    name: 'DependencyInjection',
    component: () => import('../views/vue/compositeApi/DependencyInjection.vue')
  }
];
export const routerVue = [
  ...basicRoute,
  ...deepComponentRoute,
  ...logicReuse,
  ...applicatonModularization,
  ...compositeApi
];
