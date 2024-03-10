import React from 'react'
import photo from '../../assets/sec-3.png'
export default function Sec3() {
  return <>
    <section className='flex justify-evenly items-center mt-14'>
      <div className="mt-14 w-1/3 md:block hidden">
        <img width={500} src={photo} alt="" />
      </div>
      <div className="md:w-1/3 m-5 ">
        <h2 className='text-2xl  font-semibold'>The unseen of spending three years at Pixelgrade</h2>
        <p className=' my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className='bg-green-600 text-white p-3 rounded-ee-lg rounded-tl-lg hover:p-4 hover:duration-300'>Learn more . . .</button>
      </div>
    </section>
  </>
}
