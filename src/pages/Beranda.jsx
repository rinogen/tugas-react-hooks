import React from 'react';
import Layout from '../components/layout/Layout';
import { beranda } from '../data/text';

const Beranda = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:mx-auto">
          <section className="relative flex z-10 items-start w-full h-full md:h-[380px] lg:h-[472px] xl:h-[472px] overflow-hidden bg-gradient-to-r from-[#D6FCFF] to-[#29BBD4] dark:from-[#002B36] dark:to-[#003C5C]">
            <div className="z-10 h-full w-full gap-6 flex flex-col lg:flex-row xl:flex-row items-center justify-center mx-10 my-10 lg:my-0 xl:my-0 lg:mx-40 xl:mx-40">
              <div className="w-full flex justify-start items-start">
                <div>
                  <h1 className="text-[#002022] dark:text-white font-bold text-2xl md:text-[28px] lg:text-[28px] xl:text-[28px] lg:leading-[42px] ">
                    {beranda.title}
                  </h1>
                  <p className="text-[#444B55] dark:text-white text-wrap text-md md:text-lg lg:text-lg xl:text-lg pb-2 pt-4">
                    {beranda.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center rounded-[15px] lg:rounded-[30px] xl:rounded-[30px] overflow-hidden w-full lg:w-[70%] xl:w-[70%] ">
                <img src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.c32bfb9e.jpg&w=3840&q=75" />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Beranda;
