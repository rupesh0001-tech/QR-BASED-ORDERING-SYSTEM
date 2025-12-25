import { useEffect, useState } from "react";


const CartTotal = ({cartItems} : any ) => {
   
    let [cartPrice, setCartPrice ] = useState<number>(0)
    const SumOfPrice = () => {
        let sum = cartItems.reduce((acc : any, curr : any) => acc + curr.price , 0);
        setCartPrice(sum)
    }

    useEffect(()=> {
        SumOfPrice();
         
    }, [cartItems])

    
  return (
    <div className=" w-full bg-green-200 p-2 px-4 rounded-2xl">
        <h1 className=" text-md font-medium text-start"> items total :  &#8377;{cartPrice}  </h1>
        <h1 className=" text-md font-medium text-start"> tax total :  &#8377; {(18 / 100 ) * cartPrice } </h1>
        <h1 className=" text-md font-medium text-start">Total amount :  &#8377;{ ((18 / 100 ) * cartPrice ) + cartPrice } </h1>
    </div>
  )
}

export default CartTotal