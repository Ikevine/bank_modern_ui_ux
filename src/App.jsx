import style from './style'
import {NavBar , Hero , Stats , Business , Billing , CardDeal , Testimonial , Client , CTA , Footer } from './components'
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

      {/* navbar */}
       <div className={`${style.paddingX} ${style.flexCenter}`}>
         <div className={`${style.boxWidth}`}>
           <NavBar/>
         </div>
       </div>

       {/* Hero section */}
       <div className={`bg-primary ${style.flexStart}`}>
         <div className={`${style.boxWidth}`}>
            <Hero/>
         </div>
       </div>

       {/* Other section start here */}
       <div className={`${style.paddingX} bg-primary ${style.flexStart}`}>
         <div className={`${style.boxWidth}`}>
             <Stats/>
             <Business/>
             <Billing/>
             <CardDeal/>
             <Testimonial/>
             <Client/>
             <CTA/>
             <Footer/>
         </div>
       </div>

     {/* container end here */}
    </div>
    
  )
}

export default App
