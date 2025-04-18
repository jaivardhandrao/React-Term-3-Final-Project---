import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'
import MyCartContext from '../Contexts/MyCartContext.jsx';
import CartProductCard from './CartProductCard.jsx';

function YourCart() {

  const { cartItems } = useContext(MyCartContext);
  return (
    <>

      {cartItems.length === 0 && <div className=' my-[5rem] text-center font-semibold text-xl'>Your Cart is Empty</div>}
      {cartItems.map((product , index) => <CartProductCard key={index} productObj={product}></CartProductCard>)}
    </>
  )
}

export default YourCart