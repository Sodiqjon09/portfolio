import { Link } from "react-router-dom";
import { dataNavbar, px } from "../data/data";
import { portfolioName } from "../main";

const navbarSomething = `fixed top-0 left-0 right-0  w-full flex justify-between items-center py-[30px] ${px}`;

function pageNavbar() {
  return (
      <div className={navbarSomething}>
        <div>
          <h1 className="text-[#fff] text-[50px]">{portfolioName}</h1>
        </div>
        <div className="flex justify-between items-center gap-[50px]">
          {dataNavbar?.map((el) => {
            return (
              <nav key={el.id}>
                <Link
                  to={el.navbarName}
                  className=" text-[#fff] text-[29px] cursor-pointer relative capitalize no-underline hover:text-[#ee0653]"
                >
                  {el.navbarName}
                </Link>
              </nav>
            );
          })}
        </div>
      </div>
  );
}

export default pageNavbar;
