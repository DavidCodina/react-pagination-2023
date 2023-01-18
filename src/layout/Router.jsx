import { Fragment, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('pages/HomePage'))
const ItemPage = lazy(() => import('pages/ItemPage'))
// const NotFound = lazy(() => import('pages/NotFound'))

/* =============================================================================
                                Router
============================================================================= */

const Router = () => {
  return (
    <Suspense fallback={Fragment}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/item/:itemId' element={<ItemPage />} />
        {/*  <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  )
}

export { Router }
