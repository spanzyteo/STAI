
const Dart = () => {
  return (
    <div className="bg-[#FFF] flex flex-col lg:p-[1.5rem] p-[1.146rem] gap-[1.3rem] lg:gap-[1.75rem] items-start rounded-[1.46rem] w-full">
      <div className="flex items-center justify-between self-stretch">
        <img src="/dart.svg" alt="speaker" />
        <button className="bg-[#1F2937] rounded-[4.72rem] lg:rounded-[6.1875rem] py-[0.19rem] lg:py-[0.25rem] px-[0.955rem] lg:px-[1.25rem] text-gray-50 dm-sans text-[0.68rem] lg:text-[0.875rem] leading-[1.146rem] lg:leading-[1.5rem] font-normal">Beta</button>
      </div>
      <div className="flex flex-col gap-[0.33rem] lg:gap-[0.44rem]">
          <h1 className="playfair text-[1.25rem] lg:text-[1.5rem] font-medium md:font-semibold leading-[1.875rem] lg:leading-[1.5rem]">
            Focus Mode
          </h1>
          <p className="dm-sans text-[0.875rem] lg:text-[1rem] font-normal lg:leading-[1.5rem] leading-[1.125rem]">
            Eliminate distractions when you need to concentrate
          </p>
      </div>
      <p className="flex py-[0.75rem] lg:py-[0.62rem] px-[1rem] lg:px-[1.25rem] items-center justify-center dm-sans text-[0.75rem] lg:text-[0.875rem] font-normal leading-[1.4rem] lg:leading-[1.5rem] w-full dart-bg">
        Try Focus Mode (2 free sessions/month)
      </p>
      <img src="/product4.png" alt="product" className="w-full rounded-[0.5rem] lg:hidden" />
    </div>
  )
}

export default Dart