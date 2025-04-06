// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Import components
// import NavBar from './Components/NavBar';
// import HomePage from './Components/HomePage';
// import AboutPage from './Components/AboutPage';
// import Shop from './Components/Shop';
// import Search from './Components/Search';
// import YourCart from './Components/YourCart';
// import NotFound from './Components/NotFound';
// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <NavBar />
//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/search" element={<Search />} />
//             <Route path="/cart" element={<YourCart />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;





import React from 'react'

import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import AboutPage from './Components/AboutPage'
import Search from './Components/Search'
import YourCart from './Components/YourCart'
import NotFound from './Components/NotFound'
import Shop from './Components/Shop'
import { BrowserRouter as Router, Routes, Route } from 'react-router'



function App() {
  return (
    <>

      <Router>

        <NavBar />
        <main>

          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/cart' element={<YourCart />}/>
            <Route path='/shop' element={<Shop />}/>
          </Routes>

        </main>


      </Router>




    </>
  )
}

export default App