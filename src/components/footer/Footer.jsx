import React from 'react';
import { footer } from '../../data/text';

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="text-[#5C5C6B] dark:text-white py-6 text-center mx-10">
        <div className="text-paletteText-inactive text-base">
          {footer.copywright}
        </div>
      </div>
    </div>
  );
};

export default Footer;
