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
      }
    ]
  }
];
