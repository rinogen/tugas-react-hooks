import React from 'react';
import Navbar from '../components/header/Navbar';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-900">
        <div className="flex flex-row flex-wrap justify-between w-full">
          <section className="flex md:items-center items-start flex-col text-center w-full px-5 py-5 lg:px-40 lg:py-20 xl:px-40 xl:py-20 max-md:relative max-md:overflow-auto">
            <div className="max-w-screen-lg w-full  bg-white dark:bg-gray-900 rounded-lg lg:flex overflow-hidden h-fit">
              <div className="relative bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] dark:from-[#002B36] dark:to-[#003C5C] lg:max-w-screen-sm w-full hidden lg:flex flex-col justify-center items-center space-y-7 p-10">
                <div className="flex justify-center items-center flex-1">
                  <div className="relative w-[300px] h-[270px]">
                    <img
                      className="w-full h-full"
                      src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-4 flex-1 min-h-[144px]">
                  <div className="text-2xl text-white font-bold text-center">
                    Pasti Untung di PaDi UMKM!
                  </div>
                  <div className="text-white text-center font-normal">
                    Berbagai promo dan penawaran menarik setiap bulannya!
                  </div>
                </div>
              </div>
              <div className="flex flex-col border text-dark dark:text-white justify-center items-center w-full h-screen lg:h-full p-10">
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <div className="text-2xl text-paletteText-primary font-bold">
                      Login
                    </div>
                    <a href="/">
                      <div className="relative w-24 h-24 cursor-pointer">
                        <img
                          className="w-full h-full"
                          alt="logo"
                          src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full space-y-2 mb-4">
                    <label className="block text-sm font-semibold text-paletteText-primary text-left">
                      Alamat Email
                    </label>
                    <input
                      className="appearance-none border text-black rounded w-full py-2 px-3 focus:outline-none false"
                      id="username"
                      type="text"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className="w-full space-y-2 mb-6">
                    <label className="block text-sm font-semibold text-paletteText-primary text-left">
                      Kata Sandi
                    </label>
                    <div className="relative">
                      <input
                        className="appearance-none border text-black rounded w-full py-2 px-3 focus:outline-none false"
                        id="password"
                        type="password"
                        placeholder="Masukan Kata Sandi"
                      />
                      <span className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className="w-8 h-8"
                          src="https://www.svgrepo.com/show/474045/eye-close.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <div className="w-full mb-6">
                    <button
                      className="w-full py-2 bg-[#009EA9] text-white rounded-lg "
                      type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
