import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../assets/goldLogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";

// Schema for Yup validation
const schema = yup.object().shape({
  company_Name: yup.string().required("Company Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const [company_Name, setcompany_Name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);


  const Url = "https://finsworthpro.onrender.com/api/createUser";
  const data = { company_Name, email, password, confirmPassword };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    // e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(Url, data);
      console.log(response);
      setResponseMessage("Please check your email for verification.");
      setShowPopup(true); // Show the popup
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error
        : "An Error occurred";
      console.log(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[30%] h-[90%] bg-[#FDFDF7] rounded-[10px] shadow-xl max-sm:w-[90%]">
        <section className="w-[100%] h-[20%] flex justify-center items-center flex-col">
          <img src={Logo} alt="" className="w-[70%] h-[70%] object-contain" />
          <div className="w-[100%] h-[30%] flex justify-start items-center p-2">
            <h2 className="font-bold text-lg text-[#023047]">
              Create an Account
            </h2>
          </div>
        </section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[100%] h-[80%] max-sm:h-[80%] "
        >
          {/* Company Name Input */}
          <div className="w-[100%] h-[17%] flex flex-col justify-center items-start p-2">
            <label htmlFor="company_Name">Company Name</label>
            <input
              type="text"
              {...register("company_Name")}
              className="w-[100%] h-[90%] rounded-md outline-none border-solid border-[#023047] border bg-transparent p-2"
              onChange={(e) => setcompany_Name(e.target.value)}
            />
            {errors.company_Name && (
              <p className="text-red-500 text-[10px]">
                {errors.company_Name.message}
              </p>
            )}
          </div>
          {/* Email Input */}
          <div className="w-[100%] h-[17%] flex flex-col justify-center items-start p-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              {...register("email")}
              className="w-[100%] h-[90%] rounded-md outline-none border-solid border-[#023047] border bg-transparent p-2"
              onChange={(e) => setemail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-[10px]">{errors.email.message}</p>
            )}
          </div>
          {/* Password Input */}
          <div className="w-[100%] h-[17%] flex flex-col justify-center items-start p-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-[100%] h-[90%] rounded-md outline-none border-solid border-[#023047] border bg-transparent p-2"
              onChange={(e) => setpassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-[10px]">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Confirm Password Input */}
          <div className="w-[100%] h-[17%] flex flex-col justify-center items-start p-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-[100%] h-[90%] rounded-md outline-none border-solid border-[#023047] border bg-transparent p-2"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-[10px]">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          {/* Agreement Checkbox */}
          <div className="w-[100%] h-[10%] flex justify-around items-center p-2 ">
            <input type="checkbox" name="" id="" className="rounded-full" />
            <p className="text-[12.5px] max-sm:text-[10px]">
              By signing up you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
          {/* Submit Button */}
          <section className="w-[100%] h-[18%] flex justify-center items-center flex-col">
            <button className="w-[90%] h-[50%] bg-[#023047] rounded-md text-[#FDFDF7] font-semibold">
              {Loading ? (
                <FallingLines
                  color="#FB8500"
                  width="100"
                  visible={true}
                  ariaLabel="falling-circles-loading"
                />
              ) : (
                <span>Register</span>
              )}
            </button>
            <span className="font-semibold text-[#023047]">
              {showPopup && (
                <div className="popup">
                  <p>{responseMessage}</p>
                  <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
              )}
              Already have an account ?{" "}
              <Link to="/login" className="text-md text-[#FB8500] font-bold">
                Login
              </Link>
            </span>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
