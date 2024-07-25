import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import TextInput from "./TextInput.jsx";
import CustomButton from "./CustomButton.jsx";
import { footerLinks } from "../utils/data.js";
function Footer() {
  return (
    <footer className="text-white mp-20 relative ">
      <div className="overflow-x-hidden -mb-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="#3084FF"
          style={
            {
              position: "absolute",
              top: "3px",
            }
          }
        >
          <path
            d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z"
            opacity=".5"
          ></path>
          <path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path>
        </svg>
      </div>
      <div className="bg-[#1d4ed8] mt-3">
        <div className="container px-5 py-20 mx-auto ">
          <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4 mt-4">
            {footerLinks.map(({ id, title, links }) => (
              <div className="w-auto px-4 " key={id + title}>
                <h2 className="font-medium text-white tracking-widest text-sm mb-3">
                  {title}
                </h2>

                <div className="mb-10 flex flex-col gap-3 ">
                  {links.map((link, index) => (
                    <Link
                      key={link + index}
                      to="/"
                      className="text-gray-300 text-sm hover:text-white "
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <p className="container px-5 mx-auto text-white mt-2 ">
            Subscribe to our Newsletter
          </p>

          <div className="container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between ">
            <div className="w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start ">
              <TextInput
                styles="w-full flex-grow md:w-40 2xl:w-64 bg-gray-100 sm:mr-4 md-2"
                type="email"
                placeholder="Email Address"

              />

              <CustomButton
                title="Subscribe"
                containerStyles={
                  "block bg-[#001a36] text-white px-5 py-2.5 text-md rounded hover:bg-blue-800 focus:potline-none flex-col items-center mt-2"
                }
              />
            </div>

            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto cursor-pointer">
              
              
              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FiInstagram />
              </a>

              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300" href="https://linkedin.com/in/rahulrajbit" target="_blank">
                <FaLinkedinIn />
              </a>
              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300" href="https://github.com/RrowdiesBIT" target="_blank">
                <FaGithub />
              </a>
              
            </span>
          </div>
        </div>

        <div className="bg-[#001a36]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              &copy; 2024 @Jobify —
            </p>

            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm">
              Designed by Jobify
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
