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
        <h1>
          <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-400 bg-clip-text text-transparent playfair text-[2.375rem] md:text-[3.75rem] font-bold">
            Your #1 AI Voice First
          </span>
          <br />
          <span className="text-gray-700 playfair text-[2.375rem] md:text-[3.75rem] font-bold">
            Control App for Productivity
          </span>
        </h1>
        <p className="mt-4 text-gray-700 text-[1rem] md:text-[1.25rem] font-normal dm-sans md:w-[38.4375rem] text-center mx-auto self-stretch">
          Stop typing tasks-just say it and STAI will organize it. Beat
          procrastination with smart voice commands
        </p>

        {/* Input Box */}
        <div className="mt-[1.25rem] md:mt-[4.1rem] flex justify-center">
          <div className="p-[2px] rounded-[1rem] bg-gradient-to-r from-[#8E77FF] via-[#F0DBE6] via-[#FFDEB4] via-[#B1E575] via-[#BEF4CF] to-[#89B9F7]">
            <input
              type="email"
              placeholder="Enter your personal or work email"
              className="px-[0.2rem] py-[0.2rem] md:p-[0.75rem] md:inline-flex flex items-center rounded-[0.31rem] md:rounded-[0.95rem] md:gap-[0.25rem] border-none outline-none w-[10rem] md:w-[31.5rem] md:h-[4.5rem] h-[1.4rem] gap-[0.08rem] bg-white"
            />
          </div>

          {/* <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg">
            Join Waitlist
          </button> */}
        </div>
        <img src="/mockups.png" alt="mockup" className="mt-10" />
      </div>
    </section>
  )
}

export default Banner
