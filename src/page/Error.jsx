import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import notFoundSvg from "../assets/notFound.svg";
const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="">
        <div className="flex flex-col items-center mx-2">
          <img src={notFoundSvg} alt="notFound" loading="eager" title="NOT FOUND"/>
          <h1 className="text-2xl mt-2 font-dmSans">LOOKS LIKE YOU&apos;RE LOST</h1>
          <p className=" text-center font-dmSans">We can&apos;t seem to find you the page you&apos;re looking for</p>
          <div 
          onClick={()=>navigate(-1)}
          className="flex items-center gap-2 bg-[#004C4C] text-[#fdfdfd] leading-[20px] px-5 py-[10px] rounded-md mr-2 hover:scale-105 transition-all duration-300 cursor-pointer mt-4">
            <span className="font-dmSans">
              <HiOutlineArrowNarrowLeft />
            </span>
            Back to Home{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;