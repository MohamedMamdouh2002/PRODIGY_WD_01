import React from 'react'
import logo from '../../assets/homePhoto.png'
export default function Header() {
  return <>
    <header className=' pt-20 pb-12 bg-slate-100 p-4  ' >
      <div className=" flex justify-around items-center">

      <section className=''>
        <h1 className='font-semibold text-4xl'>Lessons and insights <h2 className=' text-green-600'>
           from 8 years
          </h2>
           </h1>
           <p className='mt-5 mb-5'>  Where to grow your business as a photographer: site or social media?</p>
            <button className='bg-green-600 text-white p-3 rounded-ee-lg rounded-tl-lg hover:p-4 hover:duration-300'>Register</button>
      </section>
      <section>
        <img src={logo} alt="" />
      </section>
      </div>
      <div className="flex justify-center gap-3 mt-5">

      <div className="w-3 h-3 rounded-full mt-16 bg-green-500"></div>
      <div className="w-3 h-3 rounded-full mt-16 bg-slate-300"></div>
      <div className="w-3 h-3 rounded-full mt-16 bg-slate-300"></div>
      </div>
    </header>
  </>
}
