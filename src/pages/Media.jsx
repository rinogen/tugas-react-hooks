import React from 'react';
import Layout from '../components/layout/Layout';
import { media } from '../data/text';
import Card from '../components/card/CardMedia';

const Media = () => {
  return (
    <>
      <Layout>
        <div className="bg-white dark:bg-gray-900">
          <div className="flex md:container md:mx-auto justify-between lg:px-40">
            <div className="m-0 p-4 xl:p-0 xl:pr-8 w-full mb-10">
              <div className='class="py-4"'>
                <div className="flex-grow flex-col px-5 md:py-20 py-6 space-y-8">
                  <section className="flex flex-col mb-4">
                    <section className="w-fit">
                      <div className="text-center flex justify-center rounded-full border border-b-4 border-[#4DB3C5] w-[80px] mb-2 mx-auto"></div>
                      <h2 className=" text-black dark:text-white w-fit text-3xl font-bold text-[#0E0F11]">
                        {media.title}
                      </h2>
                    </section>
                    <p className="mt-2 text-black dark:text-white">
                      {media.desc}
                    </p>
                  </section>
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Media;
