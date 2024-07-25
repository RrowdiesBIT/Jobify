import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Welcome to Jobify!</h1>
        <div className="mb-4">
            <p className
            ="font-bold text-2xl mb-2">Our Mission:</p>
            <p className="mb-2">Our mission is simple yet powerful: to empower individuals by helping them find meaningful employment opportunities that align with their career aspirations. We strive to simplify the job search process, making it efficient and rewarding for both job seekers and employers alike.</p>
        </div>
        <div className="mb-4">
            <p><b className="font-bold">What We Offer-</b> Explore a wide range of job openings across various industries and locations. Whether you are starting your career or looking for your next big opportunity, Jobify has something for everyone.</p>
        </div>
        <div className="mb-4">
            <p><b className="font-bold">User-Centric Experience:</b> Our platform is designed with you in mind. Navigate through intuitive job search features, personalized job recommendations, and user-friendly interfaces that make finding and applying for jobs seamless.</p>
        </div>
        <div className="mb-4">
            <p><b className="font-bold">Diverse Employers:</b> Connect with companies of all sizes – from innovative startups to established corporations. Each employer profile provides insights into their culture, values, and career growth opportunities.</p>
        </div>
        <div className="mb-4">
            <h4 className="font-bold mb-2">Why Choose Jobify?</h4>
            <ul className="list-disc list-inside cursor-pointer">
                <li><strong>Reliable and Secure:</strong> We prioritize the security of your personal information and ensure a safe browsing experience throughout our platform.</li>
                <li><strong>Dedicated Support:</strong> Our team is dedicated to providing exceptional support and guidance to both job seekers and employers. We are here to assist you at every step of your job search journey.</li>
                <li><strong>Continuous Improvement:</strong> We continuously strive to enhance our platform based on user feedback and industry trends, ensuring that Jobify remains a leading choice in the job market.</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold mb-2">Join Us Today</h4>
            <p>Whether you’re ready to take the next step in your career or searching for the perfect candidate to join your team, Jobify is here to help you succeed. Join our community today and discover endless possibilities in the world of work.</p>
        </div>
    </div>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify bg-white p-4 rounded-lg shadow-xl w-fit mx-5'>
      <p className="text-2xl font-semibold ">Contact Us</p>
        <p>
        Have questions or feedback? 
        <ol>
          <li className="cursor-pointer">We’d love to hear from you! Contact our support team at visit our</li>
          <li className="bg-gray-100 p-2 rounded-xl "><a href="mailto:support@gmail.com">support@gmail.com</a></li>
          <li className="bg-white p-2 rounded-xl "><a href="mailto:support@gmail.com">support@gmail.com</a> or </li>
          <li className="bg-gray-100 p-2 rounded-xl cursor-pointer">Contact Us [+9162*******] for more information.</li>
        </ol>
        </p>
      </div>
    </div>
  );
};

export default About;
