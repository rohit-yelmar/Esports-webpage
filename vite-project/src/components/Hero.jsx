import styles from "../style";
import { discount,robos,explore} from "../assets";
import GetStarted from "./GetStarted";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> The Ultimate{" "}
            <span className="text-white">Gaming</span> Platform
          </p>
        </div>
        
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient animate-pulse">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white w-full">
          Gaming
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Indian gaming industry has seen significant growth in recent years, driven by the increasing popularity of mobile and online gaming.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robos} alt="billing" className="w-[100%] h-[100%] relative z-[5] right-20" />

        {/* gradient start */}
        
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
       <img src={explore} className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default Hero;