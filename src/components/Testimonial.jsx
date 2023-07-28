import {feedback} from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonial = () => (
  
  <section id='client' className={`${styles.flexCenter} ${styles.paddingY} relative flex-col`}>
     <div className="w-full flex justify-center items-center z-[1] relative mb-6 md:mb-16 flex-col md:flex-row ">
      <h2 className={styles.heading2}>What people are <br className='sm:block hidden'/> saying about us</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} mx-w-[450px] text-left`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
     </div>

     {/* cards */}
     <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
       {feedback.map((card)=>(
           FeedbackCard
       ))}
     </div>
  </section>
)

export default Testimonial