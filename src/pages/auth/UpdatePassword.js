// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate, useParams } from 'react-router-dom'
// import { UpdatePasswordChange } from '../../Service/operation/operation/authApi'
// // import { UpdatePasswordChange } from '../../../Services/operation/authAPI'

// export const UpdatePassword = () => {
//   const navigate = useNavigate()


//   const [data,setdata]=useState({newpassword:"",confirmpassword:""})

//   const{password, confirmPassword}= data

//   const changehandler=(event)=>{
//     // const {name}= event.target.value
//     setdata((prev)=>{
//       return {
//         ...prev,[event.target.name]:event.target.value
//       }
//     })
//   }
//   const dispatch= useDispatch()
//   const {id}= useParams()
//   console.log("password dekho " ,password,confirmPassword)
  
//   console.log("token dekh lo ",id)

//   const onSubmitdata=(event)=>{
//     event.preventDefault()

//     dispatch(UpdatePasswordChange(data.newpassword,data.confirmpassword,id,navigate))

    
    

//   }

//   return (
//     <div>
//        {/* headhing and paragraph */}
//       <div>
//         <p></p>
//         <p></p>
//       </div>

//       <form onSubmit={onSubmitdata}>
//         <div>
//         <p></p>
//         <input
//           name='newpassword'
//           required
//           value={data.newpassword}
//           placeholder='enter password'
//           onChange={changehandler}
//         />
//         </div>

//         <div>
//         <p></p>
//         <input
//           name='confirmpassword'
//           value={data.confirmpassword}
//           placeholder='confir the password'
//           on onChange={changehandler}
//         />
//         </div>
         

//         <div className="w-[444px] h-[48px] mt-[6px] shadow-[inset_-2px_-33px_25px_4px_rgba(0,_0,_0,_0.12)]">
//              <button className='w-[444px] h-[48px] bg-[#FFD60A] text-richblack-900 py-[12px] flex items-center justify-center rounded-lg '  >Reset Password</button>
//            </div>

//       </form>
      
//     </div>
//   )
// }
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { UpdatePasswordChange } from '../../Service/operation/operation/authApi';

export const UpdatePassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const [data, setdata] = useState({ newpassword: '', confirmpassword: '' });
    const { newpassword, confirmpassword } = data;

    const changehandler = (event) => {
        setdata((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    };

    const onSubmitdata = (event) => {
        event.preventDefault();
        dispatch(UpdatePasswordChange(newpassword, confirmpassword, id, navigate));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Update Password</h2>
                <form onSubmit={onSubmitdata}>
                    <div className="mb-4">
                        <label htmlFor="newpassword" className="block text-gray-700 font-semibold mb-2">New Password</label>
                        <input
                            type="password"
                            id="newpassword"
                            name="newpassword"
                            value={newpassword}
                            onChange={changehandler}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                            placeholder="Enter new password"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmpassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmpassword"
                            name="confirmpassword"
                            value={confirmpassword}
                            onChange={changehandler}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                            placeholder="Confirm new password"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold focus:outline-none hover:bg-yellow-500">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
