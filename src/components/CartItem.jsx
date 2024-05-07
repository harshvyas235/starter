// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/cartSlice";
// import { toast } from "react-hot-toast";
// import { RiDeleteBin6Line } from "react-icons/ri";
// // import FcDeleteDatabase from "react-icons/f"

// const CartItem = ({item,itemIndex}) => {

//   const dispatch = useDispatch();
//   const removeItem =()=>{
//     dispatch(remove(item.id)); 
//     toast.error("item delete ")
//   }
//   return (
//     <div className=" w-[664px]  max-w-2xl border-b-2 border-gray-900  max-h-[228px]  pb-8 mt-10">
//       <div className="flex justify-between  gap-10 h-60">
//         <div className=" max-h-[228px] ">
//           <img src={item.image} className="max-h-[180px] "/>
//         </div>
//         <div className="max-w-[378px] flex flex-col gap-4 h-[228px]">
//           <h1 className="text-gray-700 font-semibold text-lg   mt-1">{item.title}</h1>
//           <h1 className="">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          
//           <div className=" flex  justify-between w-full">

//           <div className="text-green-600 font-semibold">${item.price}</div>
//           <div
//           onClick={removeItem} className=" p-[12]">
//           <button >
//           <RiDeleteBin6Line size="20px" className="m-auto " />
//           </button>

          
//           </div>
         
//           </div>
//         </div>
//       </div>
//     </div> 
//   );
// };

// export default CartItem;



import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(item.id)); 
    toast.error("Item deleted");
  };

  return (
    <div className="w-full md:max-w-2xl border-b-2 border-gray-900 pb-8 mt-10 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:gap-10">
        <div className="md:max-h-60">
          <img src={item.image} alt={item.title} className="max-h-60 md:max-h-180" />
        </div>
        <div className="max-w-full md:max-w-[378px] flex flex-col gap-4 md:h-[228px]">
          <h1 className="text-gray-700 font-semibold text-lg mt-1">{item.title}</h1>
          <h1 className="">{item.description.split(" ").slice(0, 15).join(" ")}...</h1>
          
          <div className="flex justify-between w-full">
            <div className="text-green-600 font-semibold">${item.price}</div>
            <div onClick={removeItem} className="p-2 cursor-pointer">
              <button>
                <RiDeleteBin6Line size="20px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default CartItem;

