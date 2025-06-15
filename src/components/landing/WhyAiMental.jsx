import Image from "next/image";
import girlLogo from "../../assets/img/landing/whyaimental/girl.png";
import FindTherapistButton from "../common/FindTherapistButton";

const WhyAiMental = () => {
  const captions = [
    {
      id: 1,
      title: "The Power of Individual Therapy",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim.",
    },
    {
      id: 2,
      title: "Our Unique Advantages",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim.",
    },
    {
      id: 3,
      title: "Start Your Journey Today",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim.",
    },
  ]
  return (
    <div className="col p-6 px-32 max-lg:p-4 gap-4">
      <h1 className="text-deepBlue text-5xl max-lg:text-4xl font-bold font-normal text-center dark:text-blue-200 max-lg:content-center max-lg:h-14">
        Why AIMental
      </h1>
      <div className="flex max-lg:flex-col-reverse max-lg:px-2 gap-4">
        <div className="col align-center gap-2 justify-between  items-end">
          <ul className="col gap-2 dark:text-neutral-300">
            {captions?.map((item) => (
              <li key={item.id} className="flex p-2 gap-2">
                <div className="flex w-1/5">
                  <span className="rounded-full border-neutral-800 dark:border-neutral-300 w-20 h-20 max-lg:w-14 max-lg:h-14 border content-center text-center items-center">
                    <p className="text-4xl max-lg:text-xl">{item.id}</p>
                  </span>
                </div>
                <span className="col ">
                  <h3 className="font-semibold text-3xl max-lg:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="text-md text-justify">{item.desc}</p>
                </span>
              </li>
            ))}
          </ul>
          <FindTherapistButton />
        </div>
        <div className="w-3/5 max-lg:w-full">
          <Image width={700} height={300} alt="why-us" src={girlLogo} />
        </div>
      </div>
    </div>
  );
};

export default WhyAiMental;
