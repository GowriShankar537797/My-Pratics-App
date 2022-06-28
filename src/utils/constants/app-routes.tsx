import React, { lazy } from 'react'
import { IAppRoutes } from '../../types'

export const routes: IAppRoutes[] = [{
    name: 'Login',
    route: '/',
    baseRoute: 'login',
    public: true,
    component: lazy(() => import('../../containers/login'))
  },
  {
    name: 'dashboard',
    route: '/dashboard',
    baseRoute: 'dashboard',
    public: true,
    component: lazy(() => import('../../containers/dashboard'))
  }
]