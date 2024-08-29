import React from 'react';
import Layout from '../components/layout/Layout';
import { contact, contactLinks, socialLinks } from '../data/text';
import Card from '../components/card/CardKontak';

const Kontak = () => {
  return (
    <>
      <Layout>
        <div className="ubuntu-font text-[#444B55] flex md:container md:mx-auto justify-between lg:px-40">
          <div className="w-screen lg:mt-12 xl:mt-12 mb-10 p-7 md:p-0 lg:p-0 xl:p-0">
            <div className="mb-5">
              <div className="text-[48px] font-bold ">{contact.title}</div>
              <p className="text-[16px] leading-6">
                {contact.desc1}
                <br />
                {contact.desc2}
              </p>
            </div>
            <div className="flex flex-col justify-between items-center w-full gap-4">
              <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4">
                <Card cardTitle={contact.subTitle}>
                  <div className="py-4">
                    {contactLinks.map((contactLink, index) => (
                      <div>
                        <h2 className="text-lg font-bold">
                          {contactLink.name}
                        </h2>
                        <span className="flex items-center">
                          <p className="pr-2">
                            <img
                              src={contactLink.img}
                              alt={contactLink.name}
                              className="w-6 h-6"
                            />
                          </p>
                          {contactLink.detail}
                        </span>
                      </div>
                    ))}
                    <p className="text-lg font-bold mt-2">
                      Senin - Jumat | 08:00 - 17:00 WIB
                    </p>
                  </div>
                </Card>
                <Card cardTitle={contact.subTitle2}>
                  <h6 className="text-[16px] font-medium">
                    Gedung Telkom Direktorat Business and Technology
                  </h6>
                  <p className="text-sm">
                    Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI
                    Jakarta, 12810 Indonesia
                  </p>
                  <div className="mt-5">
                    <h3 className="text-[22px] font-bold">
                      Ikuti Media Sosial Kami
                    </h3>
                    <div className="flex items-center space-x-2 mt-4 mb-0 justify-center xl:justify-start">
                      {socialLinks.map((socialLink, index) => (
                        <div className="cursor-pointer">
                          <a
                            key={index}
                            className="w-full h-full"
                            href={socialLink.url}
                            target="_blank">
                            <img
                              src={socialLink.img}
                              alt={socialLink.name}
                              className="w-8 h-8"
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Kontak;
