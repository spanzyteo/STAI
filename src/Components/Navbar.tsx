'use client'

import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 px-[1.5rem] md:px-[6.5rem]">
        <div
          className={`w-full flex items-center justify-between shrink-0 h-[5.5rem] px-[0.75rem] py-[1.25rem] rounded-[1rem] backdrop-blur-[6px] dm-sans transition-colors duration-300 ${
            scrolled ? 'bg-[rgba(255,255,255,0.30)]' : 'bg-[#ffffff4d]'
          }`}
        >
          <img src="/logo.png" alt="" />
          <div className="hidden md:flex items-center gap-[1.5rem]">
            <h1 className="text-[1rem] font-normal leading-[1.5rem] text-[#1F2937]">
              Features
            </h1>
            <h1 className="text-[1rem] font-normal leading-[1.5rem] text-[#1F2937]">
              Pricing
            </h1>
            <h1 className="text-[1rem] font-normal leading-[1.5rem] text-[#1F2937]">
              Blog
            </h1>
            <button className="h-[3rem] flex py-[0.75rem] px-[1.5rem] items-center justify-center bg-[#111827] rounded-[0.75rem] text-[1rem] font-normal leading-[1.5rem] text-[#FFFFFF]">
              Join Waitlist
            </button>
          </div>
          <div className="block md:hidden">
            <img src="/menu.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under the navbar */}
      <div className="h-[7.5rem] md:h-[7.5rem]" />
    </>
  )
}

export default Navbar
