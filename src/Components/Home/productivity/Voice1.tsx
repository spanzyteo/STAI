import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 240 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
}

const Voice1 = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280) // xl breakpoint
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <motion.div
      key={isSmallScreen ? 'small' : 'large'}
      variants={fadeUp}
      initial={isSmallScreen ? "hidden" : undefined}
      whileInView={isSmallScreen? "show" : undefined}
      viewport={isSmallScreen ? { once: true, amount: 0.1 } : undefined}
      className="bg-[#FFF] flex flex-col lg:p-[1.5rem] p-[1.146rem] gap-[1.3rem] lg:gap-[1.75rem] items-start rounded-[1.46rem] w-full border border-[#EEE8E0]"
    >
      <div className="flex items-center justify-between self-stretch">
        <img src="/speaker1.svg" alt="speaker" />
        <button className="bg-[#1F2937] rounded-[4.72rem] lg:rounded-[6.1875rem] py-[0.19rem] lg:py-[0.25rem] px-[0.955rem] lg:px-[1.25rem] text-gray-50 dm-sans text-[0.68rem] lg:text-[0.875rem] leading-[1.146rem] lg:leading-[1.5rem] font-normal">
          Beta
        </button>
      </div>
      <div className="flex flex-col gap-[0.33rem] lg:gap-[0.44rem]">
        <h1 className="playfair text-[1.25rem] lg:text-[1.5rem] font-medium md:font-semibold leading-[1.875rem] lg:leading-[1.5rem]">
          Procrastination Guard
        </h1>
        <p className="dm-sans text-[0.875rem] lg:text-[1rem] font-normal lg:leading-[1.5rem] leading-[1.125rem]">
          Gentle nudges when you delay tasks and helps keep you focused
        </p>
      </div>
      <p className="flex py-[0.75rem] lg:py-[0.62rem] px-[1rem] lg:px-[1.25rem] items-center justify-center dm-sans text-[0.75rem] lg:text-[0.875rem] font-normal leading-[1.4rem] lg:leading-[1.5rem] w-full voice1-bg">
        Smart reminders based on your work patterns
      </p>
      <img
        src="/product3.jpg"
        alt="product"
        className="w-full rounded-[0.5rem] lg:hidden"
      />
    </motion.div>
  )
}

export default Voice1
