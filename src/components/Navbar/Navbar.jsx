import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'

const navigation = [
{ name: 'Dashboard', href: '#', current: true },
{ name: 'Team', href: '#', current: false },
{ name: 'Projects', href: '#', current: false },
{ name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return <>

    <Disclosure as="nav" className="bg-slate-300 border-b-2 pb-2 pt-1">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0  items-center gap-1">
                <i class="fa-brands fa-slack text-2xl mt-1 text-green-500"></i>
                <span className='font-bold text-2xl' >
                   <span className='text-green-500'>Net</span>
                  cent</span>
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                  <div className="flex  gap-8">
                        <ul className="flex navItem   font-semibold items-center  gap-9">
                          <Link 
                          activeClass="active" 
                          to="home" 
                          spy={true} 
                          smooth={true} 
                          offset={-60} 
                          duration={500} 
                          >
                          <li className='italic hover:not-italic nav text-2xl pl-3  border border-spacing-5 border-transparent  hover:text-green-500 duration-200 cursor-pointer'>
                            Home
                          </li>
                          </Link>
                          <Link 
                          activeClass="active" 
                          to="skills" 
                          spy={true} 
                          smooth={true} 
                          offset={-14} 
                          duration={500} 
                          >
                          <li className='italic hover:not-italic nav text-2xl pl-3 border border-spacing-5 border-transparent hover:text-green-500 duration-200 cursor-pointer'>
                            Service
                          </li>
                          </Link>
                          <Link 
                          activeClass="active" 
                          to="project" 
                          spy={true} 
                          smooth={true} 
                          offset={-14} 
                          duration={500} 
                          >

                          <li className='italic hover:not-italic nav text-2xl pl-3 border border-spacing-5 border-transparent hover:text-green-500 duration-200 cursor-pointer'>
                          Feature
                          </li>
                            </Link>

                            <Link 
                          activeClass="active" 
                          to="contact" 
                          spy={true} 
                          smooth={true} 
                          offset={-14} 
                          duration={500} 
                          >

                          <li className='italic hover:not-italic nav text-2xl pl-3 border border-spacing-5 border-transparent hover:text-green-500 duration-200 cursor-pointer'>
                            Product
                          </li>
                            </Link>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:static  sm:inset-auto md:flex sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 ">
                  <div>
                    <div className=" flex  gap-2   text-sm">
                      <button className='text-white  p-3 rounded-ee-lg rounded-tl-lg bg-green-600 '>
                        Login
                      </button>
                      <button className='text-white  p-3 rounded-ee-lg rounded-tl-lg  bg-green-600 '>
                        Register
                      </button>
                    </div>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-200 text-green-400' : 'text-green-400 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  


  </>
}
