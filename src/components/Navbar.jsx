// import { FaShoppingCart} from "react-icons/fa"
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";





// const Navbar = () => {

//   const {cart} = useSelector( (state)=> state);


//   return <div className=" flex justify-between items-center h-20 max-w-6xl  mx-auto">
//     <NavLink to="/">
//     <div className="ml-5">
//       <img src="https://codehelp-shopping-cart.netlify.app/logo.png" className="md:h-14 h-10"></img>
//     </div>
//     </NavLink>
//     <div className=" flex items-center text-slate-100 mr-5  space-x-6 font-medium">
//     <NavLink to="/"> <p className="">Home</p></NavLink>
//       <div className="  flex items-center relative  h-12">
//       <NavLink to="/cart">
//       <button className="  text-2xl h-5">
//       <FaShoppingCart/>
//       </button>
     
//       {cart.length>0 &&
       
//       <div className=" absolute top-0 left-3  border rounded-full bg-green-500   w-5  h-5 text-center animate-bounce  flex justify-center items-center">
     
      

//       <span>{cart.length}</span>
     
//       </div>
//      }

//       </NavLink>
//       </div>
   
      
//     </div>
//   </div>;
// };

// export default Navbar;


import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const {token}= useSelector((state)=>state.auth)
  // console.log("token dekh ",token)

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-900">
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="https://codehelp-shopping-cart.netlify.app/logo.png"
              className="md:h-14 h-10"
              alt="Logo"
            />
          </div>
        </NavLink>
        <div className="flex items-center text-white mr-5 space-x-6 font-medium">

        {
          token !== null &&
          <NavLink to="/">
            <p className="">Home</p>
          </NavLink>
        }
          

          {
            token ===null && (
              <Link to={'/login'}>
              <div>
                <button> Login</button>
              </div>

              </Link>
              
            )
          }
          {
            token ===null && (
              <Link to={'/signup'}>
              <div>
                <button> Sign Up</button>
              </div>

              </Link>
            )
          }

         
          {
            token !== null && (
              <div className="relative">
            <NavLink to="/cart">
              <button className="text-2xl h-5">
                <FaShoppingCart />
              </button>

              {cart.length > 0 && (
                <div className="absolute top-0 left-3 border rounded-full bg-green-500 w-5 h-5 text-center animate-bounce flex justify-center items-center">
                  <span>{cart.length}</span>
                </div>
              )}
            </NavLink>
          </div>
            )
          }
          
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
