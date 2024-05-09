// // import React from 'react'
// import React, { useState } from 'react'
// import OTPInput from 'react-otp-input'
// // import { OtpCall } from '../../Service/operation/operation/authApi'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { Signup_Call } from '../../Service/operation/operation/authApi'

// export const OtpVerify = () =>  {

//     const [otp,setOtp]= useState("")
   
  
//     const dispatch = useDispatch()
  
//     const {signupData}= useSelector((state)=>state.auth)
//     // console.log(user)
//     const navigate = useNavigate()
//      console.log(signupData)
//     const onsubmitHandler =(e)=>{
//       console.log(otp)
//       e.preventDefault()
//       const  {confirmPassword,email,firstName,lastName,  password}= signupData
//       dispatch(Signup_Call(confirmPassword,email,firstName,lastName,  password,navigate,otp))
  

//     }
  
//     return (
//       <div>
//       <div  className=' flex  justify-center  items-center border bg-fuchsia-600 w-96 h-96'>
  
//       <form onSubmit={onsubmitHandler}>
  
//       <OTPInput
//         value={otp}
//         onChange={setOtp}
//         numInputs={6}
//         renderSeparator={<span>-</span>}
//         renderInput={(props) => <input {...props} />}
//       />
  
//       <button type='submit'>Verify Otp</button>
  
//       </form>
  
    
  
//       </div>
          
  
//       </div>
//     )
//   }
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Signup_Call } from '../../Service/operation/operation/authApi'
import { Circles } from 'react-loader-spinner'

export const OtpVerify = () => {
  const [otp, setOtp] = useState("")
  const dispatch = useDispatch()
  const { signupData } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const {loading}= useSelector((state)=>state.auth)

  const onsubmitHandler = (e) => {
    e.preventDefault()
    const { confirmPassword, email, firstName, lastName, password } = signupData
    dispatch(Signup_Call(confirmPassword, email, firstName, lastName, password, navigate, otp))
  }

  const renderInput = (inputProps) => (
    <input {...inputProps} className="w-12 h-12 text-3xl border-2 border-green-500 rounded-lg text-center focus:outline-none focus:border-green-400" />
  );

  return (
    <div className="flex justify-center items-center h-screen bg-white">


     {
      loading ? (
        <div ><div className='flex  items-center  justify-center h-screen'><Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  /></div></div>
      ):(
        <div className="bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full flex flex-col items-center">
        <h2 className="text-center text-2xl text-green-500 mb-6">Verify OTP</h2>
        <form onSubmit={onsubmitHandler} className="space-y-4 w-full">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            separator={<span className="mx-2 text-green-500">-</span>}
            renderInput={renderInput}
            containerStyle="flex justify-center"
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600">Verify OTP</button>
        </form>
      </div>
      )}

    
    </div>
  )
}

export default OtpVerify
