/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Card = ({ cardTitle, cardImg, cardDescription, cardBtnText }) => {
  return (
    <div className="p-2 text-left mb-10">
      <div className="flex rounded-lg h-full border p-4 flex-col lg:min-w-[250px] xl:min-w-[333px] min-w-[250px]">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img src={cardImg} />
          </div>
          <h2 className="text-black dark:text-white text-lg font-bold">
            {cardTitle}
          </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <ul>
            {cardDescription.map((detail, index) => (
              <li
                className=" dark:text-white p-1 text-[16px] font-medium text-[#686E76] hover:text-[#009EA9] cursor-pointer"
                key={index}>
                {detail}
              </li>
            ))}
          </ul>
          <button className="w-fit py-1 px-2 rounded border mt-2 border-[#009EA9] text-[#009EA9] hover:text-white hover:bg-[#009EA9]">
            {cardBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
