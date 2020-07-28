import React from 'react'

import { ticketsRoutes } from "features/tickets/routes.js";
import { shopRoutes } from "features/shop/routes.js";
import { profileRoutes } from "features/profile/routes.js";
import { statisticRoutes } from "features/statistic/routes.js";
import { settingsRoutes } from "features/settings/routes.js";

const commonRoutes = [
  {
    path: '/',
    exact: true,
    component:  () => '',
  },


...ticketsRoutes,
...shopRoutes,
...profileRoutes,
...statisticRoutes,
...settingsRoutes

];
export { commonRoutes };
