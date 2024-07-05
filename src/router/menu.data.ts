interface Menu {
  icon: string;
  name: string;
  path: string;
}

export const menus: Menu[] = [
  {
    icon: 'mdi-home',
    name: 'Home',
    path: '/home'
  },
  {
    icon: 'mdi-account',
    name: 'About',
    path: '/about'
  },
  {
    icon: 'mdi-cog',
    name: 'Setting',
    path: '/setting'
  }
]
