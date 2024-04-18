import { px } from "../data/data";
import personImg from "../assets/images/1.png";
const navbarSomething = `flex justify-between items-center py-[180px] ${px}`;
import DownloadImg from "../assets/images/dowlandImage.png";
import Img5 from "../assets/images/5.png";

const hi = "Hi it's me";

function navbarPagehook() {
  return (
    <div className={navbarSomething}>
      <div className="flex items-center gap-6">
        <div>
          <img className="h-[380px]" src={Img5} alt="" />
        </div>
        <div>
          <h1 className="">
            <p className="text-[40px] font-[900] text-[#f86f03]">
              <span>{hi}</span>
            </p>
          </h1>
          <h1 className="text-[100px] font-[800] text-[#fff]">
            <span className="text-[#00ADB5] ">Frontend </span>
            <span>
              web <br /> developer
            </span>
          </h1>
          <div className="flex gap-[17px]">
            <button className="px-[25px] py-[10px] font-[700] text-[#fff] bg-[#00adb5] rounded-[30px] cursor-pointer">
              Hire me
            </button>
            <button className="flex items-center px-[40px] py-[10px] rounded-[30px] gap-2 text-[#fff] bg-[#333840] cursor-pointer">
              Download CV <img src={DownloadImg} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <img className="w-[500px] h-[500px]" src={personImg} alt="" />
      </div>
    </div>
  );
}

export default navbarPagehook;
