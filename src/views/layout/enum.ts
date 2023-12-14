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
    key: '5',
    name: '应用规模化'
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
