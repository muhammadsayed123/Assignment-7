import React from "react";
import a from "../../assets/pic/Group.png";
import b from "../../assets/pic/fi_145807.png";
import c from "../../assets/pic/Group-1.png";
import d from "../../assets/pic/Vector.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1200px] mx-auto py-10">
        <div className="grid grid-cols-5 gap-10">
          <div className="text-white">
            <h1 className="font-bold text-xl mb-3">CS — Ticket System</h1>
            <p className=" text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-xl mb-3">Company</h1>
            <p className="mb-3 text-gray-500">About Us</p>
            <p className="mb-3 text-gray-500">Our Mission</p>
            <p className="text-gray-500">Contact Saled</p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-xl mb-3">Services</h1>
            <p className="mb-3 text-gray-500">Products & Services</p>
            <p className="mb-3 text-gray-500">Customer Stories</p>
            <p className="text-gray-500">Download Apps </p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-xl mb-3">Information</h1>
            <p className="mb-3 text-gray-500">Privacy Policy</p>
            <p className="mb-3 text-gray-500">Terms & Conditions</p>
            <p className="text-gray-500">Join Us</p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-xl mb-3">Social Links</h1>
            <p className="flex text-gray-500 mb-5 gap-3">
              <img src={a} alt="" />
              @CS — Ticket System
            </p>
            <p className="flex text-gray-500 mb-5 gap-3">
              <img src={b} alt="" />
              @CS — Ticket System
            </p>
            <p className="flex text-gray-500 mb-5 gap-3">
              <img src={c} alt="" />
              @CS — Ticket System
            </p>
            <p className="flex text-gray-500 gap-3">
              <img src={d} alt="" />
              support@cst.com
            </p>
          </div>
        </div>
        <p className="text-white flex justify-center mt-20 ">© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
