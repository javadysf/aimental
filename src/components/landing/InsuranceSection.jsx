import RoyalInsurance from "../../assets/img/landing/insurance-section/royal.png";
import darkRoyalInsurance from "../../assets/img/landing/insurance-section/darkroyal.svg";
import continental from "../../assets/img/landing/insurance-section/continental.png";
import darkcontinental from "../../assets/img/landing/insurance-section/darkcontinental.svg";
import berkshire from "../../assets/img/landing/insurance-section/berkshire.png";
import darkberkshire from "../../assets/img/landing/insurance-section/darkberkshire.svg";
import americanfamily from "../../assets/img/landing/insurance-section/americanfamily.png";
import darkamericanfamily from "../../assets/img/landing/insurance-section/darkamericanfamily.svg";
import Image from "next/image";

const InsuranceSection = ({theme}) => {
  const insurances = [
    { id: 1, path: theme=='dark'?darkRoyalInsurance:RoyalInsurance },
    { id: 2, path: theme=='dark'?darkcontinental:continental },
    { id: 3, path: theme=='dark'?darkberkshire:berkshire },
    { id: 4, path: theme=='dark'?darkamericanfamily:americanfamily },
  ];
  return (
    <div className="flex py-10 gap-4 justify-between bg-blue-50 dark:bg-zinc-800 max-lg:py-4 overflow-hidden">
      <marquee  direction='right'behavior='scroll' className="w-full flex" style={{ color: 'red', fontSize: '3em' }}>
        <div className="flex gap-16">
      {insurances?.map((insurance) => (

          <Image width={200} height={200}  alt="insurance-pic"  key={insurance.id} className="" src={insurance.path} />
        ))}
        </div>
      </marquee>
    </div>
  );
};

export default InsuranceSection;
