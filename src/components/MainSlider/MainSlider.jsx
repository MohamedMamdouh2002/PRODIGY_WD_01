import React from 'react'
import Slider from "react-slick";
import logo from '../../assets/homePhoto.png'
export default function MainSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
      return <>
 <section className='mt-8'>
  <div className="flex flex-col items-center ">
    <h1 className='font-semibold text-4xl mb-2 '>Our Clients</h1>
    <h3 className='text-xl ml-5'>We have been working with some Fortune 500+ clients</h3>
  </div>
  <div className="slider-container mx-10 mt-24 mb-32 text-green-500">
      <Slider {...settings}>
        <div>
          <i class="fa-brands text-6xl fa-html5"></i>
        </div>
        <div>
          <i class="fa-brands text-6xl fa-css3-alt"></i>
        </div>
        <div>
          <i class="fa-brands text-6xl fa-bootstrap"></i>     
        </div>
        <div>
        <i class="fa-brands text-6xl fa-sass"></i>
        </div>
        <div>
        <i class="fa-brands text-6xl fa-react"></i>
        </div>
        <div>
        <i class="fa-brands text-6xl fa-angular"></i>    
        </div>
      
      </Slider>
    </div>
    <div className="mt-10">
    <div className="flex flex-col items-center ">
    <h1 className='font-normal text-4xl mb-2 text-center '>Manage your entire community <h1>
       in a single system</h1>
      </h1>
    <h3 className='text-md ml-5 mb-14 mt-5'>Who is Nextcent suitable for?</h3>
  </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 place-items-center  ">
    <div className=" flex flex-col items-center border border-green-200  p-5  rounded-ee-xl rounded-tl-xl">
    <i class="fa-solid fa-users text-2xl">
    <div className="w-8 h-8 translate-x-4 -translate-y-8 rounded-ee-lg rounded-tl-lg bg-green-500 opacity-25">
       
       </div>

    </i>
    <h1 className='font-medium text-3xl w-36 text-center'>Membership Organisations</h1>
    <p className='w-72 mt-5 font-serif text-center'> Our membership management software provides full automation of membership renewals and payments</p>
    </div>
    <div className="flex flex-col items-center  border border-green-200  p-5  rounded-ee-xl rounded-tl-xl">
    <i class="fa-solid fa-house-fire text-2xl">
    <div className="w-8 h-8 translate-x-4 -translate-y-8 rounded-ee-lg rounded-tl-lg bg-green-500 opacity-25">
       
      </div>

    </i>
    <h1 className='font-medium text-3xl w-36 text-center '>National Associations</h1>
    <p className='w-72 mt-5 font-serif text-center'> Our membership management software provides full automation of membership renewals and payments</p>

    </div>
    <div className="flex flex-col items-center border border-green-200  p-5  rounded-ee-xl rounded-tl-xl">
    <i class="fa-regular fa-handshake text-2xl">
    <div className="w-8 h-8 translate-x-4 -translate-y-8 rounded-ee-lg rounded-tl-lg bg-green-500 opacity-25">
       </div>

    </i>
      <h1 className='font-medium text-3xl w-36 text-center'>Clubs And Groups</h1> 
    <p className='w-72 mt-5 font-serif text-center'> Our membership management software provides full automation of membership renewals and payments</p>
      
    </div>
  </div>
    </div>
 </section>
      </>
    }
