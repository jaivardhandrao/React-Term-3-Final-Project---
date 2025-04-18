import React, { useRef, useMemo, createContext, useContext, useState, useEffect } from 'react'
import MyCartContext from '../Contexts/MyCartContext';

function CartProductCard({ productObj }) {
    const [isRemoving, setIsRemoving] = useState(false);
    const productImageLink = productObj.image;
    const productLink = productObj.link;
    const productTitle = productObj.name;
    const productRating = Math.ceil(productObj.ratings);
    const productNumberOfRatings = productObj.no_of_ratings;
    const productActualPrice = productObj.actual_price;
    const productDiscountedPrice = productObj.discount_price;

    const {removeFromCart } = useContext(MyCartContext);

    return (
        <div className={`relative my-[1rem] flex flex-col sm:flex-row w-[90vw] sm:w-[80vw] mx-auto gap-4 p-2 sm:p-4 border border-gray-300 rounded-lg shadow-sm transition-opacity duration-300 ${isRemoving ? 'opacity-50' : 'opacity-100'}`}>
            {isRemoving && (
                <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-lg z-10">
                    <div className="flex flex-col items-center text-indigo-600 text-sm font-medium">
                        <svg className="animate-spin h-5 w-5 text-indigo-600 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                        </svg>
                        Removing item...
                    </div>
                </div>
            )}
            <img src={productImageLink} alt={productTitle} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
            <div className="flex flex-col justify-between w-full mt-2 sm:mt-0">
                <h2 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition">
                    {productTitle}
                </h2>
                <div className="flex items-center gap-2 text-sm text-yellow-500">
                    {'★'.repeat(productRating)}{'☆'.repeat(5 - productRating)}
                    <span className="text-gray-600 ml-2">({productNumberOfRatings})</span>
                </div>
                <div className="text-sm text-gray-700 mb-2">
                    <span className="text-indigo-600 font-semibold">{productDiscountedPrice}</span>
                </div>
            </div>
            <button 
            onClick={() => {
                setIsRemoving(true);
                setTimeout(() => {
                    removeFromCart(productObj);
                    setIsRemoving(false);
                }, 500);
            }}
            className=" cursor-pointer flex items-center text-red-500 justify-center self-end w-fit px-2 py-1 bg-white border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-200 hover:text-white mt-2 sm:mt-0">
                <span className='mr-1'>Remove</span>
                <i className='bx bx-trash-alt'></i>
            </button>
        </div>
    )
}

export default CartProductCard