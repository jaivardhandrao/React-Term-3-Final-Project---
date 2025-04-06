import React , {createContext , useContext , useState , useEffect} from 'react'
const MyCart = React.createContext()

export function useMyCart({child}){
    const [Cart , setCart] = useState([]);
    return (
        <>
            <MyCart.Provider value = {[Cart , setCart]}>
                {child}
            </MyCart.Provider>
        </>
    )
}

export default MyCart