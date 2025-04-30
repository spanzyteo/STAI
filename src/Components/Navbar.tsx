
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between shrink-0 h-[5.5rem] px-[0.75rem] py-[1.25rem] rounded-[1rem] bg-[#ffffff4d] backdrop-blur-[6px] dm-sans">
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
    </div>
  )
}

export default Navbar