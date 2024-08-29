import React from 'react';
import { footer } from '../../data/text';

const Footer = () => {
  return (
    <div className="bg-[#F6F9FC]">
      <div className="text-[#5C5C6B] py-6 text-center mx-10">
        <div className="text-paletteText-inactive text-base">
          {footer.copywright}
        </div>
      </div>
    </div>
  );
};

export default Footer;
