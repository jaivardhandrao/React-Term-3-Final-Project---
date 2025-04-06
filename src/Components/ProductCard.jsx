import React , {createContext , useContext , useState , useEffect} from 'react'

function ProductCard({productObj}) {

  const productImageLink = productObj.image;
  const productLink = productObj.link;
  const productTitle = productObj.name;
  const productRating = Math.ceil(productObj.ratings);
  const productNumberOfRatings = productObj.no_of_ratings;
  const productActualPrice = productObj.actual_price;
  const productDiscountedPrice = productObj.discount_price;

  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-xs font-sans shadow-md">
      <img 
        src={productImageLink} 
        alt="Sorry , Image Not Found :(" 
        className="w-64 h-64 object-cover rounded"
      />
      <a 
        href={productLink} 
        className="font-bold text-base text-blue-700 block my-3 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {productTitle}
      </a>
      <div className="mb-2 text-yellow-500">
        {"★★★★★☆☆☆☆☆".slice(0, productRating) + "☆☆☆☆☆".slice(0, 5 - productRating)}
        <span className="text-gray-600 ml-2">({productNumberOfRatings})</span>
      </div>
      <div className="text-sm text-gray-700">
        <span className="line-through mr-2">₹{productActualPrice}</span>
        <span className="text-red-700 font-semibold">₹{productDiscountedPrice}</span>
      </div>
    </div>
  )
}

export default ProductCard