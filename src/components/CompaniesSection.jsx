import React from 'react';
import companyLogo from "../assets/Frame 14.png";

export const CompaniesSection = () => {
  return (
    <div className="flex justify-center items-center h-[202px] bg-[#F7F7FA]">
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center min-w-[1440px] h-[81px]">
          <img
            src={companyLogo}
            alt="companies worked"
            className="h-[81px] w-[1440px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
