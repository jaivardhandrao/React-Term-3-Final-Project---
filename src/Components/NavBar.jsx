import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'

import { Link } from 'react-router-dom';
import MyCartContext from '../Contexts/MyCartContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useContext(MyCartContext);

  const [cartItemsCount , setCartItemsCount] = useState(0);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              Shop
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              Search
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              About
            </Link>
            <Link to="/cart" className="relative group">
              <div className="p-2 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition duration-300">
                <i className='bx bx-cart text-indigo-600 text-xl'></i>
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
                </span>
              </div>
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
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
                to="/shop" 
                className="text-gray-700 hover:text-indigo-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
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
                  <i className='bx bx-cart text-indigo-600 text-xl'></i>
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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