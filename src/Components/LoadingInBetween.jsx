import React from 'react'

function LoadingInBetween() {
  return (
    <div className="flex justify-center h-screen bg-[#f5f7ff] transition-all duration-700">
      <div className="text-center space-y-6 mt-[9rem]">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-indigo-500 text-transparent bg-clip-text animate-pulse">
          Shopp Global
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-fade-in">
          Getting things ready for you...
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingInBetween