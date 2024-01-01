import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full  bg-[#f1f2f3] h-52 grid place-content-center rounded-bl-[46px] rounded-t-2xl">
        <div className="relative w-36 h-36 hover:scale-110 transition-all ">
          <Image src="/images/f1.png" alt="" layout="fill" />
        </div>
      </div>
      <div className="p-6 text-white">
        <h5 className="text-xl font-semibold">Delicious Pizza</h5>
        <p className="text-sm">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between items-center mt-4">
          <span>$20</span>
          <button className="btn-primary w-10 h-10 !rounded-full !p-0 grid place-content-center">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
