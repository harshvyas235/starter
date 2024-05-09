// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { FaArrowLeft } from "react-icons/fa";
// import { useDispatch, useSelector } from 'react-redux';
// import { getemail } from '../../Service/operation/operation/authApi';
// // import { getemail } from '../../../Services/operation/authAPI';

// export const Resetpass = () => {
//     const[email,setemail]=useState(null)
//     const[sent,setsent]=useState(false)
//     const changehandler=(event)=>{
//       setemail(event.target.value)
//       console.log(email)

//     }
//     const dispatch =useDispatch();
//     const {loading}= useSelector((state)=>state.auth)
//     const handleSubmit=(e)=>{
//       e.preventDefault();
//       dispatch(getemail(email,setsent))


//     }
    
//   return (         
//     <div>
//       {
//          loading? (<div className=' text-white text-3xl'>Loading...</div>) :(<div className='flex  flex-col justify-center items-center h-screen  pb-[100px] gap-2'>
//         <div className='w-[508px] px-[32px] py-[32px] ' >
//            {
//             email===null || sent===false ?(
//                 <div>
//             <p className='text-[#F1F2FF] text-3xl'>Reset your password</p>
//             <p className='text-[#AFB2BF] text-base font-normal'>Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery</p>
//                 </div>
        
//             ):
//             (

//                 <div>
//                 <p className='text-[#F1F2FF] text-3xl'>check email</p>
//             <p className='text-[#AFB2BF] text-base font-normal'>{`We have sent the reset email to ${email}`}</p>
//                 </div>
//             )
//            }
//         </div>
//         {
//           sent===false &&
//           <div className='flex flex-col '>
//           <p className='text-sm text-[#F1F2FF]'>Email Address</p>
//           <input
//           name='email'
//           value={email}
//           onChange={changehandler}
//           placeholder='Enter your email'
//                           style={{
//                         boxShadow: "0px -1px 0px 0px rgba(255, 255, 255, 0.18) inset"
                        
//                       }}
//                       className="w-[444px] rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
//                         />
//           </div>
          
//         }
//         <form onSubmit={handleSubmit}>

//         { 
          
//           sent==false ?
//           <div className="w-[444px] h-[48px] mt-[36px] shadow-[inset_-2px_-33px_25px_4px_rgba(0,_0,_0,_0.12)]">
//              <button className='w-[444px] h-[48px] bg-[#FFD60A] text-richblack-900 py-[12px] flex items-center justify-center rounded-lg '  >Reset Password</button>
//            </div>:
//            <div className="w-[444px] h-[48px] mt-[6px] shadow-[inset_-2px_-33px_25px_4px_rgba(0,_0,_0,_0.12)]">
//              <button className='w-[444px] h-[48px] bg-[#FFD60A] text-richblack-900 py-[12px] flex items-center justify-center rounded-lg '  >Resend Email</button>
//            </div>
//         }

//         </form>
       
//         <Link to={"/login"} className=' text-base text-[#F1F2FF] flex items-center justify-center pr-[300px] gap-2'>
//          <span><FaArrowLeft />
//         </span>
//         <p>Back to login</p>
//         </Link>

//     </div>)
//       }
//     </div>
    
//   )
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getemail } from '../../Service/operation/operation/authApi';
import { Circles } from 'react-loader-spinner';

export const Resetpass = () => {
    const [email, setEmail] = useState(null);
    const [sent, setSent] = useState(false);

    const changeHandler = (event) => {
        setEmail(event.target.value);
    };

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getemail(email, setSent));
    };

    return (
        <div className="min-h-screen bg-white flex justify-center items-center">
            {loading ? (
                                <div ><div className='flex  items-center  justify-center h-screen'><Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                /></div></div>
            ) : (
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="w-96 px-8 py-8 bg-gray-200 rounded-md shadow-md">
                        {email === null || sent === false ? (
                            <div>
                                <p className="text-gray-900 text-3xl">Reset your password</p>
                                <p className="text-gray-600 text-base font-normal">
                                    Have no fear. We’ll email you instructions to reset your password. If you dont have
                                    access to your email we can try account recovery
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-gray-900 text-3xl">Check email</p>
                                <p className="text-gray-600 text-base font-normal">{`We have sent the reset email to ${email}`}</p>
                            </div>
                        )}
                    </div>
                    {!sent && (
                        <div className="flex flex-col">
                            <p className="text-sm text-gray-900">Email Address</p>
                            <input
                                name="email"
                                value={email}
                                onChange={changeHandler}
                                placeholder="Enter your email"
                                className="w-96 rounded-md bg-gray-100 p-3 text-gray-900"
                            />
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        {sent === false ? (
                            <div className="w-96 mt-4">
                                <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg">Reset Password</button>
                            </div>
                        ) : (
                            <div className="w-96 mt-2">
                                <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg">Resend Email</button>
                            </div>
                        )}
                    </form>
                    <Link to="/login" className="text-base text-gray-900 flex items-center justify-center gap-2">
                        <span>
                            <FaArrowLeft />
                        </span>
                        <p>Back to login</p>
                    </Link>
                </div>
            )}
        </div>
    );
};
