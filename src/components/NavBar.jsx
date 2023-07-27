import {useState} from 'react'
import{logo , menu , close} from '../assets';

import {navLinks} from '../constants';
const NavBar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* web version */}
      <img src={logo} alt="logo"  className='w-[124px] h-[32px]'/>
      <ul className='hidden sm:flex list-none justify-end items-center flex-1 text-white'>
        {navLinks.map((item , index) => (
          <li 
          key={item.id}
          className={`${index === navLinks.length - 1 ?' mr-0': 'mr-10'} h-full cursor-pointer font-poppins font-normal`}
          >
             <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* small devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center ">
         <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className='w-[25px] h-[25px] object-contain'
          // keep the state updated
          onClick={() => setToggle((prev)=> !prev)}
         />
         {/* menu items */}

         <div 
           className={`${toggle ? 'flex' : 'hidden' } p-6 mx-4 bg-black-gradient absolute top-20 right-0 rounded-xl min-w-[140px] sidebar`}
         >
        <ul className='flex flex-col list-none justify-end items-center flex-1  text-white '>
          {navLinks.map((item , index) => (
            <li 
            key={item.id}
            className={`${index === navLinks.length - 1 ?' mb-0': 'mb-4'} h-full cursor-pointer font-poppins font-normal`}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
        ))}
      </ul>
        </div>   

      </div>

    </nav>
  )
}

export default NavBar