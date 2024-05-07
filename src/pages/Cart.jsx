// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import CartItem from "../components/CartItem"
// import { useEffect, useState } from "react";

// const Cart = () => {
//   const { cart } = useSelector((state) => state);
//   console.log("cart length ")
//   console.log(cart.length)

//   const [totalAmount, setTotalAmount] = useState(0)

//   useEffect(() => {
//     setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
//   }, [cart])

//   return (
//     <div className="max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
//       {cart.length > 0 ? (
//         <div className="flex flex-col items-center w-full">
//           <div className="w-full max-w-md">
//             {cart.map((item, index) => {
//               return <CartItem key={item.id} item={item} itemIndex={index} />
//             })}
//           </div>

//           <div className="w-full max-w-md flex flex-col justify-between my-14">
//             <div className="flex flex-col gap-5">
//               <div className="font-semibold text-xl text-green-800">Your Cart</div>
//               <div className="font-semibold text-5xl text-green-700 uppercase">Summary</div>
//               <p className="text-xl text-gray-700 font-semibold">Total Item : {cart.length}</p>
//             </div>

//             <div className="flex flex-col ">
//               <p className="text-xl font-bold">
//                 <span className="font-semibold text-xl text-gray-700">Total Amount :</span> ${totalAmount}
//               </p>
//               <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
//                 CheckOut Now
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col justify-center items-center h-[80vh]">
//           <h1>Your cart is empty</h1>
//           <NavLink to={'/'}>
//             <button className="mt-5 bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear border-2 border-green-600 font-bold hover:text-green-700 px-4 py-2 text-xl">
//               Shop Now
//             </button>
//           </NavLink>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("cart length ")
  console.log(cart.length)

  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[100px]">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-3/5">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-full lg:w-2/5 lg:pl-6 mt-8 lg:mt-0">
            <div className="flex flex-col gap-5">
              <div className="font-semibold text-xl text-green-800">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700 uppercase">Summary</div>
              <p className="text-xl text-gray-700 font-semibold">Total Item: {cart.length}</p>
            </div>

            <div className="flex flex-col mt-4 lg:mt-8">
              <p className="text-xl font-bold">
                <span className="font-semibold text-xl text-gray-700">Total Amount:</span> ${totalAmount}
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <h1>Your cart is empty</h1>
          <NavLink to={'/'}>
            <button className="mt-5 bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear border-2 border-green-600 font-bold hover:text-green-700 px-4 py-2 text-xl">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;

