import Dart from "./Dart"
import Task from "./Task"
import Voice from "./Voice"
import Voice1 from "./Voice1"
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.9,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 240 },
  show: { opacity: 1, y: 0, transition: { duration: 1.7, ease: 'easeOut' } },
}

const ProductivitySection = () => {
  return (
    <div className="py-[3rem] lg:py-[5rem] px-[1.5rem] md:px-[6.5rem] flex flex-col bg-[#FFF7EC]">
      <motion.div 
        variants={fadeUp} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} className="flex flex-col w-full lg:w-[48rem] gap-[0.75rem] lg:gap-[1.08rem] mx-auto">
        <h1 className="text-center playfair text-[2.125rem] lg:text-[3rem] font-bold leading-[3.1875rem] lg:leading-normal">
          Why use STAI?
        </h1>
        <p className="text-[#4B5563] dm-sans text-center text-[1rem] lg:text-[1.25rem] font-normal lg:leading-[1.51rem] leading-[1.5rem]">
          Productivity That Adapts to You and AI That Understands How You Work –
          Not the Other Way Around
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col xl:flex-row gap-[2.28rem] lg:gap-[1.25rem] mt-[2rem] lg:mt-[5rem]"
      >
        <Voice/>
        <div className="flex flex-col gap-[2.28rem] lg:gap-[1.44rem]">
          <Task />
          <div className="flex flex-col lg:flex-row lg:gap-[1.5rem] gap-[2.28rem] lg:justify-between self-stretch">
            <Voice1 />
            <Dart />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductivitySection

