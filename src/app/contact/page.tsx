import React from "react";
import { NextPage } from "next";
import Link from "next/link";
const ContactPage: NextPage = () => {
  return (
    <main className="bg-[#000000] w-[100%] h-[100vh] p-[20px]">
      <div>
        <div className="flex">
          <div>
            <img
              className="w-[100px] ml-[100px] rounded-[50%]"
              src="https://i.pinimg.com/280x280_RS/19/94/be/1994be323b89af7cf7df5ac83acb6f34.jpg"
              alt=""
            />
          </div>
          <div className="pl-[1000px] mt-[40px]">
            <ul className="flex gap-[80px]">
              <li className="text-[#fff] font-bold  hover:text-[#41EA66] duration-300">
                <Link href={`/`}>Home</Link>
              </li>
              <li className="text-[#fff] font-bold  hover:text-[#41EA66] duration-300">
                <Link href={`/about`}>Shop</Link>
              </li>
              <li className="text-[#fff] font-bold  hover:text-[#41EA66] duration-300">
                <Link href={`/contact`}>contact</Link>
              </li>
              <li className="text-[#fff] font-bold  hover:text-[#41EA66] duration-300">
                <Link href={`/help`}>Help</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-[250px]">
            <div className="flex justify-center mt-[50px]">
              <div className="w-[600px] h-[320px] mt-[80px] rounded-[30px] border border-[#9494946b] bg-[#ffffff36]">
                <div className="p-[30px]">
                  <button className="w-[100%] h-[60px] bg-[#E75F53] text-[20px] font-semibold rounded-[20px] border border-[#b8b0b0be] text-[#ffffff]">
                    e-mail
                  </button>
                  <button className=" mt-[40px] w-[100%] h-[60px] bg-[#415CA0] text-[20px] font-semibold border border-[#b8b0b0be] rounded-[20px] text-[#fff]">
                    Facebook
                  </button>
                  <button className=" mt-[40px] w-[100%] h-[60px] bg-[#0088CC] text-[20px] font-semibold border border-[#b8b0b0be] rounded-[20px] text-[#fff]">
                    telegram
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/b2/25/12/b22512198cdbd14127482361127e4809.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
