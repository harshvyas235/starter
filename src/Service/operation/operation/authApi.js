import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../../redux/Slices/authSlice";
import { apiconnector } from '../appiconnector';
import { RiAwardFill } from 'react-icons/ri';
import { dataUser, setUser } from "../../../redux/Slices/profileSlice";
import { useSelector } from "react-redux";

export const LoginData = (email, password, navigate) => {
  return async (dispatch) => {
    

    dispatch(setLoading(true));
    try {
      const response = await apiconnector("Post", "http://localhost:4000/api/v1/auth/login", {
        email,
        password
      });

      console.log("login ka response dekh lo ...", response);

      if (response.data && response.data.success === false) {
        throw new Error("error message h ye login k andr", response.data.message);
      }

      toast.success("login successFull");
      dispatch(setToken(response.data.token));
      const userImage = `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      dispatch(setUser({...response.data.user, image:userImage}))
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
     // Initialize a value in local storage with null
localStorage.setItem("cart", JSON.stringify(null));

      console.log("user dekh")
      dispatch(dataUser())
     
      navigate('/');
    } catch (err) {
      console.log("LOGIN API ERROR............", err);
      toast.error(err.response.data.message);
    } finally {
      dispatch(setLoading(false)); // Moved inside finally block
    }
  };
};

export const OtpCall = (email, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiconnector("Post", "http://localhost:4000/api/v1/auth/sendotp", {
        email
      });

      console.log("otp request ka response ", response.data);

      if (response.data && response.data.success === false) {
        throw new Error("error message h ye otp req ka", response.data.message);
      }
      navigate('/otp-verification');
    } catch (err) {
      console.log("otp send API ERROR............", err);
      toast.error("otp  Failed");
    }
    dispatch(setLoading(false));
  };
};

export const Signup_Call = (confirmPassword, email, firstName, lastName, password, navigate, otp) => {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true));
        
        const response = await apiconnector("Post", "http://localhost:4000/api/v1/auth/signup", {
          confirmPassword,
          email,
          firstName,
          lastName,
          password,
          otp
        });
  
        if (response.data && response.data.success) {
          toast.success("Signup successful. You can now login.");
          navigate('/login');
        } else {
          throw new Error(response.data.message || "Signup failed. Please try again later.");
        }
      } catch (err) {
        console.error("Signup API ERROR:", err.message);
        toast.error("Signup failed. Please try again later.");
      } finally {
        dispatch(setLoading(false));
      }
    };
  };
  

  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setLoading(true));

      dispatch(setToken(null))
      dispatch(setUser(null))
      // dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      localStorage.removeItem("cart")
      toast.success("Logged Out")
      window.location.reload();

      navigate("/")
      dispatch(setLoading(false));

    }
  }


  export const getemail = (email,setemail)=>{

    return async(dispatch)=>{
     dispatch(setLoading(true))
     try{
 
        const response = await apiconnector("POST","http://localhost:4000/api/v1/auth/reset-password-token",{email});
        console.log("response dekh le",response)
       //   console.log("jkfhshfskhffsfhashdjhs")
        if(response.data.success==false){
         throw new Error("error mesage h ye",response.data.message)
        }
        toast.success()
        setemail(true);
         
 
     }catch(err){
         console.log(err)
       toast.error("error aayi h ")
 
     }
     dispatch(setLoading(false))
    }
 }
 

 export const UpdatePasswordChange=(password, confirmPassword, token,navigate)=>{
  return async(dispatch)=>{
     try{
         const response= await apiconnector("POST","http://localhost:4000/api/v1/auth/reset-password",{
           password, confirmPassword, token
         })

         
         if(response.data && response.data.success==false){
           throw new Error("error mesage h ye",response.data.message)
          }

          toast.success("change successfully")
          
          navigate('/login')

     }
     catch(err){
          toast.error(err.message)
          console.log(err)

     }
  }
}