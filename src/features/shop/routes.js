import React from 'react'
import { Shop } from 'features/shop/';

const shopRoutes = [
  {
    path: '/shop',
    exact: true,
    component:  () => 'Shop',
  },
];

export { shopRoutes };
