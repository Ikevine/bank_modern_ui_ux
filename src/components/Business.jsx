import style from '../style'
import {arrowUp} from '../assets'

const Business = () => {
  return (
    <div className={`w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] ${style.flexCenter}`}>
       <div className={`w-full h-full bg-black rounded-full ${style.flexCenter} flex-col`}>
          <div className={`${style.flexStart} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
              <span className='text-gradient'>Get</span>
            </p>
             <img src={arrowUp} alt="arrow" />
          </div>

          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>

       </div>
    </div>
  )
}

export default Business