import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import ProductCard from './ProductCard';

function Search() {
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchArr , setSearchArr] = useState([])


  function handleSearch() {

    // setSearchArr([]);
    setIsLoading(true);
  
    fetch('public/all_data.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const found = results.data.filter(item =>
              Object.values(item).some(value =>
                String(value).toLowerCase().includes(searchVal.toLowerCase())
              )
            );
            setSearchArr(found);
          }
        });
      });
  }


  useEffect(()=>{
    setIsLoading(true);
    console.log(searchArr)
    setIsLoading(false);
  } , [searchArr])





  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-8 pb-16 px-4">
      <div className="container mx-auto">
        {/* Search Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-900 mb-3">Search Products</h1>
          <p className="text-lg text-gray-700 max-w-lg mx-auto">
            Find the perfect product from our extensive collection of global items
          </p>
        </div>
        
        {/* Search Input */}
        <div className="searchDiv max-w-3xl mx-auto mb-12">
          <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent focus-within:border-indigo-500 transition duration-300">
            <input 
              type="text" 
              name="searchInput" 
              placeholder="Search for products..." 
              value={searchVal} 
              onChange={(e) => setSearchVal(e.target.value)}
              className="flex-grow py-4 px-6 outline-none text-gray-700 text-lg"
            />
            <button 
              onClick={handleSearch}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-8 transition duration-300 flex items-center"
            >
              <span className="mr-2">Search</span>
              <i className='bx bx-search text-[1.3rem]'></i>
            </button>
          </div>
          
        </div>
        
        <div className="loading flex justify-center">
          {isLoading && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-indigo-600 font-medium">Searching products...</p>
            </div>
          )}
        </div>
        
        {/* Products Grid */}
        <div className="products flex gap-[2rem] flex-wrap">
            { 
            (searchArr.length > 0) ? 
              searchArr.map((product , index) => <ProductCard key={index} productObj={product}/>)
              : "No products found"
            }
        </div>
      </div>
    </div>
  );
}

export default Search;