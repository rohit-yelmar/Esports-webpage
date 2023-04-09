import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({icon,title,content,index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Enter the Game, <br className="sm:block hidden"/>
            Leave Reality Behind.
        </h2>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient top-200"/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The industry has also benefited from a growing middle class with more disposable income and improving internet infrastructure. Despite this growth, the industry still faces challenges such as limited government support and a lack of domestic game development studios.
        </p>
        
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>

    </section>
  )
}

export default Business