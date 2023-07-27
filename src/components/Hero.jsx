import style from '../style'
import {discount , robot} from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section 
   id='#home'
   className={`${style.paddingY} flex md:flex-row flex-col`}
   >
      {/* left div */}
      <div className={`${style.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}>

         <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount"  className='h-[32px] w-[32px]'/>
            <p className={`${style.paragraph} ml-2`}>
              <span className='text-white'>20%</span> Discount for {" "}
              <span className='text-white'>1 Month</span> Account
            </p>
         </div>

         <div className="flex flex-row items-center justify-center w-full">
           <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-white'>
              The Next <br className='sm:block hidden'/> {" "}
              <span className='text-gradient'>Generation</span> {" "}
               Payment Method
           </h1>

           {/* getStarted */}
           <div className="hidden ss:flex md:mr-4 mr-0">
             <GetStarted/>
           </div>
           
         </div>
      </div>
  </section>
)

export default Hero