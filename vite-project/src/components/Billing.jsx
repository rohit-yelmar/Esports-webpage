import {apple,google,play} from '../assets';
import styles,{ layout } from '../style';

const Billing = () => (
    <section className={layout.sectionReverse} id="product">
      <div className={layout.sectionImgReverse}>
        <img src={play} alt="billing" className="w-[130%] h-[100%} relative z-[15]"/>
        <div className="abolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient "/>
        <div className="abolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient "/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Where Champions Compete <br className="sm:block hidden"/>
            Your Home for Reality.
        </h2>
        <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-300"/>
        <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full pink__gradient bottom-300"/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Fight to be the Last One Standing.
        Survive, Outwit, Emerge Victor.
        </p>
        <div className=" flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google-play" className="w-[128px] h-[42px] objcet-contain mr-5 cursor-pointer"/>
          <img src={google} alt="google-play" className="w-[128px] h-[42px] objcet-contain cursor-pointer"/>
        </div>
      </div>

    </section>
  )


export default Billing