import starLogo from "../../assets/img/landing/star.svg";
import darkstarLogo from "../../assets/img/landing/darkstar.svg";
import medicalLogo from "../../assets/img/landing/medical.svg";
import darkmedicalLogo from "../../assets/img/landing/darkmedical.svg";
import chatLogo from "../../assets/img/landing/chat.svg";
import darkchatLogo from "../../assets/img/landing/darkmessage.svg";
import mainPic from "../../assets/img/landing/Image.png";
import FindTherapistButton from "../common/FindTherapistButton";
import Image from "next/image";


const HeroSection = ({theme}) => {
    const items = [
        { id: 1, title: " Online Free Consultation (20 min)", img: theme=='dark'?darkmedicalLogo:medicalLogo },
        { id: 2, title: " Online individual and group Therapy", img: theme=='dark'?darkchatLogo:chatLogo  },
        { id: 3, title: " Based on Artificial Intelligence", img: theme=='dark'?darkstarLogo:starLogo },
      ];
  return (
    <div className="flex max-lg:flex-col-reverse gap-2">
      <div className="w-1/2 max-lg:w-full max-lg:gap-4 px-8 pt-8 center max-lg:p-4 flex flex-col  gap-12">
        <h1 className="font-black text-deepBlue text-4xl dark:text-blue-200 text-center max-lg:text-3xl leading-tight ">Motivative Quotes or Slogan</h1>
        <ul className="flex flex-col gap-4 ">
            {items.map(item =>
          <li key={item.id}>
            <span className="flex gap-3 items-center max-lg:gap-4 font-normal">
              <Image alt="item" className="text-neutral-300 max-lg:w-8" src={item.img} />
              <h4 className="font-normal text-lg dark:text-neutral-300 max-lg:text-sm">
              {item.title}
              </h4>
            </span>
          </li>
            )}
        </ul>
        <FindTherapistButton/>
      </div>
      <div className="w-1/2 max-lg:w-full max-lg:h-fit p-9 max-lg:p-0 ">
      <Image alt="mainpic" className=" rounded-3xl max-lg:rounded-none object-none  " src={mainPic} />
      </div>
    </div>
    
  );
};

export default HeroSection;
