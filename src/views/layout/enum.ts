// vue菜单
export const vueMenuList = [
  {
    key: 'basic',
    name: '基础',
    children: [
      { key: 'bindClassAndStyle', name: '类与样式绑定', path: '/basic/bindClassAndStyle' },
      { key: 'ventHandling', name: '事件处理', path: '/basic/eventHandling' },
      { key: 'ref', name: '模板引用ref', path: '/basic/ref' }
    ]
  },
  {
    key: 'deepComponent',
    name: '深入组件',
    children: [{ key: 'slot', name: '插槽', path: '/deepComponent/slot' }]
  },
  {
    key: 'logicReuse',
    name: '逻辑复用',
    children: [
      { key: 'composables', name: '组合式函数', path: '/logicReuse/composables' },
      { key: 'customDirective', name: '自定义指令', path: '/logicReuse/customDirective' }
    ]
  },
  {
    key: '4',
    name: '内置组件'
  },
  {
    key: 'applicatonModularization',
    name: '应用规模化',
    children: [
      {
        key: 'stateManagement',
        name: '状态管理',
        path: '/applicatonModularization/stateManagement'
      }
      // { key: 'customDirective', name: '自定义指令', path: '/logicReuse/customDirective' }
    ]
  },
  {
    key: 'compositeApi',
    name: '组合式API',
    children: [
      {
        key: 'basic',
        name: '基础',
        path: '/compositeApi/basic'
      },
      {
        key: 'core',
        name: '核心',
        path: '/compositeApi/core'
      },
      {
        key: 'tool',
        name: '工具',
        path: '/compositeApi/tool'
      },
      {
        key: 'upgrade',
        name: '进阶',
        path: '/compositeApi/upgrade'
      },
      {
        key: 'lifecycleHook',
        name: '生命周期钩子',
        path: '/compositeApi/lifecycleHook'
      },
      {
        key: 'dependencyInjection',
        name: '依赖注入',
        path: '/compositeApi/dependencyInjection'
      }
    ]
  }
];

// 外层菜单
export const menuList = [
  {
    key: 'vue',
    name: 'Vue',
    children: vueMenuList
  },
  {
    key: 'react',
    name: 'React',
    children: []
  }
];
