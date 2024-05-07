// import React from 'react'
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
// import { OtpCall } from '../../Service/operation/operation/authApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Signup_Call } from '../../Service/operation/operation/authApi'

export const OtpVerify = () =>  {

    const [otp,setOtp]= useState("")
   
  
    const dispatch = useDispatch()
  
    const {signupData}= useSelector((state)=>state.auth)
    // console.log(user)
    const navigate = useNavigate()
     console.log(signupData)
    const onsubmitHandler =(e)=>{
      console.log(otp)
      e.preventDefault()
      const  {confirmPassword,email,firstName,lastName,  password}= signupData
      dispatch(Signup_Call(confirmPassword,email,firstName,lastName,  password,navigate,otp))
  

    }
  
    return (
      <div>
      <div  className=' flex  justify-center  items-center border bg-fuchsia-600 w-96 h-96'>
  
      <form onSubmit={onsubmitHandler}>
  
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
  
      <button type='submit'>Verify Otp</button>
  
      </form>
  
    
  
      </div>
          
  
      </div>
    )
  }
