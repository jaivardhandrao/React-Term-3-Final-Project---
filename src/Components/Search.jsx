import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import ProductCard from './ProductCard';
import SkeletonProductCard from './SkeletonProductCard';

function Search() {
  // State to store the search value
  const [searchVal, setSearchVal] = useState("");

  // State to track if a search is in progress
  const [isLoading, setIsLoading] = useState(false);

  //The array to store the search results
  const [searchArr , setSearchArr] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  function handleSearch() {
    // Set loading to true to indicate that a search is in progress
    setIsLoading(true);
  
    // Fetch the CSV file from the public/SpllitedDirectory directory
    // I needed to split the csv file into 10 parts because the csv file was too large

    for(let i = 1; i <= 10; i++){

      fetch('/Splitted/Amazon-Products_' + i + '.csv')
      // Convert the response to plain text (CSV content)
      .then(response => response.text())
      // Once we have the CSV text, parse it
      .then(csvText => {
        Papa.parse(csvText, {
          // The first row in the CSV contains the column headers
          header: true,
          
          // This function is called once parsing is complete
          complete: (results) => {
            // Convert search input like "iphone cover" into an array of words: ["iphone", "cover"]
            const keywords = searchVal.toLowerCase().split(' ');
            
            // Filter the parsed data to find items that match all keywords
            // This is done by checking if every keyword is present somewhere in the item
            const found = results.data.filter(item => {
              // Flatten all values of the product into a single string and convert to lowercase
              const itemText = Object.values(item).join(' ').toLowerCase();
              
              // Check if every keyword is present somewhere in the item text
              return keywords.every(word => itemText.includes(word));
            });
            
            // Update the search array state with the filtered results
            setSearchArr((prev)=>{
              return [...prev , ...found]
            });
            
            // Set loading to false as the search is complete
            setTimeout(() => {
              setIsLoading(false);
            }, 2500);
          }
        });
      });
    }
  }

  function renderProducts() {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = searchArr.slice(startIdx, endIdx);

    if (currentItems.length > 0) {
      return currentItems.map((product, index) => (
        <ProductCard key={startIdx + index} productObj={product} />
      ));
    } else {
      return "No products found";
    }
  }

  function renderSkeleton() {
    return (
      <>
        {Array.from({ length: 15 }).map((item, index) => (
          <SkeletonProductCard key={index} />
        ))}
      </>
    );
  }

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
              onClick={() => {
                setSearchArr([]);
                setCurrentPage(1);
                handleSearch();
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-8 transition duration-300 flex items-center"
            >
              <span className="mr-2">Search</span>
              <i className='bx bx-search text-[1.3rem]'></i>
            </button>
          </div>
          
        </div>

        {/* Loading Indicator */}
        
        <div className="loading flex justify-center">
          {isLoading && (
                      <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-[1.1rem] text-indigo-600 font-medium">Searching products...</p>
            <br/>
            <p className="mt-2 text-[1.3rem] text-gray-700">Till then enjoy the skeleton cards below :&#41;</p>
          </div>
          )}
        </div>

        {searchArr.length > itemsPerPage && (
          <div className="flex justify-center mt-8 flex-wrap gap-2">
            {Array.from({ length: Math.ceil(searchArr.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-indigo-600 border-indigo-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
        
        {/* Products Grid */}

        
        <div className="flex justify-center gap-[0.7rem] flex-wrap">
            {isLoading ? renderSkeleton() : renderProducts()}

        </div>
        
        
      </div>
    </div>
  );
}

export default Search;