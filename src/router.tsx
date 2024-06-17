import React from 'react'
import { createHashRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getNoneLayout } from './components/layout'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProductPage from './pages/product'
import ApplicationPage from './pages/application'
import StrengthPage from './pages/strength'

export const routerObjects: RouteObject[] = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/product',
    Component: ProductPage,
  },
  {
    path: '/application',
    Component: ApplicationPage,
  },
  {
    path: '/strength',
    Component: StrengthPage,
  },
]

export function createRouter(): ReturnType<typeof createHashRouter> {
  const routeWrappers = routerObjects.map((router) => {
    // @ts-ignore TODO: better type support
    const getLayout = router.Component?.getLayout || getNoneLayout
    const Component = router.Component!
    const page = getLayout(<Component />)
    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createHashRouter(routeWrappers)
}
