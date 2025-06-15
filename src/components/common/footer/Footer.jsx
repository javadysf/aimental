import aiLogo from "../../../assets/img/aimental.svg";
import darkailogo from "../../../assets/img/header/darkailogo.svg";
import instaLogo from "../../../assets/img/footer/instagram.png";
import darkinstaLogo from "../../../assets/img/footer/darkInsta.svg";
import youtubeLogo from "../../../assets/img/footer/youtube.png";
import darkyoutubeLogo from "../../../assets/img/footer/darkYoutube.svg";
import linkdinLogo from "../../../assets/img/footer/linkdin.png";
import darklinkdinLogo from "../../../assets/img/footer/darkLinkdin.svg";
import Link from "next/link";
import { useTheme } from 'next-themes';
import Image from "next/image";

const Footer = () => {
	const { theme, setTheme } = useTheme();
  return (
    <footer className="bg-neutral dark:bg-zinc-800 text-black dark:text-neutral-300  p-8 flex items-flex max-md:flex-col-reverse max-lg:p-3 justify-between gap-8">
      <div className="flex flex-col gap-4 w-1/4 max-md:w-auto">
        <Image alt="aimental-logo"  src={theme=='dark'?darkailogo:aiLogo} className="w-64 h-30" />
        <span className="text-ellipsis overflow-hidden">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. At quis risus sed vulputate odio ut
          enim.
        </span>
        <div className="flex gap-2 w-1/4">
          <Image alt="social-apps" className="w-8" src={theme=='dark'?darklinkdinLogo:linkdinLogo} />
          <Image alt="social-apps" className="w-8" src={theme=='dark'?darkinstaLogo:instaLogo} />
          <Image alt="social-apps" className="w-8" src={theme=='dark'?darkyoutubeLogo:youtubeLogo} />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <h3 className="font-black">Analyses</h3>
        <ul>
          <li><Link href={"#"} >Depression Analyzer</Link></li>
          <li><Link href={"#"} >Immigration Analyzer</Link></li>
          <li><Link href={"#"} >Primary Assessment</Link></li>
          <li><Link href={"#"} >Beck Anxiety Questionnaire</Link></li>
          <li><Link href={"#"} >DASS-42 Questionnaire</Link></li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 ">
        <h3 className="font-black">Services</h3>
        <ul>
          <li><Link href={"#"}>Language Learning</Link></li>
          <li><Link href={"#"}>Personal Therapy</Link></li>
          <li><Link href={"#"}>Group Therapy</Link></li>
          <li><Link href={"#"}>Blog</Link></li>
          <li><Link href={"#"}>About Us</Link></li>
        </ul>
      </div>
      <div className="flex flex-col gap-4  ">
        <h3 className="font-black">Join to Newsletter</h3>
        <div className="flex flex-col gap-2 w-96 max-md:w-auto ">
          <input placeholder="name*" className=" p-4 rounded-2xl h-11" />
          <input placeholder="email*" className="p-4 rounded-2xl h-11" />
          <button className="bg-blue rounded-2xl font-medium text-white h-11 dark:text-deepBlue dark:bg-blue-200 ">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
