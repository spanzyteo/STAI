import { motion, useInView, useAnimation } from 'framer-motion'

const Banner = () => {
  return (
    <section className="relative text-center px-[1.5rem] md:px-[6.5rem]">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-white relative">
          <div className="absolute left-0 bottom-[-30%] w-[60%] h-[60%] bg-cyan-200 opacity-30 rounded-full blur-[120px]"></div>
          <div className="absolute right-0 bottom-[-30%] w-[60%] h-[60%] bg-orange-200 opacity-50 rounded-full blur-[120px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="playfair font-bold">
          <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-400 bg-clip-text text-transparent text-[2.375rem] md:text-[3.75rem] ">
            Your #1 AI Voice First
          </span>
          <br />
          <span className="text-gray-700 text-[2.375rem] md:text-[3.75rem]">
            Control App for Productivity
          </span>
        </h1>
        <p className="mt-4 text-gray-700 text-[1rem] md:text-[1.25rem] font-normal dm-sans md:w-[38.4375rem] text-center mx-auto self-stretch">
          Stop typing tasks-just say it and STAI will organize it. Beat
          procrastination with smart voice commands
        </p>

        {/* Input Box */}
        <div className="mt-[1.25rem] md:mt-[4.1rem] flex w-full md:w-[31.7rem] md:h-[4.5rem] mx-auto p-1 bg-gradient-to-r from-[#8E77FF] via-[#F0DBE6] via-[#FFDEB4] via-[#B1E575] via-[#BEF4CF] to-[#89B9F7] rounded-[0.31rem] md:rounded-[1rem]">
          <div className="flex w-full bg-white rounded-[0.31rem] md:rounded-[1rem] p-1">
            <input
              type="email"
              placeholder="Enter your personal or work email"
              className="flex-grow md:px-3 px-[0.23rem] py-2 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none rounded-full"
            />
            <button className="md:px-7 px-3 md:py-3 text-sm text-white bg-gray-900 md:rounded-[0.75rem] rounded-[0.226rem] hover:bg-gray-800 transition cursor-pointer dm-sans leading-[0.47rem] md:leading-[1.5rem] text-[0.6rem] md:text-[1rem] whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>

        <img
          src="/mockups.png"
          alt="mockup"
          className="mt-[1.5rem] md:mt-[3.69rem] mx-auto"
        />
      </div>
    </section>
  )
}

export default Banner
