import React from 'react'
import { Profile } from 'features/profile/';

const profileRoutes = [
  {
    path: '/profile',
    exact: true,
    component:  () => 'Profile',
  },
];

export { profileRoutes };
