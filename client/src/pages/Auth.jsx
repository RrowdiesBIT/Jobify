import React, { useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Office } from "../assets";
import { SignUp } from "../components";
import Banner from "../assets/img.mp4"
import Carousel from "../components/Carousel";
import HighlightText from "../components/HighlightText";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";



const Auth = () => {
  //see the (state)
  const { user } = useSelector(state => state.user);
  const [open, setOpen] = useState(true);
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  //return the user to the last page before coming to auth
  if (user.token) {
    return window.location.replace(from);
  }

  // const [data, setData] = useState([]);
  // const [isFetching,setIsFetching] = useState(false);


  // const fetchCompanies = async() => {
  //   setIsFetching(true);    

  //   try {
  //     const res = await apiRequest({
  //       url: "",
  //       method:"GET",
  //     });
  //     console.log(res);
  //     setData(res?.data);

  //     setIsFetching(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsFetching(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchCompanies();
  // },[]); 
  return (
    <div className=" mx-auto w-full overflow-hidden ">
      
      <svg class="inline-block fill-current w-full h-auto text-lime-200/40" viewBox="0 0 1440 450" xmlns="http://www.w3.org/2000/svg"><path d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1H1187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"></path></svg>

      {/* <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video> */}
          <h3 className="text-3xl text-pretty font-semibold text-center  translate-x-5 rounded md:-mt-[16rem] sm:-mt-[8.5rem] p-1"><HighlightText text={"Trusted"}/> by Leading Companies WorldWide for <HighlightText text={"Hiring"}/></h3>
          <div className=" flex justify-center items-center">
          <h4 className="text-xl  font-semibold text-center text-blue-900 object-contain mt-10 bg-green-100 w-fit  translate-x-5 rounded p-2 ">Our Proud Partners</h4>
          </div>
          
            
            <Carousel />
            
             
              <div className= "bg-gradient-to-r from-blue-300 via-blue-500 to-blue-500 bg-clip-text md:text-6xl text-5xl  tracking-tight text-transparent md:text-nowrap text-wrap justify-center items-center">
              <Link to="/" className="font-bold">
              <Typewriter 
                options={{
                  strings: ["Join Us!!", "Connect with multiple Companies","Register Yourself"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
              </Link>
              </div>
             
      <SignUp open={open} setOpen={setOpen} />
    </div>
  );
};

export default Auth;
