import React,{useState} from 'react';
import Logo from '../assets/goldLogo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {


const [company_Name, setcompany_Name] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [confirmPassword, setconfirmPassword] = useState('')


const data = {company_Name,email,password,confirmPassword}
const Url = 'https://finsworthpro.onrender.com/api/createUser'


const HandleLogin = async ()=>{
  e.preventDefault()
  try{
    const response = await axios.post(Url,data);
    console.log(response.data.data);
  }
  catch(error){
    
  }
}













  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
      <div className='w-[30%] h-[90%] bg-[#FDFDF7] rounded-[10px] shadow-xl max-sm:w-[90%]'>
        <section className='w-[100%] h-[20%] flex justify-center items-center flex-col'>
          <img src={Logo} alt="" className='w-[70%] h-[70%] object-contain' />
          <div className='w-[100%] h-[30%] flex justify-start items-center p-2'>
            <h2 className='font-bold text-lg text-[#023047]'>Create an Account</h2>
          </div>
        </section>
        <form action="" className='w-[100%] h-[80%] max-sm:h-[80%] '>
          <div className='w-[100%] h-[17%] flex flex-col justify-center items-start p-2'>
            <label htmlFor="">Company Name</label>
            <input type="text" className='w-[100%] h-[90%] rounded-md outline-none border-solid border-[#023047] border bg-transparent p-2' onChange={(e)=>setcompany_Name(e.target.value)}/>
          </div>
          <div className='w-[100%] h-[17%]  flex flex-col justify-center items-start p-2'>
            <label htmlFor="">Email</label>
            <input type="text" className='w-[100%] h-[90%] rounded-md outline-none  border-solid border-[#023047] border bg-transparent p-2 'onChange={(e)=> setemail(e.target.value)} />
          </div>
          <div className='w-[100%] h-[17%]  flex flex-col justify-center items-start p-2'>
            <label htmlFor="">Password</label>
            <input type="text" className='w-[100%] h-[90%] rounded-md outline-none border-solid border-[#023047] border bg-transparent p-2'onChange={(e)=>setpassword(e.target.value)} />
          </div>
          <div className='w-[100%] h-[17%]  flex flex-col justify-center items-start p-2'>
            <label htmlFor="">Confirm Password</label>
            <input type="text" className='w-[100%] h-[90%] rounded-md outline-none border-solid border-[#023047] border bg-transparent p-2'onChange={(e)=>setconfirmPassword(e.target.value)} />
          </div>
          <div className='w-[100%] h-[10%]  flex  justify-around items-center p-2 '>
            <input type="checkbox" name="" id="" className="rounded-full" />
            <p className=' text-[12.5px] max-sm:text-[10px]'>By signing up you agree to our Terms of Service and Privacy Policy</p>
          </div>
          <section className=' w-[100%] h-[18%] flex justify-center items-center flex-col'>
            <button className='w-[90%] h-[50%] bg-[#023047] rounded-md text-[#FDFDF7] font-semibold'>Register</button>
            <span className='font-semibold text-[#023047]'>Already have an account ?  <Link to='/login' className=' text-md text-[#FB8500] font-bold'>Login</Link> </span>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
