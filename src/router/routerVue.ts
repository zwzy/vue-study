export const routerVue = [
  {
    path: 'basic',
    name: 'Basic',
    redirect: 'bindClassAndStyle',
    children: [
      {
        path: 'bindClassAndStyle',
        name: 'BindClassAndStyle',
        component: () => import('../views/vue/basic/BindClassAndStyle.vue')
      },
      {
        path: 'eventHandling',
        name: 'EventHandling',
        component: () => import('../views/vue/basic/EventHandling.vue')
      },
      {
        path: 'ref',
        name: 'Ref',
        component: () => import('../views/vue/basic/RefTemplate.vue')
      }
    ]
  },
  {
    path: 'deepComponent',
    name: 'DeepComponent',
    redirect: 'slot',
    children: [
      {
        path: 'slot',
        name: 'Slot',
        component: () => import('../views/vue/deepComponent/Slot.vue')
      }
    ]
  },
  {
    path: 'logicReuse',
    name: 'LogicReuse',
    redirect: 'composables',
    children: [
      {
        path: 'composables',
        name: 'Composables',
        component: () => import('../views/vue/logicReuse/Composables.vue')
      },
      {
        path: 'customDirective',
        name: 'CustomDirective',
        component: () => import('../views/vue/logicReuse/CustomDirective.vue')
      }
    ]
  },
  {
    path: 'applicatonModularization',
    name: 'ApplicatonModularization',
    redirect: 'stateManagement',
    children: [
      {
        path: 'stateManagement',
        name: 'StateManagement',
        component: () => import('../views/vue/applicatonModularization/StateManagement.vue')
      }
    ]
  },
  {
    path: 'compositeApi',
    name: 'CompositeApi',
    children: [
      {
        path: 'basic',
        name: 'Basic',
        component: () => import('../views/vue/compositeApi/Basic.vue')
      },
      {
        path: 'core',
        name: 'Core',
        component: () => import('../views/vue/compositeApi/Core.vue')
      },
      {
        path: 'tool',
        name: 'Tool',
        component: () => import('../views/vue/compositeApi/Tool.vue')
      },
      {
        path: 'upgrade',
        name: 'Upgrade',
        component: () => import('../views/vue/compositeApi/Upgrade.vue')
      },
      {
        path: 'lifecycleHook',
        name: 'LifecycleHook',
        component: () => import('../views/vue/compositeApi/LifecycleHook.vue')
      },
      {
        path: 'dependencyInjection',
        name: 'DependencyInjection',
        component: () => import('../views/vue/compositeApi/DependencyInjection.vue')
      }
    ]
  }
];
