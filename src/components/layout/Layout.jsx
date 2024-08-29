import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../header/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
