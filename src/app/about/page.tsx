import React from "react";
import Link from "next/link";
const Aboutpage = () => {
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
        <div className="flex">
          <div>
            <div className="mt-[100px] pl-[200px]">
              <div>
                <h3 className="text-[#41EA66] text-[18px] font-medium">
                  LED NEON LAMPS WITH A UNIQUE DESIGN
                </h3>
              </div>
              <div>
                <h1 className="text-[100px] font-extrabold text-[#fff] leading-[100px] mt-[40px]">
                  Neon for <br /> your interior
                </h1>
              </div>
              <div>
                <p className="text-[#fff] mt-[20px] text-[20px] w-[500px] leading-[30px] tracking-[0px]">
                  Neon is whatever you want it to be: a wonderful gift, a cool
                  logo for your business, or a nice decoration for your home,
                  office or event.
                </p>
              </div>
            </div>
            <div className="gap-[20px] flex ml-[200px] mt-[30px]">
              <button className="w-[200px] h-[60px] bg-[#41EA66] text-[20px] font-semibold rounded-[40px] text-[#000]">
                Buy
              </button>
              <button className="w-[200px] h-[60px] bg-[#2F2E35] text-[20px] font-semibold text-[#41EA66] rounded-[40px]">
                Category
              </button>
            </div>
          </div>
          <div className="ml-[100px] mt-[100px]">
            <img className="w-[700px] rounded-[30px]"
              src="https://img.freepik.com/premium-photo/creative-fluorescent-color-layout-made-tropical-leaves-flat-lay-neon-colors-ai-generated_201606-8090.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Aboutpage;
