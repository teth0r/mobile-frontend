import React from 'react'
import { Tickets } from 'features/tickets/';

const ticketsRoutes = [
  {
    path: '/tickets',
    exact: true,
    component:  () => 'Tickets',
  },
];

export { ticketsRoutes };
