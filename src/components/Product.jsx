// const Product = (props) => {

import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

//   const post =  props.post
//   return <div>


// <div><p>{post.title}</p></div>
// <div>{post.description}</div>
// <div><img src={post.image}></img></div>
// <div>
//   <div>Price : {post.price}</div>
//   <div>
//     <button>
//       Add To Chart
//     </button>
//   </div>
// </div>


//   </div>;
// };

// export default Product;

const Product = ({post}) => {

  const {cart}= useSelector((state)=> state);
  const {token}= useSelector((state)=> state.auth);
  const navigate = useNavigate()


  const dispatch = useDispatch(); 

  const removeItem=()=>{
    {
      token ===null&&(navigate("/login")) &&
      toast.error("login first")
    }
    {

    
    token !==null &&
    dispatch(remove(post.id))&&
    toast.error("item remove")
    }
  }
  const addItem=()=>{
    {
      token ===null&&(navigate("/login"))&& 
      toast.error("login first")
    }
    {
      token !==null &&
      dispatch(add(post))&&
      toast.success("item added")
    }
    
  }
  return (
    <div className=" flex  flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image }className="h-full w-full" />
      </div>

      <div className=" flex justify-between gap-12 items-center w-full mt-5 ">
      
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      <div>
        {
          
          cart.some((item)=> item.id === post.id )?
          (<button onClick={removeItem} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3  uppercase  hover:text-white hover:bg-gray-700 transition duration-300 ease-in ">
            Remove Item
          </button>):(
            <button onClick={addItem} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3  uppercase  hover:text-white hover:bg-gray-700 transition duration-300 ease-in">
              Add Item
            </button>
          )
        }
      </div>

      </div>
     
    </div>
  );
};

export default Product;

