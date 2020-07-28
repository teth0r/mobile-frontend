import React from 'react'
import { Settings } from 'features/settings/';

const settingsRoutes = [
  {
    path: '/settings',
    exact: true,
    component:  () => 'Settings',
  },
];

export { settingsRoutes };
