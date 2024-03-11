import React from 'react'

export default function Footer() {
  return <>
  <footer className='bg-slate-700 justify-around text-center mt-10'>
    <div className="">
      <div className="">
      <i class="fa-brands fa-slack text-2xl mt-1 text-green-500"></i>
                <span className='font-bold text-2xl text-white' >
                   <span className='text-green-500'>Net</span>
                  cent</span>
      </div>
      <p className='text-white '>Copyright © 2024 Made by love by 
        <a href="https://portfolio-ten-wheat-81.vercel.app/" target='_blank' className='underline ml-1' >MohamedMamdouh</a>
      </p>
      
      <div className=" flex gap-2 justify-center py-2">
        <a target='_blank' href="https://www.facebook.com/mohamed.mamdouh.58555">

        <i className='fa-brands fa-facebook-f text-black bg-slate-200 rounded-full w-8 h-8 flex justify-center items-center hover:text-green-400 hover:border hover:border-green-400 hover:bg-transparent'></i>
        </a>
        <a target='_blank' href="https://github.com/MohamedMamdouh2002">

        <i className='fa-brands fa-github text-black bg-slate-200 rounded-full w-8 h-8 flex justify-center items-center hover:text-green-400 hover:border hover:border-green-400 hover:bg-transparent'></i>
        </a>
        <a target='_blank' href="https://www.instagram.com/mohamed.mamdouh.58555/">

        <i className='fa-brands fa-instagram text-black bg-slate-200 rounded-full w-8 h-8 flex justify-center items-center hover:text-green-400 hover:border hover:border-green-400 hover:bg-transparent'></i>
        </a>
      </div>
    </div>
  </footer>
  </>
}
