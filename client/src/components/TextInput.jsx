import React ,{useState}from "react";
import { forwardRef } from "react";
import { BiSolidShow } from "react-icons/bi";
import {GoEyeClosed} from "react-icons/go";

const TextInput = forwardRef(
  ({ type, placeholder, styles, label, register, name, error }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


    return (
      <div className='flex flex-col mt-2'>
        <p className='text-gray-600 text-sm mb-1 '>{label}</p>

        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          className={`rounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 ${styles}`}
          {...register}
          aria-invalid={error ? "true" : "false"}
        />
          {type === "password" && (
            <button
              type="button"
              className="translate-x-44"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <BiSolidShow />
              ) : (
                <GoEyeClosed />
              )}
            </button>
          )}

        {error && <span className='text-xs text-red-500 mt-0.5 '>{error}</span>}
      </div>
    );
  }
);

export default TextInput;
