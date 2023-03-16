





import React from 'react'
import left from '../assets/logo/left.png'
import right from '../assets/logo/right.png'
import down from '../assets/logo/down.png'


function Hero() {
  return (
    <div>
        <section className="flex justify-between items-center md:flex-row flex-col sm:py-16 py-6 dark:bg-gray-900">
          <div className='hidden lg:flex'>
            <img src={left} alt="left" className="w-[100%] h-[100%] z-[5] cover"  />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className="flex-1 font-poppins font-semibold dark:text-white text-[52px] text-gray max-w-[670px]  sm:max-w-xl  ">
              Connecting people through music... 
            </h1>

            <p className= " font-poppins font-normal dark:text-white  text-[18px] text-gray leading-[30.8px] max-w-[470px] mt-5">
              Connection through music through a semi permiable membrane
            </p>
            
              <button type="button" className="my-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary text-white dark:text-gray-900 dark:bg-white bg-gray-900 rounded-full ">
                Join the waitlist
              </button>
            
            
            <div className='flex-1 flex justify-center items-center  my-[-5%]'>
              <img src={down} alt="right" className="w-[100%] h-[100%] z-[5] "  />
            </div>
          </div>
          <div className='hidden lg:flex'>
            <img src={right} alt="right" className="w-[100%] h-[100%] z-[5] cover"  />
          </div>
          
        </section>
      

    </div>
  )
}

export default Hero









// import React from 'react'
// import left from '../assets/logo/left.png'
// import right from '../assets/logo/right.png'
// import down from '../assets/logo/down.png'


// function Hero() {
//   return (
//     <div>
//         <section className="flex justify-between items-center md:flex-row flex-col sm:py-16 py-6 dark:bg-gray-900">
//           <div className='hidden lg:flex'>
//             <img src={left} alt="left" className="w-max h-1/2 z-[5] cover"  />
//           </div>
//           <div className='flex flex-col justify-center items-center'>
//             <h1 className="flex-1 font-poppins font-semibold dark:text-white text-[52px] text-gray max-w-[670px]  sm:max-w-xl  ">
//               Connecting people through music... 
//             </h1>

//             <p className= "font-poppins font-normal dark:text-white  text-[18px] text-gray leading-[30.8px] max-w-[470px] mt-5">
//               Connection through music through a semi permiable membrane
//             </p>
            
//               <button type="button" className="my-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary text-white dark:text-gray-900 dark:bg-white bg-gray-900 rounded-full ">
//                 Join the waitlist
//               </button>
            
            
//             <div className='flex-1 flex justify-center items-center  my-[-10%]'>
//               <img src={down} alt="right" className="w-[100%] h-[100%] z-[5] "  />
//             </div>
//           </div>
//           <div className='hidden lg:flex'>
//             <img src={right} alt="right" className="w-[100%] h-[100%] z-[5] cover"  />
//           </div>
          
//         </section>
      

//     </div>
//   )
// }

// export default Hero