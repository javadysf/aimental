import { Outlet, useNavigate} from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Layout = (props) => {


  return (
    <div className="dark:bg-neutral-800 dark:text-neutral-300">
      <Header />
<div className="mt-[88px] max-lg:mt-[72px]">

      <Outlet />
</div>
      <Footer />
    </div>
  );
};

export default Layout;
