const ProductivitySection = () => {
  return (
    <div className="py-[3rem] lg:py-[5rem] px-[1.5rem] md:px-[6.5rem] flex flex-col bg-[#FFF7EC]">
      <div className="flex flex-col w-full lg:w-[48rem] gap-[0.75rem] lg:gap-[1.08rem] mx-auto">
        <h1 className="text-center playfair text-[2.125rem] lg:text-[3rem] font-bold leading-[3.1875rem] lg:leading-normal">
          Why use STAI?
        </h1>
        <p className="text-[#4B5563] dm-sans text-center text-[1rem] lg:text-[1.25rem] font-normal lg:leading-[1.51rem] leading-[1.5rem]">
          Productivity That Adapts to You and AI That Understands How You Work –
          Not the Other Way Around
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[2.28rem] lg:gap-[1.25rem] mt-[2rem] lg:mt-[5rem]">
        <div className="flex flex-col bg-[#FFF] w-full lg:w-[22.375rem] p-[1.15rem] lg:p-[1.5rem] gap-[1.34rem] lg:gap-[1.75rem] border border-[#EEE8E0] rounded-[1.5rem]">
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
        <div className="flex flex-col gap-[2.28] lg:gap-[1.44rem]">
          <div className="flex lg:flex-row flex-col gap-[1.34rem] lg:gap-[1.75rem] bg-[#FFF] p-[1.15rem] lg:p-[1.5rem] items-start lg:items-center border border-[#EEE8E0] rounded-[1.5rem]">
            <div className="flex flex-col gap-[1.34rem] lg:gap-[0.75rem]">
              <div className="flex flex-col lg:flex-row gap-[1.34rem] lg:gap-[1rem]">
                <img
                  src="/calendar.svg"
                  alt="calender"
                  className="h-[2.1rem] lg:h-[2.7rem] w-[2.1rem] lg:w-[2.7rem] "
                />
                <div className="flex flex-col gap-[0.33rem] lg:gap-[0.44rem] ">
                  <h1 className="playfair text-[1.25rem] lg:text-[1.5rem] font-medium md:font-semibold leading-[1.875rem] lg:leading-[1.5rem]">
                    Smart Task Management
                  </h1>
                  <p className="dm-sans text-[0.875rem] lg:text-[1rem] font-normal lg:leading-[1.5rem] leading-[1.125rem]">
                    No more manual sorting – STAI learns your prioritiesy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col py-[0.75rem] lg:py-[0.625rem] px-[1rem] lg:px-[0.75rem] justify-center items-start lg:items-center gap-[0.28rem] lg:gap-[0.375rem] self-stretch task-bg">
                <div className="w-full lg:px-2">
                  <p className="dm-sans text-[0.75rem] lg:text-[0.875rem] font-normal leading-[1.15rem] lg:leading-[1.5rem]">
                    → Auto-categorization by project/deadline
                  </p>
                </div>
                <div className="w-full lg:px-2">
                  <p className="dm-sans text-[0.75rem] lg:text-[0.875rem] font-normal leading-[1.15rem] lg:leading-[1.5rem]">
                    → Syncs with your Calendar
                  </p>
                </div>
              </div>
            </div>
            <img src="/product2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductivitySection
