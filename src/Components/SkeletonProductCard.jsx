import React , {createContext , useContext , useState , useEffect} from 'react'

function SkeletonProductCard() {
    return (
        <div class="my-4 mx-4 border border-gray-300 rounded-lg p-4 w-[21rem] font-sans shadow-md animate-pulse">
            <div class="w-full h-64 bg-gray-200 rounded"></div>
            <div class="my-3 h-6 bg-gray-200 rounded w-3/4 mt-2"></div>
            <div class="mb-2 h-6 bg-gray-200 rounded w-3/4 mt-2"></div>
            <div class="text-sm text-gray-700">
                <div class="bg-gray-200 h-4 inline-block mr-2 rounded w-12"></div>
                <div class="bg-gray-200 h-4 inline-block rounded w-12"></div>
            </div>
        </div>
    )
}

export default SkeletonProductCard