import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'

import { Link, useLocation } from 'react-router-dom';
import MyCartContext from '../Contexts/MyCartContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useContext(MyCartContext);

  const [cartItemsCount , setCartItemsCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setCartItemsCount(cartItems.length);
  } , [cartItems])


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/src/assets/logo.jpg" 
                alt="ShoppGlobal Logo" 
                className="h-10 w-auto mr-3 rounded-[50%] "
              />
              <span className="text-xl font-bold text-indigo-900">ShoppGlobal</span>
            </Link>
          </div>

          {/* Center Nav */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-10">
              <Link to="/" className={`text-gray-700 hover:text-indigo-600 transition duration-300 ${location.pathname === '/' ? 'text-indigo-700 underline underline-offset-8 decoration-2' : ''}`}>
                Home
              </Link>
              <Link to="/askai" className={`text-gray-700 hover:text-indigo-600 transition duration-300 ${location.pathname === '/askai' ? 'text-indigo-700 underline underline-offset-8 decoration-2' : ''}`}>
              Ask AI
              </Link>
              <Link to="/search" className={`text-gray-700 hover:text-indigo-600 transition duration-300 ${location.pathname === '/search' ? 'text-indigo-700 underline underline-offset-8 decoration-2' : ''}`}>
                Search
              </Link>
              <Link to="/about" className={`text-gray-700 hover:text-indigo-600 transition duration-300 ${location.pathname === '/about' ? 'text-indigo-700 underline underline-offset-8 decoration-2' : ''}`}>
                About
              </Link>
              <Link to="/cart" className={`relative group ${location.pathname === '/cart' ? 'text-indigo-700 underline underline-offset-8 decoration-2' : ''}`}>
                <div className="p-2 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition duration-300 relative">
                  <i className='bx bx-cart text-indigo-600 text-xl'></i>
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <i className='bx bx-x text-2xl'></i>
              ) : (
                <i className='bx bx-menu text-2xl'></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-indigo-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/askai" 
                className="text-gray-700 hover:text-indigo-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Ask AI
              </Link>
              <Link 
                to="/search" 
                className="text-gray-700 hover:text-indigo-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-indigo-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center justify-between text-gray-700 hover:text-indigo-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Your Cart</span>
                <div className="relative">
                  <i className='bx bx-cart text-indigo-600 text-2xl'></i>
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;