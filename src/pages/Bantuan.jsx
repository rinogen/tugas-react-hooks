import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/card/CardBantuan';
import { bantuan } from '../data/text';

const Bantuan = () => {
  return (
    <>
      <Layout>
        <div className="bg-white dark:bg-gray-900">
          <div className="flex flex-row flex-wrap justify-between w-full">
            <section className="flex md:items-center items-start flex-col text-center w-full px-5 py-5 lg:px-40 lg:py-20 xl:px-40 xl:py-20 max-md:relative max-md:overflow-auto">
              <h1 className="text-black dark:text-white font-bold md:text-4xl text-xl p-2 max-md:hidden">
                {bantuan.title}
              </h1>
              <div className="mt-10">
                <div className="md:grid grid-flow-row gap-0 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 flex">
                  {bantuan.articels.map((article, index) => (
                    <Card
                      key={index}
                      cardTitle={article.title}
                      cardImg={article.img}
                      cardDescription={article.detail}
                      cardBtnText={bantuan.button}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Bantuan;
