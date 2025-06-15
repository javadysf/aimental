import clockImg from "../../assets/img/landing/statics/clock.png"
import darkclockImg from "../../assets/img/landing/statics/darkclock.svg"
import personImg from "../../assets/img/landing/statics/person.png"
import darkpersonImg from "../../assets/img/landing/statics/darkperson.svg"
import usersImg from "../../assets/img/landing/statics/users.png"
import darkusersImg from "../../assets/img/landing/statics/darkusers.svg"
import Image from "next/image"
const StaticsSection = ({theme}) => {
  const statics = [
    { id: 1, title: "+10000 Hours", img: theme=='dark'?darkclockImg:clockImg },
    { id: 2, title: "+100 Therapists", img: theme=='dark'?darkpersonImg:personImg  },
    { id: 3, title: "+1000 Users", img: theme=='dark'?darkusersImg:usersImg },
  ];
  return (
    <div className="bg-blue-50 flex justify-evenly dark:bg-zinc-800 gap-8 p-12 max-lg:p-2">
        {statics?.map((statics) =>   
      <span className="col w-32 text-center center " key={statics.id}>
        <Image alt="static-img" className="w-24 max-lg:w-16 "  src={statics.img} />
        <h4 className="text-blue font-semibold text-2xl max-lg:text-xl dark:text-blue-200 ">{statics.title}</h4>
      </span>
        )}
    </div>
  );
};

export default StaticsSection;
