
const Voice = () => {
  return (
    <div className="flex flex-col bg-[#FFF] w-full xl:w-[22.375rem] p-[1.15rem] lg:p-[1.5rem] gap-[1.34rem] lg:gap-[1.75rem] border border-[#EEE8E0] rounded-[1.5rem]">
    <img
      src="/speaker.svg"
      alt="speaker"
      className="h-[2.1rem] lg:h-[2.7rem] w-[2.1rem] lg:w-[2.7rem] "
    />
    <div className="flex flex-col gap-[0.33rem] lg:gap-[0.44rem]">
      <h1 className="playfair text-[1.25rem] lg:text-[1.5rem] font-medium md:font-semibold leading-[1.875rem] lg:leading-[1.5rem]">
        Voice-First Productivity
      </h1>
      <p className="dm-sans text-[0.875rem] lg:text-[1rem] font-normal lg:leading-[1.5rem] leading-[1.125rem]">
        Speak tasks naturally. STAI organizes them instantly.
      </p>
    </div>
    <p className="flex py-[0.75rem] lg:py-[0.62rem] px-[1rem] lg:px-[1.25rem] items-center justify-center dm-sans text-[0.75rem] lg:text-[0.875rem] font-normal leading-[1.4rem] lg:leading-[1.5rem] voice-bg">
      Say "Draft proposal by Friday" → auto-added to "Urgent Tasks"
    </p>
    <img src="/product1.jpg" alt="" className="rounded-[0.5rem]" />
  </div>
  )
}

export default Voice