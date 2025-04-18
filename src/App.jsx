import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import("./Components/HomePage"));
const NavBar = lazy(() => import("./Components/NavBar"));
const AboutPage = lazy(() => import("./Components/AboutPage"));
const Search = lazy(() => import("./Components/Search"));
const YourCart = lazy(() => import("./Components/YourCart"));
const NotFound = lazy(() => import("./Components/NotFound"));
const Shop = lazy(() => import("./Components/Shop"));
import LoadingInBetween from './Components/LoadingInBetween';



function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar />
          <main>
            <Suspense fallback={<LoadingInBetween />}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/search' element={<Search />} />
                <Route path='/cart' element={<YourCart />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        </BrowserRouter>



    </>
  )
}

export default App



