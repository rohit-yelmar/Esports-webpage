import {image} from '../assets';
import styles,{layout} from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Shoot to Win <br className="sm:block hidden"/>
            Think to Survive.
        </h2>
        <p className={`{styles.paragraph} maw-w-[470px] mt-5`}>
        "Fight to be the Last One Standing."
        "Survive, Outwit, Emerge Victor.".
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-300"/>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full pink__gradient bottom-300"/>
      <div className={layout.sectionImg}>
        <img src={image} alt="card" className="w-[100%] h-{70%] z-[15]"/>
      </div>
      
    </section>
  
  )


export default CardDeal