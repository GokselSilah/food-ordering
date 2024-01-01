import Title from "./Title";
import Image from "next/image";
import {FaShoppingCart} from "react-icons/fa"

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-4 flex items-center gap-x-5">
      <div className="relative l:w-44 l:h-44 w-36 h-36 after:content-['']  border-primary border-[5px] rounded-full overflow-hidden ">
        <Image
          src="/images/o1.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-all"
        />
      </div>
      <div className="text-white">
        <Title addClass={"text-2xl"}>Tasty Thursdays</Title>
        <div className="font-dancing my-1">
            <span className="text-4xl ">20%</span>
            <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">Order Now <FaShoppingCart/></button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex container py-20 py mx-auto justify-between gap-6 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;
