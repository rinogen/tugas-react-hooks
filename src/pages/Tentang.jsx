/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Layout from '../components/layout/Layout';
import { tentang } from '../data/text';

const Tentang = () => {
  return (
    <>
      <Layout>
        <div className="bg-white dark:bg-gray-900">
          <div className="flex flex-row flex-wrap justify-between w-full overflow-hidden text-[#444B55] dark:text-white">
            <section className="flex justify-between flex-col lg:flex-row xl:flex-row items-center w-full py-10 px-10 md:px-0 lg:px-0 xl:px-0">
              <div className="w-full lg:w-1/2 xl:w-1/2 md:py-10 lg:py-10 xl:py-10 md:pl-32 lg:pl-32 xl:pl-32">
                <div>
                  <h1 className="text-[34px] font-bold">
                    {tentang.visi.title}
                  </h1>
                  <p className="pl-6 text-[16px]">{tentang.visi.desc}</p>
                  <p></p>
                </div>

                <div className="mt-7">
                  <h1 className="text-[34px] font-bold">
                    {tentang.misi.title}
                  </h1>
                  <ul className="list-disc text-justify pl-6 text-[16px]">
                    {tentang.misi.desc.map((desc, index) => (
                      <li key={index} className="py-2">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-1/2 xl:w-1/2 md:flex lg:flex xl:flex items-center flex-col justify-start relative p-2 md:p-10 lg:p-10 xl:p-10">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvision-section.0fa77441.png&w=1080&q=75"
                    className="w-2/3" // Adjust the width of the image here
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tentang;
