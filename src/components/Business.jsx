import {features} from '../constants'
import styles , {layout} from '../style'
import  Button  from './Button'

const Business = () => {
  // creating a component which will be used in this page only
  const FeaturesCard = ({icon , title , content , index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? 'mb-6' : 'mb-0'} feature-card`}>

      <div className={`bg-dimBlue rounded-full w-[64px] h-[64px] ${styles.flexCenter}`}>
        <img src={icon} alt="icon"  className='h-[50%] w-[50%] object-contain'/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className='font-poppins font-sembold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
      </div>
    </div>
  )
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business<br className='hidden sm:block'/> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas a ullam amet asperiores laudantium perspiciatis atque officiis. Quaerat sint doloribus dicta numquam dolores nostrum ipsa praesentium est iste odio!</p>
        <Button styles="mt-10"/>
      </div>
      {/* features starts  */}

      <div className={`${layout.sectionImg} flex-col`} >
          {
            features.map((feature , index ) =>(
              <FeaturesCard key={feature.id} {...feature} index={index}/>
            ))
          }
          
      </div> 

    </section>
  )
}

export default Business