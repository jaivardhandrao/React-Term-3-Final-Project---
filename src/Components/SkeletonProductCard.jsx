import React , {createContext , useContext , useState , useEffect} from 'react'

function SkeletonProductCard() {
    return (
        <div className="my-4 mx-4 border border-gray-300 rounded-lg p-4 w-[21rem] font-sans shadow-md animate-pulse">
            <div className="w-full h-64 bg-gray-200 rounded"></div>
            <div className="my-3 h-6 bg-gray-200 rounded w-3/4 mt-2"></div>
            <div className="mb-2 h-6 bg-gray-200 rounded w-3/4 mt-2"></div>
            <div className="text-sm text-gray-700">
                <div className="bg-gray-200 h-4 inline-block mr-2 rounded w-12"></div>
                <div className="bg-gray-200 h-4 inline-block rounded w-12"></div>
            </div>
        </div>
    )
}

export default SkeletonProductCard