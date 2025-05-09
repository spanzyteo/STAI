
const Task = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-[1.34rem] lg:gap-[1.75rem] bg-[#FFF] p-[1.15rem] lg:p-[1.5rem] items-start lg:items-center border border-[#EEE8E0] rounded-[1.5rem]">
      <div className="flex flex-col gap-[1.34rem] lg:gap-[0.75rem] w-full">
        <div className="flex flex-col lg:items-center lg:flex-row gap-[1.34rem] lg:gap-[1rem]">
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
            <p className="dm-sans text-[0.75rem] lg:text-[0.875rem] font-normal leading-[1.15rem] lg:leading-[1.5rem] whitespace-nowrap">
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
      <img src="/product2.jpg" alt="" className="w-full"/>
    </div>
  )
}

export default Task