import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../../redux/Slices/authSlice";
import { apiconnector } from '../appiconnector';
import { RiAwardFill } from 'react-icons/ri';
// https://starter-1.onrender.com/api/v1/auth/login

export const LoginData = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiconnector("Post", "https://starter-1.onrender.com/api/v1/auth/login", {
        email,
        password
      });

      console.log("login ka response dekh lo ...", response);

      if (response.data && response.data.success === false) {
        throw new Error("error message h ye login k andr", response.data.message);
      }

      toast.success("login successFull");
      dispatch(setToken(response.data.token));
      localStorage.setItem("token", JSON.stringify(response.data.token));
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
    try {
      const response = await apiconnector("Post", "https://starter-1.onrender.com/api/v1/auth/sendotp", {
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
  };
};

export const Signup_Call = (confirmPassword, email, firstName, lastName, password, navigate, otp) => {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true));
        
        const response = await apiconnector("Post", "https://starter-1.onrender.com/api/v1/auth/signup", {
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
  
