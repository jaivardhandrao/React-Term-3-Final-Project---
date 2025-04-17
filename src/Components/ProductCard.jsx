import React, { useRef, useMemo, createContext, useContext, useState, useEffect } from 'react'
import MyCartContext from '../Contexts/MyCartContext.jsx';

export function ProductCard({ productObj }) {
  const productImageLink = productObj.image;
  const productLink = productObj.link;
  const productTitle = productObj.name;
  const productRating = Math.ceil(productObj.ratings);
  const productNumberOfRatings = productObj.no_of_ratings;
  const productActualPrice = productObj.actual_price;
  const productDiscountedPrice = productObj.discount_price;

  const { cartItems, addToCart, removeFromCart } = useContext(MyCartContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="my-4 mx-4 border border-gray-300 rounded-lg p-4 max-w-xs font-sans shadow-md transition duration-300 flex flex-col justify-between h-full min-h-[32rem] hover:shadow-lg">
      <img
        src={productImageLink}
        alt="Sorry, Image Not Found :("
        className="h-64 rounded mx-auto object-contain"
      />
      <a
        href={productLink}
        className="font-bold text-base text-blue-700 block my-3 hover:text-blue-900 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {productTitle}
      </a>
      <div className="mb-2 text-yellow-500">
        {'★★★★★☆☆☆☆☆'.slice(0, productRating) + '☆☆☆☆☆'.slice(0, 5 - productRating)}
        <span className="text-gray-600 ml-2">({productNumberOfRatings})</span>
      </div>
      <div className="text-sm text-gray-700">
        <span className="line-through mr-2">{productActualPrice}</span>
        <span className="text-red-700 font-semibold">{productDiscountedPrice}</span>
      </div>
      <button
        onClick={() => {
          addToCart(productObj);
          setAddedToCart(true);
          setTimeout(() => setAddedToCart(false), 2000);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`mt-auto py-3 px-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 
          ${addedToCart 
            ? 'bg-green-500 text-white' 
            : isHovering 
              ? 'bg-blue-700 text-white shadow-md transform scale-105' 
              : 'bg-blue-600 text-white shadow'}`}
      >
        <span className={`${addedToCart ? 'mr-1' : ''}`}>
          {addedToCart ? 'Added to Cart' : 'Add to Cart'}
        </span>
        <span className={`transition-all duration-300 ${addedToCart ? '' : 'transform'}`}>
          {addedToCart ? '✓' : isHovering ? '→' : '+'}
        </span>
      </button>
    </div>
  );
}

export default ProductCard;