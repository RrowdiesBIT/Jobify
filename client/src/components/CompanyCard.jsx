import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ cmp }) => {
  return (
    <div className="w-full h-16 flex gap-4 items-center justify-between bg-white shadow-md rounded p-10">
      <div className="w-3/4 md:w-2/4 flex gap-4 items-center ">
        <Link to={`/company-profile/${cmp?._id}`}>
          <img
            src={cmp?.profileUrl}
            alt={cmp?.name}
            className="w-8 md:w-13 h-8 md:h-12 rounded object-contain"
          />
        </Link>
        <div className="h-full flex flex-col">
          <Link
            to={`/company-profile/${cmp?._id}`}
            className="text-base md:text-lg font-semibold text-gray-600 truncate"
          >
            {cmp?.name}
          </Link>
          <span className="text-sm text-blue-600">{cmp?.email}</span>
        </div>
      </div>
      <div className="hidden w-1/4 h-full md:flex items-center">
        <p className="text-base text-start">{cmp?.location}</p>
      </div>

      <div className="w-1/4 h-full flex flex-col items-center justify-center">
        <p className="text-blue-600 font-semibold">{cmp?.jobPosts?.length}</p>
        <span className="text-xs font-normal text-gray-600">
          Jobs Posted
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;
