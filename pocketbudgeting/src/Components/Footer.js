import React from "react";

const Footer = () => {
  return (
    /* Footer created by Ms Hellen 😉 */
    <footer className="text-gray-500 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-4 sm:mb-0">
          &copy; 2024 Pocket. All rights reserved.
        </p>
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <li>
            <a href="#" className="hover:text-green-500">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-500">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="tel:+255620719589" className="hover:text-green-500">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
