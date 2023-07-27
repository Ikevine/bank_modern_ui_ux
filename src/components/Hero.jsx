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
           <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] leading-[75px] ss:leading-[100px] text-white'>
              The Next <br className='sm:block hidden'/> {" "}
              <span className='text-gradient'>Generation</span> {" "}
           </h1>
           {/* getStarted */}
           <div className="hidden ss:flex md:mr-4 mr-0">
             <GetStarted/>
           </div>
         </div>
         <h1 className='w-full font-poppins font-semibold ss:text-[68px] text-[52px] leading-[75px] ss:leading-[100px] text-white'>
              <span>Payment Method</span>
          </h1>
          <p className={`${style.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta sed doloribus dolorum voluptas. Esse rerum in, consectetur vel aliquam eaque deleniti harum culpa sequi optio magnam ut quas eius eum!</p>
      </div>
      {/* right div */}
      <div className={`flex-1 flex ${style.flexCenter} md:my-0 my-10 relative`}>
         <img src={robot} alt="billing"  className='w-[100%] h-[100%] relative z-5'/>
         <div className='absolute z-[0] pink__gradient top-0 w-[40%] h-[35%]'/>
         <div className='absolute z-[1] white__gradient rounded-full bottom-0 w-[80%] h-[80%]'/>
         <div className='absolute z-0 right-30 bottom-20 blue-gradient top-0 w-[50%] h-[50%]'/>
      </div>

      <div className={`ss:hidden ${style.flexCenter}`}>
        <GetStarted/>
      </div>
  </section>
)

export default Hero